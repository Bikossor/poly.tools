import {
  OpticalMediaSpeedCalculatorAction,
  OpticalMediaSpeedCalculatorState,
} from "./types";
import { calculateTotalSpeed } from "./utils";

export const OpticalMediaSpeedCalculatorReducer = (
  state: OpticalMediaSpeedCalculatorState,
  action: OpticalMediaSpeedCalculatorAction,
): OpticalMediaSpeedCalculatorState => {
  switch (action.type) {
    case "SET_MEDIA_TYPE":
      return {
        ...state,
        mediaType: action.payload,
        totalSpeed: calculateTotalSpeed(action.payload, state.speed),
        totalSpeedBytes:
          calculateTotalSpeed(action.payload, state.speed) / 8000,
      };
    case "SET_SPEED":
      return {
        ...state,
        speed: action.payload,
        totalSpeed: calculateTotalSpeed(state.mediaType, action.payload),
        totalSpeedBytes:
          calculateTotalSpeed(state.mediaType, action.payload) / 8000,
      };
    default:
      return state;
  }
};
