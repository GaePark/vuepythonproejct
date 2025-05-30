<template>
  <div class="container">
    <div class="row">
      <ul class="nav nav-tabs col-12 mb-2 px-4">
        <li class="nav-item">
          <a
            @click="changeCategoryAndLoad(1)"
            :class="musics.cno === 1 ? 'nav-link active' : 'nav-link'"
            style="color: gray; cursor: pointer"
            aria-current="page"
            >Top</a
          >
        </li>
        <li class="nav-item">
          <a
            @click="changeCategoryAndLoad(2)"
            :class="musics.cno === 2 ? 'nav-link active' : 'nav-link'"
            style="color: gray; cursor: pointer"
            >가요</a
          >
        </li>
        <li class="nav-item">
          <a
            @click="changeCategoryAndLoad(3)"
            :class="musics.cno === 3 ? 'nav-link active' : 'nav-link'"
            style="color: gray; cursor: pointer"
            >POP</a
          >
        </li>
        <li class="nav-item">
          <a
            @click="changeCategoryAndLoad(4)"
            :class="musics.cno === 4 ? 'nav-link active' : 'nav-link'"
            style="color: gray; cursor: pointer"
            >OST</a
          >
        </li>
        <li class="nav-item">
          <a
            @click="changeCategoryAndLoad(5)"
            :class="musics.cno === 5 ? 'nav-link active' : 'nav-link'"
            style="color: gray; cursor: pointer"
            >트롯</a
          >
        </li>
      </ul>

      <div
        class="col-md-3"
        v-for="(md, key) in musics.music_list.md"
        :key="key"
      >
        <div class="thumbnail">
          <router-link :to="{ name: 'MusicDetail', params: { mno: md.mno } }">
            <img :src="md.poster" alt="Lights" style="width: 100%" />
            <div class="caption">
              <p
                class="text-truncate"
                style="text-decoration: none; color: black"
              >
                {{ md.title }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <ul class="pagination d-flex justify-content-end">
        <li
          v-for="(i, key) in musics.range(
            musics.music_list.startPage,
            musics.music_list.endPage
          )"
          :key="key"
          @click="musics.musicListData(i, musics.cno)"
          class="page-item"
        >
          <a
            :class="
              musics.music_list.curpage === i ? 'page-link active' : 'page-link'
            "
            style="cursor: pointer"
            >{{ i }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMusicStore } from "@/stores/music";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    const musics = useMusicStore();
    let cno = musics.cno;
    let page = 1;

    const changeCategoryAndLoad = (cno) => {
      musics.cno = cno; // 상태 변경
      musics.musicListData(1, cno); // 1페이지 + 변경된 cno로 리스트 호출
    };
    // onload
    onMounted(() => {
      musics.musicListData(page, cno);
    });
    return {
      musics,
      changeCategoryAndLoad,
    };
  },
});
</script>
<style></style>
