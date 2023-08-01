export const calculatePixelDensity = (
  resHorizontal: number,
  resVertical: number,
  diagonal: number,
) =>
  Math.sqrt(Math.pow(resHorizontal, 2) + Math.pow(resVertical, 2)) / diagonal;
