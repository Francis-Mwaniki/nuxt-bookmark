<template>
  <div
    class="fixed sm:top-0 top-2 left-0 right-0 bottom-2 sm:bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
  >
    <div
      class="bg-white sm:w-1/2 p-6 w-full rounded-lg shadow-lg transform transition-all duration-1000 ease-in-out"
    >
      <div class="mb-4"></div>
      <div class="mb-4">
        <CreateBookMark />
      </div>

      <div class="flex justify-end">
        <button
          @click="closeModal"
          class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
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
  },
  data() {
    return {};
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
