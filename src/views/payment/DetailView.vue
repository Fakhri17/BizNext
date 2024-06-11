<script setup>
import bcaVirtual from '@/assets/images/payment/bca-virtual.png'
</script>

<template>
  <div class="mt-10 mb-20">
    <div class="md:container md:mx-auto px-7">
      <div class="logo mb-10">
        <img src="@/assets/images/biznext-logo.png" alt="">
      </div>
      <div class="">
        <h1 class="font-bold text-5xl text-center">Detail Transaksi</h1>
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
                class="flex text-base size-11 justify-center items-center flex-shrink-0 bg-white font-medium text-black border-4 border-[#A1AEBE] rounded-full">
                1
              </span>
              <div class="ms-2 w-full h-1 flex-1 bg-[#A1AEBE] group-last:hidden"></div>
            </div>
            <div class="mt-3">
              <span class="block text-sm font-medium text-gray-800">
                Selesai
              </span>
            </div>
          </li>




        </ul>
        <!-- End Stepper -->

        <div class="my-20">
          <h2 class="font-normal text-3xl mb-2">Invoice Pembayaran</h2>
          <hr class="border-black">
          <div class="my-5">
            <p class="text-[#818286] font-bold mb-5">Detail Tagihan</p>
            <div class="pl-36">
              <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                  <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="overflow-hidden">
                      <table class="min-w-full">

                        <tbody class="">
                          <tr>
                            <td class="py-1 whitespace-nowrap text-base font-bold text-[#818286]">Nominal Transaksi
                            </td>
                            <td class="py-1 whitespace-nowrap text-end text-base font-bold text-[#4F86AD]">Rp
                              125.000</td>
                          </tr>
                          <tr>
                            <td class="py-1 whitespace-nowrap text-base font-bold text-[#818286]">Waktu Transaksi
                            </td>
                            <td class="py-1 whitespace-nowrap text-end text-base font-bold text-[#4F86AD]">
                              Rabu, 18 Oktober 2023</td>
                          </tr>
                          <tr>
                            <td class="py-1 whitespace-nowrap text-base font-bold text-[#818286]">
                            </td>
                            <td class="py-1 whitespace-nowrap text-end text-base font-bold text-[#4F86AD]">
                              23.00 WIB</td>
                          </tr>


                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="border-black mb-10">
            <p class="text-[#818286] font-bold mb-5">Detail Rencana </p>
            <div class="pl-36">
              <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                  <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="overflow-hidden">
                      <table class="min-w-full">

                        <tbody class="">
                          <tr class="">
                            <td class="py-1 whitespace-nowrap text-base font-bold text-black">Bootcamp yang dipilih
                            </td>
                            <td class="pt-1 pb-5 whitespace-nowrap text-end text-base font-bold text-black">
                              Digital Marketing
                            </td>
                          </tr>
                          <tr class="border border-black">
                          </tr>
                          <tr>
                            <td class="py-1 whitespace-nowrap text-base font-bold text-black">Your Payment
                            </td>
                            <td class="py-1 whitespace-nowrap text-end text-base font-bold text-black">
                              <img class="block ml-auto" :src="bcaVirtual" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td class="py-1 whitespace-nowrap text-base font-bold text-black">Nomor Virtual Account
                            </td>
                            <td class="py-1 whitespace-nowrap text-end text-base font-bold text-black">8245963201442563
                            </td>
                          </tr>



                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-between my-10">
            <a href="/"
              class="py-2 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none">
              Batalkan Bootcamp
            </a>
            <a href="/pembayaran/berhasil"
              class="py-2 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparen bg-biznext-primary-dark text-white hover:bg-biznext-primary disabled:opacity-50 disabled:pointer-events-none">
              Lanjutkan
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>