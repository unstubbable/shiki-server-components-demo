import nord from "https://cdn.jsdelivr.net/npm/shiki@0.14.1/themes/nord.json";
import githubDark from "https://cdn.jsdelivr.net/npm/shiki@0.14.1/themes/github-dark.json";
import githubLight from "https://cdn.jsdelivr.net/npm/shiki@0.14.1/themes/github-light.json";
import { IShikiTheme } from "shiki";

export const NEXT_BUNDLED_THEMES = [
  mapTheme(nord),
  mapTheme(githubDark),
  mapTheme(githubLight),
];

function mapTheme(theme: any): IShikiTheme {
  return {
    ...theme,
    fg: theme.colors.foreground,
    bg: theme.colors.background,
    settings: theme.tokenColors,
  };
}
