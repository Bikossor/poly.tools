import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { RAMBandwidthState } from "./types";
import { ReactNode, useReducer } from "react";
import { RAMBandwidthReducer } from "./reducer";
import { presets } from "./presets";
import { Button, Heading, Text, VStack } from "@components";

const initialState: RAMBandwidthState = {
  bandwidth: 19.2,
  transferRate: 2400,
};

export default () => {
  const [state, dispatch] = useReducer(RAMBandwidthReducer, initialState);

  return (
    <>
      <Heading as={"h1"}>RAM Bandwidth</Heading>

      <div style={{ display: "grid", rowGap: "2rem" }}>
        <VStack align={"start"}>
          <Text as={"span"} children={"Transfer rate"} />

          <InputGroup>
            <Input
              min={1}
              value={state.transferRate}
              type="number"
              inputMode="numeric"
              onChange={event => {
                dispatch({
                  type: "SET_TRANSFER_RATE",
                  payload: parseInt(event.target.value, 10),
                });
              }}
            />

            <InputRightAddon children={"MT/s"} />
          </InputGroup>
        </VStack>
        <VStack align={"start"}>
          <Text as={"span"} children={"Presets"} />
          <div style={{ width: "100%", flexWrap: "wrap", gap: "0.5rem" }}>
            {presets.map(({ transferRate: dataTransferRate, label }) => (
              <Button
                key={label}
                onClick={() =>
                  dispatch({
                    type: "SET_TRANSFER_RATE",
                    payload: dataTransferRate,
                  })
                }
                variant={"outline"}
                colorScheme={
                  state.transferRate === dataTransferRate ? "green" : "gray"
                }
                style={{ cursor: "pointer", flex: 1 }}
              >
                {label}
              </Button>
            ))}
          </div>
        </VStack>
        <VStack align={"start"}>
          <Text as={"span"} children={"Bandwidth"} />

          <InputGroup>
            <Input
              min={1}
              value={state.bandwidth}
              type="number"
              inputMode="numeric"
              readOnly
            />
            <InputRightAddon children={"GB/s"} />
          </InputGroup>
        </VStack>
      </div>
    </>
  );
};
