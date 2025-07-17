<script setup>
import { AdjustmentsHorizontalIcon, ChatBubbleBottomCenterTextIcon, ChevronLeftIcon, EnvelopeIcon, HomeIcon, KeyIcon, MagnifyingGlassIcon, MapIcon, MapPinIcon, MinusIcon, PlusIcon, UserIcon } from '@heroicons/vue/16/solid';

const items = [
  {
    id: 1,
    name: 'Original Salad',
    description: 'Lovy Food',
    price: 8,
    image: 'https://placehold.co/20x20'
  },
  {
    id: 2,
    name: 'Original Salad',
    description: 'Lovy Food',
    price: 8,
    image: 'https://placehold.co/20x20'
  },
  {
    id: 3,
    name: 'Original Salad',
    description: 'Lovy Food',
    price: 8,
    image: 'https://placehold.co/20x20'
  },
  {
    id: 4,
    name: 'Original Salad',
    description: 'Lovy Food',
    price: 8,
    image: 'https://placehold.co/20x20'
  },
  {
    id: 5,
    name: 'Original Salad',
    description: 'Lovy Food',
    price: 8,
    image: 'https://placehold.co/20x20'
  },
  {
    id: 6,
    name: 'Original Salad',
    description: 'Lovy Food',
    price: 8,
    image: 'https://placehold.co/20x20'
  },
  {
    id: 7,
    name: 'Original Salad',
    description: 'Lovy Food',
    price: 8,
    image: 'https://placehold.co/20x20'
  },
  {
    id: 8,
    name: 'Original Salad',
    description: 'Lovy Food',
    price: 8,
    image: 'https://placehold.co/20x20'
  },
  {
    id: 9,
    name: 'Original Salad',
    description: 'Lovy Food',
    price: 8,
    image: 'https://placehold.co/20x20'
  },
  {
    id: 10,
    name: 'Original Salad',
    description: 'Lovy Food',
    price: 8,
    image: 'https://placehold.co/20x20'
  },
];
</script>

<template>
  <div class="bg-white mx-auto p-4 max-w-sm h-screen flex flex-col shadow-lg gap-8">
    <div class="flex gap-4 items-center">
      <RouterLink to="/">
        <ChevronLeftIcon class="w-8 h-8 p-1 text-rose-400 cursor-pointer bg-rose-100 rounded-md" />
      </RouterLink>
      <h3 class="text-lg font-semibold">Order Details</h3>
    </div>

    <div class="flex items-center mx-auto w-full">
      <div class="relative w-full">
        <input type="text" class="bg-gray-100 text-gray-900 text-sm rounded-full block w-full ps-5 pe-10 p-2.5"
          placeholder="Search..." />
        <button
          class="absolute inset-y-0 end-0 flex items-center pe-5 cursor-pointer text-gray-500 hover:text-rose-500">
          <MagnifyingGlassIcon class="w-4 h-4" />
        </button>
      </div>

      <button type="submit"
        class="p-2.5 ms-2 text-sm font-medium text-rose-400 bg-rose-100 rounded-lg cursor-pointer hover:bg-rose-200">
        <AdjustmentsHorizontalIcon class="w-4 h-4" />
      </button>
    </div>

    <div class="flex flex-col gap-4 overflow-y-auto grow">
      <div v-for="item in items" :key="item.id"
        class="flex justify-between items-center bg-white shadow p-2 rounded-lg">
        <div class="flex gap-4 items-center">
          <img :src="item.image" alt="placeholder" class="w-15 h-15 object-cover rounded-lg" />
          <div>
            <h6 class="font-semibold">{{ item.name }}</h6>
            <p class="text-gray-500 text-sm">{{ item.description }}</p>
            <span class="font-semibold text-rose-500">${{ item.price }}</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="bg-rose-100 hover:bg-rose-200 p-1 rounded-lg cursor-pointer">
            <MinusIcon class="w-4 h-4 text-rose-500" />
          </div>
          <span class="font-semibold text-gray-800">2</span>
          <div class="bg-rose-500 hover:bg-rose-600 p-1 rounded-lg cursor-pointer">
            <PlusIcon class="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-50 w-full max-w-sm -translate-x-1/2 left-1/2">
      <div class="bg-rose-500 rounded-2xl p-4 text-white flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <p>Subtotal</p>
          <span class="font-semibold">$32</span>
        </div>
        <div class="flex justify-between items-center">
          <p>Delivery Charge</p>
          <span class="font-semibold">$32</span>
        </div>
        <div class="flex justify-between items-center">
          <p>Discount</p>
          <span class="font-semibold">$32</span>
        </div>
        <hr class="border-white" />
        <div class="flex justify-between items-center">
          <p>Total</p>
          <span class="font-semibold">$32</span>
        </div>
        <button class="bg-white text-rose-500 font-semibold rounded-full py-2 hover:bg-gray-100">
          Checkout
        </button>
      </div>
    </div>


  </div>
</template>