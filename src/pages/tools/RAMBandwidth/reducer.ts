import { RAMBandwidthAction, RAMBandwidthState } from "./types";

const calculateBandwidth = (dataRate: number) => {
  // (Data Rate MTs) * (Bus Width in Bytes) * (DDR Factor) / 1000
  return ((dataRate / 2) * 8 * 2) / 1000;
};

export const RAMBandwidthReducer = (
  state: RAMBandwidthState,
  action: RAMBandwidthAction,
): RAMBandwidthState => {
  switch (action.type) {
    case "SET_TRANSFER_RATE":
      return {
        ...state,
        transferRate: action.payload,
        bandwidth: calculateBandwidth(action.payload),
      };
    default:
      return state;
  }
};
