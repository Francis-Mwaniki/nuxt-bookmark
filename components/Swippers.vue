<template>
  <div class="container mx-auto px-4 py-8 lg:py-12">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 justify-center">
      <div v-for="(testimonial, index) in testimonials" :key="index" class="relative">
        <div
          class="bg-white rounded-lg shadow-lg overflow-hidden transition-colors duration-500"
        >
          <div class="p-4">
            <p class="text-gray-600">{{ testimonial.content.slice(0, 120) + ".." }}</p>
          </div>
          <div
            class="px-4 py-2 bg-[#01397A] text-sm text-gray-700 flex items-center justify-center"
          >
            <img
              class="w-10 h-10 rounded-full mr-2"
              :src="testimonial.authorImage"
              alt="Author Image"
            />
            <p class="text-white">{{ testimonial.author }}</p>
          </div>
        </div>
        <div
          class="absolute top-0 left-0 w-full h-full rounded-lg opacity-0 transition-opacity duration-500 hover:opacity-100"
          style="background-color: rgba(255, 0, 0, 0.5); z-index: -1"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          content:
            "I love using this bookmarking app! It's so easy to organize my links and access them from anywhere.",
          author: "Franciscar jane",
          authorImage: "https://randomuser.me/api/portraits/women/17.jpg",
        },
        {
          content:
            "Bookmark has made my life so much easier. I can save and access all my important links with just a few clicks.",
          author: "Abraham Kipkurui",
          authorImage: "https://randomuser.me/api/portraits/men/20.jpg",
        },
        {
          content:
            "I've tried a lot of bookmarking apps, but this one is by far the best. It's simple, fast, and has all the features I need.",
          author: "Sara Johnson",
          authorImage: "https://randomuser.me/api/portraits/women/34.jpg",
        },
        {
          content:
            "Bookmark is the perfect solution for anyone who wants to keep their online life organized. Highly recommended!",
          author: "Francis Brown",
          authorImage: "https://randomuser.me/api/portraits/men/34.jpg",
        },
        {
          content:
            "This app is a game-changer. I can finally keep all my bookmarks in one place and access them on any device.",
          author: "Emily Davis",
          authorImage: "https://randomuser.me/api/portraits/women/41.jpg",
        },
        {
          content:
            "Bookmark has saved me so much time and frustration. I don't know what I would do without it!",
          author: "Tom Wilson",
          authorImage: "https://randomuser.me/api/portraits/men/72.jpg",
        },
      ],
    };
  },
};
</script>
