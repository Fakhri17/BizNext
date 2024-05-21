<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import layanan1 from '@/assets/images/home/layanan-1.png'
import layanan2 from '@/assets/images/home/layanan-2.png'
import layanan3 from '@/assets/images/home/layanan-3.png'
import layanan4 from '@/assets/images/home/layanan-4.png'
import layanan5 from '@/assets/images/home/layanan-5.png'
import layanan6 from '@/assets/images/home/layanan-6.png'

const benefitList = ref([
  {
    title: 'Bootcamp Berkualitas',
    description: 'Persiapan yang komprehensif dengan kurikulum industri',
    icon: 'uil:monitor',
  },
  {
    title: 'Harga Terjangkau',
    description: 'Pembelajaran intensif dengan biaya yang terjangkau ',
    icon: 'vaadin:piggy-bank-coin',
  },
  {
    title: 'Kesempatan Karir',
    description: 'Memperluas jaringan profesional serta kerjasama dengan Perusahaan ternama  ',
    icon: 'fa6-solid:handshake-simple',
  },
  {
    title: 'Mentor Berpengalaman',
    description: 'Dibimbing oleh mentor yang berpengalaman dan ahli di bidangnya,',
    icon: 'octicon:person-24',
  },
  {
    title: 'Pendekatan Praktis',
    description: 'Pembelajaran praktis melalui proyek dan studi kasus nyata ',
    icon: 'mingcute:world-2-line',
  }
])

const layananList = ref([
  {
    assetsPath: layanan1,
    title: 'Business Development',
    description: 'Mampu mengembangkan peluang strategis bisnis melalui kemitraan baru dan identifikasi pasar baru untuk produk atau layanan',
    href: '#'
  },
  {
    assetsPath: layanan2,
    title: 'Technopreneur',
    description: 'Mampu menciptakan produk baru atau menghasilkan solusi untuk beberapa masalah menggunakan teknologi.',
    href: '#'
  },
  {
    assetsPath: layanan3,
    title: 'Digital Marketing',
    description: 'Mampu mengembangkan peluang strategis bisnis melalui kemitraan baru dan identifikasi pasar baru untuk produk atau layanan.',
    href: '#'
  },
  {
    assetsPath: layanan4,
    title: 'Business Analyst',
    description: 'Mampu menganalisis dan meningkatkan proses bisnis serta membuat keputusan yang menguntungkan melalui analisis data.',
    href: '#'
  },
  {
    assetsPath: layanan5,
    title: 'Project Manager',
    description: 'Mampu mengelola proyek dari awal hingga penerimaan akhir, memperhatikan kebutuhan konsumen, dan merancang strategi proyek.',
    href: '#'
  },
  {
    assetsPath: layanan6,
    title: 'Produk Manager',
    description: 'Menghubungkan strategi bisnis, desain, dan kebutuhan pelanggan untuk mengembangkan produk bernilai.',
    href: '#'
  },
])


</script>

