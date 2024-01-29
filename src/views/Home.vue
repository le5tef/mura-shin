<template>
<div class="w-full">
  <SearchComponent/>
  <Manufacturers/>
  <Tyres/>
</div>
</template>

<script setup>
import Manufacturers from "@/components/Manufacturers";
import Tyres from "@/components/Tyres";
import SearchComponent from "@/components/SearchComponent";
import WipOverlay from "@/components/WipOverlay";
</script>
