<template>
  <div class="wrapper ">
    <div v-if="uiStore.smAndDown" class="container flex flex-column">
      <DataDropdown title="Подобрать шины" :active="tyres.active.value" class="mb-3">
        <div class="w-full flex-column flex gap-3 mt-4">
          <CustomSelect placeholder="Диаметр" :options="[{id:1,label:'Шина'}]"
                        v-model="tyres.diameter.value"/>
          <CustomSelect placeholder="Производитель" :options="[{id:1,label:'Шина'}]"
                        v-model="tyres.manufacturer.value"/>
          <CustomSelect placeholder="Ширина" :options="[{id:1,label:'Шина'}]"
                        v-model="tyres.width.value"/>
          <CustomSelect placeholder="Высота" :options="[{id:1,label:'Шина'}]"
                        v-model="tyres.height.value"/>
          <div class="w-full flex justify-space-between">
            <CustomTabs :tabs="[{label:'Лето',id:1},{label:'Зима',id:2}]"
                        @update="tyres.tab.value=$event" v-model="tyres.tab.value"/>
            <CustomCheckbox v-model="tyres.isSale.value" placeholder="Акция/Распродажа"/>
          </div>
        </div>
      </DataDropdown>
      <DataDropdown title="Подобрать диски" :active="disks.active.value">
        <div class="w-full flex-column flex gap-3 mt-4">
          <CustomSelect placeholder="Диаметр" :options="[{id:1,label:'Шина'}]"
                        v-model="disks.diameter.value"/>
          <CustomSelect placeholder="Производитель" :options="[{id:1,label:'Шина'}]"
                        v-model="disks.manufacturer.value"/>
          <CustomSelect placeholder="Ширина" :options="[{id:1,label:'Шина'}]"
                        v-model="disks.width.value"/>
          <CustomSelect placeholder="Высота" :options="[{id:1,label:'Шина'}]"
                        v-model="disks.height.value"/>
          <div class="w-full flex">
            <CustomTabs :tabs="[{label:'Лето',id:1},{label:'Зима',id:2}]"
                        @update="disks.tab.value=$event" v-model="disks.tab.value"/>
            <CustomCheckbox v-model="disks.isSale.value" placeholder="Акция/Распродажа"/>
          </div>
        </div>
      </DataDropdown>

      <div  @click="goToCatalog" class="f-16 fw-600 flex align-center justify-center" style="background: black; border-radius: 10px; padding: 10px; color:white; margin-top:20px; max-height:40px" >Подобрать</div>
    </div>
    <div v-else class="container">
      <div class="box " style="position: relative;">
        <div class="fw-600 f-30 mb-5">Шины</div>
        <div class="flex  justify-space-between">
          <CustomSelect class="w-20" placeholder="Диаметр" :options="[{id:1,label:'Шина'}]"
                        v-model="tyres.diameter.value"/>
          <CustomSelect class="w-20" placeholder="Производитель" :options="[{id:1,label:'Шина'}]"
                        v-model="tyres.manufacturer.value"/>
          <CustomSelect class="w-20" placeholder="Ширина" :options="[{id:1,label:'Шина'}]"
                        v-model="tyres.width.value"/>
          <CustomSelect class="w-20" placeholder="Высота" :options="[{id:1,label:'Шина'}]"
                        v-model="tyres.height.value"/>
        </div>
        <div class="flex gap-4 mt-5">
          <CustomTabs :tabs="[{label:'Лето',id:1},{label:'Зима',id:2}]"
                      @update="tyres.tab.value=$event" v-model="tyres.tab.value"/>
<!--          <CustomCheckbox v-model="tyres.isSale.value" placeholder="Акция/Распродажа"/>-->
        </div>
        <div class="fw-600 f-30 mb-5 mt-6">Диски</div>
        <div class="flex  justify-space-between">
          <CustomSelect class="w-20" placeholder="Диаметр" :options="[{id:1,label:'Шина'}]"
                        v-model="disks.diameter.value"/>
          <CustomSelect class="w-20" placeholder="Производитель" :options="[{id:1,label:'Шина'}]"
                        v-model="disks.manufacturer.value"/>
          <CustomSelect class="w-20" placeholder="Ширина" :options="[{id:1,label:'Шина'}]"
                        v-model="disks.width.value"/>
          <CustomSelect class="w-20" placeholder="Высота" :options="[{id:1,label:'Шина'}]"
                        v-model="disks.height.value"/>
        </div>
        <div class="flex gap-4 mt-5">
          <CustomTabs :tabs="[{label:'Лето',id:1},{label:'Зима',id:2}]"
                      @update="disks.tab.value=$event" v-model="disks.tab.value"/>
<!--          <CustomCheckbox v-model="disks.isSale.value" placeholder="Акция/Распродажа"/>-->
        </div>
        <div @click="goToCatalog" class="submit-btn">ПОДОБРАТЬ</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useUiStore} from "@/store";
import CustomSelect from "@/components/CustomSelect";
import {computed, ref} from "vue";
import CustomTabs from "@/components/CustomTabs";
import CustomCheckbox from "@/components/CustomCheckbox";
import DataDropdown from "@/components/DataDropdown";
import router from "@/router";

const uiStore = useUiStore()
const goToCatalog = ()=>{
  router.push({name:'Goods'})
}
const tyres = computed(() => {
  const active = ref(true)
  const diameter = ref(null)
  const manufacturer = ref(null)
  const width = ref(null)
  const height = ref(null)
  const isSale = ref(false)
  const tab = ref(1)
  return {diameter, manufacturer, width, height, tab, isSale, active}
})

const disks = computed(() => {
  const active = ref(false)
  const diameter = ref(null)
  const manufacturer = ref(null)
  const width = ref(null)
  const height = ref(null)
  const isSale = ref(false)
  const tab = ref(1)
  return {diameter, manufacturer, width, height, tab, isSale, active}
})


</script>

<style lang="stylus" scoped>
@import "../styles/variables.styl"
.wrapper
  width 100%
  display flex
  justify-content center
  margin 16px 0
  @media (min-width 720px)
    margin-top 120px
    margin-bottom 120px

.submit-btn
  background black
  color white
  font-weight 800
  font-size 20px
  display flex
  align-items center
  justify-content center
  border-radius 50%
  cursor pointer
  position absolute
  width 158px
  height 158px
  bottom 0
  right 0
  transform translate(10%,50%)

.box
  background $gray
  display flex
  padding 12px
  flex-direction column
  border-radius 30px
  @media (min-width 720px)
    padding 51px 66px
</style>