<template>
  <details v-for="officialAccount in officialAccounts">
    <summary>
      <span>{{officialAccount.title}}</span>
    </summary>
    <ul>
      <li v-for="article in officialAccount.items">
        <span style="margin-right: 10px;">{{article.timestamp}}</span>
        <a :href="article.link">{{article.content}}</a>
      </li>
    </ul>
  </details>
</template>
<script setup>
import { ref } from "vue"
import moment from 'moment'
import dataSource from "../data.json";
let officialAccounts = ref(dataSource.FE)
console.log(dataSource)

</script>
<style lang="scss" module>
.header {
  padding: 0;
  display: flex;
  margin: 0;
  li {
    margin: 0;
    list-style: none;
    font-size: 12px;
    padding: 5px 5px;
    border-radius: 12px;
    color: #323b55;

    & + li {
      margin-left: 6px;
    }
  }
}

.content {
  padding: 0;
  margin: 0;
  li {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    margin: 10px 0;
  }
}

.overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
// 
.title {
  font-size: 16px;
}

.date {
  margin-right: 4px;
}
</style>