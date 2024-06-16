<script setup>
import { ref } from 'vue'
</script>


<template>
  <div class="my-10">
    <div class="md:container md:mx-auto px-4">
      <div class="logo mb-10">
        <img src="@/assets/images/biznext-logo.png" alt="">
      </div>
      <div class="grid lg:grid-cols-2 gap-32">
        <div>
          <h2 class="text-[#404040] font-bold text-xl mb-5">Daftarkan Diri Anda Disini!</h2>
          <form action="">
            <div class="mb-5">
              <label for="input-label" class="block text-sm font-normal mb-2">Nama Lengkap</label>
              <input type="text" id="input-label"
                class="py-3 px-4 block w-full border-gray-200 bg-biznext-tertiary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Masukkan Nama">
            </div>
            <div class="mb-5">
              <label for="input-label" class="block text-sm font-normal mb-2">Tanggal Lahir</label>
              <input type="date" id="input-label"
                class="py-3 px-4 block w-full border-gray-200 bg-biznext-tertiary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
            </div>
            <div class="mb-5">
              <label for="input-label" class="block text-sm font-normal mb-2">Email</label>
              <input type="email" id="input-label"
                class="py-3 px-4 block w-full border-gray-200 bg-biznext-tertiary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="your@email.com">
            </div>
            <div class="mb-5">
              <label for="input-label" class="block text-sm font-normal mb-2">Nomor Whatsapp</label>
              <input type="text" id="input-label"
                class="py-3 px-4 block w-full border-gray-200 bg-biznext-tertiary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="08xxxxxxxx">
            </div>
            <div class="mb-5">
              <label for="input-label" class="block text-sm font-normal mb-2">Pekerjaan</label>
              <label for="hs-radio-in-form"
                class="flex p-3 w-full mb-3 bg-biznext-tertiary border border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
                <input type="radio" name="hs-radio-in-form"
                  class="shrink-0 mt-0.5 border-gray-200 rounded-full  text-blue-600 focus:ring-biznext-tertiary disabled:opacity-50 disabled:pointer-events-none "
                  id="hs-radio-in-form">
                <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">Mahasiswa</span>
              </label>
              <label for="hs-radio-in-form"
                class="flex p-3 w-full mb-3 bg-biznext-tertiary border border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
                <input type="radio" name="hs-radio-in-form"
                  class="shrink-0 mt-0.5 border-gray-200 rounded-full  text-blue-600 focus:ring-biznext-tertiary disabled:opacity-50 disabled:pointer-events-none "
                  id="hs-radio-in-form">
                <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">Freshgraduate</span>
              </label>
            </div>
            <div class="flex items-center mb-10">
              <div class="flex"><input id="remember-me" name="remember-me" type="checkbox"
                  class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"></div>
              <div class="ms-3"><label for="remember-me" class="text-base text-dark">Saya setuju dengan yang telah
                  ditetapkan<span class="text-[#1E3344] decoration-2 font-semibold"> Syarat dan Ketentuan serta
                    kebijakan privasi</span></label></div>
            </div>
            <a href="/pembayaran/pilih-pembayaran" type="submit"
              class="w-full py-2 px-4 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-biznext-primary text-white disabled:opacity-50 disabled:pointer-events-none">
              Daftar </a>
          </form>
        </div>
        <div>
          <div
            class="flex flex-col bg-biznext-quaternary shadow-lg border border-biznext-tertiary rounded-xl p-5 lg:p-8 h-full relative">
            <div class="mb-7">
              <img class="w-full h-full object-cover rounded-xl"
                src="@/assets/images/digital-marketing-adalah-1200x675 2.png" alt="Image Description">
            </div>
            <div class="content">
              <h2 class="font-normal text-xl mb-5">Digital Marketing Bootcamp</h2>
              <div class="flex flex-wrap mb-2">
                <div class="flex flex-wrap mr-5 mb-5">
                  <div class="flex bg-white rounded-xl border border-black shadow-lg overflow-hidden">
                    <div class="px-7 text-center md:px-10 py-3 hover:bg-primary-400 border-r border-black">
                      <p class="mb-0 font-bold text-base">MODUL</p>
                      <p class="font-normal">5</p>
                    </div>
                    <div class="px-7 text-center md:px-10 py-3 hover:bg-primary-400">
                      <p class="mb-0 font-bold text-base">LEVEL</p>
                      <p class="font-normal">Pemula</p>
                    </div>
                  </div>

                </div>
              </div>

              <div class="">
                <ul class="list-none list-inside font-bold">
                  <li class="mb-2.5">Pengguna : 5.432</li>
                  <li class="mb-2.5">Bahasa : Indonesia</li>
                  <li class="mb-2.5">Terjemahan : English, Indonesia, Japan, and 4+ more</li>
                  <li class="mb-2.5">Modul : 5 Kursus</li>
                  <li class="mb-2.5">Durasi : 1 bulan</li>
                  <li class="mb-2.5">Sertifikat : Setelah menyelesaikan kursus</li>
                  <li class="mb-2.5">Tempat : Online</li>
                  <li class="mb-2.5">Harga : Rp 125.000,-</li>

                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>