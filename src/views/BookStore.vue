<template>
    <div class="w-full h-screen  bg-slate-300">
        <div class="rou bg-sky-600 flex justify-around items-center p-3">
            <div>
                <svg class="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <line x1="3" y1="6" x2="3" y2="19" />
                    <line x1="12" y1="6" x2="12" y2="19" />
                    <line x1="21" y1="6" x2="21" y2="19" />
                </svg>
            </div>
            <div class="text-white">
                <h1 class="font-bold">NAME</h1>
                <p>Dükkan adresi</p>
            </div>
            <div class="flex">
                <svg aria-hidden="true" class="w-5 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <span class="font-bold">4.8</span>
            </div>
        </div>
        <div>
            <form>
                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div class="relative pt-2">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" id="search" class="block w-full p-2 pl-10 text-sm border outline-none rounded-xl"
                        placeholder="Search">
                </div>
            </form>
        </div>
        <div class="pt-2">
            <button class="bg-indigo-500 red-400 p-2 px-4 rounded-lg">Tarih</button>
            <button class="bg-red-400  p-2 px-4 rounded-lg">Bilim</button>
            <button class="bg-amber-200 p-2 px-2 rounded-lg">Çizgi Roman</button>
            <button class="bg-indigo-500 p-2 px-3 rounded-lg">Çocuk</button>
            <button class="bg-red-400 p-2 px-3 rounded-lg">Ders</button>
            <h1 class="font-bold p-2">Bilim</h1>
        </div>


        <div class="grid grid-cols-2 overflow-auto uzunluk gap-y-10">
            <div class="grid text-center" v-for="kitap in kütüphane">
                <div class="flex justify-center">
                    <img :src="kitap.ıcon" :style="{ width: '70px', height: '100px' }">
                </div>
                <h1 class="font-bold">{{ kitap.name }}</h1>
                <p>{{ kitap.yazar }}</p>
                <p class="font-bold">{{ kitap.fiyat }}</p>
                <div class="flex justify-center">
                    <button  class="buttonSepet">Sepete Ekle</button>
                </div>
            </div>
        </div>

        <div class="flex justify-around bg-red-500 p-2">
            <div class="flex text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span class="font-bold">{{ sepetTutarı }} TL</span>
            </div>
            <div>
                <button  class="bg-gray-800 p-2 rounded-xl text-white">Sepete Git</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'


const sepetTutarı = ref(45)

const kütüphane = ref([
    {
        name: 'Mavi Gözysaşı',
        yazar: 'Ahmet Yıldız',
        fiyat: '35TL',
        ıcon: 'src/assets/img/img1.jpg'
    },
    {
        name: 'Otuz Beş Yaş',
        yazar: 'Cahit Sıtkı Tarancı',
        fiyat: '35TL',
        ıcon: 'src/assets/img/img2.jpg'
    },
    {
        name: 'Acımak',
        yazar: 'Reşat Nuri Gürtekin',
        fiyat: '35TL',
        ıcon: 'src/assets/img/img3.jpg'

    },
    {
        name: 'Kan Damarlarında Yolculuk',
        yazar: 'Reha Pınar',
        fiyat: '35TL',
        ıcon: 'src/assets/img/img5.jpg'

    }
    ,
    {
        name: 'Kan Damarlarında Yolculuk',
        yazar: 'Reha Pınar',
        fiyat: '35TL',
        ıcon: 'src/assets/img/img5.jpg'

    }
    ,
    {
        name: 'Kan Damarlarında Yolculuk',
        yazar: 'Reha Pınar',
        fiyat: '35TL',
        ıcon: 'src/assets/img/img5.jpg'

    }
])
</script>
<style scoped>
.buttonSepet{
    background-color: black;
    color: white;
    padding: 2px 20px;
    border-radius: 5px;
    margin-top: 0.5rem;
}
.uzunluk{
    height: 30rem;
}
</style>