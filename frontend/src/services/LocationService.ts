import { postRequest, getRequest } from "./ApiService";

export function addNewLocation(location: string) {
  const userId = JSON.parse(localStorage.getItem("authUser") || "{}").user.id;

  const payload = {
    user_id: userId,
    title: location,
  };
  return postRequest("locations", payload).then((response: any) => response);
}

export function getLocations() {
  const userId = JSON.parse(localStorage.getItem("authUser") || "{}").user.id;

  return getRequest(`locations?user_id=${userId}`).then(
    (response: any) => response
  );
}

export function getLocation(location: string) {
  const userId = JSON.parse(localStorage.getItem("authUser") || "{}").user.id;
  return getRequest(`locations?user_id=${userId}&title=${location}`).then(
    (response: any) => response
  );
}
