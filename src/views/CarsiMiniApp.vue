<template>
<div class="w-full h-screen bg-slate-300">
 <div class="p-4"><!--Search Section-->
<form>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" class="block w-full p-4 pl-10 text-sm border outline-none rounded-xl" placeholder="Search" >
    </div>
</form>
</div>

    <div class="grid grid-cols-2 h-3/4 overflow-auto ">
            <div class="grid text-center justify-center" v-for="liste in carsiList">
                <div>
                    <img :src="liste.ıcon" :style="{ width: '70px', height: '100px' }">
                    <h1 class="font-bold">{{ liste.name }}</h1>
                  </div>
               </div>
    </div>



<div><!--Submenu Section-->
  <ul class="flex justify-evenly font-bold bg-red-500 ">
    <a href=""><li class="bg-red-500 rounded-xl p-2">Home</li></a>
    <a href=""><li class="bg-red-500 rounded-xl p-2">Order</li></a>
    <a href=""><li class="bg-red-500 rounded-xl p-2">Profile</li></a>
  </ul>
</div>
</div>
</template>
<script setup>
import { ref } from 'vue'

const carsiList = ref([
{
  name: 'Restaurant',
  ıcon: 'src/assets/img/img9.jpg'
},
{
  name:'Kütüphane',
  ıcon:'src/assets/img/img0.jpg'
}
 
 ])
</script>