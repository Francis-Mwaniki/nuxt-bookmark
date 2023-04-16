<template>
  <div>
    <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

    <section class="bg-gradient-to-br from-[#01397A] via-indigo-900 to-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <p class="max-w-xl text-lg text-white">
              At the same time, the fact that we are wholly owned and totally independent
              from manufacturer and other group control gives you confidence that we will
              only recommend what is right for you.
            </p>

            <div class="mt-8">
              <a href="" class="text-2xl font-bold text-white"> +254 769982944</a>

              <address class="mt-2 not-italic text-white">
                Nakuru Road, Nairobi, Kenya
              </address>
            </div>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form
              action=""
              class="space-y-4"
              accept-charset="UTF-8"
              @submit.prevent="onSubmit()"
              method="POST"
            >
              <!-- success div with v-if=success -->
              <div
                v-if="success"
                class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong class="font-bold">Success!</strong>
                <span class="block sm:inline">{{ success }}</span>
              </div>
              <div>
                <label class="sr-only" for="name">Name</label>
                <input
                  class="w-full rounded-lg border-gray-400 border p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                   v-model="name"
                  required
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input
                    class="w-full rounded-lg border-gray-400 border p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    required
                     v-model="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">Phone</label>
                  <input
                    class="w-full rounded-lg border-gray-400 border p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    required
                     v-model="phone"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">Message</label>

                <textarea
                  class="w-full rounded-lg border-gray-400 border p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                   v-model="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-yellow-700 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  {{ loading ? "Sending..." : "Send Enquiry" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      loading: false,
      success: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      isSuccess: false,
    };
  },
  methods: {
    onSubmit() {
      let data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      this.loading = true;
      fetch("https://getform.io/f/edaf4d5b-84f4-4bc4-813a-39937b64f1f5", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          // Success
          this.isSuccess = true;
          this.loading = false;
          this.success = "Your message has been sent. Thank you!";
          this.name = "";
          this.phone = "";
          this.email = "";
          this.message = "";

          setTimeout(() => {
            this.success = "";
            /* redirect to main */
            this.$router.push("/Bookmarks");
          }, 5000);
        })
        .catch((error) => {
          // Error
          console.log(error);
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped></style>
