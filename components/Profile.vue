<template>
  <div class="relative w-10 h-10 group">
    <button
      class="w-full h-full rounded-full overflow-hidden"
      @click="showProfile = !showProfile"
    >
      <img
        src="https://cdn.pixabay.com/photo/2017/06/09/23/22/avatar-2388584__340.png"
        alt="User Profile"
        class="w-full h-full object-cover"
      />
      <!-- user email -->
      <span
        class="absolute bottom-0 right-0 bg-gray-100 text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center p-6"
        v-show="user"
      >
        <!-- pick the first 2 -->
        {{ user.email.slice(0, 2).toUpperCase() }}
      </span>
    </button>
    <transition name="slide">
      <div v-show="showProfile" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex">
        <div
          class="bg-gradient-to-b from-white via-[#01397A] to-[#01397A] w-64 h-screen py-4 px-6 transform translate-x-0"
        >
          <h2 class="text-lg font-bold mb-2">User Profile</h2>
          <p class="text-gray-600 text-sm mb-4" v-show="user">
            Username: {{ user.email }}
          </p>
          <p class="text-gray-600 text-sm mb-4" v-show="!user">Username: Not Logged In</p>
          <div class="flex flex-col">
            <a href="#" class="flex items-center text-gray-800 mb-2">
              <Icon name="ic:outline-account-circle" class="h-6 w-6 mr-2" />
              <span>Accounts</span>
            </a>
            <a href="#" class="flex items-center text-gray-800 mb-2">
              <Icon name="ic:outline-settings" class="h-6 w-6 mr-2" />
              <span>Settings</span>
            </a>
            <a href="#" class="flex items-center text-gray-800">
              <Icon name="ic:outline-info" class="h-6 w-6 mr-2" />
              <span>Status</span>
              <!-- show role -->
            </a>
            <a href="#" class="flex items-center underline text-sm" v-show="user">
              <span class="text-gray-900"> {{ user.role }}</span>

              <!-- show role -->
            </a>

            <!-- close -->
            <button
              @click="showProfile = false"
              class="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800"
            >
              <Icon name="ic:outline-close" class="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      showProfile: false,
    };
  },
  mounted() {
    console.log(this.user);
  },
};
</script>

<style scoped>
.slide-enter-active {
  animation: slide-in 0.3s ease-out;
}
.slide-leave-active {
  animation: slide-out 0.3s ease-out;
}
@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
