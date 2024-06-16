<script setup>
import { ref } from 'vue'

import girl1 from '@/assets/images/services/girl-1.png'
import girl2 from '@/assets/images/services/girl-2.png'
import girl3 from '@/assets/images/services/girl-3.png'
import Ellipse16 from '@/assets/images/services/Ellipse-16.png'
import Ellipse17 from '@/assets/images/services/Ellipse-17.png'
import Ellipse18 from '@/assets/images/services/Ellipse-18.png'
import Ellipse19 from '@/assets/images/services/Ellipse-19.png'
import kelas_serupa_1 from '@/assets/images/services/kelas-serupa-1.png'
import kelas_serupa_2 from '@/assets/images/services/kelas-serupa-2.png'
import kelas_serupa_3 from '@/assets/images/services/kelas-serupa-3.png'

const prospek = ([
  {
    image: girl1,
    title: 'Product Manager',
    price: 'Rp.9.000.000/bulan'
  },
  {
    image: girl2,
    title: 'Chief Product Officer',
    price: 'Rp.9.000.000/bulan'
  },
  {
    image: girl3,
    title: 'Manajer Senior Produk',
    price: 'Rp.9.000.000/bulan'
  },
])

const kelas = [
  'Tutor berpengalaman dengan level Lead/Manager/Head.',
  'Latihan dan praktik dengan membuat mini portofolio pada setiap live class.',
  'Terdapat sesi persiapan karir untuk persiapan berkas lamaran kerja (CV, Surat Lamaran Kerja, Interview, Linkedin).'
]

const setelahKelas = [
  'Masuk komunitas untuk berdiskusi dan berbagi informasi.',
  'Mendapatkan e-Certificate selesai pelatihan.',
]

const cocok = ref([
  {
    image: Ellipse16,
    title: 'Merintis karir impian',
    desc: 'Metode belajar untuk membangun landasan karir yang kokoh',
  },
  {
    image: Ellipse17,
    title: 'Mendalami industri digital',
    desc: 'Persiapan karir  tentang tren dan praktik terbaru di industri digital.',
  },
  {
    image: Ellipse18,
    title: 'Mengembangkan keterampilan bisnis digital',
    desc: 'meningkatkan kemampuan dalam strategi bisnis dan teknologi digital.',
  },
  {
    image: Ellipse19,
    title: 'Mencari peluang dunia startup',
    desc: 'Menghadirkan kesempatan merintis peluang dalam ekosistem startup',
  },

])

const materi = [
  'Product Management Basic',
  'Product Manager Skillset',
  'Business Integrated Product Roadmap',
  'Building PRD (Product Requirements Document)',
  'Scrum Introduc. & Scrum Implementation Using Tools'
]

const kelasSerupa = ref([
  {
    img: kelas_serupa_1,
    lesson: '13 Lesson',
    hour: '5 Hours',
    title: 'Strong & Effective Marketing Plan',
    review: '15 Review',
    students: '235 Students',
  },
  {
    img: kelas_serupa_2,
    lesson: '8 Lesson',
    hour: '2 Hours',
    title: 'Digital Marketing with Google Ads',
    review: '25 Review',
    students: '250 Students',
  },
  {
    img: kelas_serupa_3,
    lesson: '10 Lesson',
    hour: '4.5 Hours',
    title: 'Search Engine Marketing (SEM)',
    review: '20 Review',
    students: '320 Students',
  },
])
</script>

