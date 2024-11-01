import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RAMBandwidthState } from "./types";
import { ReactNode, useReducer } from "react";
import { RAMBandwidthReducer } from "./reducer";
import { presets } from "./presets";

type WithChildren = { children: ReactNode };

const TextSpan = ({ children }: WithChildren) => (
  <Text as={"span"}>{children}</Text>
);

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
          <TextSpan children={"Transfer rate"} />

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
          <TextSpan children={"Presets"} />
          <Flex width="100%" flexWrap="wrap" gap={2}>
            {presets.map(({ transferRate: dataTransferRate, label }) => (
              <Button
                key={label}
                flex={1}
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
                style={{ cursor: "pointer" }}
                minW={16}
              >
                {label}
              </Button>
            ))}
          </Flex>
        </VStack>
        <VStack align={"start"}>
          <TextSpan children={"Bandwidth"} />

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
