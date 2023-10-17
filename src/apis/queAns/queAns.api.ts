import { QueAns } from "@/types/queAns/queAns.type";
import { http } from "@/utils/http";

const url = "items/FAQ";

export const queAnsApi = {
  getQueAns() {
    return http.get<QueAns>(url);
  },
};
