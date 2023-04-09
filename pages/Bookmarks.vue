<template>
  <div class="min-h-screen bg-gradient-to-tr from-black via-[#01397A] to-black">
    <div class="container mx-auto px-4 py-3 bg-[#01397A]">
      <div class="flex justify-around items-center flex-row">
        <h1 class="text-3xl font-bold mb-4 text-white">Easily Manage your Bookmarks</h1>
        <!-- create bookmark button -->
        <nuxt-link
          to="NewBookMark"
          class="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
        >
          Create Bookmark
          <Icon name="ic:sharp-trending-flat" class="h-10 w-10" />
        </nuxt-link>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="bookmark in bookmarks"
          :key="bookmark.url"
          class="bg-white rounded-lg shadow-md"
        >
          <div class="p-4 flex items-center">
            <div
              class="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4"
            >
              <Icon name="ic:round-bookmark" class="h-7 w-7 text-gray-600" />
            </div>
            <div class="flex-grow">
              <a :href="bookmark.url" class="text-blue-500 hover:underline">{{
                bookmark.title
              }}</a>
              <p class="text-sm text-gray-600">{{ bookmark.description }}</p>
            </div>
            <!-- delete button -->
            <nuxt-link
              to="NewBookMark"
              class="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
            >
              delete
              <Icon name="ic:sharp-delete-sweep" class="h-10 w-10" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarks: [
        {
          url: "https://www.google.com/",
          title: "Google",
          description: "Search engine",
        },
        {
          url: "https://www.facebook.com/",
          title: "Facebook",
          description: "Social media",
        },
        {
          url: "https://www.youtube.com/",
          title: "YouTube",
          description: "Video sharing platform",
        },
        {
          url: "https://www.twitter.com/",
          title: "Twitter",
          description: "Social media",
        },
        {
          url: "https://www.amazon.com/",
          title: "Amazon",
          description: "Online retailer",
        },
        {
          url: "https://www.netflix.com/",
          title: "Netflix",
          description: "Streaming service",
        },
      ],
    };
  },
};
</script>

<style>
/* No custom styles needed */
</style>
