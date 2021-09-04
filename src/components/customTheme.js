import { grommet } from "grommet"
import { deepMerge } from "grommet/utils"

const myTheme = {
  global: {
    colors: {
      brand: "#DD5F3C",
      secoundary: "#393d60",
      
    },
    font: {
      family: "'LFT Etica','Helvetica Neue', Arial,sans-serif",
    },
    hover: {
      color: { dark: "brand", light: "brand" },
    },
  },
  carousel:{
    icons:{
      color: "brand",
    }
  },

}

const CustomTheme = deepMerge(myTheme, grommet)

export default CustomTheme
