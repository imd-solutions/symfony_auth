import { getRequest, postRequest } from "./ApiService";

export function userLogIn(payload: any) {
  return postRequest("auth/login", payload).then((response: any) => response);
}

export function userRegister(payload: any) {
  return postRequest("auth/register", payload).then(
    (response: any) => response
  );
}

export function getUserInformation() {
  return getRequest("api/user").then((response: any) => response);
}

export function updateUserInformation(id: number, payload: any) {
  return postRequest("api/update/" + id, payload).then(
    (response: any) => response
  );
}
