import Cookie from 'js-cookie';
import Router from 'next/router';
// import { LoginInputs } from "../pages/login";
// import { catchAxiosError } from "./error";
// import { post } from "../utils/axios/instance";

// export async function signin(inputs: LoginInputs): Promise<string | void> {
//   const data = new URLSearchParams(inputs);
//   const res: any = await post("/api/login", data).catch(catchAxiosError);
//   if (res.error) {
//     return res.error;
//   } else if (!res.data || !res.data.token) {
//     return "Something went wrong!";
//   }
//   const { token } = res.data;

//   // store the token into cookies
//   Cookie.set(COOKIES.authToken, token);
//   await Router.push("/dashboard");
// }
