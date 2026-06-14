import { VStack, InputGroup, Input, Select, HStack } from "@chakra-ui/react";
import { ReactNode, useReducer } from "react";
import { RAIDCalculatorState, RAIDLevel } from "./types";
import { RAIDCalculatorReducer } from "./reducer";
import { Text } from "../../../components/Text";
import { Heading } from "../../../components/Heading";

const initialState: RAIDCalculatorState = {
  diskSize: 14,
  diskSizeUnit: "TB",
  numberOfDisks: 2,
  raidLevel: "RAID1",
  hasMinNumberOfDisks: true,
  netCapacity: 14,
  reliability: 1,
  efficiency: 0.5,
};

export default () => {
  const [state, dispatch] = useReducer(RAIDCalculatorReducer, initialState);

  return (
    <>
      <Heading as={"h1"}>RAID Calculator</Heading>

      <div style={{ display: "grid", rowGap: "2rem" }}>
        <VStack align={"start"}>
          <Text as={"span"} children={"Single disk size"} />
          <InputGroup>
            <Input
              min={1}
              value={state.diskSize}
              type="number"
              inputMode="numeric"
              onChange={event => {
                dispatch({
                  type: "SET_DISK_SIZE",
                  payload: parseInt(event.target.value, 10),
                });
              }}
            />
            <Select
              value={state.diskSizeUnit}
              onChange={event => {
                dispatch({
                  type: "SET_DISK_SIZE_UNIT",
                  payload: event.target.value as "GB" | "TB",
                });
              }}
            >
              <option value="GB">GB</option>
              <option value="TB">TB</option>
            </Select>
          </InputGroup>
        </VStack>
        <VStack align={"start"}>
          <Text as={"span"} children={"Number of disks"} />
          <Input
            min={1}
            value={state.numberOfDisks}
            type="number"
            inputMode="numeric"
            onChange={event => {
              dispatch({
                type: "SET_NUMBER_OF_DISKS",
                payload: parseInt(event.target.value, 10),
              });
            }}
          />
        </VStack>
        <VStack align={"start"}>
          <Text as={"span"} children={"RAID level"} />
          <Select
            value={state.raidLevel}
            onChange={event => {
              dispatch({
                type: "SET_RAID_LEVEL",
                payload: event.target.value as RAIDLevel,
              });
            }}
          >
            <option value="RAID0">RAID 0</option>
            <option value="RAID1">RAID 1</option>
            <option value="RAID2">RAID 2</option>
            <option value="RAID5">RAID 3, 4, 5</option>
            <option value="RAID6">RAID 6</option>
          </Select>
        </VStack>
        {state.hasMinNumberOfDisks ? (
          <>
            <HStack>
              <Text as={"span"} children={"Net capacity:"} />
              <Text as={"span"}>
                {state.netCapacity.toFixed(2)} {state.diskSizeUnit}
              </Text>
            </HStack>
            <HStack>
              <Text as={"span"} children={"Space efficiency:"} />
              <Text as={"span"}>
                {state.efficiency.toLocaleString(undefined, {
                  style: "percent",
                  minimumFractionDigits: 2,
                })}
              </Text>
            </HStack>
            <HStack>
              <Text as={"span"} children={"Reliability:"} />
              <Text as={"span"}>{state.reliability} disk failure(s)</Text>
            </HStack>
          </>
        ) : (
          <Text>Not enough disks to create a {state.raidLevel}</Text>
        )}
      </div>
    </>
  );
};
