<template>
  <div class="container">
    <div class="row">
      <div class="px-0 d-flex justify-content-end pb-1">
        <router-link to="/board/insert" class="btn btn-dark btn-sm"
          >글쓰기</router-link
        >
      </div>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr class="bg-black table-dark">
              <th width="10%">번호</th>
              <th width="15%">작성자</th>
              <th width="65%">제목</th>
              <th width="10%">작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(bd, key) in boards.board_list.bd" :key="key">
              <td>{{ bd.no }}</td>
              <td class="text-truncate" style="max-width: 100px">
                {{ bd.name }}
              </td>
              <td>
                <router-link
                  :to="'/board/detail/' + bd.no"
                  class="text-truncate d-inline-block"
                  style="
                    max-width: 700px;
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    text-decoration: none;
                    color: black;
                  "
                  >{{ bd.subject }}</router-link
                >
              </td>
              <td>{{ bd.dbday }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul class="pagination d-flex justify-content-end">
        <li
          :class="
            boards.board_list.curpage === 1 ? 'page-item disabled' : 'page-item'
          "
        >
          <span
            class="page-link"
            style="cursor: pointer"
            @click="boards.boardListData(boards.board_list.curpage - 1)"
            >Previous</span
          >
        </li>
        <li
          :class="
            boards.board_list.curpage === boards.board_list.totalpage
              ? 'page-item disabled'
              : 'page-item'
          "
        >
          <span
            class="page-link"
            style="cursor: pointer"
            @click="boards.boardListData(boards.board_list.curpage + 1)"
            >Next</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useBoardStore } from "@/stores/board";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    const boards = useBoardStore();
    let page = 1;

    // onload
    onMounted(() => {
      boards.boardListData(page);
    });
    return {
      boards,
      page,
    };
  },
});
</script>
<style></style>
