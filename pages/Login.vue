<template>
  <div
    class="flex justify-center items-center h-screen sm:px-1 px-4 bg-gradient-to-br from-black via-[#01397A] to-black"
  >
    <div
      class="bg-gradient-to-tl from-black via-[#01397A] to-black p-8 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
    >
      <h2 class="text-xl text-gray-100 mb-4">Log in</h2>
      <Loading v-if="auth.loading" />
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-100 font-bold mb-2" for="email"> Email </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            required
            v-model="email"
            placeholder="Email"
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
            required
            v-model="password"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log in
        </button>
      </form>
      <p class="mt-4 text-gray-100">
        Don't have an account?
        <a href="#" class="text-blue-300 hover:underline" @click.prevent="goToSignup">
          Sign up
        </a>
      </p>
      <!-- or continue with github icon button -->
      <div class="flex justify-center mt-4">
        <button
          @click="auth.loginWithGithub"
          class="bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <Icon name="uil:github" class="h-6 w-6" />
          <span class="ml-2">Continue with Github</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const auth = useLoginStore();
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const login = async () => {
      await auth.createLogin({ email: email.value, password: password.value });
    };

    const goToSignup = () => {
      router.push("/signup");
    };

    return { password, login, goToSignup, email, auth };
  },
});
</script>
