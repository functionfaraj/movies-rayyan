export const convertWidthToVW = (width: number) => {
  return `${(width / 1440) * 100}vw`
}
export const convertHeightToVH = (width: number) => {
  return `${(width / 2816) * 100}vh`
}