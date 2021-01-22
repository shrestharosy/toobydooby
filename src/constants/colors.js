export const colorPalette = {
  blue: "#24A6D9",
  yellow: "#ECD15B",
  purple: "#A977F8",
  orange: "#FCA65F",
  middleBlueGreen: "#7DDED9",
  fuzzyWuzzy: "#CE6664",
  salmonPink: "#FFA3A5",
};

export const arrayOfColorPalette = Object.entries(colorPalette).map(
  (palette) => palette[1]
);

const colors = {
  ...colorPalette,
  black: "#2D3436",
  lightBlue: "#A7CBD9",
  white: "#FFFFFF",
};

export default colors;
