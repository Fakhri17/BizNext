<script setup></script>

<template>
  <div class="mt-10 mb-20">
    <div class="md:container md:mx-auto px-4">
      <div class="logo mb-10">
        <img src="@/assets/images/biznext-logo.png" alt="">
      </div>
      <h1 class="font-bold text-5xl text-center mb-10">Rincian Transaksi</h1>
      <h2 class="font-bold text-2xl text-[#1E3344] text-center">Digital Marketing Bootcamp</h2>
      <div class="max-w-3xl block mx-auto">
        <div
          class="my-7 flex flex-col bg-gradient-to-bl from-[#D9E6EE] via-[#F5F8FA] to-[#D9E6EE] shadow-lg rounded-3xl border border-gray-300 p-4 md:p-5">
          <div class="flex flex-wrap items-center">
            <div class="flex items-center">
              <img src="@/assets/images/payment/profile-pic.png" alt="">
              <div class="ml-2">
                <p class="text-[#2A465B] font-bold text-lg">DIGITAL MARKETING </p>
                <p class="text-[#2A465B] font-bold text-base">Selesai</p>
              </div>
            </div>

          </div>
        </div>
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <tbody>
                    <tr>
                      <td class="px-4 py-2 whitespace-nowrap text-base font-bold text-[#818286]">Metode Pembayaran</td>

                      <td class="px-4 py-2 whitespace-nowrap text-end text-base font-bold">
                        <div class="flex items-center">
                          <img src="@/assets/images/payment/bca-virtual.png" alt="" class="block ml-auto w-14">
                          <span class="font-bold text-[#818286]">Virtual Account</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 whitespace-nowrap text-base font-bold text-[#818286]">Status</td>
                      <td class="px-4 py-2 whitespace-nowrap text-end text-base font-bold text-[#167000]">
                        Selesai
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 whitespace-nowrap text-base font-bold text-[#818286]">Waktu</td>
                      <td class="px-4 py-2 whitespace-nowrap text-end text-base font-bold text-[#818286]">
                        23.00 WIB
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 whitespace-nowrap text-base font-bold text-[#818286]">Tanggal</td>
                      <td class="px-4 py-2 whitespace-nowrap text-end text-base font-bold text-[#818286]">
                        23 Oktober 2023
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 whitespace-nowrap text-base font-bold text-[#818286]">ID Transaksi</td>
                      <td class="px-4 py-2 whitespace-nowrap text-end text-base font-bold text-[#818286]">
                        <div class="inline-flex items-center">
                          <span>0220220727091319EXDiz7... </span>
                          <Icon icon="tabler:copy" class="text-black text-2xl ml-1" />
                        </div>

                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 whitespace-nowrap text-base font-bold text-[#818286]">Total </td>
                      <td class="px-4 py-2 whitespace-nowrap text-end text-base font-bold text-[#818286]">
                        Rp 125.000
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-between my-10">
          <a href="/"
            class="ml-auto py-2 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparen bg-biznext-primary-dark text-white hover:bg-biznext-primary disabled:opacity-50 disabled:pointer-events-none">
            Mulai Sekarang
          </a>

        </div>
      </div>
    </div>
  </div>
</template>