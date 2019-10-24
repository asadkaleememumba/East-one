import { ModeProps } from "./type";

export const light: ModeProps = {
  brandingLogo: "#24223A",
  mainBackgroundColor: "#f0f2f5",
  containerPrimaryColor: "#fff",
  containerSecondaryColor: "#242338",
  sideNavActive: "#1d1b32",
  textColor: ["#56556c", "#a7a7bb"],
  actionColors: [
    "#00c972", //success
    "#e74040" //danger
  ],
  boxShadow: ["0 7px 14px 0 rgba(48, 50, 54, 0.1)"],
  inputBorder: "#40d1e7",
  buttonShadow: "0 8px 18px -10px #0e99ae",
  tableCellsBorder: "#e8e8e8",
  progressBarColor: [
    "#00c972", //green
    "#0000FF",
    "#ce4c00" //red
  ],
  scrollbarColor: [
    "#f5f5f5", //track
    "rgba(0,0,0,0.2)" //thumb
  ],
  modalBackground: "rgba(36,35,56,0.9)",
  modalVisualizationBorder: "#dbdbe6",
  tooltipBackground: "#56556c",
  tooltipText: "#fff",
  buttonColor: [
    "#F7F7F9",
    "#56556C",
    "#787699" //link hover
  ],
  highlightedText: "#40d1e7",
  highlightedTextBackground: "#d4f9ff",
  blankSlateColor: "#f2f2f2",
  lineChartGridLinesColor: "#dbdbe6"
};

export const dark: ModeProps = {
  brandingLogo: "#fff",
  mainBackgroundColor: "#121212",
  containerPrimaryColor: "#1c1c1c",
  containerSecondaryColor: "#1c1c1c",
  sideNavActive: "#121212",
  textColor: ["#E5E5E5", "#eee", "#818181"],
  actionColors: [
    "#81c784", //success
    "#ff7144" //danger
  ],
  boxShadow: ["0 7px 14px 10px rgba(255,255,255,0)"],
  inputBorder: "#fff",
  buttonShadow: "none",
  tableCellsBorder: "#121212",
  progressBarColor: ["#81c784", "#0000FF", "#ff7144"],
  scrollbarColor: ["#777", "#3a3a3a"],
  modalBackground: "rgba(0, 0, 0, 0.7)",
  modalVisualizationBorder: "#363636",
  tooltipBackground: "#363636",
  tooltipText: "#f8f8f8",
  buttonColor: [
    "#363636",
    "#f8f8f8",
    "#3b3a4b" //link color
  ],
  highlightedText: "#f8f8f8",
  highlightedTextBackground: "#363636",
  blankSlateColor: "#333",
  lineChartGridLinesColor: "#2a2b2e"
};
