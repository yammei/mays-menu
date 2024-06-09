import { devLog } from '../dev/dev-log';

// State variable for light mode.
export var isLightMode: boolean = true;

// Switches between true and false for light mode.
export function toggleLightMode(): void {
  try {
    devLog(`
    Function Reached toggleLightMode().\n Switching from ${isLightMode} to ${!isLightMode}.\n `);
    isLightMode = !isLightMode;
  } catch (e) {
    devLog(`Error: ${e}.`);
  }
}

// Type for CSS presets.
export type cssPresetType = {
  colorSection: string;
  colorText: string;
  colorIcon: string;
  colorButton: string;
  colorButtonText: string;
}

// CSS presets between light and dark mode. ________________________________________________________

export const color = {
  pureWhite:      'rgb(250, 250, 250)',
  pureBlack:      'rgb(0, 0, 0)',
  white:          'rgb(225, 225, 225)',
  black:          'rgb(25, 25, 25)',
  secondaryLight: 'rgb(201, 188, 164)',
  secondaryDark:  'rgb(80, 77, 71)',
  tertiaryLight:  'rgb(122, 150, 202)',
  tertiaryDark:   'rgb(45, 57, 79)',
}

// General
export const cssPreset = (): cssPresetType => ({
  colorSection:     isLightMode ? color.white : color.black,
  colorText:        isLightMode ? color.black : color.white,
  colorIcon:        isLightMode ? color.black : color.white,
  colorButton:      isLightMode ? color.tertiaryDark : color.tertiaryLight,
  colorButtonText:  isLightMode ? color.white : color.black,
});

// Top Bar
export const cssPresetTopBar = (): cssPresetType => ({
  colorSection:     isLightMode ? color.pureWhite : color.black,
  colorText:        isLightMode ? color.black : color.white,
  colorIcon:        isLightMode ? color.black : color.white,
  colorButton:      'rgb(100, 100, 100)',
  colorButtonText:  'rgb(100, 100, 100)',

});

// Nav Bar
export const cssPresetNavBar = (): cssPresetType => ({
  colorSection:     isLightMode ? color.pureWhite : color.black,
  colorText:        isLightMode ? color.black : color.white,
  colorIcon:        isLightMode ? color.black : color.white,
  colorButton:      'rgb(100, 100, 100)',
  colorButtonText:  'rgb(100, 100, 100)',
});
