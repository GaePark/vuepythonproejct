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
              <input type="text" class="form-control" v-model="name" />
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
          @click="onClickInsert()"
          value="글작성"
        />
        <RouterLink to="/board/list" class="btn btn-sm btn-secondary"
          >목록</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useBoardStore } from "@/stores/board";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const boards = useBoardStore();
    let name = ref("");
    let subject = ref("");
    let content = ref("");
    let pwd = ref("");

    // onload
    const onClickInsert = () => {
      boards.boardInsert(name.value, subject.value, content.value, pwd.value);
    };
    return {
      boards,
      name,
      subject,
      content,
      pwd,
      onClickInsert,
    };
  },
});
</script>

<style lang="scss"></style>
