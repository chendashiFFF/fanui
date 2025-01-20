module.exports = {
  content: [
    "./packages/**/*.{vue,js,ts,jsx,tsx}",
    "./example/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#409eff',
          hover: '#66b1ff',
          active: '#3a8ee6',
          light: '#ecf5ff'
        },
        success: {
          DEFAULT: '#67c23a',
          hover: '#85ce61',
          active: '#5daf34',
          light: '#f0f9eb'
        },
        warning: {
          DEFAULT: '#e6a23c',
          hover: '#ebb563',
          active: '#cf9236',
          light: '#fdf6ec'
        },
        danger: {
          DEFAULT: '#f56c6c',
          hover: '#f78989',
          active: '#dd6161',
          light: '#fef0f0'
        },
        info: {
          DEFAULT: '#909399',
          hover: '#a6a9ad',
          active: '#82848a',
          light: '#f4f4f5'
        }
      }
    },
  },
  plugins: [],
} 