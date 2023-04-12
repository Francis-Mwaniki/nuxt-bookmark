<template>
  <Banner />
  <div
    class="md:flex hidden flex-col justify-center items-center bg-[#01397A] p-1 sticky inset-x-0 top-0 z-50"
  >
    <nav class="w-full lg:w-1/2 p-4 rounded-lg">
      <ul class="flex justify-between flex-wrap p-2 md:gap-1 gap-3">
        <li
          class="nav-item"
          :class="{ active: current === 'home' ? 'text-pink-600' : '' }"
          @click="current = 'home'"
        >
          <nuxt-link to="/">
            <div class="flex items-center">
              <Icon
                name="ic:round-home"
                class="h-6 w-6 mr-2 text-gray-100 hover:text-yellow-700 hover:translate-2 hover:duration-300 hover:ease-in-out"
              />
              <span
                class="text-gray-100"
                :class="
                  current
                    ? 'hover:border-yellow-700 hover:border-b-2 hover:translate-2 hover:duration-300  hover:ease-in-out'
                    : ''
                "
                >Home</span
              >
            </div>
          </nuxt-link>
        </li>
        <li
          class="nav-item"
          :class="{ active: current === 'contact' }"
          @click="current = 'contact'"
        >
          <nuxt-link to="/Contact">
            <div class="flex items-center">
              <Icon
                name="ic:round-contacts"
                class="h-6 w-6 mr-2 text-gray-100 hover:text-yellow-700 hover:translate-2 hover:duration-300 hover:ease-in-out"
              />
              <span
                class="text-gray-100"
                :class="
                  current
                    ? 'hover:border-yellow-700 hover:border-b-2 hover:translate-2 hover:duration-300  hover:ease-in-out'
                    : ''
                "
                >Contact</span
              >
            </div>
          </nuxt-link>
        </li>
        <li
          class="nav-item"
          :class="{ active: current === 'bookmark' }"
          @click="current = 'bookmark'"
        >
          <Nuxt-Link to="Bookmarks">
            <div class="flex items-center">
              <Icon
                name="ic:round-bookmark"
                class="h-6 w-6 mr-2 text-gray-100 hover:text-yellow-700 hover:translate-2 hover:duration-300 hover:ease-in-out"
              />
              <span
                class="text-gray-100"
                :class="
                  current
                    ? 'hover:border-yellow-700 hover:border-b-2 hover:translate-2 hover:duration-300  hover:ease-in-out'
                    : ''
                "
                >Bookmark</span
              >
            </div>
          </Nuxt-Link>
        </li>
        <div class="sm:mt-1 mt-7">
          <NuxtLink
            class="px-4 py-5 md:py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md shadow-md transition-colors duration-300"
            to="/signUp"
          >
            <Icon name="ic:round-play-arrow" class="h-6 w-6 mr-2" />
            <span>Get Started</span>
          </NuxtLink>
        </div>
      </ul>
    </nav>
  </div>
  <!-- mobile version -->
  <div
    class="flex justify-between items-center bg-[#01397A] p-1 sticky inset-x-0 top-0 z-10 md:hidden py-6"
  >
    <Icon
      name="ic:round-menu"
      class="h-8 w-8 text-gray-100 cursor-pointer"
      @click="isNavOpen = !isNavOpen"
    />
    <img src="@/assets/img/logo.png" alt="Logo" class="h-12" />
    <div></div>
  </div>
  <nav
    class="fixed inset-y-0 left-0 z-10 w-3/4 bg-[#01397A] py-6 px-4 transform duration-300 ease-in-out"
    :class="{
      '-translate-x-full': !isNavOpen,
      'translate-x-0': isNavOpen,
    }"
  >
    <div class="flex justify-end">
      <Icon
        name="ic:round-close"
        class="h-8 w-8 text-gray-100 cursor-pointer"
        @click="isNavOpen = false"
      />
    </div>
    <ul class="flex flex-col justify-center items-center text-gray-100 mt-8">
      <li class="mb-4" :class="{ active: current === 'home' }" @click="current = 'home'">
        <nuxt-link to="/" class="flex items-center">
          <Icon name="ic:round-home" class="h-6 w-6 mr-2" />
          Home
        </nuxt-link>
      </li>
      <li
        class="mb-4"
        :class="{ active: current === 'contact' }"
        @click="current = 'contact'"
      >
        <nuxt-link to="/Contact" class="flex items-center">
          <Icon name="ic:round-contacts" class="h-6 w-6 mr-2" />
          Contact
        </nuxt-link>
      </li>
      <li
        class="mb-4"
        :class="{ active: current === 'bookmark' }"
        @click="current = 'bookmark'"
      >
        <nuxt-link to="Bookmarks" class="flex items-center">
          <Icon name="ic:round-bookmark" class="h-6 w-6 mr-2" />
          Bookmark
        </nuxt-link>
      </li>
      <div class="mt-8">
        <NuxtLink
          class="px-4 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md shadow-md transition-colors duration-300"
          to="/Accounts"
        >
          <Icon name="ic:round-play-arrow" class="h-6 w-6 mr-2" />
          <span>Get Started</span>
        </NuxtLink>
      </div>
    </ul>
  </nav>
  <!-- end -->
</template>

<script>
export default {
  data() {
    return {
      current: "home",
      isNavOpen: false,
    };
  },
};
</script>

<style scoped>
.nav-item {
  cursor: pointer;
  transition: transform 0.2s;
}

.nav-item.active {
  transform: translateX(-10px);
}
</style>
