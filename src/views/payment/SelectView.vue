<script setup>
import { ref } from 'vue'
import bca from '@/assets/images/payment/bca.png'
import bri from '@/assets/images/payment/bri.png'
import mandiri from '@/assets/images/payment/mandiri.png'
import bni from '@/assets/images/payment/bni.png'
import jatim from '@/assets/images/payment/jatim.png'
import cimb from '@/assets/images/payment/cimb.png'
import bcaVirtual from '@/assets/images/payment/bca-virtual.png'
import bniVirtual from '@/assets/images/payment/bni-virtual.png'
import briVirtual from '@/assets/images/payment/bri-virtual.png'
import mandiriVirtual from '@/assets/images/payment/mandiri-virtual.png'
import dana from '@/assets/images/payment/dana.png'
import ovo from '@/assets/images/payment/ovo.png'
import gopay from '@/assets/images/payment/gopay.png'
import linkaja from '@/assets/images/payment/linkaja.png'
import shopeepay from '@/assets/images/payment/shopeepay.png'


const bankTransfer = ([
  {
    title: 'BCA',
    image: bca,
  },
  {
    title: 'BRI',
    image: bri,
  },
  {
    title: 'Mandiri',
    image: mandiri,
  },
  {
    title: 'BNI',
    image: bni,
  },
  {
    title: 'Jatim',
    image: jatim,
  },
  {
    title: 'CIMB',
    image: cimb,
  },
])

const bankVirtual = ([
  {
    title: 'BCA Virtual Account',
    image: bcaVirtual,
  },
  {
    title: 'BNI Virtual Account',
    image: bniVirtual,
  },
  {
    title: 'BRI Virtual Account',
    image: briVirtual,
  },
  {
    title: 'Mandiri Virtual Account',
    image: mandiriVirtual,
  },
])

const ewallet = ([
  {
    title: 'DANA',
    image: dana,
  },
  {
    title: 'OVO',
    image: ovo,
  },
  {
    title: 'GOPAY',
    image: gopay,
  },
  {
    title: 'LinkAja',
    image: linkaja,
  },
  {
    title: 'ShopeePay',
    image: shopeepay,
  },
])
</script>

<template>
  <div class="mt-10 mb-20">
    <div class="md:container md:mx-auto px-7">
      <div class="logo mb-10">
        <img src="@/assets/images/biznext-logo.png" alt="">
      </div>
      <div class="">
        <h1 class="font-bold text-5xl text-center">Pilih Metode Pembayaran</h1>
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
                class="flex text-base size-11 justify-center items-center flex-shrink-0 bg-white font-medium text-black border-4 border-[#A1AEBE] rounded-full">
                1
              </span>
              <div class="ms-2 w-full h-1 flex-1 bg-[#A1AEBE] group-last:hidden"></div>
            </div>
            <div class="mt-3">
              <span class="block text-sm font-medium text-gray-800">
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

        <div class="grid lg:grid-cols-3 gap-10">
          <div class="bg-biznext-quaternary shadow py-7">
            <div class="flex items-center justify-center text-2xl">
              <Icon icon="mdi:bank" class="text-4xl" />
              <h2 class="font-bold ms-3">BANK TRANSFER</h2>
            </div>
            <hr class="my-5 border-[#818286]">
            <div class="flex flex-col">
              <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <tbody class="divide-y-2 divide-gray-200">
                        <tr v-for="(item, index) in bankTransfer" :key="index">
                          <td class="px-2.5 py-4 whitespace-nowrap">
                            <img :src="item.image" alt="" class="w-12">
                          </td>
                          <td class="px-2.5 py-4 whitespace-nowrap text-base text-black">
                            <a href="/pembayaran/detail">
                              Bank {{ item.title }}
                            </a>
                          </td>
                          <td class="px-2.5 py-4 whitespace-nowrap text-black">
                            <Icon icon="material-symbols-light:chevron-right" class="text-3xl" />
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="bg-biznext-quaternary shadow py-7">
            <div class="flex items-center justify-center text-2xl">
              <Icon icon="tabler:device-mobile-dollar" class="text-4xl" />
              <h2 class="font-bold ms-3">VIRTUAL ACCOUNT</h2>
            </div>
            <hr class="my-5 border-[#818286]">
            <div class="flex flex-col">
              <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <tbody class="divide-y-2 divide-gray-200">
                        <tr v-for="(item, index) in bankVirtual" :key="index">
                          <td class="px-2.5 py-4 whitespace-nowrap">
                            <img :src="item.image" alt="" class="w-12">
                          </td>
                          <td class="px-2.5 py-4 whitespace-nowrap text-base text-black">
                            <a href="/pembayaran/detail">
                              {{ item.title }}
                            </a>
                          </td>
                          <td class="py-4 whitespace-nowrap text-black">
                            <a href="/pembayaran/detail">
                              <Icon icon="material-symbols-light:chevron-right" class="text-3xl" />
                            </a>

                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="bg-biznext-quaternary shadow py-7">
            <div class="flex items-center justify-center text-2xl">
              <Icon icon="mdi:bank" class="text-4xl" />
              <h2 class="font-bold ms-3">BANK TRANSFER</h2>
            </div>
            <hr class="my-5 border-[#818286]">
            <div class="flex flex-col">
              <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <tbody class="divide-y-2 divide-gray-200">
                        <tr v-for="(item, index) in ewallet" :key="index">
                          <td class="px-2.5 py-4 whitespace-nowrap">
                            <img :src="item.image" alt="" class="w-12">
                          </td>
                          <td class="px-2.5 py-4 whitespace-nowrap text-base text-black">
                            <a href="/pembayaran/detail">
                              {{ item.title }}
                            </a>
                          </td>
                          <td class="px-2.5 py-4 whitespace-nowrap text-black">
                            <Icon icon="material-symbols-light:chevron-right" class="text-3xl" />
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
      </div>
    </div>
  </div>
</template>