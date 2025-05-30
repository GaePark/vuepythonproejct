import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
export const useBoardStore = defineStore(
  "board",
  {
    state: () => ({
      board_list: [],
      board_detail: {},
    }),
    actions: {
      boardListData(page) {
        axios
          .get("http://127.0.0.1:8000/web/board_list/", {
            params: {
              page: page,
            },
          })
          .then((res) => {
            this.board_list = res.data;
          });
      },
      range(start, end) {
        let arr = [];
        let len = end - start;
        for (let i = 0; i <= len; i++) {
          arr[i] = start;
          start++;
        }
        return arr;
      },
      boardDetailData(no) {
        axios
          .get("http://127.0.0.1:8000/web/board_detail/", {
            params: {
              no: no,
            },
          })
          .then((res) => {
            this.board_detail = res.data;
          });
      },
      boardInsert(name, subject, content, pwd) {
        axios
          .post("http://127.0.0.1:8000/web/board_insert/", {
            name,
            subject,
            content,
            pwd,
          })
          .then(() => {
            router.push("/board/list");
          });
      },
      boardDelete(no) {
        console.log(no);
        axios
          .delete("http://127.0.0.1:8000/web/board_delete/", {
            data: { no },
          })
          .then(() => {
            router.push("/board/list");
          });
      },
      boardUpdate(subject, content, no) {
        axios
          .post("http://127.0.0.1:8000/web/board_update/", {
            subject,
            content,
            no,
          })
          .then((res) => {
            console.log(res.data);
            router.push("/board/detail/" + no);
          });
      },
    },
  },
  { persist: true }
);
