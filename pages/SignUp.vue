<template>
  <div
    class="flex justify-center items-center h-screen sm:px-1 px-4 bg-gradient-to-br from-black via-[#01397A] to-black"
  >
    <div
      class="bg-gradient-to-tl from-black via-[#01397A] to-black p-8 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
    >
      <h2 class="text-xl text-gray-100 mb-4">Sign up</h2>
      <Loading v-if="auth.loading" />
      <form @submit.prevent="signup">
        <div class="mb-4">
          <label class="block text-gray-100 font-bold mb-2" for="email"> Email </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
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
            v-model="password"
            placeholder="Password"
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
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign up
        </button>
      </form>
      <p class="mt-4 text-gray-100">
        Already have an account?
        <a href="#" class="text-blue-300 hover:underline" @click.prevent="goToLogin">
          Log in
        </a>
      </p>
      <!-- or continue with github icon button -->
      <div class="flex justify-center mt-4">
        <button
          @click="provider.loginWithGithub"
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
    const auth = useRegisterStore();
    const provider = useLoginStore();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const signup = async () => {
      const res = await auth.create({
        email: email.value,
        password: password.value,
      });
      if (res) {
        /* 
        console.log(res); */
      }
    };

    const goToLogin = () => {
      router.push("/Login");
    };
    /* prevent window.reload */
    onMounted(() => {
      onbeforeunload = (e) => {
        if (location.reload.length > 1) {
          confirm("Are you sure you want to reload?");
          useToast().info("You might loose your data", {
            position: "top",
            title: "Error",
            description: "You'll Lose your data",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      };
    });

    return { email, password, signup, goToLogin, auth, provider };
  },
});
</script>
