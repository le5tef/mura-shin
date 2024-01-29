<template>
  <div class="flex gap-3" v-if="tags.length>0">
  <img class="good-tag" v-for="(tag,id) in tags" :key="id" alt="" :src="goodsTagsSrc(tag)"/>
  </div>
</template>

<script setup>
import {goodsTagsSrc} from "@/enums/good-types";

const props = defineProps({
  tags:{
    type:Array,
  }
})

</script>

<style scoped>

</style>