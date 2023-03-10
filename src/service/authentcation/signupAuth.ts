import { Api } from "../api/api";
import swal from "sweetalert";
import { IRegisterPsicologos } from "../../interfaces/IRegisterPsicologos";

export const RegisterService = {
  Register: async (values: IRegisterPsicologos) => {
    try {
      const res = await Api.post("/psicologos", values);
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
