import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: null,
    token: null,
    firstName: null,
    lastName: null,
    email: null,
    // location: null,
    // image: null,
    // description: null,
  }),
  actions: {
    setUserDetails(res) {
      console.log("setUserDetails", res.data);
      this.$state.id = res.data.user.id;
      this.$state.token = res.data.token;
      this.$state.firstName = res.data.user.first_name;
      this.$state.lastName = res.data.user.last_name;
      this.$state.email = res.data.user.email;
      console.log(this.$state.email);
    //   this.$state.location = res.data.user.location;
    //   this.$state.description = res.data.user.description;
    },
  },
  persist: true,
});
