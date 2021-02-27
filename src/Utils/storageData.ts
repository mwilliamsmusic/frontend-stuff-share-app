export const tokenLS: string = localStorage.getItem("token");
export const idUserLS: number = parseInt(localStorage.getItem("id"), 10);
export const usernameLS: string = localStorage.getItem("user");
export const logLS: string = localStorage.getItem("log");

export function removeStorage() {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("user");
  localStorage.removeItem("log");
}
