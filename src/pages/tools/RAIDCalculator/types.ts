export type RAIDLevel = "RAID0" | "RAID1" | "RAID2" | "RAID5" | "RAID6";

export type RAIDCalculatorState = {
  readonly diskSize: number;
  readonly diskSizeUnit: "GB" | "TB";
  readonly numberOfDisks: number;
  readonly raidLevel: RAIDLevel;
  readonly hasMinNumberOfDisks: boolean;
  readonly netCapacity: number;
  readonly reliability: number;
  readonly efficiency: number;
};

export type RAIDCalculatorAction =
  | { readonly type: "SET_DISK_SIZE"; readonly payload: number }
  | { readonly type: "SET_DISK_SIZE_UNIT"; readonly payload: "GB" | "TB" }
  | { readonly type: "SET_NUMBER_OF_DISKS"; readonly payload: number }
  | { readonly type: "SET_RAID_LEVEL"; readonly payload: RAIDLevel };