<template>
  <section class="my-24">
    <div class="md:container md:mx-auto px-4">
      <Carousel class="">
        <Slide v-for="slide in 3" :key="slide">
          <div class="bg-biznext-quaternary w-full py-14 px-14 rounded-md">
            <div class="grid grid-cols-2 gap-4 items-center">
              <div class="text-left">
                <h1 class="font-bold text-5xl">Persiapkan</h1>
                <div class="flex flex-wrap items-stretch">
                  <h2 class="font-bold text-5xl">Kariermu Bersama</h2>
                  <img class="h-9 self-center" src="@/assets/images/biznext-logo.png" alt="Logo" />
                </div>

              </div>
              <div class="">
                <img class="w-full h-auto" src="@/assets/images/home/hero-image.png" alt="Logo" />
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
  <section class="bg-biznext-primary py-10">
    <div class="md:container md:mx-auto px-4">
      <div class="grid lg:grid-cols-3 lg:items-center lg:justify-between">
        <div class="text-center text-white mb-5 lg:mb-0">
          <h2 class="font-bold text-7xl">102</h2>
          <p class="mt-2 text-base">Total Kursus</p>
        </div>
        <div class="text-center text-white mb-5 lg:mb-0">
          <h2 class="font-bold text-7xl">360</h2>
          <p class="mt-2 text-base">Mahasiswa Belangganan </p>
        </div>
        <div class="text-center text-white mb-5 lg:mb-0">
          <h2 class="font-bold text-7xl">505</h2>
          <p class="mt-2 text-base">Mahasiswa</p>
        </div>
      </div>
    </div>
  </section>
  <section class="my-24">
    <div class="md:container md:mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
        <div>
          <img class="w-full h-auto" src="@/assets/images/home/foto-about.png" alt="Logo" />
        </div>
        <div>
          <div class="inline-block rounded-full bg-biznext-tertiary py-2 px-4">
            <h2 class="text-biznext-primary uppercase font-bold text-2xl">Tentang Biznext</h2>
          </div>
          <div class="px-2 mt-10">
            <h2 class="text-black font-bold text-3xl mb-4">Apa itu <span class="text-biznext-primary-dark">BizNext
                ?</span>
            </h2>
            <p>NYRI adalah website bootcamp karir bagi mahasiswa bisnis digital yang dilakukan secara intensif dengan
              materi yang telah disusun agar relevan dengan enam karier profil lulusan mahasiswa bisnis digital</p>
          </div>

        </div>
      </div>
    </div>
  </section>
  <section class="my-24">
    <div class="md:container md:mx-auto px-4">
      <div class="bg-biznext-tertiary rounded-lg py-7 md:py-14 px-5">
        <div class="text-center">
          <h3 class="font-bold text-3xl mb-7">
            Cocok Buat Kamu
          </h3>
        </div>
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-4 items-center justify-center">
          <div class="text-center">
            <img class="h-56 mb-3 block mx-auto" src="@/assets/images/home/women-home.png" alt="Logo" />
            <p class="text-base font-semibold">Mahasiswa Bisnis Digital</p>
            <p class="text-base font-semibold">Telkom University Surabaya</p>
          </div>
          <div class="text-center">
            <img class="h-56 mb-3 block mx-auto" src="@/assets/images/home/men-home.png" alt="Logo" />
            <p class="text-base font-semibold">Mahasiswa Bisnis Digital</p>
            <p class="text-base font-semibold">Seluruh Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-24 mt-40">
    <div class="md:container md:mx-auto px-4">
      <div class="text-center mb-7">
        <div class="inline-block rounded-full bg-biznext-tertiary py-2 px-4">
          <h2 class="text-biznext-primary uppercase font-bold text-xl">Keuntungan bergabung dengan BizNext </h2>
        </div>
      </div>

      <div class="mx-auto max-w-[740px] mb-20">
        <div class="grid lg:grid-cols-4 gap-8 items-center">
          <div class="col-span-2">
            <h2 class="font-bold text-2xl">Kenapa Kamu harus bergabung dengan <span
                class="text-biznext-primary-dark">BizNext ?</span></h2>
          </div>
          <div class="col-span-2">
            <p>Bootcamp karier bagi mahasiswa bisnis digital yang menawarkan pembelajaran intensif dengan mentor
              berpengalaman dan pendekatan praktis.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-4">
        <div v-for="(item, index) in benefitList" :key="index" class="w-full lg:max-w-80">
          <div :class="index % 2 == 0 ? 'bg-biznext-tertiary' : 'bg-white'"
            class="block h-full shadow-lg rounded-xl border border-gray-200 py-5 px-10 text-center">
            <div class="block mx-auto mb-4">
              <span :class="index % 2 == 0 ? 'bg-white' : 'bg-biznext-tertiary'"
                class="inline-flex justify-center items-center w-[50px] h-[50px] rounded-full">
                <Icon :icon="item.icon" class="text-3xl font-bold text-black" />
              </span>
            </div>
            <h3 class="text-xl font-bold text-biznext-primary mb-2">
              {{ item.title }}
            </h3>
            <p class="text-base flex-grow">{{ item.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="my-24 mt-40">
    <div class="md:container md:mx-auto px-4">
      <div class="text-center mb-20">
        <div class="inline-block rounded-full bg-biznext-tertiary py-2 px-4">
          <h2 class="text-biznext-primary uppercase font-bold text-xl">Tahapan Belajar</h2>
        </div>
      </div>
      <div class="my-10">
        <img src="@/assets/images/home/timeline.png" alt="...">
      </div>

    </div>
  </section>

  <section class="my-24 mt-40">
    <div class="md:container md:mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="font-bold text-black text-3xl">Layanan Kami Berdasarkan</h2>
        <h2 class="font-bold text-black text-3xl">6 Profil Lulusan Bisnis Digital </h2>
      </div>
      <div class="grid lg:grid-cols-3 gap-4 items-center">
        <div v-for="(item, index) in layananList" :key="index"
          class="flex flex-col bg-white border border-gray-300 shadow-lg rounded-xl p-5">
          <img class="w-[200px] h-[200px] block mx-auto" :src="`${item.assetsPath}`" alt="Image Description">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-center">
              {{ item.title }}
            </h3>
            <p class="mt-2 font-normal text-center mb-4">
              {{ item.description }}
            </p>
            <div class="text-center">
              <a href=""
                class="py-1.5 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-400 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                Lihat Selengkapnya
              </a>
            </div>


          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style>
.carousel__next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  /* Set the size of the circle */
  height: 40px;
  /* Set the size of the circle */
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  right: -3%;
  cursor: pointer;
  /* Optional: change cursor to pointer to indicate it's clickable */
}

.carousel__prev {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  /* Set the size of the circle */
  height: 40px;
  /* Set the size of the circle */
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  left: -3%;
  cursor: pointer;
}

.carousel__pagination {
  position: relative;
  top: -25px;
}

.carousel__pagination .carousel__pagination-button::after {
  width: 75px !important;
  border-radius: 0.25rem;
  background-color: #D9E6EE;
  /* 4px */

}

.carousel__pagination .carousel__pagination-button--active::after {
  width: 75px !important;
  border-radius: 0.25rem;
  background-color: #8BB0CB;
  /* 4px */
}
</style>