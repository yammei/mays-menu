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
}

// CSS presets between light and dark mode. ________________________________________________________

// General
export const cssPreset = (): cssPresetType => ({
  colorSection:   isLightMode ? 'rgb(225, 225, 225)' : 'rgb(25, 25, 25)',
  colorText:      isLightMode ? 'rgb(25, 25, 25)' : 'rgb(225, 225, 225)',
});

// Top Bar
export const cssPresetTopBar = (): cssPresetType => ({
  colorSection:   isLightMode ? 'rgb(173, 102, 129)': 'rgb(25, 25, 25)',
  colorText:      isLightMode ? 'rgb(25, 25, 25)' : 'rgb(225, 225, 225)',
});

// Nav Bar
export const cssPresetNavBar = (): cssPresetType => ({
  colorSection:   isLightMode ? 'rgb(173, 102, 129)': 'rgb(25, 25, 25)',
  colorText:      isLightMode ? 'rgb(25, 25, 25)' : 'rgb(225, 225, 225)',
});
