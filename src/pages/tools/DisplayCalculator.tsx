import { Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const calcPixelDensity = (
  resHorizontal: number,
  resVertical: number,
  diagonal: number,
) => {
  return (
    Math.sqrt(Math.pow(resHorizontal, 2) + Math.pow(resVertical, 2)) / diagonal
  );
};

export const DisplayCalculator = () => {
  const [resHorizontal, setResHorizontal] = useState(1920);
  const [resVertical, setResVertical] = useState(1080);
  const [diagonal, setDiagonal] = useState(24);

  const [pixelDensity, setPixelDensity] = useState(
    calcPixelDensity(resHorizontal, resVertical, diagonal),
  );

  useEffect(() => {
    setPixelDensity(calcPixelDensity(resHorizontal, resVertical, diagonal));
  }, [resHorizontal, resVertical, diagonal]);

  return (
    <>
      <Heading as={"h1"}>Display Calculator</Heading>

      <div style={{ display: "grid", rowGap: "2rem" }}>
        <Input
          value={resHorizontal}
          type="number"
          inputMode="numeric"
          onChange={event => setResHorizontal(parseInt(event.target.value, 10))}
        />
        <Input
          value={resVertical}
          type="number"
          inputMode="numeric"
          onChange={event => setResVertical(parseInt(event.target.value, 10))}
        />
        <Input
          value={diagonal}
          type="number"
          inputMode="decimal"
          onChange={event => setDiagonal(parseFloat(event.target.value))}
        />
        <Input
          variant="filled"
          type="number"
          inputMode="decimal"
          value={pixelDensity.toFixed(3)}
        />
      </div>
    </>
  );
};
