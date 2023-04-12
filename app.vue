<template>
  <div>
    <div class="relative">
      <NavBar />
      <NuxtPage />
    </div>
    <SlowFooter />
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        class="shape-fill"
        fill="#01397A"
        fill-opacity="1"
      ></path>
    </svg>
    <!-- developed by francis -->

    <footer
      class="bg-gradient-to-r from-black via-[#01397A] border-none to-[#01397A] py-4 relative"
    >
      <div
        class="container mx-auto text-white text-center nav-font flex flex-row justify-around items-center"
      >
        <p class="nav-font">KORASRY&trade; 2023 &copy; Copyrights</p>
        <div class="flex justify-center items-center mx-auto gap-x-2 py-1">
          <a
            href="https://github.com/Francis-Mwaniki"
            class="text-white list-none no-underline hover:ring-black hover:ring-2 hover:bg-black hover:translate-2 hover:duration-300 p-2 rounded-full first-letter:00 hover:ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="uil:github" class="h-7 w-7" />
          </a>
          <a
            href="https://twitter.com/FRANCIS90776084/status/1613471306418102274"
            class="text-white list-none no-underline hover:ring-black hover:ring-2 hover:bg-black hover:translate-2 hover:duration-300 p-2 rounded-full first-letter: hover:ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="uil:twitter" class="h-7 w-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/francis-mwaniki-378603220/"
            class="text-white list-none no-underline hover:ring-black hover:ring-2 hover:bg-black hover:translate-2 hover:duration-300 p-2 rounded-full first-letter:hover:ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="uil:linkedin" class="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Quicksand:wght@600&display=swap");

* {
  font-family: "Poppins", sans-serif;
  font-family: "Quicksand", sans-serif;
}
</style>
