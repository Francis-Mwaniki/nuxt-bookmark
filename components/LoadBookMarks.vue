<template>
  <div
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 overflow-auto"
  >
    <Delete
      v-if="showDeleteModal"
      @close="showDeleteModal = false"
      :showDeleteModal="showDeleteModal"
    />
    <EditModal v-if="showEditModal" @close="showEditModal = false" isEdit="isEdit" />
    <div
      class="bg-white sm:w-3/4 p-6 w-full rounded-lg shadow-lg transform transition-all duration-1000 ease-in-out sm:overflow-auto sm:mt-20 max-h-screen"
      style="overflow-y: auto"
    >
      <div class="mb-4"></div>
      <div class="mb-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="(bookmark, index) in moreBookmarks"
            :key="index"
            class="bg-gray-100 p-4 rounded-lg shadow relative"
          >
            <h3 class="text-lg font-semibold mb-2">{{ bookmark.title }}</h3>
            <p class="text-gray-600 mb-2">{{ bookmark.description }}</p>
            <a :href="bookmark.url" class="text-blue-600 hover:underline">{{
              bookmark.url
            }}</a>
            <div class="absolute top-0 right-0 flex justify-center items-center">
              <button
                @click="showDeleteModal = true"
                class="mx-2 text-gray-600 hover:text-gray-900"
              >
                <Icon name="mdi:delete" class="h-7 w-7 text-gray-600" />
              </button>
              <button
                @click="showEditModal = true"
                class="mx-2 text-gray-600 hover:text-gray-900"
              >
                <Icon name="mdi:pencil" class="h-7 w-7 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          @click="closeModal"
          class="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isCreate: {
      type: Boolean,
      default: false,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    moreBookmarks: {
      type: Array,
      required: true,
    },
    showDeleteModal: {
      type: Boolean,
      required: true,
    },
    showEditModal: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
/* This is where you can add custom styles for the modal */
</style>
