<script setup></script>

<template>
  <div class="mt-10 mb-20">
    <div class="md:container md:mx-auto px-7">
      <div class="logo mb-10">
        <img src="@/assets/images/biznext-logo.png" alt="">
      </div>
      <h1 class="font-bold text-5xl text-center">Pembayaran Selesai</h1>
      <!-- Stepper -->
      <ul class="relative flex flex-row gap-x-2 max-w-md mx-auto mt-7 mb-12">
        <!-- Item -->
        <li class="shrink basis-0 flex-1 group">
          <div class="min-h-7 min-w-44 w-full inline-flex items-center text-xs align-middle">
            <span
              class="flex text-base size-11 justify-center items-center flex-shrink-0 bg-[#0162DD] font-medium text-black rounded-full">
              <Icon icon="material-symbols:check" class="text-2xl text-white" />
            </span>
            <div class="ms-2 w-full h-1 flex-1 bg-[#A1AEBE] group-last:hidden"></div>
          </div>
          <div class="mt-3">
            <span class="block text-sm font-bold text-[#0162DD]">
              Pesan
            </span>
          </div>
        </li>
        <li class="shrink basis-0 flex-1 group">
          <div class="min-h-7 min-w-44 w-full inline-flex items-center text-xs align-middle">
            <span
              class="flex text-base size-11 justify-center items-center flex-shrink-0 bg-[#0162DD] font-medium text-black rounded-full">
              <Icon icon="material-symbols:check" class="text-2xl text-white" />
            </span>
            <div class="ms-2 w-full h-1 flex-1 bg-[#A1AEBE] group-last:hidden"></div>
          </div>
          <div class="mt-3">
            <span class="block text-sm font-bold text-[#0162DD]">
              Pembayaran
            </span>
          </div>
        </li>
        <li class="shrink basis-0 flex-1 group">
          <div class="min-h-7 min-w-44 w-full inline-flex items-center text-xs align-middle">
            <span
              class="flex text-base size-11 justify-center items-center flex-shrink-0 bg-[#0162DD] font-medium text-black rounded-full">
              <Icon icon="material-symbols:check" class="text-2xl text-white" />
            </span>
            <div class="ms-2 w-full h-1 flex-1 bg-[#A1AEBE] group-last:hidden"></div>
          </div>
          <div class="mt-3">
            <span class="block text-sm font-bold text-[#0162DD]">
              Selesai
            </span>
          </div>
        </li>

      </ul>
      <!-- End Stepper -->

      <div class="text-center mb-5">
        <img class="block mx-auto" src="@/assets/images/payment/succes-message.png" alt="">
        <h2 class="font-bold text-3xl">Digital Marketing Bootcamp</h2>
      </div>

      <div class="max-w-3xl block mx-auto">
        <hr class="border border-[#818286] border-dashed  my-4">
        <h3 class="font-bold text-[#818286] mb-5 text-xl">Ringkasan Layanan Kami</h3>
        <div>
          <div
            class="flex flex-col bg-gradient-to-bl from-[#D9E6EE] via-[#F5F8FA] to-[#D9E6EE] shadow-lg rounded-3xl border border-gray-300 p-4 md:p-5">
            <div class="flex flex-wrap items-center">
              <div class="flex items-center">
                <img src="@/assets/images/payment/profile-pic.png" alt="">
                <div class="ml-2">
                  <p class="text-[#2A465B] font-bold text-lg">DIGITAL MARKETING </p>
                  <p class="text-[#2A465B] font-bold text-base">Selesai</p>
                </div>
              </div>
              <div class="ml-auto">
                <p class="text-[#2A465B] font-bold">Rp125.000</p>
                <p class="text-[#2A465B] font-bold">23 Oktober 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-between my-10">
          <a href="/pembayaran/rincian-transaksi"
            class="py-2 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-gray-600 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none">
            Rincian Transaksi
          </a>
          <a href="/"
            class="py-2 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparen bg-biznext-primary-dark text-white hover:bg-biznext-primary disabled:opacity-50 disabled:pointer-events-none">
            Mulai Sekarang
          </a>
        </div>
        <div class="text-center my-20">
          <h3 class="font-bold text-4xl mb-2">Hubungi Kami</h3>
          <p class="text-lg font-normal mb-5">Punya pertanyaan? Kami akan senang mendengarnya dari Anda</p>

          <a href="https://api.whatsapp.com/send?phone=628970632441" target="_blank" type="button"
            class="py-2 px-7 inline-flex items-center gap-x-2 text-lg font-medium rounded-full border border-[#1E3344] bg-white text-[#1E3344] shadow-sm hover:bg-[#128c7e] hover:text-white disabled:opacity-50 disabled:pointer-events-none">
            <Icon icon="ic:baseline-whatsapp" class="text-3xl" />
            Kontak WhatsApp

          </a>
        </div>
      </div>
    </div>
  </div>
</template>