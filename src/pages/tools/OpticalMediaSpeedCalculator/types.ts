export type MediaType = "CD" | "DVD" | "BD";

export type OpticalMediaSpeedCalculatorState = {
  readonly mediaType: MediaType;
  readonly speed: number;
  readonly totalSpeed: number; // Megabits per second
  readonly totalSpeedBytes: number; // Megabytes per second
};

export type OpticalMediaSpeedCalculatorAction =
  | { readonly type: "SET_MEDIA_TYPE"; readonly payload: MediaType }
  | { readonly type: "SET_SPEED"; readonly payload: number };
