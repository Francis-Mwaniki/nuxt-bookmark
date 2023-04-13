<template>
  <div class="">
    <div
      class="flex flex-col items-center sm:max-w-lg max-w-full rounded py-5 mx-auto px-2"
    >
      <h1 class="text-2xl font-bold text-gray-700 mb-4">Update Bookmark</h1>
      <form class="w-full max-w-lg" @submit.prevent="createBookmark">
        <div class="flex flex-wrap mb-6">
          <div class="w-full mb-3">
            <label class="block text-gray-700 font-bold mb-2" for="title"> Title </label>
            <input
              v-model="singleBookmark.title"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter bookmark title"
              required
            />
          </div>
          <div class="w-full mb-3">
            <label class="block text-gray-700 font-bold mb-2" for="url"> URL </label>
            <input
              v-model="singleBookmark.url"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="url"
              type="url"
              placeholder="Enter bookmark URL"
              required
            />
          </div>
          <div class="w-full mb-3">
            <label class="block text-gray-700 font-bold mb-2" for="description">
              Description
            </label>
            <textarea
              v-model="singleBookmark.description"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Enter bookmark description"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div class="flex justify-end">
          <button
            class="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
          >
            Update Bookmark
            <Icon name="ic:round-bookmark-add" class="h-10 w-10" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useCreateBookMarkStore } from "~/composables/useCreateBookMark";
export default {
  props: ["singleEditBookmark"],
  setup(props) {
    const store = useCreateBookMarkStore();
    const singleBookmark = computed(() => store.$state.singleBook);
    const newBookmark = ref({
      title: singleBookmark.title,
      url: singleBookmark.url,
      description: singleBookmark.description,
    });

    return {
      store,
      newBookmark,
      singleBookmark,
    };
  },
};

/* retrieve single bookmark by id  from supabase  singleEditBookmark*/
</script>
