import { MediaType } from "./types";

export const calculateTotalSpeed = (mediaType: MediaType, speed: number) => {
  switch (mediaType) {
    case "CD":
      return speed * 1229;
    case "DVD":
      return speed * 11080;
    case "BD":
      return speed * 36000;
  }
};
