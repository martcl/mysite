import { grommet } from "grommet"
import { deepMerge } from "grommet/utils"

const myTheme = {
  global: {
    colors: {
      brand: "#FF6B6B",
      secound: "#FFE66D",
      third: "#4ECDC4",
      fourth: "#1A535C"
      
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
