// Unix TimeをDate型に変換する関数
export const convertUnixTimeToDate = (unixTime: number): Date => {
  return new Date(unixTime * 1000);
}

