<script setup>
import { ref } from 'vue'
import irmaPhoto from '@/assets/images/about/irma-photo.png'
import shaulaPhoto from '@/assets/images/about/shaula-photo.png'
import nadaPhoto from '@/assets/images/about/nada-photo.png'
import mentariPhoto from '@/assets/images/about/mentari-photo.png'
import aryaPhoto from '@/assets/images/about/arya-photo.png'

const listTeam = ref([
  {
    photo: irmaPhoto,
    title: 'Irma Jauzalia',
    jobs: 'Founder',
  },
  {
    photo: shaulaPhoto,
    title: 'Shaula Salsabila',
    jobs: 'Team Development',
  },
  {
    photo: nadaPhoto,
    title: 'Nada Alvi',
    jobs: 'Team Development',
  },
  {
    photo: mentariPhoto,
    title: 'Mentari Anugrah',
    jobs: 'Team Development',
  },
  {
    photo: aryaPhoto,
    title: 'Kadek Arya',
    jobs: 'Team Development',
  },
])
</script>

<template>
  <section class="my-24">
    <div class="md:container md:mx-auto px-4">
      <div class="relative mx-auto mt-20 mb-14">
        <img class="w-full h-52 object-cover rounded-lg"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*8ipc84JyDB3jpl0tvljkLw.jpeg" alt="Random image">
        <div class="absolute inset-0 bg-white opacity-50 rounded-lg"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="text-black text-5xl font-bold">Tentang Kami </h2>
        </div>
      </div>
      <h1 class="text-center text-biznext-primary font-bold text-3xl">Yuk kenal BizNext lebih jauh dan temukan tim kami
        yang siap membimbing Anda melangkah maju dalam dunia bisnis
        digital yang dinamis</h1>
    </div>
  </section>
  <section class="my-24">
    <div class="md:container md:mx-auto px-4">
      <div class="text-center mx-auto max-w-[700px] mb-20">
        <h2 class="font-bold text-3xl text-biznext-primary-dark">VISI</h2>
        <div class="mt-10">
          <h3 class="font-bold text-2xl mb-5">Membangun Kesiapan Karier</h3>
          <p class="text-lg">Menjadi pionir dalam pelatihan karier yang terintegrasi untuk mahasiswa bisnis digital
            dengan pembelajaran
            yang terintegrasi sehingga para lulusan siap menghadapi tantangan industri bisnis digital
          </p>
        </div>
      </div>
      <div>
        <h2 class="font-bold text-3xl text-biznext-primary-dark text-center">MISI</h2>
        <div class="grid lg:grid-cols-2 gap-10 mt-16">
          <div class="text-center px-12">
            <h3 class="font-bold text-2xl mb-5">Membangun Kesiapan Karier</h3>
            <p class="text-lg">Menjadi platform yang terintegrasi menjadi satu dalam memberikan pelatihan karier baik
              dari segi teori maupun praktik tentang profil lulusan mahasiswa bisnis digital

            </p>
          </div>
          <div class="text-center px-12">
            <h3 class="font-bold text-2xl mb-5">Membangun Kesiapan Karier</h3>
            <p class="text-lg">ilmu dan pelatihan di BizNext dirancang untuk menghubungkan mahasiswa dengan para ahli
              atau
              sesama mahasiswa.Koneksi ini menjadi landasan sinergi yang meningkatkan daya saing di era digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="my-24 mt-40">
    <div class="md:container md:mx-auto px-4">
      <div class="text-center mx-auto max-w-[650px] mb-20">
        <h2 class="font-bold text-3xl text-biznext-primary-dark">TIM KAMI</h2>
        <div class="mt-10">
          <p class="text-2xl">BizNext memiliki tim yang diisi oleh Mahasiswa Bisnis Digital Telkom University Surabaya.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4 justify-center">
        <div v-for="(item, index) in listTeam" :key="index" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
          <div class="flex flex-col bg-[#E3E3E3] shadow-sm rounded-xl p-8 h-full">
            <img class="size-full block mx-auto" :src="item.photo" alt="Photos">
            <div class="mt-3 text-center">
              <h3 class="font-bold text-2xl mb-1">{{ item.title }}</h3>
              <p class="text-lg">{{ item.jobs }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="my-24 mt-40">
    <div class="md:container md:mx-auto px-4">
      <div class="inline-block rounded-full bg-biznext-tertiary py-2 px-6">
        <h2 class="text-biznext-primary uppercase font-bold text-2xl">Tentang Program Bootcamp</h2>
      </div>
      <div class="grid lg:grid-cols-3 gap-10 items-center mt-5">
        <div class="lg:col-span-2">
          <div class="flex flex-wrap items-center mb-10">
            <h3 class="font-bold text-lg lg:text-2xl">Program Intensif</h3>
            <img class="ml-3 h-10" src="@/assets/images/biznext-logo.png" alt="">
          </div>
          <div class="lg:pr-20">
            <p class="mb-6 text-lg">BizNext hadir sebagai wadah pembelajaran intensif bagi mahasiswa bisnis digital.
              Meskipun
              berfokus pada
              mahasiswa bisnis digital Telkom University Surabaya, kami dengan tangan terbuka menyambut mahasiswa bisnis
              digital dari seluruh Indonesia.</p>

            <p class="mb-6 text-lg">BizNext menawarkan pengalaman belajar yang mendalam dan intensif melalui Bootcamp
              selama
              5 hari
              kerja setiap
              minggunya dipandu oleh mentor berpengalaman dalam industri. selain itu peserta akan sertifikat resmi serta
              kesempatan untuk bergabung dengan komunitas yang bersemangat dalam industri bisnis digital.</p>

            <p class="mb-6 text-lg">
              Bergabunglah dengan BizNext, tempat di mana Anda bisa mendapatkan pengetahuan, keterampilan, dan jaringan
              yang
              Anda butuhkan untuk meraih kesuksesan dalam karier bisnis digital Anda.</p>
          </div>

        </div>
        <div>
          <img src="@/assets/images/about/model-man-stand.png" alt="">
        </div>
      </div>

    </div>
  </section>
</template>