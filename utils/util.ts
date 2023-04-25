import md5 from "md5-ts";

export const getHeaderSign = (
  seckey: string,
  key: string,
  timestr: number,
): string => {
  return md5(seckey + key + timestr).toUpperCase();
};
