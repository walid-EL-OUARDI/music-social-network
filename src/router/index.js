import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/useUserStore.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next("/profile") : next();
      },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next("/profile") : next();
      },
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next("/profile") : next();
      },
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/profile",
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next() : next("/login");
      },
      children: [
        {
          path: "",
          name: "profile",
          component: () => import("../views/account/ProfileSection.vue"),
        },
        {
          path: "Send-verify-email",
          name: "Send-verify-email",
          beforeEnter: (to, from, next) => {
            useUserStore().email_verified == 0 ? next() : next("/profile");
          },
          component: () => import("../views/account/SendVerifyEmail.vue"),
        },
        {
          path: "verify-email/:id/:hash",
          name: "verify-email",
          component: () => import("../views/account/VerifyEmail.vue"),
        },
        {
          path: "send-reset-password",
          name: "send-reset-password",
          component: () => import("../views/account/SendResetPassword.vue"),
        },
        {
          path: "reset-password",
          name: "reset-password",
          component: () => import("../views/account/ResetPassword.vue"),
        },
        {
          path: "edit-profile",
          name: "edit-profile",
          component: () => import("../views/account/EditProfileSection.vue"),
        },
        {
          path: "add-song",
          name: "add-song",
          component: () => import("../views/account/AddSong.vue"),
        },
        {
          path: "/profile/delete-song",
          name: "delete-song",
          component: () => import("../views/account/deleteSong.vue"),
        },
        {
          path: "/profile/add-youtube-video",
          name: "add-youtube-video",
          component: () => import("../views/account/AddYoutubeVideo.vue"),
        },
        {
          path: "/profile/delete-youtube-video",
          name: "delete-youtube-video",
          component: () => import("../views/account/DeleteYoutubeVideo.vue"),
        },
        {
          path: "/profile/create-post",
          name: "create-post",
          component: () => import("../views/account/CreatePost.vue"),
        },
        {
          path: "/profile/edit-post/:id",
          name: "edit-post",
          component: () => import("../views/account/EditPost.vue"),
        },
        {
          path: "/profile/post/:id",
          name: "post",
          component: () => import("../views/account/PostsById.vue"),
        },
        {
          path: "/profile/posts",
          name: "posts",
          component: () => import("../views/account/Posts.vue"),
        },
      ],
    },
    // {
    //   path: "/email/verify",
    //   name: "verify-email",
    //   component: () => import("../views/account/VerifyEmailView.vue"),
    // },
  ],
});

export default router;
