<template>
  <div class="min-h-screen bg-gradient-to-tr from-black via-[#01397A] to-black">
    <div
      class="flex flex-col items-center max-w-lg rounded py-5 mx-auto px-2 bg-gradient-to-tr from-[#01397A] via-[#01397A] to-[#01397A]"
    >
      <h1 class="text-2xl font-bold text-white mb-4">Create Bookmark</h1>
      <form class="w-full max-w-lg" @submit.prevent="createBookmark">
        <div class="flex flex-wrap mb-6">
          <div class="w-full mb-3">
            <label class="block text-gray-200 font-bold mb-2" for="title"> Title </label>
            <input
              v-model="newBookmark.title"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter bookmark title"
              required
            />
          </div>
          <div class="w-full mb-3">
            <label class="block text-gray-200 font-bold mb-2" for="url"> URL </label>
            <input
              v-model="newBookmark.url"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="url"
              type="url"
              placeholder="Enter bookmark URL"
              required
            />
          </div>
          <div class="w-full mb-3">
            <label class="block text-gray-200 font-bold mb-2" for="description">
              Description
            </label>
            <textarea
              v-model="newBookmark.description"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Enter bookmark description"
              rows="3"
            ></textarea>
          </div>
          <div class="w-full mb-3">
            <label class="block text-gray-200 font-bold mb-2" for="icon"> Icon </label>
            <input
              v-model="newBookmark.icon"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="icon"
              type="text"
              placeholder="Enter bookmark icon"
              required
            />
          </div>
        </div>
        <div class="flex justify-end">
          <nuxt-link
            to="NewBookMark"
            class="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
          >
            Create Bookmark
            <Icon name="ic:round-bookmark-add" class="h-10 w-10" />
          </nuxt-link>
        </div>
      </form>
    </div>
    <div class="flex justify-center">
      <nuxt-link
        to="/"
        class="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
      >
        Back to Home
        <Icon name="ic:round-home" class="h-10 w-10" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newBookmark: {
        title: "",
        url: "",
        description: "",
        icon: "",
      },
    };
  },
  methods: {
    createBookmark() {
      // Do something with newBookmark data, e.g. save it to a database
      console.log(this.newBookmark);
      // Clear form fields
      this.newBookmark = {
        title: "",
        url: "",
        description: "",
        icon: "",
      };
    },
  },
};
</script>
