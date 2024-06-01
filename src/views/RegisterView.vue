<script setup>
import { ref } from 'vue';
const showPassword = ref(false);

const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};
</script>

<template>
	<div class="grid lg:grid-cols-12 overflow-hidden items-center">
		<div class="lg:col-span-6 xl:col-span-5 hidden lg:block">
			<div class="p-10 bg-biznext-secondary min-h-screen relative rounded-tr-[4rem]">
				<div class="mb-10">
					<img class="" src="@/assets/images/biznext-1.png" alt="Logo" />
				</div>
				<div class="text mb-10">
					<h2 class="text-white lg:text-4xl xl:text-5xl font-semibold mb-5">Selamat datang di NYRI</h2>
					<p class="text-white lg:text-4xl xl:text-5xl font-semibold mb-3">Bergabung</p>
					<p class="text-white lg:text-4xl xl:text-5xl font-semibold mb-3">Sekarang !</p>
				</div>
				<div class="flex flex-col justify-center items-center">
					<img class="block mx-auto" src="@/assets/images/side-picture.png" alt="Logo" />
				</div>
				<div class="absolute bottom-0 right-[-10%]">
					<img class="" src="@/assets/images/lisa-register.png" alt="Logo" />
				</div>



			</div>
		</div>
		<div class="col-span-12 lg:col-span-6 xl:col-span-7">
			<div class="py-20 md:container md:mx-auto xl:px-44 px-12">
				<h1 class="text-black text-2xl lg:text-4xl xl:text-5xl font-semibold font-poppins text-center">Buat Akun
					Baru
				</h1>
				<form action="" class="my-10">
					<div class="max-w-full mb-10">
						<label for="input-label" class="block text-base font-medium mb-2">Nama Lengkap</label>
						<input type="text" id="input-label"
							class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
							placeholder="nama">
					</div>
					<div class="max-w-full mb-10">
						<label for="input-label" class="block text-base font-medium mb-2">Email</label>
						<input type="email" id="input-label"
							class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
							placeholder="you@site.com">
					</div>
					<!-- Form Group -->
					<div class="max-w-full mb-10">
						<label class="block text-sm mb-2">Password</label>
						<div class="relative">
							<input :type="showPassword ? 'text' : 'password'"
								class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
								placeholder="Enter password">
							<button type="button" class="absolute top-0 end-0 p-3.5 rounded-e-md" @click="togglePasswordVisibility">
								<Icon class="text-xl" :icon="showPassword ? 'mdi:eye' : 'mdi:eye-off'" />
							</button>
						</div>
					</div>
					<!-- End Form Group -->
					<div class="flex items-center mb-10">
						<div class="flex">
							<input id="remember-me" name="remember-me" type="checkbox"
								class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 ">
						</div>
						<div class="ms-3">
							<label for="remember-me" class="text-base text-dark">Saya setuju dengan yang telah
								ditetapkan<span class="text-[#1E3344] decoration-2 font-semibold"> Syarat dan
									Ketentuan serta kebijakan privasi</span></label>
						</div>
					</div>
					<button type="submit"
						class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-biznext-primary text-white disabled:opacity-50 disabled:pointer-events-none">
						Daftar
					</button>
				</form>
				<div class="text-center">
					<p class="text-dark mb-2">Sudah punya akun? <a href="/masuk"
							class="text-biznext-primary font-semibold">Masuk</a>
					</p>
					<a href="/" class="text-biznext-primary font-semibold hover:underline">Back to home</a>
				</div>
			</div>
		</div>

	</div>
</template>