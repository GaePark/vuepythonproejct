<template>
  <div class="container">
    <div class="row" style="width: 800px; margin: 0 auto">
      <table class="table">
        <tbody>
          <tr>
            <th class="table-dark text-center" width="30%">제목</th>
            <td width="70%">
              <input type="text" class="form-control" v-model="subject" />
            </td>
          </tr>
          <tr>
            <th class="table-dark text-center" width="30%">이름</th>
            <td width="70%">
              {{ name }}
            </td>
          </tr>
          <tr>
            <th class="table-dark text-center" width="30%">내용</th>
            <td width="70%">
              <textarea
                class="form-control"
                style="height: 200px; resize: none"
                v-model="content"
              ></textarea>
            </td>
          </tr>
          <tr>
            <th class="table-dark text-center" width="30%">비밀번호</th>
            <td width="70%">
              <input type="password" v-model="pwd" class="form-control" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="col-12 d-flex justify-content-end">
        <input
          type="button"
          class="btn btn-sm btn-dark"
          @click="onClickUpdate()"
          value="수정"
        />
        <RouterLink
          :to="'/board/detail/' + boards.board_detail.no"
          class="btn btn-sm btn-secondary"
          >취소</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useBoardStore } from "@/stores/board";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const boards = useBoardStore();
    const router = useRoute();
    const name = ref("");
    const subject = ref("");
    const content = ref("");
    const pwd = ref("");

    const onClickUpdate = () => {
      if (pwd.value === boards.board_detail.pwd) {
        alert("수정되었습니다.");
        boards.boardUpdate(subject.value, content.value, router.params.no);
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    };
    // onload
    onMounted(async () => {
      await boards.boardDetailData(Number(router.params.no));
      name.value = boards.board_detail.name;
      subject.value = boards.board_detail.subject;
      content.value = boards.board_detail.content;
    });
    return {
      boards,
      name,
      subject,
      content,
      pwd,
      onClickUpdate,
    };
  },
});
</script>

<style lang="scss" scoped></style>
