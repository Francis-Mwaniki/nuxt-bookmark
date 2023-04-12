<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 z-50 mx-auto justify-center items-center flex"
  >
    <div>
      <button
        class="relative bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <svg class="h-5 w-5 text-white animate-spin" viewBox="0 0 24 24">
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16 8 8 0 000 16z"
            ></path>
          </svg>
        </span>
        <span class="relative">Loading..</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
