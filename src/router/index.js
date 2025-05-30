import BoardDetailView from "@/views/BoardDetailView.vue";
import BoardInsertView from "@/views/BoardInsertView.vue";
import BoardListView from "@/views/BoardListView.vue";
import BoardUpdateView from "@/views/BoardUpdateView.vue";
import MusicDetailView from "@/views/MusicDetailView.vue";
import MusicListView from "@/views/MusicListView.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MusicList",
    component: MusicListView,
  },
  {
    path: "/music/detail/:mno",
    name: "MusicDetail",
    component: MusicDetailView,
  },
  {
    path: "/board/list",
    name: "BoardList",
    component: BoardListView,
  },
  {
    path: "/board/detail/:no",
    name: "BoardDetail",
    component: BoardDetailView,
  },
  {
    path: "/board/insert",
    name: "BoardInsert",
    component: BoardInsertView,
  },
  {
    path: "/board/update/:no",
    name: "BoardUpdate",
    component: BoardUpdateView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
