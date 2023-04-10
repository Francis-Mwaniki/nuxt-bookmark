<template>
  <div>
    <div class="  ">
      <NavBar />
      <NuxtPage />
    </div>

    <!-- developed by francis -->
    <footer
      class="bg-gradient-to-r from-black via-[#01397A] border-none to-[#01397A] py-4 relative"
    >
      <div
        class="container mx-auto text-white text-center nav-font flex flex-row justify-around items-center"
      >
        <p class="nav-font">&copy; Francis 2023 &trade; &copy; Copyrights</p>
        <div class="flex justify-center items-center mx-auto gap-x-2 py-1">
          <a
            href=""
            class="text-white list-none no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="uil:github" class="h-7 w-7" />
          </a>
          <a
            href=""
            class="text-white list-none no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="uil:twitter" class="h-7 w-7" />
          </a>
          <a
            href=""
            class="text-white list-none no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="uil:linkedin" class="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  </div>

  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
      class="shape-fill"
      fill="#01397A"
      fill-opacity="1"
    ></path>
  </svg>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");

* {
  font-family: "Quicksand", sans-serif;
}
.custom-shape-divider-top-1681081177 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1681081177 svg {
  position: relative;
  display: block;
  width: calc(109% + 1.3px);
  height: 396px;
  transform: rotateY(180deg);
}

.custom-shape-divider-top-1681081177 .shape-fill {
  fill: #01397a;
}
</style>
