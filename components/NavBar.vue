<template>
  <div class="flex flex-col justify-center items-center bg-[#01397A] p-1">
    <nav class="w-full lg:w-1/2 p-4 rounded-lg">
      <ul class="flex justify-between flex-wrap p-2 md:gap-1 gap-3">
        <li
          class="nav-item"
          :class="{ active: current === 'home' ? 'text-pink-600' : '' }"
          @click="current = 'home'"
        >
          <nuxt-link to="/">
            <div class="flex items-center">
              <Icon name="ic:round-home" class="h-6 w-6 mr-2 text-gray-100" />
              <span
                class="text-gray-100"
                :class="current ? 'border-yellow-700 border-b-4' : ''"
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
              <Icon name="ic:round-contacts" class="h-6 w-6 mr-2 text-gray-100" />
              <span
                class="text-gray-100"
                :class="current ? 'border-yellow-700 border-b-4' : ''"
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
              <Icon name="ic:round-bookmark" class="h-6 w-6 mr-2 text-gray-100" />
              <span
                class="text-gray-100"
                :class="current ? 'border-yellow-700 border-b-4' : ''"
                >Bookmark</span
              >
            </div>
          </Nuxt-Link>
        </li>
        <div class="">
          <NuxtLink
            class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md shadow-md transition-colors duration-300"
            to="/Accounts"
          >
            <Icon name="ic:round-play-arrow" class="h-6 w-6 mr-2" />
            <span>Get Started</span>
          </NuxtLink>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "home",
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
