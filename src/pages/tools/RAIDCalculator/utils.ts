import { RAIDLevel } from "./types";

export const getHasMinNumberOfDisks = (
  raidLevel: RAIDLevel,
  numberOfDisks: number,
) => {
  switch (raidLevel) {
    case "RAID0":
    case "RAID1":
      return numberOfDisks >= 2;
    case "RAID2":
    case "RAID5":
      return numberOfDisks >= 3;
    case "RAID6":
      return numberOfDisks >= 4;
  }
};

export const calculateNetCapacity = (
  raidLevel: RAIDLevel,
  diskSize: number,
  numberOfDisks: number,
) => {
  switch (raidLevel) {
    case "RAID0":
      return diskSize * numberOfDisks;
    case "RAID1":
      return diskSize;
    case "RAID2":
      return diskSize * (numberOfDisks - Math.log2(numberOfDisks));
    case "RAID5":
      return diskSize * (numberOfDisks - 1);
    case "RAID6":
      return diskSize * (numberOfDisks - 2);
  }
};

export const calculateReliability = (
  raidLevel: RAIDLevel,
  numberOfDisks: number,
) => {
  switch (raidLevel) {
    case "RAID0":
      return 0;
    case "RAID1":
      return numberOfDisks - 1;
    case "RAID2":
    case "RAID5":
      return 1;
    case "RAID6":
      return 2;
  }
};
