<script setup>
import { ref } from 'vue'

import digitalMarketing from '@/assets/images/services/digital-marketing.png'
import businessDevelopment from '@/assets/images/services/business-development.png'
import bussinessAnalyst from '@/assets/images/services/bussiness-analyst.png'
import productManager from '@/assets/images/services/product-manager.png'
import projectManager from '@/assets/images/services/project-manager.png'
import technopreneur from '@/assets/images/services/technopreneur.png'
import wachda from '@/assets/images/services/wachda.png'
import sekar from '@/assets/images/services/sekar.png'
import darlin from '@/assets/images/services/darlin.png'
import caesareano from '@/assets/images/services/caesareano.png'
import dominggo from '@/assets/images/services/dominggo.png'
import krisnayanti from '@/assets/images/services/krisnayanti.png'
import articlePhoto1 from '@/assets/images/services/article-photo1.png'
import articlePhoto2 from '@/assets/images/services/article-photo2.png'
import articlePhoto3 from '@/assets/images/services/article-photo3.png'

const serviceList = ref([
  {
    image: digitalMarketing,
    title: 'Digital Marketing',
    price: 'Rp 125.000',
    desc: 'Pembelajaran tentang berbagai strategi pemasaran digital, termasuk SEO (Search Engine Optimization), SEM (Search Engine Marketing), PPC (Pay-Per-Click), media sosial, konten pemasaran, email pemasaran, dan lainnya.',
    mentor: 'Wachda Yuniar Rochmah, S.M., M.M.',
    mentorImage: wachda,
  },
  {
    image: businessDevelopment,
    title: 'Business Development',
    price: 'Rp 110.000',
    desc: 'Pembelajaran tentang dasar-dasar business development seperti strategi pengembangan bisnis, keterampilan negosiasi, Pembangunan kemitraan, keterampilan keuangan serta etika bisnis. ',
    mentor: 'Sekar Widyasari Putri, S.AB., M.Si.',
    mentorImage: sekar,
  },
  {
    image: bussinessAnalyst,
    title: 'Bussiness Analyst',
    price: 'Rp 135.000',
    desc: 'Pembelajaran tentang  berbagai konsep dan praktik terkait analisis bisnis, termasuk strategi, pemodelan, analisis data, keuangan, persaingan, dan presentasi hasil analisis. ',
    mentor: 'Darlin Aulia, S.E., M.S.Ak',
    mentorImage: darlin,
  },
  {
    image: productManager,
    title: 'Product Manager',
    price: 'Rp 140.000',
    desc: 'Pembelajaran tentang dasar-dasar Product Manager seperti Pengembangan Produk, Strategi Produk, Penemuan Validasi pasar, Pemasaran produk, Metrik Produk dan lainnya. ',
    mentor: 'Caesareano Lafado Yesa, S.M.B., M.M.',
    mentorImage: caesareano,
  },
  {
    image: projectManager,
    title: 'Project Manager',
    price: 'Rp 145.000',
    desc: 'Pembelajaran  tentang berbagai konsep dan praktik terkait manajemen proyek, termasuk perencanaan, pengorganisasian, pengendalian, dan pelaporan proyek.',
    mentor: 'Dominggo Bayu Baskara, S.T., M.MT., PMP.',
    mentorImage: dominggo,
  },
  {
    image: technopreneur,
    title: 'Technopreneur',
    price: 'Rp 125.000',
    desc: 'Pembelajaran tentang berbagai konsep dan praktik terkait technopreneur termasuk pengembangan ide, model bisnis, pengembangan produk, pendanaan dan lainnya. ',
    mentor: 'Krisnayanti Aditasari, S.M., M.MT.',
    mentorImage: krisnayanti,
  },
])

const articleList = ref([
  {
    image: articlePhoto1,
    title: 'Profesi Digital Marketing Beserta Prospek Karir & Gaji',
    review: 12,
    desc: 'Berbagai profesi digital marketing beserta prospek karir ada di dalam artikel ini, simak bagaimana memulai karir di digital marketing!',
  },
  {
    image: articlePhoto2,
    title: 'Business Analytics. Solusi Jitu Olah Data di Era 4.0',
    review: 4,
    desc: 'Business Analytics menjadi hal yang saat ini paling dibutuhkan oleh perusahaan di era sekarang.',
  },
  {
    image: articlePhoto3,
    title: 'Apa Itu Technopreneurship? Simak Tujuan Alasan dan Contohnya!!',
    review: 94,
    desc: 'Contoh technopreneurship yaitu Gojek, Tokopedia dan Ruangguru. Startup ini hasil rintisan dan inovasi anak bangsa yang mampu memberikan inovasi bermanfaat.',
  },
])
</script>

