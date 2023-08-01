import { DisplayCalculatorState, DisplayCalculatorAction } from "./types";
import { calculatePixelDensity } from "./utils";

export const DisplayCalculatorReducer = (
  state: DisplayCalculatorState,
  action: DisplayCalculatorAction,
): DisplayCalculatorState => {
  switch (action.type) {
    case "SET_RESOLUTION_HORIZONTAL":
      return {
        ...state,
        pixelDensity: calculatePixelDensity(
          action.payload,
          state.verticalResolution,
          state.diagonal,
        ),
        horizontalResolution: action.payload,
      };

    case "SET_RESOLUTION_VERTICAL":
      return {
        ...state,
        pixelDensity: calculatePixelDensity(
          state.horizontalResolution,
          action.payload,
          state.diagonal,
        ),
        verticalResolution: action.payload,
      };

    case "SET_RESOLUTION_PRESET":
      return {
        ...state,
        pixelDensity: calculatePixelDensity(
          action.payload.horizontal,
          action.payload.vertical,
          state.diagonal,
        ),
        horizontalResolution: action.payload.horizontal,
        verticalResolution: action.payload.vertical,
      };

    case "SET_DIAGONAL":
      return {
        ...state,
        pixelDensity: calculatePixelDensity(
          state.horizontalResolution,
          state.verticalResolution,
          action.payload,
        ),
        diagonal: action.payload,
      };

    default:
      return state;
  }
};
