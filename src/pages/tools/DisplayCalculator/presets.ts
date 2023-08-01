import { ResolutionPreset } from "./types";

export const resolutionPresets: ReadonlyArray<ResolutionPreset> = [
  {
    label: "720p",
    horizontalResolution: 1280,
    verticalResolution: 720,
  },
  {
    label: "900p",
    horizontalResolution: 1600,
    verticalResolution: 900,
  },
  {
    label: "1080p",
    horizontalResolution: 1920,
    verticalResolution: 1080,
  },
  {
    label: "1440p",
    horizontalResolution: 2560,
    verticalResolution: 1440,
  },
  {
    label: "2160p",
    horizontalResolution: 3840,
    verticalResolution: 2160,
  },
  {
    label: "2880p",
    horizontalResolution: 5120,
    verticalResolution: 2880,
  },
];
