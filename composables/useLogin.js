import { defineStore } from "pinia";
import useToast from "./useToast";


export const useLoginStore = defineStore("Login-store", {
  state: () => ({
    users: [],
    loading: false,
    client: useSupabaseAuthClient(),
  }),
  actions: {
    //create a new book
    async createLogin(user, options = {}) {
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
      console.log(user);
      const { data, error } = await this.client.auth.signInWithPassword({
        email: user.email,
        password: user.password,
      });
      if (error) {
        this.loading = false;
        console.log(error);
        useToast().error(error.message, toastOptions);
      }
      if (data) {
        console.log(data);
        useToast().success(`${data.user.email} welcome`, toastOptions);
        setTimeout(() => {
          this.loading = false;
        }
        , 4000);
        navigateTo("/Bookmarks");
      }
    },
  },
});
