import "video.js";

declare module "video.js" {
  export interface Player {
    qualityLevels?: () => {
      length: number;
      [index: number]: { height: number; enabled: boolean };
      on: (event: string, callback: () => void) => void;
    };
  }
}