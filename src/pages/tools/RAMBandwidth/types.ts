export type RAMBandwidthState = {
  readonly transferRate: number;
  readonly bandwidth: number;
};

export type RAMBandwidthAction = {
  readonly type: "SET_TRANSFER_RATE";
  readonly payload: number;
};

export type RAMPreset = {
  readonly label: string;
  readonly transferRate: number;
};
