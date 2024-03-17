<template>
  <div class="w-full flex justify-center mt-5"
       :class="uiStore.smAndDown?'flex flex-column align-center':''">

    <div class="goods" v-if="store.catalogGoods.length">
      <GoodMiniCard v-for="good in store.catalogGoods" :good="good" @update="updateGood($event)"
                    :key="good.id">
        {{ good.name }}
      </GoodMiniCard>
    </div>


  </div>
</template>

<script setup>
import {useCatalogStore} from "@/store/catalog";
import GoodMiniCard from "@/components/GoodMiniCard";
import BurgerDropdown from "@/components/BurgerDropdown";
import CustomSelect from "@/components/CustomSelect";
import CustomInput from "@/components/CustomInput";
import {useUiStore} from "@/store";
import {ref} from "vue";
import CloseIcon from "@/components/Icons/CloseIcon";

const store = useCatalogStore()
const uiStore = useUiStore()

const updateGood = (good) => {
  console.log(good)
  // store.goods = store.goods.map((x) => {
  //   if (x.id === good.id) {
  //     return good
  //   }
  //   return x
  // })
}
</script>

<style lang="stylus" scoped>
@import "../styles/variables.styl"
gap = 8
.goods
  display flex
  justify-content center
  flex-wrap wrap
  max-width ($miniCardWidth* 4 + gap* 4) px
  gap (gap) px

.filters
  border-radius 18px
  min-width 230px
  width 230px
  height fit-content
  border-collapse: separate;




.mobile-filters
  border-radius 18px
  height fit-content

.mobile-filters-wrapper
  position absolute
  width 100vw
  height 100vh
  left 0
  top 0
  background white
  z-index 3
</style>
