<script setup>
import { AdjustmentsHorizontalIcon, ChatBubbleBottomCenterTextIcon, ChevronLeftIcon, EnvelopeIcon, HomeIcon, KeyIcon, MagnifyingGlassIcon, MapIcon, MapPinIcon, UserIcon } from '@heroicons/vue/16/solid';

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
      <RouterLink to="/login">
        <ChevronLeftIcon class="w-8 h-8 p-1 text-rose-400 cursor-pointer bg-rose-100 rounded-md" />
      </RouterLink>
      <h3 class="text-lg font-semibold">Popular Menu</h3>
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
          </div>
        </div>
        <span class="font-semibold text-2xl text-rose-500 me-4">${{ item.price }}</span>
      </div>
    </div>

    <div class="relative z-50 w-full max-w-sm -translate-x-1/2 left-1/2">
      <div class="grid h-full max-w-lg grid-cols-4 mx-auto bg-white border border-gray-200 rounded-2xl">
        <button
          class="inline-flex flex-col items-center justify-center p-5 rounded-s-2xl hover:bg-rose-100 bg-rose-100">
          <HomeIcon class="w-5 h-5 text-rose-500" />
          <span class="sr-only">Home</span>
        </button>
        <button class="inline-flex flex-col items-center justify-center p-5 hover:bg-rose-100">
          <MapPinIcon class="w-5 h-5 text-rose-500" />
          <span class="sr-only">Map</span>
        </button>
        <RouterLink to="/order" class="inline-flex flex-col items-center justify-center p-5 hover:bg-rose-100">
          <ChatBubbleBottomCenterTextIcon class="w-5 h-5 text-rose-500" />
          <span class="sr-only">Chat</span>
        </RouterLink>
        <button class="inline-flex flex-col items-center justify-center p-5 rounded-e-2xl hover:bg-rose-100">
          <UserIcon class="w-5 h-5 text-rose-500" />
          <span class="sr-only">Profile</span>
        </button>
      </div>
    </div>
  </div>
</template>