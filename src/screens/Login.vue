<script setup>
import { EnvelopeIcon, KeyIcon } from '@heroicons/vue/16/solid';
const year = /\d{4}/.exec(Date())[0]
</script>

<template>
  <div class="bg-linear-to-br from-rose-500 to-rose-400">
    <div class="max-w-md mx-auto p-4 h-screen flex flex-col justify-around">

      <div class="text-center mb-6">
        <h3 class="text-white text-4xl">Foodi</h3>
        <p class="text-white">Grab your favorite food</p>
      </div>

      <div class="flex flex-col">
        <div>
          <label for="input-group-1" class="block mb-2 text-sm font-medium text-white">Email</label>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <EnvelopeIcon class="w-4 h-4 text-gray-500 " />
            </div>
            <input type="email" id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full ps-10 p-2.5 "
              placeholder="name@gmail.com">
          </div>
        </div>
        <div>
          <label for="input-group-2" class="block mb-2 text-sm font-medium text-white">Password</label>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <KeyIcon class="w-4 h-4 text-gray-500 " />
            </div>
            <input type="password" id="input-group-2"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full ps-10 p-2.5 "
              placeholder="password">
          </div>
        </div>
        <RouterLink to="/"
          class="text-rose-500 bg-white text-center font-medium rounded-full text-sm px-5 py-2.5 mb-2 cursor-pointer hover:bg-gray-100">
          Login</RouterLink>
        <a href="#" class="text-white text-center d-bl">Forgot password?</a>
      </div>


      <p class="text-white text-center mt-6">Copyright &copy; {{ year }} By Nostra Solution</p>
    </div>
  </div>
</template>