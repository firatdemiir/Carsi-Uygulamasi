<template>
  <div class="w-full h-screen bg-slate-300">
    <div class="p-3"><!--Header section-->
      <div class="bg-white flex justify-between p-3 rounded-md">
        <div>
          <h1 class="font-bold">NAME</h1>
          <div class="flex">
            <svg aria-hidden="true" class="w-5 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <span>4.8</span>
          </div>
        </div>
        <div>
          <p>Dükkan Adresi</p>
        </div>
        <div>
          <p>LOGO</p>
        </div>
      </div>
    </div>
    <div class="h-3/4"><!--menü section-->
      <div class="flex justify-around">

        <div class=" overflow-auto uzunluk">
          <ul>
            <li class="p-2 rounded-md" v-for="(tab, index) in foodList" :key="tab.id" @click="Click(tab.id)"
              :class="{ 'click-bg-color': index + 1 == temp }">
              <a href="#" class="nav-item">{{ tab.tabName }}</a>
            </li>
          </ul>
        </div>

        <div class=" bg-white overflow-auto uzunluk" v-show="temp === 1">
          <ul class="flex justify-between p-5" v-for="food in foodMenu">
            <div>
              <div class="flex justify-center">
                <img :src="food.ıcon" :style="{ width: '70px', height: '100px' }">
              </div>
              <li>{{ food.name }}</li>
              <span class="text-red-500">{{ food.fiyat }}</span>
            </div>
            <div class="flex items-center">
              <button @click="food.counter--"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </button>
              <span class="text-2xl">{{ food.counter }}</span>
              <button @click="food.counter++"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex justify-around">
      <div class="flex text-center">
        <div class="relative">
          <small class="text-red-500 absolute left-9 font-bold">3</small>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
        <div>
          <span class="pl-4 font-bold">45 TL</span>
        </div>
      </div>
      <div>
        <button class="bg-gray-800 p-2 rounded-xl text-white">Sepete Git</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const counter = ref(0)
const temp = ref(0);
const Click = (id) => {
  temp.value = id;
};
const foodList = ref([
  { id: 1, tabName: "Kebaplar" },
  { id: 2, tabName: "Pideler" },
  { id: 3, tabName: "Salatalar" },
  { id: 4, tabName: "İçecekler" },


]);

const foodMenu = ref([
  {
    counter: 0,
    name: 'Adana',
    fiyat: '15 TL',
    ıcon: 'src/assets/img/img6.jpg'
  },
  {
    counter: 1,
    name: 'Ciğer',
    fiyat: '15 TL',
    ıcon: 'src/assets/img/img7.jpg'
  },
  {
    name: 'Tavuk',
    fiyat: '15 TL',
    ıcon: 'src/assets/img/img8.jpg'
  },
  {
    name: 'Kuşbaşı',
    fiyat: '15 TL'
  },
  {
    name: 'Kebap',
    fiyat: '15 TL'
  },
])
onMounted(() => {
  temp.value = 1;
});

</script>
<style scoped>
.click-bg-color{
  background-color: white;
}
.nav-item {
  padding: 10px;
  text-decoration: none;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin: 0 6px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  position: relative;
}
.uzunluk{
 height: 34rem; 
}
</style>