<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
  >
    <div
      class="bg-white rounded-lg shadow-lg p-4 transform transition-all duration-500 ease-in-out"
    >
      <h2 class="text-xl font-bold mb-2">Delete Bookmark</h2>
      <p class="mb-4">Are you sure you want to delete this bookmark?</p>
      <div class="flex justify-end">
        <button
          class="px-4 py-2 bg-yellow-700 text-white rounded-md hover:bg-yellow-800 mr-2"
          @click="closeModal"
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          @click="deleteBookmark"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
    deleteBookmark() {
      // Your deletion logic goes here
    },
  },
};
</script>

<style>
/* This is where you can add custom styles for the modal */
</style>
