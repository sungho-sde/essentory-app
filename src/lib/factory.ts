export function transformTwoDigit(str: number | string) {
  const tstr = str.toString();

  return tstr.length === 2 ? tstr : `0${tstr}`;
}

export function formatNumber(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
