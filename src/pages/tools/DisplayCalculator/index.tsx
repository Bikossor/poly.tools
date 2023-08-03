import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useReducer, useState } from "react";
import { resolutionPresets } from "./presets";
import { CompareListItem, DisplayCalculatorState } from "./types";
import { DisplayCalculatorReducer } from "./reducer";

type WithChildren = { children: ReactNode };

const TextSpan = ({ children }: WithChildren) => (
  <Text as={"span"}>{children}</Text>
);

const initialState: DisplayCalculatorState = {
  horizontalResolution: 1920,
  verticalResolution: 1080,
  diagonal: 24,
  pixelDensity: 91.788,
};

export default () => {
  const [state, dispatch] = useReducer(DisplayCalculatorReducer, initialState);
  const [compareList, setCompareList] = useState<Array<CompareListItem>>([]);

  const { hasCopied, onCopy, setValue, value } = useClipboard(
    state.pixelDensity.toFixed(3),
  );

  useEffect(() => {
    setValue(state.pixelDensity.toFixed(3));
  }, [state.pixelDensity, setValue]);

  const copyIcon = hasCopied ? <CheckIcon /> : <CopyIcon />;
  const copyText = hasCopied ? "Value copied!" : "Copy value";

  const addToCompare = () => {
    const { diagonal, horizontalResolution, pixelDensity, verticalResolution } =
      state;
    setCompareList(prevList => [
      ...prevList,
      {
        diagonal,
        verticalResolution,
        horizontalResolution,
        pixelDensity,
      },
    ]);
  };

  return (
    <>
      <Heading as={"h1"}>Display Calculator</Heading>

      <div style={{ display: "grid", rowGap: "2rem" }}>
        <VStack align={"start"}>
          <TextSpan children={"Horizontal resolution"} />
          <InputGroup>
            <Input
              value={state.horizontalResolution}
              type="number"
              inputMode="numeric"
              onChange={event =>
                dispatch({
                  type: "SET_RESOLUTION_HORIZONTAL",
                  payload: parseInt(event.target.value, 10),
                })
              }
            />
          </InputGroup>
        </VStack>
        <VStack align={"start"}>
          <TextSpan children={"Vertical resolution"} />
          <InputGroup>
            <Input
              value={state.verticalResolution}
              type="number"
              inputMode="numeric"
              onChange={event =>
                dispatch({
                  type: "SET_RESOLUTION_VERTICAL",
                  payload: parseInt(event.target.value, 10),
                })
              }
            />
          </InputGroup>
        </VStack>
        <VStack align={"start"}>
          <TextSpan children={"Resolution presets"} />
          <Flex width="100%" flexWrap="wrap" gap={2}>
            {resolutionPresets.map(preset => (
              <Button
                key={preset.label}
                flex={1}
                onClick={() =>
                  dispatch({
                    type: "SET_RESOLUTION_PRESET",
                    payload: {
                      horizontal: preset.horizontalResolution,
                      vertical: preset.verticalResolution,
                    },
                  })
                }
                variant={"outline"}
                colorScheme={
                  state.horizontalResolution === preset.horizontalResolution &&
                  state.verticalResolution === preset.verticalResolution
                    ? "green"
                    : "gray"
                }
                style={{ cursor: "pointer" }}
                minW={16}
              >
                {preset.label}
              </Button>
            ))}
          </Flex>
        </VStack>
        <VStack align={"start"}>
          <TextSpan children={"Diagonal"} />
          <InputGroup>
            <Input
              value={state.diagonal}
              type="number"
              inputMode="decimal"
              onChange={event =>
                dispatch({
                  type: "SET_DIAGONAL",
                  payload: parseFloat(event.target.value),
                })
              }
            />
          </InputGroup>
        </VStack>
        <VStack align={"start"}>
          <TextSpan children={"Pixel density"} />
          <InputGroup>
            <Input
              variant="filled"
              type="number"
              inputMode="decimal"
              value={state.pixelDensity.toFixed(3)}
              readOnly
            />
            <InputRightElement>
              <IconButton
                icon={copyIcon}
                title={copyText}
                aria-label={copyText}
                onClick={onCopy}
                colorScheme={hasCopied ? "green" : "gray"}
              />
            </InputRightElement>
          </InputGroup>
        </VStack>
        <Button onClick={() => addToCompare()} colorScheme="green">
          Add to compare list
        </Button>
        <Button
          onClick={() => setCompareList([])}
          colorScheme="red"
          variant={"outline"}
        >
          Clear compare list
        </Button>

        <VStack align={"start"}>
          {compareList.length > 0 && <Heading as={"h2"}>Compare list</Heading>}
          <VStack width="100%">
            {compareList.map(compareListItem => (
              <Grid
                width="100%"
                templateColumns="1fr 1fr 1fr 2fr"
                columnGap={2}
                alignItems="center"
              >
                <GridItem textAlign={"end"}>
                  {compareListItem.horizontalResolution}
                </GridItem>
                <GridItem textAlign={"end"}>
                  {compareListItem.verticalResolution}
                </GridItem>
                <GridItem
                  textAlign={"end"}
                >{`${compareListItem.diagonal}"`}</GridItem>
                <GridItem
                  textAlign={"end"}
                >{`${compareListItem.pixelDensity.toFixed(3)} PPI`}</GridItem>
              </Grid>
            ))}
          </VStack>
        </VStack>
      </div>
    </>
  );
};
