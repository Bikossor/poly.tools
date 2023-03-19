import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
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
import { ReactNode, useEffect, useState } from "react";

const calcPixelDensity = (
  resHorizontal: number,
  resVertical: number,
  diagonal: number,
) => {
  return (
    Math.sqrt(Math.pow(resHorizontal, 2) + Math.pow(resVertical, 2)) / diagonal
  );
};

type ResolutionPreset = {
  readonly label: string;
  readonly horizontal: number;
  readonly vertical: number;
};

const resolutionPresets: ReadonlyArray<ResolutionPreset> = [
  {
    label: "720p",
    horizontal: 1280,
    vertical: 720,
  },
  {
    label: "900p",
    horizontal: 1600,
    vertical: 900,
  },
  {
    label: "1080p",
    horizontal: 1920,
    vertical: 1080,
  },
  {
    label: "1440p",
    horizontal: 2560,
    vertical: 1440,
  },
  {
    label: "2160p",
    horizontal: 3840,
    vertical: 2160,
  },
  {
    label: "2880p",
    horizontal: 5120,
    vertical: 2880,
  },
];

type WithChildren = { children: ReactNode };

const TextSpan = ({ children }: WithChildren) => (
  <Text as={"span"}>{children}</Text>
);

type CompareListItem = {
  width: number;
  height: number;
  diagonal: number;
  ppi: string;
};

export const DisplayCalculator = () => {
  const [resHorizontal, setResHorizontal] = useState(1920);
  const [resVertical, setResVertical] = useState(1080);
  const [diagonal, setDiagonal] = useState(24);
  const [compareList, setCompareList] = useState<Array<CompareListItem>>([]);

  const { hasCopied, onCopy, setValue, value } = useClipboard(
    calcPixelDensity(resHorizontal, resVertical, diagonal).toFixed(3),
  );

  useEffect(() => {
    setValue(calcPixelDensity(resHorizontal, resVertical, diagonal).toFixed(3));
  }, [resHorizontal, resVertical, diagonal]);

  const copyIcon = hasCopied ? <CheckIcon /> : <CopyIcon />;
  const copyText = hasCopied ? "Value copied!" : "Copy value";

  const addToCompare = () => {
    setCompareList(prevList => [
      ...prevList,
      { diagonal, height: resVertical, width: resHorizontal, ppi: value },
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
              value={resHorizontal}
              type="number"
              inputMode="numeric"
              onChange={event =>
                setResHorizontal(parseInt(event.target.value, 10))
              }
            />
          </InputGroup>
        </VStack>
        <VStack align={"start"}>
          <TextSpan children={"Vertical resolution"} />
          <InputGroup>
            <Input
              value={resVertical}
              type="number"
              inputMode="numeric"
              onChange={event =>
                setResVertical(parseInt(event.target.value, 10))
              }
            />
          </InputGroup>
        </VStack>
        <VStack align={"start"}>
          <TextSpan children={"Resolution presets"} />
          <ButtonGroup width="100%" isAttached>
            {resolutionPresets.map(preset => (
              <Button
                flex={1}
                onClick={() => {
                  setResHorizontal(preset.horizontal);
                  setResVertical(preset.vertical);
                }}
                variant={"outline"}
                colorScheme={
                  resHorizontal === preset.horizontal &&
                  resVertical === preset.vertical
                    ? "green"
                    : "gray"
                }
                style={{ cursor: "pointer" }}
              >
                {preset.label}
              </Button>
            ))}
          </ButtonGroup>
        </VStack>
        <VStack align={"start"}>
          <TextSpan children={"Diagonal"} />
          <InputGroup>
            <Input
              value={diagonal}
              type="number"
              inputMode="decimal"
              onChange={event => setDiagonal(parseFloat(event.target.value))}
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
              value={value}
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
            {compareList.map(({ diagonal, height, ppi, width }) => (
              <Grid
                width="100%"
                templateColumns="1fr 1fr 1fr 2fr"
                columnGap={2}
                alignItems="center"
              >
                <GridItem textAlign={"end"}>{width}</GridItem>
                <GridItem textAlign={"end"}>{height}</GridItem>
                <GridItem textAlign={"end"}>{`${diagonal}"`}</GridItem>
                <GridItem textAlign={"end"}>{`${ppi} PPI`}</GridItem>
              </Grid>
            ))}
          </VStack>
        </VStack>
      </div>
    </>
  );
};
