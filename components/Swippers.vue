<script>
export default {
  setup() {
    const generateRandomString = (length) => {
      let result = "";
      const characters = "The best bookmark";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    };

    const getContrastColor = (color) => {
      const [r, g, b] = color.replace(/[^\d,]/g, "").split(",");
      const yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? "black" : "white";
    };

    const testimonials = ref(
      Array.from({ length: 5 }, () => {
        const names = ["John", "Mary", "James", "Elizabeth", "William"];
        const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
        const industries = ["technology", "finance", "healthcare", "education", "retail"];
        const randomIndex = Math.floor(Math.random() * names.length);
        const name = names[randomIndex];
        const city = cities[randomIndex];
        const industry = industries[randomIndex];
        const messageLength = Math.floor(Math.random() * 100) + 50;
        const message = "Best bookmark site in the world";
        const avatar = `https://randomuser.me/api/portraits/men/${randomIndex + 1}.jpg`;

        const bg = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;

        return {
          name,
          city,
          industry,
          message,
          avatar,
          bg,
          color: "",
        };
      })
    );

    onMounted(() => {
      testimonials.value.forEach((testimonial) => {
        testimonial.color = getContrastColor(testimonial.bg);
      });
    });

    return {
      testimonials,
    };
  },
};
</script>

<template>
  <div class="flex flex-col justify-center items-center mx-auto gap-y-4">
    <h1 class="text-4xl font-bold text-center text-blue-100 nav-font">
      What customers are saying about BookMark&trade;
    </h1>

    <Swiper
      class="swiper-cards"
      :width="240"
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx" class="">
        <div
          class="testimonial-card"
          :style="{ backgroundColor: testimonial.bg, color: testimonial.color }"
        >
          <div class="avatar-container">
            <img
              :src="testimonial.avatar"
              alt="Avatar"
              class="w-16 h-16 rounded-full mx-auto"
            />
          </div>
          <div class="testimonial-text">
            <p class="message text-sm leading-tight m-1">
              {{ testimonial.message }}
            </p>
            <p class="name text-base font-medium">{{ testimonial.name }}</p>
            <p class="city text-sm font-medium text-gray-600">
              {{ testimonial.city }}, {{ testimonial.industry }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  width: 100%;
  margin: auto;
  padding: 4px;
  font-size: 4rem;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
  padding: 20px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
  height: 200px;
  width: 600px;
  background: #fff;
}
@media (max-width: 768px) {
  .swiper-slide {
    font-size: 2rem;
    margin: auto;
  }
  .swiper-wrapper {
    min-width: 100%;
    width: 100%;
    margin: auto;
    display: flex;
  }
  .swiper-cards {
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 0;
  }
  .swiper-cards .swiper-slide {
    height: 100%;
    width: 100%;
    margin: auto;
  }
  .testimonial-card {
    width: 100%;
    height: 100%;
    margin: auto;
  }
}
</style>
