import { defineStore } from "pinia";
import axios from "axios";
export const useMusicStore = defineStore(
  "music",
  {
    state: () => ({
      music_list: [],
      music_detail: {},
      cno: 1,
    }),
    actions: {
      musicListData(page, cno) {
        axios
          .get("http://127.0.0.1:8000/web/music_list/", {
            params: {
              page: page,
              cno: cno,
            },
          })
          .then((res) => {
            this.music_list = res.data;
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
      musicDetailData(mno) {
        axios
          .get("http://127.0.0.1:8000/web/music_detail/", {
            params: {
              mno: mno,
            },
          })
          .then((res) => {
            this.music_detail = res.data;
          });
      },
    },
  },
  { persist: true }
);
