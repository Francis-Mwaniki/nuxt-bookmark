<template>
  <div class="min-h-screen bg-gradient-to-tr from-black via-[#01397A] to-black">
    <div
      class="container mx-auto px-4 py-3 bg-gradient-to-tr from-black via-[#01397A] to-black"
    >
      <div class="flex justify-end">
        <Profile :showProfile="showProfile" />
      </div>
      <div class="flex justify-around items-center flex-row">
        <h1 class="text-3xl font-bold mb-4 text-white">Easily Manage your Bookmarks</h1>
        <!-- create bookmark button -->
        <div>
          <!-- create bookmark button -->
          <div class="flex justify-center">
            <button
              @click="
                showModal = true;
                isCreate = true;
                isEdit = false;
              "
              class="bg-yellow-600 text-white md:text-xl text-xs px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
            >
              Create Bookmark
              <Icon name="ic:round-bookmark-add" class="sm:h-10 h-7 w-7 sm:w-10" />
            </button>
          </div>

          <Modal v-if="showModal" @close="showModal = false" isCreate="isCreate" />
          <!-- loader -->

          <!-- end -->
          <EditModal
            v-if="showEditModal"
            @close="showEditModal = false"
            isEdit="isEdit"
          />
          <LoadBookMarks
            v-if="showLoadModal"
            @close="showLoadModal = false"
            :moreBookmarks="moreBookmarks"
            :showDeleteModal="showDeleteModal"
            :showEditModal="showEditModal"
            :loading="loading"
          />

          <Delete v-if="showDeleteModal" @close="showDeleteModal = false" />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="bookmark in bookmarks"
          :key="bookmark.url"
          class="bg-white rounded-lg shadow-md relative hover:ring-2 hover:ring-yellow-600 hover:shadow-lg hover:shadow-black"
        >
          <!-- edit button -->
          <button
            class="absolute top-0 left-0 p-2 text-gray-500 hover:text-gray-800"
            title="Edit Bookmark"
            @click="Editing"
          >
            <Icon name="ic:round-edit" class="h-5 w-5" />
          </button>
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
              <p class="text-sm text-gray-600">
                <a :href="bookmark.url" class="hover:underline hover:text-blue-700">
                  {{ bookmark.description.slice(0, 12) + ".." }}</a
                >
              </p>
            </div>
            <!-- delete button -->
            <button
              @click="showDeleteModal = true"
              class="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
            >
              delete
              <Icon name="ic:sharp-delete-sweep" class="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center mx-auto items-center mt-3">
        <button
          @click="load"
          class="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
        >
          Load more
          <Icon name="ic:round-bookmarks" class="h-8 rounded-full w-8" />
        </button>
      </div>
      <div class="mt-8">
        <RecentActivty />
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
      moreBookmarks: [
        {
          title: "Vue.js Documentation",
          description: "The official documentation for Vue.js",
          url: "https://vuejs.org/v2/guide/",
        },
        {
          title: "Tailwind CSS",
          description: "A utility-first CSS framework",
          url: "https://tailwindcss.com/",
        },
        {
          title: "GitHub",
          description: "A web-based hosting service for version control",
          url: "https://github.com/",
        },
        {
          title: "Stack Overflow",
          description: "A question and answer community for programmers",
          url: "https://stackoverflow.com/",
        },
        {
          title: "MDN Web Docs",
          description: "Mozilla's documentation for web technologies",
          url: "https://developer.mozilla.org/en-US/",
        },
        {
          title: "CSS Tricks",
          description: "A website about web development",
          url: "https://css-tricks.com/",
        },
        {
          title: "Google Developers",
          description: "Resources for developers, by developers",
          url: "https://developers.google.com/",
        },
        {
          title: "W3Schools",
          description: "Web development tutorials",
          url: "https://www.w3schools.com/",
        },
        {
          title: "Netlify",
          description:
            "A cloud computing company that offers hosting and serverless backend services",
          url: "https://www.netlify.com/",
        },
        {
          title: "FreeCodeCamp",
          description:
            "A non-profit organization that consists of an interactive learning web platform",
          url: "https://www.freecodecamp.org/",
        },
      ],

      showModal: false,
      showDeleteModal: false,
      isCreate: true,
      showEditModal: false,
      isEdit: true,
      showLoadModal: false,
      showProfile: false,
      loading: false,
    };
  },
  methods: {
    Editing() {
      this.isEdit = true;
      this.showEditModal = true;
      this.isCreate = false;
    },
    load() {
      this.showLoadModal = true;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
  },
};
</script>

<style>
/* No custom styles needed */
</style>
