import { RAIDCalculatorAction, RAIDCalculatorState } from "./types";
import {
  calculateNetCapacity,
  getHasMinNumberOfDisks,
  calculateReliability,
  calculateEfficiency,
} from "./utils";

export const RAIDCalculatorReducer = (
  state: RAIDCalculatorState,
  action: RAIDCalculatorAction,
): RAIDCalculatorState => {
  switch (action.type) {
    case "SET_DISK_SIZE":
      return {
        ...state,
        diskSize: action.payload,
        netCapacity: calculateNetCapacity(
          state.raidLevel,
          action.payload,
          state.numberOfDisks,
        ),
        efficiency: calculateEfficiency(state.raidLevel, state.numberOfDisks),
      };
    case "SET_DISK_SIZE_UNIT":
      return { ...state, diskSizeUnit: action.payload };
    case "SET_NUMBER_OF_DISKS":
      return {
        ...state,
        numberOfDisks: action.payload,
        hasMinNumberOfDisks: getHasMinNumberOfDisks(
          state.raidLevel,
          action.payload,
        ),
        netCapacity: calculateNetCapacity(
          state.raidLevel,
          state.diskSize,
          action.payload,
        ),
        reliability: calculateReliability(state.raidLevel, action.payload),
        efficiency: calculateEfficiency(state.raidLevel, action.payload),
      };
    case "SET_RAID_LEVEL":
      return {
        ...state,
        raidLevel: action.payload,
        hasMinNumberOfDisks: getHasMinNumberOfDisks(
          action.payload,
          state.numberOfDisks,
        ),
        netCapacity: calculateNetCapacity(
          action.payload,
          state.diskSize,
          state.numberOfDisks,
        ),
        reliability: calculateReliability(action.payload, state.numberOfDisks),
        efficiency: calculateEfficiency(action.payload, state.numberOfDisks),
      };
    default:
      return state;
  }
};
