<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const linkList = ref([
  { name: 'Beranda', url: '/' },
  { name: 'Tentang Kami', url: '/tentang-kami' },
  { name: 'Layanan', url: '/layanan' }
])
</script>

<template>
  <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-5 md:py-5 shadow-md">
    <nav class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global">
      <div class="flex items-center justify-between">
        <a class="flex-none" href="#" aria-label="Brand">
          <img class="h-8" src="@/assets/images/biznext-logo.png" alt="Logo" />
        </a>
        <div class="sm:hidden">
          <button type="button"
            class="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-4 lg:gap-x-7 sm:mt-0 sm:ps-7">
          <a v-for="(item, index) in linkList" :key="index" :href="item.url">
            <span :class="route.path === item.url ? 'font-bold' : 'font-normal'" class="text-base hover:font-bold">
              {{ item.name }}
            </span>
          </a>

          <div class="flex items-center gap-x-2 sm:ms-auto">
            <div class=" max-w-40 xl:max-w-sm space-y-3 border border-gray-300 rounded-lg shadow">
              <div>
                <div class="relative">
                  <input type="text" id="hs-leading-icon" name="hs-leading-icon"
                    class="py-3 px-4 ps-11 block w-full border-gray-200 bg-gray-100 shadow-sm rounded-lg text-base"
                    placeholder="Cari Layanan" />
                  <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <Icon icon="clarity:search-line" class="text-xl" />
                  </div>
                </div>
              </div>
            </div>
            <a href="/daftar"
              class="py-2 px-3 mx-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#2B6797] text-white hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none">
              Gabung Sekarang
            </a>
            <img class="h-14 rounded-full border border-gray-600" src="@/assets/images/home/rein-circle.png"
              alt="Image Description" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
