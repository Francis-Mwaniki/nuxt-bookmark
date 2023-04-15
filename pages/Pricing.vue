<template>
  <div>
    <div
      class="bg-blue-50 rounded-md px-4 py-3 sm:flex sm:justify-between sm:items-center"
    >
      <div class="sm:flex-grow">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Free for Now</h3>
        <div class="mt-2 text-sm text-gray-500 sm:flex sm:items-center">
          <p>This service is currently free, but will become paid in the future.</p>
        </div>
      </div>
      <div class="mt-3 text-base sm:mt-0 sm:ml-3 sm:text-right">
        <a href="#" class="text-blue-500 hover:text-blue-600">Learn More</a>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row justify-center items-center mt-8 mx-auto md:max-w-6xl max-w-lg"
    >
      <div class="w-full md:w-5/12 mb-4 md:mb-0">
        <div
          class="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between border-2 border-indigo-400"
        >
          <div>
            <h3 class="text-lg font-medium text-gray-900">Basic</h3>
            <p class="text-gray-600 mt-4">$10/month</p>
            <ul class="mt-4 list-disc list-inside">
              <li>10 bookmarks</li>
              <li>Bookmark syncing</li>
              <li>Basic support</li>
            </ul>
          </div>
          <button
            class="bg-indigo-600 text-white px-4 py-2 rounded mt-4 hover:bg-indigo-700 hover:text-white transition-colors duration-300"
          >
            Sign up
          </button>
        </div>
      </div>
      <div class="w-full md:w-5/12 mb-4 md:mb-0 md:mx-4">
        <div
          class="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between border-2 border-indigo-500"
        >
          <div>
            <h3 class="text-lg font-medium text-gray-900">Premium</h3>
            <p class="text-gray-600 mt-4">$25/month</p>
            <ul class="mt-4 list-disc list-inside">
              <li>Unlimited bookmarks</li>
              <li>Bookmark syncing</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
              <li>Custom branding</li>
            </ul>
          </div>
          <button
            class="bg-indigo-600 text-white px-4 py-2 rounded mt-4 hover:bg-indigo-700 hover:text-white transition-colors duration-300"
          >
            Sign up
          </button>
        </div>
      </div>
      <div class="w-full md:w-5/12">
        <div
          class="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between border-2 border-indigo-600"
        >
          <div>
            <h3 class="text-lg font-medium text-gray-900">Enterprise</h3>
            <p class="text-gray-600 mt-4">$50/month</p>
            <ul class="mt-4 list-disc list-inside">
              <li>Unlimited bookmarks</li>
              <li>Bookmark syncing</li>
              <li>24/7 support</li>
              <li>Advanced analytics</li>
              <li>Custom branding</li>
              <li>API access</li>
              <li>Single sign-on (SSO)</li>
            </ul>
          </div>
          <button
            class="bg-gray-300 text-gray-600 px-4 py-2 rounded mt-4 cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .card {
    width: calc(100% / 3 - 1rem);
    margin-right: 1rem;
  }
  .card:last-child {
    margin-right: 0;
  }
}
@media (min-width: 1024px) {
  .card {
    width: calc(100% / 3 - 1.5rem);
    margin-right: 1.5rem;
  }
  .card:last-child {
    margin-right: 0;
  }
}
</style>
