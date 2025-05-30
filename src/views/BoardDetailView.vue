<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tbody>
          <tr>
            <th colspan="3">
              <h3>{{ boards.board_detail.subject }}</h3>
            </th>
          </tr>
          <tr class="table-dark">
            <th class="text-center">작성자</th>
            <th class="text-center">작성일</th>
            <th class="text-center">조회수</th>
          </tr>
          <tr>
            <td class="text-center">{{ boards.board_detail.name }}</td>
            <td class="text-center">{{ boards.board_detail.dbday }}</td>
            <td class="text-center">{{ boards.board_detail.hit }}</td>
          </tr>
          <tr>
            <td colspan="3">
              <div
                style="
                  min-height: 300px;
                  width: 100%;
                  height: 100%;
                  overflow-y: auto;
                "
              >
                {{ boards.board_detail.content }}
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="text-end">
              <RouterLink
                :to="'/board/update/' + boards.board_detail.no"
                class="btn btn-primary me-2"
                >수정</RouterLink
              >
              <span @click="boardDelete()" class="btn btn-danger me-2"
                >삭제</span
              >
              <RouterLink to="/board/list/" class="btn btn-dark"
                >목록</RouterLink
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useBoardStore } from "@/stores/board";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const boards = useBoardStore();
    const router = useRoute();
    // onload
    const boardDelete = () => {
      const pwd = prompt("비밀번호를 입력해주세요");
      if (pwd === boards.board_detail.pwd) {
        alert("게시글이 삭제되었습니다.");
        boards.boardDelete(router.params.no);
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    };
    onMounted(() => {
      boards.boardDetailData(Number(router.params.no));
    });

    return {
      boards,
      boardDelete,
    };
  },
});
</script>

<style lang="scss" scoped></style>
