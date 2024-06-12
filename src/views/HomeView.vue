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
import tracy from '@/assets/images/home/tracy-circle.png'
import rein from '@/assets/images/home/rein-circle.png'
import irma from '@/assets/images/home/irma-circle.png'
import shaula from '@/assets/images/home/shaula-circle.png'
import mentari from '@/assets/images/home/mentari-circle.png'
import nada from '@/assets/images/home/nada-circle.png'

import telu from '@/assets/images/home/telu.png'
import indibiz from '@/assets/images/home/indibiz.png'
import telkomIndo from '@/assets/images/home/telkom-indo.png'
import kuanta from '@/assets/images/home/kuanta.png'
import autokirim from '@/assets/images/home/autokirim.png'
import otakkanan from '@/assets/images/home/otakkanan.png'
import markplus from '@/assets/images/home/markplus.png'
import logam_pt from '@/assets/images/home/logam-pt.png'
// import image1_1 from '@/assets/images/biznext-logo.png'
import carousel_image1 from '@/assets/images/home/hero-image.png'
import carousel_image2 from '@/assets/images/home/carousel2.png'
import carousel_image3 from '@/assets/images/home/carousel3.png'

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
    title: 'Product Manager',
    description: 'Menghubungkan strategi bisnis, desain, dan kebutuhan pelanggan untuk mengembangkan produk bernilai.',
    href: '#'
  },
])

const testimoni = ref([
  {
    name: 'Tracy Olivia',
    image: tracy,
    company: telu,
    description: 'Prodi Bisnis Digital adalah prodi baru di Indonesia. Saat saya masih calon mahasiswa, saya menemukan BizNext, sebuah website informatif yang memberikan informasi lengkap tentang Bisnis Digital. Terima kasih BizNext ❤️',
  },
  {
    name: 'Reinifada',
    image: rein,
    company: indibiz,
    description: 'Saat ini, dunia startup berkembang pesat dan jurusan bisnis digital membantu saya beradaptasi di lintas bisnis dan teknologi. Melalui BizNext, saya menemukan profil lulusan dan peluang kerja di startup yang berkembang, membantu karier saya. Terus maju, BizNext!',
  },
  {
    name: 'Irma Jauzalia',
    image: irma,
    company: telkomIndo,
    description: 'Dengan adanya BizNext membantu banget untuk update knowledge tentang digital marketing. Bahasanya mudah dipahami untuk orang awam yang baru ingin belajar, mentornya kece dan seru banget! Jadi gak bosan belajar disini. Great Job BizNext! 😄',
  },
  {
    name: 'Shaula Salsabila',
    image: shaula,
    company: kuanta,
    description: 'Waktu aku udah lulus dari Prodi Bisnis Digital, BizNext tuh jadi lifesaver banget. Banyak ilmu dan konsep yang aku dapet dari sana yang bener-bener ngebantu karir aku. Big thanks buat BizNext!',
  },
  {
    name: 'Mentari Anugrah',
    image: mentari,
    company: autokirim,
    description: 'Salah satu perubahan terbesar hidupku saat aku nemu BizNext, dan bener-bener, aku ga nyesel deh. Bisa nambahin koneksi sama dapet ilmu yang berguna banget buat karir aku. Thanks a bunch, BizNext!',
  },
  {
    name: 'Nada Alfi N',
    image: nada,
    company: otakkanan,
    description: 'Ga bakal nyesel deh kalo gabung ke BizNext!Mereka bener-bener bantu aku ngerjain karir aku dengan bimbingan dan pendidikan yang mereka kasih. Makasih buat semuanya, BizNext!',
  },

])

const imageCompany = ref([
  telu, indibiz, telkomIndo, kuanta, autokirim, otakkanan, markplus, logam_pt
])

const accordionContent = ref([
  {
    title: 'Apa itu BizNext?',
    content: 'BizNext adalah sebuah platform yang membantu mahasiswa untuk mencapai impian karir mereka khususnya di Program Studi Bisnis Digital!'
  },
  {
    title: 'Materi apa yang dipelajari saat bootcamp?',
    content: 'Materi yang akan  dipelajari akan berbeda-beda tergantung dari bootcamp yang dipilih. Silahkan cek Layanan kamu ya untuk informasi lengkapnya '
  },
  {
    title: 'Bootcampnya berapa lama?',
    content: 'Silakan cek di katalog pelatihan BizNext untuk durasi setiap programnya ya.'
  },
  {
    title: 'Bagaimana tahapan program bootcamp ini?',
    content: 'Pendaftaran akun > pilih course > daftar course > pembayaran > pelatihan > mendapatkan sertifikasi'
  },

])


