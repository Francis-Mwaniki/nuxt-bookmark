import { defineStore } from "pinia";
import useToast from "./useToast";


export const useRegisterStore = defineStore("Register-store", {
  state: () => ({
    users: [],
    loading: false,
    client: useSupabaseAuthClient(),
  }),
  actions: {
    //create a new book
    async create(user, options = {}) {
      const toastOptions = {
        position: "top-center",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: true,
        closeButton: "button",
        icon: 'MyIconComponent',
        rtl: true,
       
      };
      this.loading = true;
      const { data, error } = await this.client.auth.signUp({
        email: user.email,
        password: user.password,
      });
      if (error) {
        this.loading = false;
        useToast().error(error.message, toastOptions);
      }
      if (data) {
        useToast().success("User created successfully", toastOptions);
        setTimeout(() => {
          this.loading = false;
          useToast().success("Please! Verify your Email ", toastOptions);
        }
        , 4000);
        navigateTo("/Login");
      }
    },
  },
});
