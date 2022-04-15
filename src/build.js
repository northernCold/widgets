import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { get } from 'httpie';
import Parser from 'rss-parser';
import moment from 'moment'

const DEV = false;
const FEEDS_JSON = './feeds.json';
const INPUT_TEMPLATE = './template.html';
const OUTPUT_FILE = '../output/index.html';

const __dirname = dirname(fileURLToPath(
  import.meta.url));
const feeds = JSON.parse(readFileSync(join(__dirname, FEEDS_JSON), {
  encoding: 'utf8'
}));

const parser = new Parser();

// parse XML or JSON feeds
function parseFeed(response) {
  const contentType = response.headers['content-type'] ?
    response.headers['content-type'].split(";")[0] :
    false;

  if (!contentType) return false;

  const contentTypes = [
    'application/json',
    'application/atom+xml',
    'application/rss+xml',
    'application/xml',
    'text/xml',
    'text/html' // this is kind of a gamble
  ];

  if (contentTypes.includes(contentType)) {
    return response.data;
  }

  return false;
}

(async () => {
  const contentFromAllFeeds = {};
  const errors = [];

  for (const group in feeds) {
    contentFromAllFeeds[group] = [];

    for (let index = 0; index < feeds[group].length; index++) {
      try {
        const response = await get(feeds[group][index]);
        const body = parseFeed(response);
        const contents = typeof body === "string" ? await parser.parseString(body) : body;

        contents.feed = feeds[group][index];
        contents.title = contents.title ? contents.title : contents.link;
        contentFromAllFeeds[group].push(contents);

        // try to normalize date attribute naming
        contents.items.forEach(item => {
          const timestamp = new Date(item.pubDate || item.isoDate || item.date).getTime();
          item.timestamp = isNaN(timestamp) ? (item.pubDate || item.isoDate || item.date) : timestamp;

          const formattedDate = new Date(item.timestamp).toLocaleDateString()
          item.timestamp = formattedDate !== 'Invalid Date' ? moment(timestamp).format('YYYY/MM/DD') : dateString;

          // correct link url if lacks hostname
          if (item.link && item.link.split('http').length == 1) {
            let newLink;

            if (contents.link.slice(-1) == '/' && item.link.slice(0, 1) == '/') {
              newLink = contents.link + item.link.slice(1);
            } else {
              newLink = contents.link + item.link;
            }

            item.link = newLink;
          }

          // replace medium links with scribe.rip
          if (item.link.indexOf('medium.com/') !== -1) {
            item.link = 'https://scribe.rip/' + item.link;
          }
        });

        // sort items
        contents.items.sort((a, b) => {
          const [aDate, bDate] = [parseDate(a), parseDate(b)];
          if (!aDate || !bDate) return 0;
          return bDate - aDate;
        });
      } catch (error) {
        console.error(error);
        errors.push(feeds[group][index]);
      }
    }
  }

  let groups;
  groups = Object.entries(contentFromAllFeeds);
  writeFileSync(join(__dirname, './data.json'), JSON.stringify(contentFromAllFeeds), 'utf8');
})();

function parseDate(item) {
  if (item) {
    if (item.isoDate) return new Date(item.isoDate);
    else if (item.pubDate) return new Date(item.pubDate);
  }

  return null;
}