const slidesList = ref([
  {
    title: 'Persiapkan',
    subtitle: 'Kariermu Bersama',
    image: carousel_image1,
    description: 'Ikuti Program Bootcamp Intensif Kembangkan Skill dan Mulai Rintis Karirmu!'
  },
  {
    title: 'Dapatkan',
    subtitle: 'potongan 20%',
    image: carousel_image2,
    description: 'Khusus untuk mahasiswa dan Alumni mahasiswa bisnis Digital Telkom University Surabaya',
  },
  {
    title: 'Dapatkan',
    subtitle: 'Free Konsultasi',
    image: carousel_image3,
    description: 'Perencanaan karier dengan Mentor terbaik kita khusus untuk 10 pembeli pertama',
  },
])



const isAccordionActive = (index) => {
  return index
}


</script>


<template>
  <section class="my-24">
    <div class="md:container md:mx-auto px-7">
      <Carousel class="">
        <Slide v-for="(item, index) in slidesList" :key="index">
          <div class="bg-biznext-quaternary w-full py-14 px-14 rounded-md">
            <div class="grid lg:grid-cols-2 gap-4 items-center">
              <div class="">
                <img src="@/assets/images/biznext-logo.png" alt="Logo" class="mb-1.5" />
                <div class="text-left">
                  <h1 class="font-bold text-5xl mb-1">
                    {{ item.title }}
                  </h1>
                  <h2 class="font-bold text-5xl">{{ item.subtitle }}</h2>
                  <p class="mt-4 mb-5">{{ item.description }}</p>
                  <div v-if="index == 0">
                    <a href="/daftar"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#2B6797] text-white hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none">
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img class="w-full h-full" :src="item.image" alt="Hero Image" />
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
    <div class="md:container md:mx-auto px-7">
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
  <section class="my-24 mt-40">
    <div class="md:container md:mx-auto px-7">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
        <div>
          <img class="w-full h-auto" src="@/assets/images/home/irma-about.png" alt="Logo" />
        </div>
        <div>
          <div class="inline-block rounded-full bg-biznext-tertiary py-2 px-6">
            <h2 class="text-biznext-primary uppercase font-bold text-2xl">Tentang Biznext</h2>
          </div>
          <div class="px-2 mt-10">
            <h2 class="text-black font-bold text-3xl mb-4">Apa itu <span class="text-biznext-primary-dark">BizNext
                ?</span>
            </h2>
            <p>BizNext adalah website bootcamp karir bagi mahasiswa bisnis digital yang dilakukan secara intensif dengan
              materi yang telah disusun agar relevan dengan enam karier profil lulusan mahasiswa bisnis digital</p>
          </div>

        </div>
      </div>
    </div>
  </section>
  <section class="my-24 mt-40">
    <div class="md:container md:mx-auto px-7">
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
    <div class="md:container md:mx-auto px-7">
      <div class="text-center mb-7">
        <div class="inline-block rounded-full bg-biznext-tertiary py-2 px-6">
          <h2 class="text-biznext-primary uppercase font-bold text-xl">Keuntungan bergabung dengan BizNext </h2>
        </div>
      </div>

      <div class="mx-auto max-w-[778px] mb-20">
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
      <div class="flex flex-wrap justify-center -mx-4 lg:gap-1">
        <div v-for="(item, index) in benefitList" :key="index" class="w-full md:w-1/2 lg:w-1/4 px-2 py-3 mb-7">
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
    <div class="md:container md:mx-auto px-7">
      <div
        class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:border-l-2 before:border-dotted before:border-black">

        <!-- Item #1 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-biznext-primary-dark bg-white   group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/3 md:group-even:translate-x-1/3">
            <Icon icon="mdi:user-plus-outline" class="text-black text-2xl" />
          </div>
          <!-- Card -->
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-7 rounded border border-slate-200 shadow">
            <div class="mb-1">
              <p class="font-bold text-[#29465B] text-base">Tahap 1</p>
              <div class="font-bold text-2xl my-2">Pendaftaran</div>
            </div>
            <div class="text-sm">Daftar program bootcamp intensif BizNext disini.</div>
          </div>
        </div>

        <!-- Item #2 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-biznext-primary-dark bg-white   group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/3 md:group-even:translate-x-1/3">
            <Icon icon="carbon:touch-1" class="text-black text-2xl" />
          </div>
          <!-- Card -->
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-7 rounded border border-slate-200 shadow">
            <div class="mb-1">
              <p class="font-bold text-[#29465B] text-base">Tahap 2</p>
              <div class="font-bold text-2xl my-2">Pilih Course</div>
            </div>
            <div class="text-sm">Peserta memilih course yang diminati</div>
          </div>
        </div>

        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-biznext-primary-dark bg-white   group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/3 md:group-even:translate-x-1/3">
            <Icon icon="mdi:education-outline" class="text-black text-2xl" />
          </div>
          <!-- Card -->
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-7 rounded border border-slate-200 shadow">
            <div class="mb-1">
              <p class="font-bold text-[#29465B] text-base">Tahap 3</p>
              <div class="font-bold text-2xl my-2">Daftar Course</div>
            </div>
            <div class="text-sm">Daftar ke course yang sudah Anda pilih</div>
          </div>
        </div>

        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-biznext-primary-dark bg-white   group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/3 md:group-even:translate-x-1/3">
            <Icon icon="solar:wallet-money-outline" class="text-black text-2xl" />
          </div>
          <!-- Card -->
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-7 rounded border border-slate-200 shadow">
            <div class="mb-1">
              <p class="font-bold text-[#29465B] text-base">Tahap 4</p>
              <div class="font-bold text-2xl my-2">Pembayaran</div>
            </div>
            <div class="text-sm">Melakukan pembayaran untuk mengikuti program bootcamp intensif BizNext</div>
          </div>
        </div>

        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-biznext-primary-dark bg-white   group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/3 md:group-even:translate-x-1/3">
            <Icon icon="mdi:teacher" class="text-black text-2xl" />
          </div>
          <!-- Card -->
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-7 rounded border border-slate-200 shadow">
            <div class="mb-1">
              <p class="font-bold text-[#29465B] text-base">Tahap 5</p>
              <div class="font-bold text-2xl my-2">Pelatihan</div>
            </div>
            <div class="text-sm">Peserta mengikuti pelatihan secara online sesuai dengan waktu dan kurikulum yang sudah
              ditentukan.</div>
          </div>
        </div>

        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-biznext-primary-dark bg-white   group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/3 md:group-even:translate-x-1/3">
            <Icon icon="ph:certificate" class="text-black text-2xl" />
          </div>
          <!-- Card -->
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-7 rounded border border-slate-200 shadow">
            <div class="mb-1">
              <p class="font-bold text-[#29465B] text-base">Tahap 6</p>
              <div class="font-bold text-2xl my-2">Mendapatkan Sertifikat</div>
            </div>
            <div class="text-sm">Setelah menyelesaikan course, peserta akan mendapatkan sertifikasi serta benefit yang
              lainnya yaitu join komunitas </div>
          </div>
        </div>


      </div>
    </div>
  </section>

  <section class="my-24 mt-40">
    <div class="md:container md:mx-auto px-7">
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

  <section class="my-25 mt-40 py-16 bg-biznext-tertiary">
    <div class="md:container md:mx-auto px-7">
      <div class="text-center mb-40">
        <div class="inline-block rounded-full bg-biznext-primary py-2 px-10 mb-6">
          <h2 class="text-white uppercase font-bold text-3xl">Kata Alumni</h2>
        </div>
        <p class="text-2xl">Mereka sudah merasakan serunya belajar skill digital dan meraih karier yang mereka
          inginkan. Kamu selanjutnya?</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 items-stretch">
        <div v-for="(item, index) in testimoni" :key="index"
          class="bg-white border rounded-xl shadow-sm md:flex relative mb-16 md:mb-20">
          <div
            class="bg-biznext-secondary relative w-full rounded-t-xl overflow-hidden sm:rounded-s-xl md:rounded-se-none md:max-w-xs">
          </div>
          <div class="flex flex-col flex-grow px-7 py-10">
            <div class="relative md:top-[-15%] lg:top-[-25%] inline-block mx-auto">
              <img class="size-[80px] lg:size-[100px] rounded-full border border-gray-600" :src="`${item.image}`"
                alt="Image Description">
            </div>
            <div class="absolute right-0 pr-4 top-16">
              <img :src="`${item.company}`" alt="Image Description">
            </div>
            <div class=" flex-grow">
              <h3 class="text-lg font-bold">
                {{ item.name }}
              </h3>
              <p class="mt-1 text-gray-500">
                "{{ item.description }}"
              </p>
              <div class="mt-5">
                <div v-for="item in 5" class="inline-flex justify-center items-center ml-1">
                  <Icon icon="emojione:star" class="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="my-24 mt-40">
    <div class="md:container md:mx-auto px-7">
      <div class="inline-block rounded-full bg-biznext-tertiary py-2 px-6">
        <h2 class="text-biznext-primary uppercase font-bold text-3xl">MITRA KAMI </h2>
      </div>
      <div class="mt-20">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="font-bold text-black text-3xl">
              Bekerjasama dengan kampus dan perusahaan terbaik di Indonesia
            </h2>
            <div class="my-10">
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                <div v-for="item in imageCompany" :key="index" class="">
                  <img class="block mx-auto" :src="`${item}`" alt="Image Description">
                </div>
              </div>
            </div>
            <p class="text-xl font-medium">Tidak hanya belajar, kamu juga berkesempatan untuk membangun karir di
              perusahaan impian.</p>
          </div>
          <div>
            <img class="w-full h-auto" src="@/assets/images/home/model-man-mitra.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="my-24 mt-40">
    <div class="md:container md:mx-auto px-7">
      <div class="inline-block rounded-full bg-biznext-tertiary py-2 px-6">
        <h2 class="text-biznext-primary uppercase font-bold text-3xl">PUSAT BANTUAN </h2>
      </div>
      <div class="mt-16">
        <div class="grid lg:grid-cols-3 gap-6">
          <div class="flex flex-col bg-white border border-gray-500 shadow-sm rounded-2xl p-4 md:p-5 self-start">
            <ul class="list-none list-inside">
              <li class="">
                <a href="#" class="text-3xl hover:underline font-medium">Syarat dan Ketentuan</a>
              </li>
              <li class="my-3">
                <hr class="border-gray-300 border-[1px]">
              </li>
              <li class="">
                <a href="#" class="text-3xl hover:underline font-medium">Kebijakan Privasi</a>
              </li>
            </ul>
          </div>
          <div class="lg:col-span-2">
            <div class="hs-accordion-group" data-hs-accordion-always-open>

              <div v-for="(item, index) in accordionContent" :key="index"
                class="hs-accordion bg-biznext-tertiary hs-accordion-active:bg-[#e6f5fe] border border-transparent transition-all duration-300 rounded-xl mb-5"
                :id="`hs-active-bordered-heading-${index}`">
                <button
                  class="hs-accordion-toggle hs-accordion-active:text-[#5385AC] transition-all duration-300 inline-flex justify-between items-center gap-x-3 w-full font-bold text-start py-4 px-5 text-2xl disabled:pointer-events-none"
                  aria-controls="hs-basic-active-bordered-collapse-${index}`">
                  {{ item.title }}
                  <Icon icon="ion:chevron-down-outline" class="hs-accordion-active:hidden block text-3xl" />
                  <Icon icon="ion:chevron-up-outline" class="hs-accordion-active:block hidden text-3xl" />

                </button>
                <div :id="`hs-basic-active-bordered-collapse-${index}`"
                  class="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300"
                  aria-labelled:by="`hs-active-bordered-heading-${index}`">
                  <div class="pb-4 pl-5 pr-10">
                    <p class="text-base">
                      {{ item.content }}
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="my-24 mt-40">
    <div class="md:container md:mx-auto px-7">
      <div class="text-center mx-auto max-w-[740px] mb-20">
        <h2 class="font-bold text-3xl mb-7">Masih tidak menemukan apa yang kamu cari?</h2>
        <p class="text-xl">Jika kamu masih memiliki pertanyaan tambahan, Silahkan untuk menghubungi kami melaluiemail
          : biznext@telkomuniversity.ac.id </p>
      </div>
      <div class="flex flex-col bg-[#F8F8F8] border border-gray-300 shadow-lg shadow-gray-300 rounded-xl">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div class="p-5 md:p-10">
            <img class="mb-8" src="@/assets/images/biznext-logo.png" alt="">
            <h2 class="font-bold text-4xl mb-2">Yuk,Mulai Karirmu</h2>
            <h2 class="font-bold text-4xl">Bersama <span class="text-biznext-primary-dark">BizNext</span></h2>
          </div>
          <div>
            <img src="@/assets/images/home/model-woman-stand.png" alt="">
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