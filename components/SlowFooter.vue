<template>
  <div>
    <section class="bg-white">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-4 gap-8 md:grid-cols-8">
          <div class="col-span-2 md:col-span-1">
            <h3 class=" md:text-lg font-extrabold text-gray-900 sm:text-sm text-sm">
              About Us
            </h3>
            <ul class="low mt-4 space-y-4 font-light">
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to="/our-story"
                  >Our Story</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to="/our-team"
                  >Our Team</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to="/our-mission"
                  >Our Mission</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-span-2 md:col-span-1">
            <NuxtLink
              to="/Pricing"
              class=" md:text-lg font-extrabold text-gray-900 sm:text-sm text-sm"
              >Pricing</NuxtLink
            >
            <ul class="low mt-4 space-y-4 font-light">
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to=""
                  >Basic</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to=""
                  >Premium</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to=""
                  >Enterprise</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-span-2 md:col-span-1">
            <h3 class=" md:text-lg font-extrabold text-gray-900 sm:text-sm text-sm">
              Terms of Use
            </h3>
            <ul class="low mt-4 space-y-4 font-light">
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to="/privacy-policy"
                  >Privacy Policy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to="/terms-and-conditions"
                  >Terms &amp; Conditions</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to="/refund-policy"
                  >Refund Policy</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-span-2 md:col-span-1">
            <h3 class=" md:text-lg font-extrabold text-gray-900 sm:text-sm text-sm">
              Contact Us
            </h3>
            <ul class="low mt-4 space-y-4 font-light">
              <li>
                <NuxtLink
                  to="/support-center"
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  >Support Center</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to="/faqs"
                  >FAQs</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to=""
                  >Email Us</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-span-4 md:col-span-2">
            <h3 class=" md:text-lg font-extrabold text-gray-900 sm:text-sm text-sm">
              More Information
            </h3>
            <ul class="low mt-4 space-y-4 md:ml-4">
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to="/"
                  >Home</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to="/Bookmarks"
                  >Books</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="low font-light hover:underline text-sm md:text-lg sm:text-sm text-blue-700"
                  to="/"
                  >Images</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-span-4 md:col-span-2 flex justify-end items-center">
            <img src="@/assets/img/logo.png" alt="Logo" class="h-40 w-32 mr-4 rounded" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&family=Poppins:ital,wght@1,100&family=Quicksand:wght@600&display=swap");
.low {
  font-family: "EB Garamond", serif;
  font-family: "Poppins", sans-serif;
  font-family: "Quicksand", sans-serif;
  font-weight: 100;
}
</style>
