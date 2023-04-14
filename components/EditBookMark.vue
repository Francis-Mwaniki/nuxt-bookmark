<template>
  <div class="">
    <div
      class="flex flex-col items-center sm:max-w-lg max-w-full rounded py-5 mx-auto px-2"
    >
      <h1 class="text-2xl font-bold text-gray-700 mb-4">Update Bookmark</h1>
      <Loading v-if="store.$state.loading" class="" />
      <form class="w-full max-w-lg" @submit.prevent="createBookmark">
        <div class="flex flex-wrap mb-6">
          <div class="w-full mb-3">
            <label class="block text-gray-700 font-bold mb-2" for="title"> Title </label>
            <input
              v-model="title"
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
              v-model="url"
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
              v-model="description"
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
    let title = ref("");
    let url = ref("");
    let description = ref("");
    const newBookmark = ref({
      title: "",
      url: "",
      description: "",
    });
    const singleBookmark = ref(props.singleEditBookmark);
    onMounted(async () => {
      /* title.value = singleBookmark.value.title;
      url.value = singleBookmark.value.url;
      description.value = singleBookmark.value.description; */
      await getBookmarkById(singleBookmark.value);
    });
    /* get singleBookMarkbyid  */
    const client = useSupabaseClient();
    const store = useCreateBookMarkStore();

    async function getBookmarkById(id) {
      store.loading = true;
      const { data, error } = await client
        .from("bookmarks")
        .select("*")
        .eq("user_id", id);
      if (error) {
        console.log(error);
      }
      if (data) {
        store.loading = false;
        title.value = data[0].title;
        url.value = data[0].url;
        description.value = data[0].description;
        console.log(data);
      }
    }

    return {
      newBookmark,
      title,
      url,
      description,
      store,
    };
  },
};

/* retrieve single bookmark by id  from supabase  singleEditBookmark*/
</script>
