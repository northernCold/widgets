<template>
  <div class="container">
    <app-widget href="https://notion.so">
      <svg
        t="1650006390167"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2828"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="60"
        height="60"
      >
        <path
          d="M190.3619 179.479263c31.818329 25.847061 43.760866 23.885073 103.558852 19.875793l563.645073-33.822969c11.942537 0 2.00464-11.942537-1.961988-13.904525L761.940229 83.938971c-17.913805-13.904525-41.84153-29.856341-87.649688-25.889713L128.559273 97.886148c-19.875793 1.961988-23.885073 11.942537-15.951816 19.875793z m33.822969 131.367902v593.032243c0 31.860981 15.909165 43.803518 51.779427 41.798878l619.433779-35.827609c35.870262-1.961988 39.879542-23.885073 39.879541-49.774787V271.010276c0-25.847061-9.937896-39.794238-31.903633-37.83225l-647.328132 37.83225c-23.885073 2.00464-31.860981 13.947177-31.860982 39.794237z m611.500523 31.775678c3.966628 17.913805 0 35.82761-17.913805 37.874902l-29.856341 5.971268v437.779268c-25.932365 13.947177-49.817438 21.923085-69.735883 21.923085-31.903633 0-39.879542-9.980548-63.764615-39.794238l-195.21782-306.49667v296.516122L520.956902 810.386408s0 35.82761-49.817438 35.82761l-137.424474 7.933256c-3.966628-7.933256 0-27.851701 13.947177-31.818329l35.827609-9.937897V420.291982L333.800294 416.282702c-4.00928-17.913805 5.971268-43.760866 33.82297-45.765506l147.405022-9.937896 203.193729 310.463298v-274.678341l-51.822078-5.928616c-3.966628-21.923085 11.942537-37.83225 31.860981-39.794238zM82.751115 44.144733l567.697005-41.798878c69.693231-5.971268 87.649688-2.00464 131.453206 29.856342l181.227992 127.358622c29.856341 21.880433 39.83689 27.851701 39.83689 51.736774v698.553084c0 43.760866-15.909165 69.693231-71.65522 73.617207l-659.313321 39.83689c-41.798878 2.00464-61.759975-3.966628-83.683059-31.860982l-133.457846-173.166779c-23.885073-31.860981-33.82297-55.703403-33.82297-83.597756V113.752661c0-35.784958 15.951817-65.683951 61.717323-69.607928z"
          p-id="2829"
        ></path>
      </svg>
    </app-widget>
    <app-widget @click="handleClickRss">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 455.731 455.731"
        style="enable-background: new 0 0 455.731 455.731"
        xml:space="preserve"
      >
        <g>
          <rect x="0" y="0" style="fill: #f78422" width="455.731" height="455.731" />
          <g>
            <path
              style="fill: #ffffff"
              d="M296.208,159.16C234.445,97.397,152.266,63.382,64.81,63.382v64.348
            c70.268,0,136.288,27.321,185.898,76.931c49.609,49.61,76.931,115.63,76.931,185.898h64.348
            C391.986,303.103,357.971,220.923,296.208,159.16z"
            />
            <path
              style="fill: #ffffff"
              d="M64.143,172.273v64.348c84.881,0,153.938,69.056,153.938,153.939h64.348
            C282.429,270.196,184.507,172.273,64.143,172.273z"
            />
            <circle style="fill: #ffffff" cx="109.833" cy="346.26" r="46.088" />
          </g>
        </g>
      </svg>
    </app-widget>
    <!-- <div class="widget">
      <div class="widget-icon"></div>
    </div>
    <div class="widget">
      <div class="widget-icon"></div>
    </div>
    <div class="widget">
      <div class="widget-icon"></div>
    </div>
    <div class="widget medium">
      <div class="widget-icon"></div>

    </div> -->
  </div>
  <RssReaderModal :visible="visible" @click-outside="handleClickOutside"/>
</template>
<script setup>
import { ref } from "vue";
import AppWidget from "./components/Widget.vue";
import RssReader from "./components/RssReader.vue";
import RssWidget from "./components/rss-widget.vue";
import RssReaderModal from "./components/RssReaderModal.vue";

const visible = ref(false);
const handleClickRss = () => {
  visible.value = true;
}

const handleClickOutside = () => {
  visible.value = false;
}
</script>
<style lang="scss">
$--icon-size: 60px;
$--icon-gap-x: 30px;
$--icon-gap-y: 30px;
$--icon-radius: 14px;

.container {
  margin: auto;
  max-width: 1350px;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, calc($--icon-size + $--icon-gap-y));
  grid-template-rows: repeat(auto-fill, calc($--icon-size + $--icon-gap-x));
  box-sizing: border-box;
  justify-content: center;
  padding: 0 24px;
}
.widget {
  grid-column: span 1;
  grid-row: span 1;
  padding: calc($--icon-gap-y / 2);
  height: calc($--icon-size + $--icon-gap-y);
  width: calc($--icon-size + $--icon-gap-x);
  border-radius: $--icon-radius;
  box-sizing: border-box;
  &.small {
    grid-column: span 2;
    grid-row: span 2;
    height: calc($--icon-size * 2 + $--icon-gap-y * 2);
    width: calc($--icon-size * 2 + $--icon-gap-x * 2);
  }
  &.medium {
    grid-column: span 4;
    grid-row: span 2;
    height: calc($--icon-size * 2 + $--icon-gap-y * 2);
    width: calc($--icon-size * 4 + $--icon-gap-x * 4);
  }
  &.large {
    grid-column: span 6;
    grid-row: span 4;
    height: calc($--icon-size * 4 + $--icon-gap-y * 4);
    width: calc($--icon-size * 6 + $--icon-gap-x * 6);
  }
  &.mini {
    width: calc($--icon-size + $--icon-gap-y);
    height: calc($--icon-size + $--icon-gap-x);
  }
  &-icon {
    position: relative;
    // background: aliceblue;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 14px;
    font-size: 12px;
    box-shadow: 0 0 5px #0000001a;
    transition: 0.2s;
    cursor: pointer;
  }
}
</style>