<template>
  <section class="my-24">
    <div class="md:container md:mx-auto px-7">
      <ol class="flex items-center whitespace-nowrap">
        <li class="inline-flex items-center">
          <a class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            href="#">
            Home
          </a>
          <svg class="flex-shrink-0 size-5 text-gray-400 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
          </svg>
        </li>

        <li class="inline-flex items-center text-sm font-semibold text-black truncate" aria-current="page">
          Product Manager
        </li>
      </ol>
      <div class="my-5">
        <div class="relative">
          <img class="rounded-lg w-full h-96 object-cover block mx-auto" src="@/assets/images/services/product1.png"
            alt="Image Description">
          <div class="absolute inset-0 flex items-end p-5">
            <div class="w-full">
              <div class="lg:flex lg:flex-wrap lg:items-end">
                <div class="flex-1 pr-0 xl:pr-20 mb-1 lg:mb-0">
                  <h2 class="text-white font-bold text-2xl lg:text-3xl xl:text-4xl">Product Manager</h2>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content my-10">
        <h3 class="font-normal text-3xl mb-7">Tentang</h3>
        <p class="text-lg">Bootcamp Produk Manager adalah pelatihan online intensif yang menyediakan pemahaman mendalam
          tentang manajemen produk. Materi dirancang dari dasar hingga lanjut dengan standar industri terkini. Peserta
          akan belajar konsep dasar, analisis pasar, pengembangan produk, dan strategi peluncuran. Mereka juga
          berinteraksi dengan praktisi industri, memperluas jaringan, dan mendapatkan wawasan melalui studi kasus. </p>
        <div class="mt-10 mb-20">
          <h3 class="font-normal text-4xl mb-7 text-center">Prospek Karir</h3>
          <div class="grid lg:grid-cols-3 gap-10">
            <div v-for="(item, index) in prospek" :key="index">
              <img class="block mx-auto mb-3" :src="item.image" alt="">
              <div class="text-center">
                <h3 class="font-semibold text-2xl">{{ item.title }}</h3>
                <p class="text-lg">{{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <h3 class="font-normal text-3xl">Benefit Bootcamp</h3>
          <p class="font-bold text-black text-lg mb-1.5">Materi Kelas:</p>
          <ul class="space-y-1 text-sm mb-5">
            <li v-for="(item, index) in kelas" :key="index" class="flex space-x-3 items-center">
              <Icon icon="material-symbols:check" class="text-2xl" />
              <span class="text-lg">
                {{ item }}
              </span>
            </li>
          </ul>
          <p class="font-bold text-black text-lg mb-1.5">Setelah Kelas:</p>
          <ul class="space-y-1 text-sm">
            <li v-for="(item, index) in setelahKelas" :key="index" class="flex space-x-3 items-center">
              <Icon icon="material-symbols:check" class="text-2xl" />
              <span class="text-lg">
                {{ item }}
              </span>
            </li>

          </ul>
        </div>
        <div class="my-10 py-7 lg:py-10 px-10 bg-biznext-tertiary rounded-xl shadow-sm">
          <h2 class="mb-10 text-center font-semibold text-2xl lg:text-4xl ">Cocok Buat Kamu</h2>
          <div class="grid lg:grid-cols-4 gap-20">
            <div v-for="(item, index) in cocok" :key="index">
              <img class="block mx-auto mb-3" :src="item.image" alt="">
              <div class="text-center">
                <h3 class="font-bold text-xl mb-2 text-[#1E3344]">{{ item.title }}</h3>
                <p class="text-base">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 mb-10">
          <h2 class="font-normal text-3xl mb-7">Detail Bootcamp</h2>
          <div class="grid lg:grid-cols-3 gap-10">
            <div class="lg:col-span-2">
              <img class="w-full rounded-3xl mb-7" src="@/assets/images/services/product2.png" alt="">
              <p>Oleh <strong>Caesareano Lafado Yesa, S.M.B., M.M</strong></p>
              <h2 class="font-normal text-3xl lg:text-5xl mt-5 mb-10">Rancang Ide Product Digital
                dengan Product Management</h2>
              <div class="">
                <ul class="list-disc list-outside space-y-5">
                  <li>Kursus ini akan membekali Anda dengan pemahaman mendalam tentang manajemen produk dan bagaimana
                    berkolaborasi secara efektif dengan tim pengembangan produk.</li>
                  <li>Anda akan mempelajari konsep dasar pengalaman pengguna (UX) untuk dapat berkomunikasi dengan UX
                    Designer dan Peneliti dengan lebih efektif.
                  </li>
                  <li>Anda akan memahami langkah-langkah untuk merancang strategi produk digital yang sukses, termasuk
                    menentukan tujuan, mengidentifikasi pasar target, dan memilih platform dan alat yang sesuai.
                  </li>
                  <li> Semua ini digabungkan dalam tugas akhir yang akan menguji pengetahuan Anda tentang materi kursus,
                    dan memberikan skenario tugas analisis data dunia nyata.
                  </li>
                </ul>
              </div>
              <div class="mb-7">
                <h5 class="font-normal text-lg">MATERI PELATIHAN</h5>
                <div class="my-5">
                  <button v-for="item in materi" :key="item" type="button"
                    class="w-full mb-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-base font-normal rounded-full border border-transparent bg-biznext-quaternary text-black">

                    {{ item }}
                    <span class="ml-auto">
                      <div class="inline-flex items-center">
                        <Icon icon="ic:baseline-plus" class="text-2xl mr-1" />
                        <Icon icon="uil:padlock" class="text-2xl" />
                      </div>

                    </span>
                  </button>

                </div>
              </div>
              <div class="mb-7">
                <h3 class="text-[#b9b9b9] font-bold text-xl mb-5">Apa yang akan kamu pelajari?</h3>
                <ul class="list-disc list-outside space-y-5">
                  <li>Pengembangan Keterampilan Manajerial:
                    Pemahaman konsep produk dan peran manajer produk, serta pengembangan keterampilan kepemimpinan,
                    komunikasi, analitis, dan pemecahan masalah, didukung dengan pemahaman etika digital dan literasi
                    yang relevan dalam manajemen produk.</li>
                  <li>Implementasi Praktis Metodologi Pengembangan Produk:
                    Menerapkan metodologi pengembangan perangkat lunak seperti Scrum serta melacak kinerja produk dan
                    menyampaikan presentasi efektif sebagai manajer produk.
                  </li>
                </ul>
              </div>
              <div class="mb-7">
                <h3 class="text-[#b9b9b9] font-bold text-xl mb-5">Keterampilan yang akan Anda peroleh</h3>
                <div class="block lg:flex flex-wrap gap-5 items-start">
                  <div
                    class="py-3 px-4 mb-3 inline-flex justify-center items-center gap-x-2 text-base font-normal rounded-xl border border-transparent bg-biznext-tertiary text-black">

                    Customer Relationship Management

                  </div>
                  <div
                    class="py-3 px-4 mb-3 inline-flex justify-center items-center gap-x-2 text-base font-normal rounded-xl border border-transparent bg-biznext-tertiary text-black">
                    Data Analysis
                  </div>
                  <div
                    class="py-3 px-4 mb-3 inline-flex justify-center items-center gap-x-2 text-base font-normal rounded-xl border border-transparent bg-biznext-tertiary text-black">

                    Data Visualization (Data Viz)

                  </div>
                </div>

              </div>
            </div>
            <div>
              <div class="flex bg-white rounded-xl border border-black shadow-lg overflow-hidden mb-12">
                <div class="px-7 w-full text-center md:px-10 py-3 hover:bg-primary-400 border-r border-black">
                  <p class="mb-0 font-bold text-base">MODUL</p>
                  <p class="font-normal">5</p>
                </div>
                <div class="px-7 w-full text-center md:px-10 py-3 hover:bg-primary-400">
                  <p class="mb-0 font-bold text-base">LEVEL</p>
                  <p class="font-normal">Pemula</p>
                </div>
              </div>
              <div class="mb-7">
                <ul class="list-none list-inside font-bold mb-5">
                  <li class="mb-2.5">Pengguna : 4.432</li>
                  <li class="mb-2.5">Bahasa : Indonesia</li>
                  <li class="mb-2.5">Terjemahan : English, Indonesia, Japan, and 4+ more</li>
                  <li class="mb-2.5">Modul : 2 Kursus</li>
                  <li class="mb-2.5">Durasi : 1 bulan</li>
                  <li class="mb-2.5">Sertifikat : Setelah menyelesaikan kursus</li>
                  <li class="mb-2.5">Tempat : Online</li>
                </ul>
                <button type="button"
                  class="py-2 w-full px-4 inline-flex justify-center items-center gap-x-2 text-lg font-normal rounded-xl border border-transparent bg-biznext-secondary text-black">
                  Harga : Rp.140.000,00
                </button>
              </div>
              <div>
                <h3 class="text-[#b9b9b9] font-semibold text-xl mb-5">Rating</h3>
                <div class="block lg:flex">
                  <div class="flex space-x-1 w-full">
                    <div>
                      <Icon icon="material-symbols:star" class="text-5xl text-[#FFD233]" />
                    </div>
                    <div>
                      <div class="font-normal text-2xl lg:text-4xl">5.0</div>
                      <div class="font-bold text-[#b9b9b9] text-lg">(3 rating)</div>
                    </div>
                  </div>
                  <div class="w-full flex flex-col space-y-2">
                    <div class="flex items-center gap-x-3 whitespace-nowrap">
                      <div class="text-start">
                        <span class="flex items-center">
                          <Icon icon="material-symbols:star" class="text-xl mr-2 text-[#FFD233]" />5
                        </span>
                      </div>
                      <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div
                          class="flex flex-col justify-center rounded-full overflow-hidden bg-[#FFD233] text-xs text-white text-center whitespace-nowrap"
                          style="width: 100%"></div>
                      </div>
                      <div class="text-end">
                        <span class="">3</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-x-3 whitespace-nowrap">
                      <div class="text-start">
                        <span class="flex items-center">
                          <Icon icon="material-symbols:star" class="text-xl mr-2 text-[#FFD233]" />4
                        </span>
                      </div>
                      <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div
                          class="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap"
                          style="width: 100%"></div>
                      </div>
                      <div class="text-end">
                        <span class="">0</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-x-3 whitespace-nowrap">
                      <div class="text-start">
                        <span class="flex items-center">
                          <Icon icon="material-symbols:star" class="text-xl mr-2 text-[#FFD233]" />3
                        </span>
                      </div>
                      <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div
                          class="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap"
                          style="width: 100%"></div>
                      </div>
                      <div class="text-end">
                        <span class="">0</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-x-3 whitespace-nowrap">
                      <div class="text-start">
                        <span class="flex items-center">
                          <Icon icon="material-symbols:star" class="text-xl mr-2 text-[#FFD233]" />2
                        </span>
                      </div>
                      <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div
                          class="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap"
                          style="width: 100%"></div>
                      </div>
                      <div class="text-end">
                        <span class="">0</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-x-3 whitespace-nowrap">
                      <div class="text-start">
                        <span class="flex items-center">
                          <Icon icon="material-symbols:star" class="text-xl mr-2 text-[#FFD233]" />1
                        </span>
                      </div>
                      <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div
                          class="flex flex-col justify-center rounded-full overflow-hidden bg-[#D9D9D9] text-xs text-white text-center whitespace-nowrap"
                          style="width: 100%"></div>
                      </div>
                      <div class="text-end">
                        <span class="">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <a href="/pembayaran/daftar/product-manager"
            class="w-full py-3 px-4 inline-flex shadow-lg justify-center items-center gap-x-2 text-xl  font-bold rounded-lg border border-transparent bg-biznext-primary text-white ">
            GABUNG SEKARANG
          </a>
        </div>

      </div>
      <div class="my-10">
        <p class="font-normal mb-5 text-lg">Kelas Serupa</p>
        <div class="grid lg:grid-cols-3 gap-8">
          <div v-for="(item, index) in kelasSerupa" :key="index"
            class="flex flex-col bg-biznext-quaternary border shadow-sm rounded-xl">
            <img class="w-full h-auto" :src="item.img" alt="Image Description">
            <div class="p-4 md:p-5">
              <ul class="mt-4 mb-2">
                <li class="inline-block relative pe-4 text-sm text-[#818286] font-bold">
                  <span class="flex items-center">
                    <Icon icon="ant-design:book-outlined" class="mr-1 text-lg" />
                    {{ item.lesson }}
                  </span>
                </li>
                <li class="inline-block relative pe-4 text-sm text-[#818286] font-bold">
                  <span class="flex items-center">
                    <Icon icon="mdi:clock-outline" class="mr-1 text-lg" />
                    {{ item.hour }}
                  </span>
                </li>
              </ul>
              <h3 class="font-semibold text-xl mb-3">{{ item.title }}</h3>
              <div class="flex items-center mb-3 space-x-3">
                <div>
                  <Icon v-for="item in 5" icon="noto-v1:star" class="inline-flex items-center text-xl mr-1" />
                </div>
                <div>
                  <span class="text-[#818286] text-sm font-bold mb-0">({{ item.review }})</span>
                </div>

              </div>
              <hr class="my-5 border-[#818286]">
              <div class="text-end">
                <span class="text-[#818286] text-sm font-bold mb-0">{{ item.students }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>