import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";

const calcCircularArea = (diameter: number) => {
  return (Math.PI * diameter ** 2) / 4;
};

const copyValue = (value: string) => {
  navigator.clipboard.writeText(value);
};

export const CircularArea = () => {
  const [diameter, setDiameter] = useState<number>();
  const [circularArea, setCircularArea] = useState("");

  const handleDiameterChange = (event: ChangeEvent<HTMLInputElement>) =>
    setDiameter(parseFloat(event.target.value));

  useEffect(() => {
    setCircularArea(calcCircularArea(diameter ?? 0).toFixed(3));
  }, [diameter]);

  return (
    <>
      <Heading as={"h1"}>Circular area</Heading>
      <div style={{ display: "grid", rowGap: "2rem" }}>
        <InputGroup>
          <InputLeftAddon children={"Diameter"} />
          <Input value={diameter ?? 0} onChange={handleDiameterChange} />
          <InputRightElement>
            <Button onClick={() => {}}>Copy</Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={"Circular area"} />
          <Input value={circularArea} readOnly />
          <InputRightElement>
            <Button onClick={() => copyValue(circularArea)}>Copy</Button>
          </InputRightElement>
        </InputGroup>
      </div>
    </>
  );
};
