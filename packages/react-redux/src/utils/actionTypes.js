export const INIT =
  "@@redux/INIT" +
  Math.random()
    .toString(36)
    .substring(7)
    .split("")
    .join(".");

export default {
  INIT
};
