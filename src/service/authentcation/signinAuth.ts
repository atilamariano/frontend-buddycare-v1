import { Api } from "../api/api";
import swal from "sweetalert";
import { ISignin } from "../../interfaces/ISignin";

export const signinService = {
  Login: async (values: ISignin) => {
    try {
      const res = await Api.post("/auth/login", values);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};
