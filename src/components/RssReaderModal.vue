<template>
  <w-modal :visible="props.visible" @click-outside="handleClickOutside">
    <div class="flex h-full flex-row">
      <div
        class="h-full flex-grow-0 flex-shrink-0"
        style="background: rgb(247, 246, 243);max-width: 250px; overflow-y-auto"
      >
        <div class="flex flex-column h-full justify-between" style="padding-top: 10px; padding-bottom: 12px;">
          <div>
            <div class="rss-menu-title">Rss源</div>
            <template v-for="item in areas">
              <div class="rss-menu-subtitle">{{item.area}}</div>
              <template v-for="project in item.projects">
                <div class="rss-menu-item text-sm" @click="handleClick(project)">{{project.title}}</div>
              </template>
            </template>
          </div>
        </div>
      </div>
      <div class="flex-grow relative h-full z-10">
        <div class="flex flex-direction w-full h-full">
          <div class="rss-content">
            <div v-for="item in officialAccounts" class="rss-item">
              <div>
                <span style="margin-right: 10px;">{{item.timestamp}}</span>
                <a :href="item.link">{{item.content}}</a>
              </div>
              <div class="rss-divider">
                <div class="rss-divider-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </w-modal>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";
import WModal from "./Modal.vue";
import dataSource from "../data.json";

const areas = Object.keys(dataSource).map(v => ({
  area: v,
  projects: dataSource[v]
}));

console.log(areas)

const props = defineProps({
  visible: Boolean
})
const officialAccounts = ref([]);
const emits = defineEmits(['click'])
const handleClickOutside = () => {
  emits('clickOutside')
}
const handleClick = (value) => {
  officialAccounts.value = value.items;
}

</script>
<style lang="scss" scoped>
.rss-menu-title {
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 1;
  margin-bottom: 1px;
  color: rgba(55, 53, 47, 0.65);
  font-weight: 500;
  padding: 5px 15px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.rss-menu-subtitle {
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 1;
  margin-bottom: 1px;
  color: rgba(55, 53, 47, 0.65);
  font-weight: 500;
  padding: 5px 15px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.rss-menu-item {
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  &:hover {
    background: rgba(55, 53, 47, 0.08);
  }
  is-focus {
    background: rgba(55, 53, 47, 0.08);
    font-weight: 600;
  }
}

.rss-content {
  flex-grow: 1;
  transform: translateZ(0px);
  padding: 36px 60px;
  z-index: 1;
  overflow: auto;
  margin-right: 0px;
  margin-bottom: 0px;
}

.rss-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  width: 100%;
  height: 24px;
  flex: 0 0 auto;
  &-line {
    width: 100%;
    height: 1px;
    visibility: visible;
    border-bottom: 1px solid rgba(55, 53, 47, 0.16);
  }
}
</style>