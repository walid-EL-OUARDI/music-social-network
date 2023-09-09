import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/account/ProfileSection.vue"),
    },
    {
      path: "/profile/edit-profile",
      name: "edit-profile",
      component: () => import("../views/account/EditProfileSection.vue"),
    },
    {
      path: "/profile/add-song",
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
});

export default router;
