import {
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  useClipboard,
} from "@chakra-ui/react";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { ChangeEvent, useEffect, useState } from "react";

const calcCircularArea = (diameter: number) => {
  return (Math.PI * diameter ** 2) / 4;
};

export const CircularArea = () => {
  const [diameter, setDiameter] = useState<number>();
  const { hasCopied, onCopy, setValue, value } = useClipboard("");

  const handleDiameterChange = (event: ChangeEvent<HTMLInputElement>) =>
    setDiameter(parseFloat(event.target.value));

  useEffect(() => {
    setValue(calcCircularArea(diameter ?? 0).toFixed(3));
  }, [diameter]);

  const copyIcon = hasCopied ? <CheckIcon /> : <CopyIcon />;
  const copyText = hasCopied ? "Value copied!" : "Copy value";

  return (
    <>
      <Heading as={"h1"}>Circular area</Heading>
      <div style={{ display: "grid", rowGap: "2rem" }}>
        <InputGroup>
          <InputLeftAddon children={"Diameter"} />
          <Input value={diameter ?? 0} onChange={handleDiameterChange} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={"Circular area"} />
          <Input value={value} readOnly />
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
      </div>
    </>
  );
};
