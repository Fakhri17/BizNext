<script setup>
import { ref } from 'vue';
const showPassword = ref(false);

const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};
</script>

<template>
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<div class="grid lg:grid-cols-2 items-center gap-32">
			<div class="hidden lg:block">
				<img class="block mx-auto" src=" @/assets/images/biznext-2.png" alt="Logo" />
			</div>
			<div>
				<div class="w-full rounded-lg bg-biznext-secondary py-2 px-5">
					<h2 class="text-center font-extrabold text-white text-2xl">Sebelum lanjut, Yuk Login Dulu!</h2>
				</div>
				<div class="mt-3 bg-white border border-gray-200 rounded-xl shadow-lg">
					<div class="px-10 py-20">
						<div class="text-center">
							<h1 class="block text-2xl font-normal mb-2">NYRI for Business Digital</h1>
							<h1 class="block text-2xl font-bold">Sign In</h1>
						</div>

						<div class="mt-5">
							<!-- Form -->
							<form>
								<div class="grid gap-y-4">
									<!-- Form Group -->
									<div>
										<div class="relative mb-5">
											<input type="text"
												class="py-3 px-4 block w-full border bg-biznext-tertiary border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
												required placeholder="Username">
										</div>
										<div class="relative mb-5">
											<input :type="showPassword ? 'text' : 'password'"
												class="py-3 px-4 block w-full border bg-biznext-tertiary border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
												required placeholder="Password">
											<button type="button" class="absolute top-0 end-0 p-3.5 rounded-e-md"
												@click="togglePasswordVisibility">
												<Icon class="text-xl" :icon="showPassword ? 'mdi:eye' : 'mdi:eye-off'" />
											</button>
										</div>
										<div class="flex items-center mb-5">
											<div class="flex">
												<input id="remember-me" name="remember-me" type="checkbox"
													class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 ">
											</div>
											<div class="ms-3">
												<label for="remember-me" class="text-base text-dark">Remember me</label>
											</div>
										</div>
									</div>
									<!-- End Form Group -->

									<button type="submit"
										class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-biznext-primary text-white disabled:opacity-50 disabled:pointer-events-none">
										Login
									</button>
									<a href="/" class="text-center text-sm hover:underline mb-5">Back to home</a>
									<a href="/daftar" class="text-center text-lg hover:underline mb-5">Sign Up</a>
								</div>
							</form>
							<!-- End Form -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>