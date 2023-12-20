import axios from "axios";
import Common from "../utils/Common";
import { CHORD8_DOMAIN, Interceptor } from "../utils/Common";

const MainAxios = {
  // 로그인 안되어 있을 때
  // 판매량 순서 정렬
  notLoginList: async () => {
    return await axios.get(CHORD8_DOMAIN + "/music/musiclist");
  },
  // 새로 등록된 순서 정렬
  notLoginNewList: async () => {
    return await axios.get(CHORD8_DOMAIN + "/main/newSong");
  },
  // 전체 공연 정보 조회
  notLoginPerformList: async () => {
    return await axios.get(CHORD8_DOMAIN + "/main/perfromance/comarcial");
  },

  // 로그인 상태
  LoginList: async () => {
    return await axios.get(CHORD8_DOMAIN + "/main/mainTop");
  },
};

export default MainAxios;
