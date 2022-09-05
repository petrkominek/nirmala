/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base box-shadow styles for the Material Kit 2 React.
 * You can add new box-shadow using this file.
 * You can customized the box-shadow for the entire Material Kit 2 React using thie file.
 */

// Material Kit 2 React Base Styles
import colors from "assets/theme/base/colors";

// Material Kit 2 React Helper Functions
import boxShadow from "assets/theme/functions/boxShadow";

const { black, white, tabs, coloredShadows } = colors;

export default {
  xs: boxShadow(black.main, 0.15, [0, 2], [9, -5]),
  sm: boxShadow(black.main, 0.12, [0, 5], [10, 0]),
  md: `${boxShadow(black.main, 0.1, [0, 4], [6, -1])}, ${boxShadow(
    black.main,
    0.06,
    [0, 2],
    [4, -1]
  )}`,
  lg: `${boxShadow(black.main, 0.1, [0, 10], [15, -3])}, ${boxShadow(
    black.main,
    0.05,
    [0, 4],
    [6, -2]
  )}`,
  xl: `${boxShadow(black.main, 0.1, [0, 20], [25, -5])}, ${boxShadow(
    black.main,
    0.04,
    [0, 10],
    [10, -5]
  )}`,
  xxl: boxShadow(black.main, 0.05, [0, 20], [27, 0]),
  inset: boxShadow(black.main, 0.075, "inset", [0, 1], [2, 0]),
  colored: {
    primary: `${boxShadow(black.main, 0.14, [0, 4], [20, 0])}, ${boxShadow(
      coloredShadows.primary,
      0.4,
      [0, 7],
      [10, -5]
    )}`,
    secondary: `${boxShadow(black.main, 0.14, [0, 4], [20, 0])}, ${boxShadow(
      coloredShadows.secondary,
      0.4,
      [0, 7],
      [10, -5]
    )}`,
    info: `${boxShadow(black.main, 0.14, [0, 4], [20, 0])}, ${boxShadow(
      coloredShadows.info,
      0.4,
      [0, 7],
      [10, -5]
    )}`,
    success: `${boxShadow(black.main, 0.14, [0, 4], [20, 0])}, ${boxShadow(
      coloredShadows.success,
      0.4,
      [0, 7],
      [10, -5]
    )}`,
    warning: `${boxShadow(black.main, 0.14, [0, 4], [20, 0])}, ${boxShadow(
      coloredShadows.warning,
      0.4,
      [0, 7],
      [10, -5]
    )}`,
    error: `${boxShadow(black.main, 0.14, [0, 4], [20, 0])}, ${boxShadow(
      coloredShadows.error,
      0.4,
      [0, 7],
      [10, -5]
    )}`,
    light: `${boxShadow(black.main, 0.14, [0, 4], [20, 0])}, ${boxShadow(
      coloredShadows.light,
      0.4,
      [0, 7],
      [10, -5]
    )}`,
    dark: `${boxShadow(black.main, 0.14, [0, 4], [20, 0])}, ${boxShadow(
      coloredShadows.dark,
      0.4,
      [0, 7],
      [10, -5]
    )}`,
    white: `${boxShadow(white.main, 0.14, [0, 4], [20, 0])}, ${boxShadow(
      white.main,
      0.4,
      [0, 7],
      [10, -5]
    )}`,
  },

  sliderBoxShadow: {
    thumb: boxShadow(black.main, 0.2, [0, 1], [13, 0]),
  },
  tabsBoxShadow: {
    indicator: boxShadow(tabs.indicator.boxShadow, 1, [0, 1], [5, 1]),
  },
};
