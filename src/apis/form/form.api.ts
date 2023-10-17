import { http } from "@/utils/http";
import { FormInputPost } from "@/types/form/form.type";

const url = "items/Applications";

export const FormApiPost = {
  postData(body: FormInputPost) {
    return http.post(url, body);
  },
};
