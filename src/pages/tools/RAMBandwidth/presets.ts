import { RAMPreset } from "./types";

export const presets: ReadonlyArray<RAMPreset> = [
  {
    transferRate: 400,
    label: "DDR-400",
  },
  {
    transferRate: 800,
    label: "DDR2-800",
  },
  {
    transferRate: 2400,
    label: "DDR3-2400",
  },
  {
    transferRate: 3600,
    label: "DDR4-3600",
  },
  {
    transferRate: 6400,
    label: "DDR5-6400",
  },
];
