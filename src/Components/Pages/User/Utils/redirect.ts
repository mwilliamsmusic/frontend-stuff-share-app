export function redirect401(status: any) {
  if (status === "401") {
    localStorage.clear();
    window.location.href = process.env.REACT_APP_COLLECT_FRONTEND;
  }
}
