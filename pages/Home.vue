<template>
  <div class="">
    <h1 class="text-4xl font-bold text-center text-gray-800 nav-font my-2">
      The BookMark&trade;
    </h1>
    <div
      class="flex md:flex-row flex-col justify-center items-center mx-auto max-w-5xl space-y-3 gap-3 my-4"
    >
      <div class="max-w-3xl">
        <img src="@/assets/img/bks2.png" alt="Image" class="" />
      </div>
      <div class="max-w-xl p-4">
        <h2 class="text-3xl text-black font-bold mb-4">Welcome to our bookmark site!</h2>
        <p class="text-lg text-black">
          We provide a comprehensive collection of bookmarks on various topics to help you
          save time and stay organized. Whether you're looking for the latest news,
          shopping deals, or educational resources, we've got you covered.
        </p>
      </div>
    </div>
    <div
      class="flex md:flex-row flex-col justify-center items-center mx-auto max-w-5xl space-y-3 gap-2 my-3"
    >
      <div class="max-w-xl p-4">
        <h1 class="text-3xl font-bold mb-4 text-black">
          Discover Your Next Favorite Bookmark
        </h1>
        <p class="text-lg text-black">
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
    <h1 class="text-4xl font-bold text-center text-blue-800 nav-font">
      What customers are saying about BookMark&trade;
    </h1>
    <div class="md:pl-1 sm:pl-32 pl-20 mx-auto">
      <Swippers />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
