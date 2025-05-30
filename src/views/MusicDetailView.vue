<template>
  <div class="container">
    <div class="row justify-content-center">
      <table class="table" style="width: 600px">
        <tbody>
          <tr>
            <td rowspan="4" style="width: 30%">
              <img :src="vo.music_detail.poster" style="width: 200px" />
            </td>
            <th class="table-dark" style="width: 20%">제목</th>
            <td style="width: 50%">{{ vo.music_detail.title }}</td>
          </tr>
          <tr>
            <th class="table-dark">가수</th>
            <td>{{ vo.music_detail.singer }}</td>
          </tr>
          <tr>
            <th class="table-dark">앨범</th>
            <td>{{ vo.music_detail.album }}</td>
          </tr>
          <tr>
            <th class="table-dark">등수</th>
            <td>{{ vo.music_detail.increment }}{{ vo.music_detail.state }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useMusicStore } from "@/stores/music";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const vo = useMusicStore();
    const router = useRoute();
    console.log(router.params.mno);
    onMounted(() => {
      vo.musicDetailData(Number(router.params.mno));
    });
    return {
      vo,
    };
  },
});
</script>

<style lang="scss"></style>
