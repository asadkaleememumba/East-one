import { ThemeProps as StyledComponentsThemeProps } from "styled-components";

export interface ModeProps {
  brandingLogo: string;
  mainBackgroundColor: string;
  containerPrimaryColor: string;
  containerSecondaryColor: string;
  sideNavActive: string;
  textColor: string[];
  actionColors: string[];
  boxShadow: string[];
  inputBorder: string;
  buttonShadow: string;
  tableCellsBorder: string;
  progressBarColor: string[];
  scrollbarColor: string[];
  modalBackground: string;
  modalVisualizationBorder: string;
  tooltipBackground: string;
  tooltipText: string;
  buttonColor: string[];
  highlightedText: string;
  highlightedTextBackground: string;
  blankSlateColor: string;
  lineChartGridLinesColor: string;
}

export type ThemeProps = {
  mode: string;
  toggleMode: () => void;
} & ModeProps;

export type WithThemeProps = StyledComponentsThemeProps<ThemeProps>;
