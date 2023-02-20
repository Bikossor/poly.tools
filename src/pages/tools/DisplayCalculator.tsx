import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
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

export const DisplayCalculator = () => {
  const [resHorizontal, setResHorizontal] = useState(1920);
  const [resVertical, setResVertical] = useState(1080);
  const [diagonal, setDiagonal] = useState(24);

  const { hasCopied, onCopy, setValue, value } = useClipboard(
    calcPixelDensity(resHorizontal, resVertical, diagonal).toFixed(3),
  );

  useEffect(() => {
    setValue(calcPixelDensity(resHorizontal, resVertical, diagonal).toFixed(3));
  }, [resHorizontal, resVertical, diagonal]);

  const copyIcon = hasCopied ? <CheckIcon /> : <CopyIcon />;
  const copyText = hasCopied ? "Value copied!" : "Copy value";

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
          <HStack>
            <Container>
              {resolutionPresets.map(preset => (
                <Tag
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
                  size={"lg"}
                >
                  {preset.label}
                </Tag>
              ))}
            </Container>
          </HStack>
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
      </div>
    </>
  );
};
