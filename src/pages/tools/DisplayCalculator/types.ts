export type ResolutionPreset = {
  readonly label: string;
  readonly horizontalResolution: number;
  readonly verticalResolution: number;
};

export type DisplayCalculatorState = {
  readonly horizontalResolution: number;
  readonly verticalResolution: number;
  readonly diagonal: number;
  readonly pixelDensity: number;
};

export type CompareListItem = DisplayCalculatorState;

export type DisplayCalculatorAction =
  | { readonly type: "SET_RESOLUTION_HORIZONTAL"; readonly payload: number }
  | { readonly type: "SET_RESOLUTION_VERTICAL"; readonly payload: number }
  | {
      readonly type: "SET_RESOLUTION_PRESET";
      readonly payload: {
        readonly horizontal: number;
        readonly vertical: number;
      };
    }
  | { readonly type: "SET_DIAGONAL"; readonly payload: number };
