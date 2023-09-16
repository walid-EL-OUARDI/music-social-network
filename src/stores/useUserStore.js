import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: null,
    token: null,
    firstName: null,
    lastName: null,
    email: null,
    email_verified: null,
    location: null,
    image: null,
    description: null,
  }),
  actions: {
    setUserDetails(res) {
      console.log("setUserDetails", res.data);
      this.$state.id = res.data.user.id;
      this.$state.token = res.data.token;
      this.$state.firstName = res.data.user.first_name;
      this.$state.lastName = res.data.user.last_name;
      this.$state.email = res.data.user.email;
      this.$state.email_verified = res.data.user.email_verified;
      this.$state.location = res.data.user.location;
      this.$state.description = res.data.user.description;
      if (res.data.user.image) {
        this.$state.image =
          import.meta.env.VITE_VUE_APP_BACKEND_URL +
          "profileImages/" +
          res.data.user.image;
      } else {
        this.$state.image =
          import.meta.env.VITE_VUE_APP_URL + "images/ProfileAvatar.png";
      }
    },

    async fetchUser() {
      let res = await axios.get(
        import.meta.env.VITE_VUE_APP_API_URL + "user/" + this.$state.id
      );
      console.log(res.data);
      this.$state.id = res.data.user.id;
      this.$state.firstName = res.data.user.first_name;
      this.$state.lastName = res.data.user.last_name;
      this.$state.email = res.data.user.email;
      this.$state.email_verified = res.data.user.email_verified;
      this.$state.location = res.data.user.location;
      this.$state.description = res.data.user.description;
      if (res.data.user.image) {
        this.$state.image =
          import.meta.env.VITE_VUE_APP_BACKEND_URL +
          "profileImages/" +
          res.data.user.image;
      } else {
        this.$state.image =
          import.meta.env.VITE_VUE_APP_URL + "images/ProfileAvatar.png";
      }
    },

    clearUser() {
      this.$state.id = null;
      this.$state.token = null;
      this.$state.firstName = null;
      this.$state.lastName = null;
      this.$state.email = null;
      this.$state.email_verified = null;
      this.$state.location = null;
      this.$state.image = null;
      this.$state.description = null;
    },
  },
  persist: true,
});
