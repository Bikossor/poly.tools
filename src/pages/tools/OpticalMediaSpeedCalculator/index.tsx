import {
  Heading,
  VStack,
  InputGroup,
  Input,
  Select,
  InputRightAddon,
} from "@chakra-ui/react";
import { ReactNode, useReducer } from "react";
import { MediaType, OpticalMediaSpeedCalculatorState } from "./types";
import { OpticalMediaSpeedCalculatorReducer } from "./reducer";
import { Text } from "../../../components/Text";

const initialState: OpticalMediaSpeedCalculatorState = {
  mediaType: "BD",
  speed: 1,
  totalSpeed: 36000,
  totalSpeedBytes: 4500,
};

export default () => {
  const [state, dispatch] = useReducer(
    OpticalMediaSpeedCalculatorReducer,
    initialState,
  );

  return (
    <>
      <Heading as={"h1"}>Optical Media Speed Calculator</Heading>

      <div style={{ display: "grid", rowGap: "2rem" }}>
        <VStack align={"start"}>
          <Text as={"span"} children={"Media type"} />
          <Select
            value={state.mediaType}
            onChange={event => {
              dispatch({
                type: "SET_MEDIA_TYPE",
                payload: event.target.value as MediaType,
              });
            }}
          >
            <option value="CD">CD</option>
            <option value="DVD">DVD</option>
            <option value="BD">Blu-ray, HD DVD</option>
          </Select>
        </VStack>
        <VStack align={"start"}>
          <Text as={"span"} children={"Speed"} />
          <InputGroup>
            <Input
              type={"number"}
              value={state.speed}
              onChange={event => {
                dispatch({
                  type: "SET_SPEED",
                  payload: parseInt(event.target.value, 10),
                });
              }}
            />
            <InputRightAddon children={"×"} />
          </InputGroup>
        </VStack>
        <Text as={"span"}>
          {state.totalSpeed.toLocaleString(undefined, {
            style: "unit",
            unit: "megabit-per-second",
          })}
        </Text>
        <Text as={"span"}>
          {state.totalSpeedBytes.toLocaleString(undefined, {
            style: "unit",
            unit: "megabyte-per-second",
          })}
        </Text>
      </div>
    </>
  );
};