<template>
  <section class="my-24">
    <div class="md:container md:mx-auto px-7">
      <div class="text-center mx-auto max-w-[700px] mb-20">
        <h2 class="font-bold text-5xl">Layanan</h2>
        <h3 class="font-bold text-xl mt-5">Discover Your Path to Success with BizNext!</h3>
        <div class="mt-10">
          <p class="text-xl">BizNext akan membantu untuk mencapai tujuan-tujuan besar dalam Bisnis Digital. Mari
            bergabung
            dan mulailah langkah pertama menuju sukses!
          </p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-10">
        <div v-for="(item, index) in serviceList" :key="index"
          class="flex flex-col bg-biznext-tertiary shadow-sm rounded-xl p-5 lg:p-8 h-full relative">
          <div class="">
            <div class="relative bg-white border shadow-sm rounded-xl h-full">
              <img class="w-full h-full object-cover rounded-xl" :src="item.image" alt="Image Description">
              <div class="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
              <div class="absolute inset-0 flex items-end p-5">
                <div class="w-full">
                  <div class="block lg:flex items-center">
                    <div class="max-w-32">
                      <a href="/layanan/digital-marketing">
                        <h2 class="text-white font-bold text-2xl lg:text-3xl xl:text-4xl hover:underline">
                          {{ item.title }}
                        </h2>
                      </a>
                    </div>
                    <div class="ml-auto">
                      <h2 class="text-white font-bold text-3xl">{{ item.price }}</h2>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-3 flex-grow-1">
            <ul class="mt-4 mb-2">
              <li class="inline-block relative pe-4 text-sm text-[#818286] font-bold">
                <span class="flex items-center">
                  <Icon icon="ant-design:book-outlined" class="mr-2 text-lg" />
                  2 Modul
                </span>
              </li>
              <li class="inline-block relative pe-4 text-sm text-[#818286] font-bold">
                <span class="flex items-center">
                  <Icon icon="mdi:clock-outline" class="mr-2 text-lg" />
                  5 Hour
                </span>
              </li>
              <li class="inline-block relative pe-4 text-sm text-[#818286] font-bold">
                <span class="flex items-center">
                  <Icon icon="majesticons:book-open-line" class="mr-2 text-lg" />
                  7x Pertemuan
                </span>
              </li>
            </ul>
            <div class="">
              <h4 class="font-bold text-lg mb-1">{{ item.title }}</h4>
              <div class="flex items-center mb-3">
                <div>
                  <Icon v-for="item in 5" icon="noto-v1:star" class="inline-flex items-center text-xl mr-1.5" />
                </div>
                <div>
                  <span class="text-[#818286] text-sm font-bold mb-0">(Review)</span>
                </div>
              </div>
              <p class="text-md text-[#818286]"> {{ item.desc }}</p>
            </div>
            <div class="mt-5 mb-10">
              <h4 class="font-bold text-lg mb-1">Benefit</h4>
              <ul class="list-disc list-outside text-[#818286] px-5">
                <li>Tutor berpengalaman dengan level Lead/Manager/Head.</li>
                <li>Latihan dan praktik dengan membuat mini portofolio pada setiap live class.</li>
                <li>Terdapat sesi persiapan karir untuk persiapan berkas lamaran kerja </li>
              </ul>
            </div>
          </div>
          <div class="mt-auto mb-4">
            <div class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl py-3 px-4">
              <div class="flex items-center">
                <div class="flex-none w-12 h-12">
                  <img class="w-full h-full object-cover rounded-full" :src="item.mentorImage" alt="Image Description">
                </div>
                <div class="flex-1 pl-3">
                  <h4 class="font-bold text-base">{{ item.mentor }}</h4>
                  <p class="text-[#818286] text-sm">Dosen Digital Bisnis Telkom University Surabaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section class="my-24 lg:mt-40">
    <div class="md:container md:mx-auto px-7">
      <div class="section-title mb-10">
        <h2 class="font-bold text-2xl">Artikel</h2>
        <h3 class="font-normal text-xl mt-2">Biar otak nggak tegang, kami hadirkan bacaan yang asyik, menarik, dan penuh
          insights!</h3>
      </div>
      <div class="grid lg:grid-cols-3 gap-8">
        <div v-for="(item, index) in articleList" :key="index"
          class="flex flex-col bg-biznext-quaternary border shadow-md border-gray-300 rounded-[3.5rem]">
          <img class="w-full h-auto" :src="item.image" alt="Image Description">
          <div class="p-6">
            <div>
              <h3 class="text-lg font-bold text-gray-800">
                {{ item.title }}
              </h3>
              <p class="text-gray-500 font-bold">
                ({{ item.review }} Review)
              </p>
            </div>
            <hr class="border-gray-300 my-3 border">

            <p class="text-gray-400 font-semibold text-base">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>