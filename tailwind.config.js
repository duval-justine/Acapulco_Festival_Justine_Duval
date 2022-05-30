module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Extended/true-gray/50": "#fafafa",
        "Extended/true-gray/200": "#e5e5e5",
        "Extended/true-gray/600": "#525252",
        "Extended/true-gray/700": "#404040",
        "Extended/true-gray/900": "#171717",
        "Extended/amber/200": "#fde68a",
        "Extended/amber/300": "#fcd34d",
        "Extended/amber/400": "#fbbf24",
        "Extended/amber/500": "#f59e0b",
        "Extended/amber/700": "#b45309"
       },
       "fontSize": {
        "2xs": "0.75rem",
        "xs": "0.875rem",
        "sm": "1rem",
        "base": "1.125rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "1.875rem",
        "3xl": "2.25rem",
        "4xl": "3rem",
        "5xl": "4.5rem"
       },
       "fontFamily": {
        "harlow": "Harlow",
        "concert-one": "Concert One"
       },
       "borderRadius": {
        "none": "0",
        "xs": "0.25rem",
        "sm": "0.30375000834465027rem",
        "default": "0.3125rem",
        "lg": "0.625rem",
        "xl": "0.7584636211395264rem",
        "2xl": "0.7599999904632568rem",
        "3xl": "0.7600000500679016rem",
        "4xl": "0.7613434791564941rem",
        "5xl": "0.76171875rem",
        "6xl": "0.9375rem",
        "7xl": "1.091666579246521rem",
        "8xl": "1.1366959810256958rem",
        "9xl": "1.1805555820465088rem",
        "10xl": "1.2399998903274536rem",
        "11xl": "1.2400000095367432rem",
        "12xl": "1.684253215789795rem",
        "13xl": "1.7066664695739746rem",
        "14xl": "1.7066667079925537rem",
        "15xl": "1.8600000143051147rem",
        "16xl": "1.8710442781448364rem",
        "17xl": "2.1875rem",
        "18xl": "2.559999942779541rem",
        "19xl": "2.8271484375rem",
        "20xl": "5.0888671875rem",
        "full": "9999px"
       },
    },

  },
  plugins: [],
}
