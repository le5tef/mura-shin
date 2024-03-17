<template>
  <div class="footer flex w-full flex-column align-center" :class="uiStore.lgAndUp?'pt-5 mt-7':'mt-5'">
    <div class=" container flex justify-space-between" v-if="uiStore.lgAndUp">
      <div class="flex pb-6 gap-5">
        <div class="flex flex-column text-align-start gap-4">
          <div class="f-30 fw-700">ПОКУПАТЕЛЮ</div>
          <button class="fw-400 f-22">Как оплатить</button>
          <button class="fw-400 f-22">Как получить</button>
          <button class="fw-400 f-22">Гарантия</button>
          <button class="fw-400 f-22">Бонусная программа</button>
          <button class="fw-400 f-22">Обратная связь</button>
        </div>

        <div class="flex flex-column text-align-start gap-4">
          <div class="f-30 fw-700">О КОМПАНИИ</div>
          <button class="fw-400 f-22">Новости</button>
          <button class="fw-400 f-22">Расположение</button>
        </div>
      </div>
      <div class="flex flex-column text-align-start gap-4 relative">

        <a href="tel:89588345010" class="fw-700 f-22">8 (958) 834-50-10</a>
      </div>
    </div>
    <div v-else class="flex flex-column  py-4 w-full">
      <div class="flex flex-column px-5 gap-3">
        <router-link :to="{name:'Home'}" class="flex align-center link">
          <MobileLogo/>
        </router-link>

      </div>

      <div class="f-12 px-5 mt-4">196624, Москва, ул. Шабаловская, д. 3</div>
    </div>
    <div class="w-full pt-3 pb-5 underline f-20 fw-400" v-if="uiStore.lgAndUp">
      <div class="w-full flex justify-center">
        ООО “Мура Шина”  — официальный дилер
      </div>
    </div>
    <div v-else class=" underline w-full">
      <div class="py-3 px-5">2015-2023
      </div>
    </div>

  </div>
</template>

<script setup>
import {useUiStore} from "@/store";
import MobileLogo from "@/components/MobileLogo";

const uiStore = useUiStore()
</script>

<style lang="stylus" scoped>
@import '../styles/app.styl'
.footer
  background $gray

.underline
  background $primary

.contact-btn
  transform translateY(-70%)
  position absolute
  height 180px
  width 180px
  background $primary
  border-radius 50%
  color white
  padding 10px
  text-align center

.container
  padding-top 58px
  padding-bottom 58px

.f-22, button
  text-align start
  padding 0
</style>
