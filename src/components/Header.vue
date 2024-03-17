<template>
  <div class="w-full">
    <div class="w-full flex flex-column align-center justify-center mt-4" v-if="uiStore.smAndDown">

      <div class="container flex justify-space-between ">
        <router-link :to="{name:'Home'}" class="flex align-center link">
          <img width="50" height="50" src="https://little-ghosts-repair.loca.lt/storage/car_image/StartupLogo.png" alt=""/>
        </router-link>
        <div class="flex gap-4 align-center">
          <!--          <PersonIcon/>-->
          <Button @click="toggleSearch">
            <SearchIcon/>
          </Button>
          <Button @click="toggleHeader">
            <MenuIcon/>
          </Button>
        </div>
        <div class="mobile-header-wrapper " v-if="mobileHeaderDialog">
          <div class="flex flex-column px-4 pt-5">
            <div class="w-full flex justify-space-between">
              <div class="f-20 fw-600" style="padding-left:6px">Меню</div>
              <Button @click="toggleHeader">
                <CloseIcon/>
              </Button>
            </div>
            <router-link :to="{name:'Goods'}">
              <Button @click="toggleHeader" class="f-20 fw-600 text-align-start py-3 mt-4">Каталог
              </Button>
            </router-link>

            <router-link :to="{name:'About'}">
              <Button  @click="toggleHeader"  class="f-20 fw-600 text-align-start py-3 mt-4">Контакты</Button>
            </router-link>
          </div>
        </div>
      </div>
      <div v-if="showMobileSearch" class="w-full search flex justify-center mt-4">
        <div class="flex my-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 27 27"
               fill="none">
            <circle cx="10.575" cy="10.2078" r="8.70784" stroke="#FFFFFF" stroke-width="3"/>
            <rect x="15.2579" y="17.604" width="2.91388" height="12.1726" rx="1.45694"
                  transform="rotate(-45 15.2579 17.604)" fill="#FFFFFF" stroke="#FFFFFF"/>
          </svg>
          <input placeholder="Поиск" class="ml-3 fw-600 f-16"/>
        </div>
      </div>
    </div>


    <div v-else class="w-full   flex flex-column align-center justify-center">
      <div class="container">
        <div class="flex justify-space-between my-4 ">
          <router-link :to="{name:'Home'}" class="flex link">
            <img width="50" height="50" src="https://little-ghosts-repair.loca.lt/storage/car_image/StartupLogo.png" alt=""/>
            <div class="flex flex-column align-center justify-center ml-3">
              <div class="fw-700 f-30 raleway ">МураШина</div>
              <div class="fw-300 f-15 raleway">Москва</div>
            </div>
          </router-link>
          <div class="flex gap-4 align-center ml-6">
            <router-link :to="{name:'Goods'}" style="height: fit-content"
                         class="px-2 py-3 fw-400 f-20 link">Каталог
            </router-link>
            <router-link :to="{name:'About'}">
              <button style="height: fit-content" class="px-2 py-3 fw-400 f-20 link">Контакты
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="w-full search flex justify-center">
        <div class="flex my-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27"
               fill="none">
            <circle cx="10.575" cy="10.2078" r="8.70784" stroke="#FFFFFF" stroke-width="3"/>
            <rect x="15.2579" y="17.604" width="2.91388" height="12.1726" rx="1.45694"
                  transform="rotate(-45 15.2579 17.604)" fill="#FFFFFF" stroke="#FFFFFF"/>
          </svg>
          <input placeholder="Поиск" class="ml-3 fw-600 f-20"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useUiStore} from "@/store";
import MenuIcon from "@/components/Icons/MenuIcon";
import PersonIcon from "@/components/Icons/PersonIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import MobileLogo from "@/components/MobileLogo";
import {ref} from "vue";
import CloseIcon from "@/components/Icons/CloseIcon";

const mobileHeaderDialog = ref(false)
const toggleHeader = () => {
  mobileHeaderDialog.value = !mobileHeaderDialog.value
}

const toggleSearch = () => {
  showMobileSearch.value = !showMobileSearch.value
}


const showMobileSearch = ref(false)

const uiStore = useUiStore()
</script>

<style lang="stylus" scoped>
@import "../styles/variables.styl"
.search
  background $primary

input
  all unset
  width 120px

input::placeholder
  color white
  font-size 20px

input:placeholder-shown
  width 60px !important

.mobile-header-wrapper
  position absolute
  width 100vw
  height 100vh
  left 0
  top 0
  background white
  z-index 3
</style>
