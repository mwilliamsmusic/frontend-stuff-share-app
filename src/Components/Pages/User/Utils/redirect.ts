import {removeStorage} from "../../../../Utils/storageData";

export function redirect401(status: number) {
  if (status === 401) {
    removeStorage();
    window.location.href = process.env.REACT_APP_COLLECT_FRONTEND;
  }
}
