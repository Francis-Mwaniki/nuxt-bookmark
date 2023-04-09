<template>
  <div class="min-h-screen">
    <div
      class="bg-gradient-to-tr from-black via-[#01397A] hover:via-indigo-900 hover:to-black hover:transform hover:duration-300 to-black text-white py-4"
    >
      <!-- The best bookmark site in the world -->
      <h1 class="text-4xl font-bold text-center text-blue-100 nav-font">
        The Best Bookmark Site in the World&trade;
      </h1>

      <div class="flex justify-around items-center flex-row">
        <div class="">
          <img src="@/assets/img/logo.png" alt="" class="rounded" />
        </div>
        <div class="">
          <img src="@/assets/img/arrow.png" alt="" class="rounded" />
        </div>
        <div class="flex flex-col gap-y-3">
          <nuxt-link to="Home" class="nav-font cursor-pointer text-white text-xl">
            <Icon name="ic:sharp-home" class="h-10 w-10" />
            Home</nuxt-link
          >
          <nuxt-link class="nav-font cursor-pointer text-white text-xl" to="Bookmarks">
            <Icon name="ic:round-bookmark" class="h-10 w-10" />
            Bookmarks</nuxt-link
          >
          <nuxt-link class="nav-font cursor-pointer text-white text-xl">
            <!-- nuxt icon -->
            <Icon name="ic:round-contact-page" class="h-10 w-10" />
            Contact</nuxt-link
          >
          <!-- get started button -->
          <nuxt-link
            to="Accounts"
            class="nav-font bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white"
          >
            Get Started
            <Icon name="ic:sharp-trending-flat" class="h-10 w-10" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");

.nav-font {
  font-family: "Quicksand", sans-serif;
}
</style>
