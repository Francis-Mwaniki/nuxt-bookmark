<template>
  <div
    class="flex justify-center items-center h-screen sm:px-1 px-4 bg-gradient-to-br from-black via-[#01397A] to-black"
  >
    <div
      class="bg-gradient-to-tl from-black via-[#01397A] to-black p-8 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
    >
      <h2 class="text-xl text-gray-100 mb-4">{{ isSignup ? "Sign up" : "Log in" }}</h2>
      <form>
        <div class="mb-4">
          <label class="block text-gray-100 font-bold mb-2" for="email"> Email </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            v-model="email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-100 font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            v-model="password"
          />
        </div>
        <button
          type="submit"
          class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {{ isSignup ? "Sign up" : "Log in" }}
        </button>
      </form>
      <p class="mt-4 text-gray-100">
        {{ isSignup ? "Already have an account?" : "Need an account?" }}
        <a href="#" class="text-blue-300 hover:underline" @click.prevent="toggleForm">
          {{ isSignup ? "Log in" : "Sign up" }}
        </a>
      </p>
      <!-- or continue with github icon button -->
      <div class="flex justify-center mt-4">
        <a
          href="#"
          class="bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <Icon name="uil:github" class="h-6 w-6" />
          <span class="ml-2">Continue with Github</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSignup: false,
      email: "",
      password: "",
    };
  },
  methods: {
    toggleForm() {
      this.isSignup = !this.isSignup;
    },
  },
};
</script>
