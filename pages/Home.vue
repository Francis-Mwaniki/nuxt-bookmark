<template>
  <div
    class="min-h-screen"
    style="
      background-image: url('https://imgs.search.brave.com/AG5ANxDWQis2zGKMZUzJMF4GwH4gkdn_sqqT9szTMe4/rs:fit:1200:1080:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNi9QcnVzc2lh/bi13aGl0ZS1zbW9r/ZS1Tb2xpZC1Db2xv/ci1CYWNrZ3JvdW5k/cy5qcGc');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    "
  >
    <h1 class="text-4xl font-bold text-center text-blue-100 nav-font">
      The BookMark&trade;
    </h1>
    <div class="flex flex-row justify-center items-center mx-auto max-w-5xl">
      <div class="max-w-3xl">
        <img src="@/assets/img/bks2.png" alt="Image" class="" />
      </div>
      <div class="max-w-xl p-4">
        <h2 class="text-3xl text-white font-bold mb-4">Welcome to our bookmark site!</h2>
        <p class="text-lg text-white">
          We provide a comprehensive collection of bookmarks on various topics to help you
          save time and stay organized. Whether you're looking for the latest news,
          shopping deals, or educational resources, we've got you covered.
        </p>
      </div>
    </div>
    <div class="flex flex-row justify-center items-center mx-auto max-w-5xl">
      <div class="max-w-xl p-4">
        <h1 class="text-3xl font-bold mb-4 text-white">
          Discover Your Next Favorite Bookmark
        </h1>
        <p class="text-lg text-white">
          We are thrilled to share with you our curated collection of bookmarks, covering
          a vast range of topics to cater to all your interests and needs. From daily news
          to lifestyle tips, shopping, and educational resources, we've got you covered.
          Our bookmarks are designed to help you save time, stay organized and discover
          new exciting content with ease. Happy bookmarking!
        </p>
      </div>
      <div class="max-w-3xl">
        <img src="@/assets/img/bk.png" alt="Image" class="" />
      </div>
    </div>
    <Swippers />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
