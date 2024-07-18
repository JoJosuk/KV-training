export function isISOString(str) {
  const isoRegex =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d{1,3})?Z?$/;
  return isoRegex.test(str);
}
