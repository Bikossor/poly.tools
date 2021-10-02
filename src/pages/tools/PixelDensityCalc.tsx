import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";

const calcPixelDensity = (
  resHorizontal: number,
  resVertical: number,
  diagonal: number
) => {
  return (
    Math.sqrt(Math.pow(resHorizontal, 2) + Math.pow(resVertical, 2)) / diagonal
  );
};

export const PixelDensityCalc = () => {
  const [resHorizontal, setResHorizontal] = useState(1920);
  const [resVertical, setResVertical] = useState(1080);
  const [diagonal, setDiagonal] = useState(24);

  const [pixelDensity, setPixelDensity] = useState(
    calcPixelDensity(resHorizontal, resVertical, diagonal)
  );

  useEffect(() => {
    setPixelDensity(calcPixelDensity(resHorizontal, resVertical, diagonal));
  }, [resHorizontal, resVertical, diagonal]);

  return (
    <>
      <h1>Pixel density calculator</h1>

      <div style={{ display: "grid", rowGap: "2rem" }}>
        <TextField
          label="Resolution horizontal"
          value={resHorizontal}
          type="number"
          inputMode="numeric"
          onChange={(event) =>
            setResHorizontal(parseInt(event.target.value, 10))
          }
        />
        <TextField
          label="Resolution vertical"
          value={resVertical}
          type="number"
          inputMode="numeric"
          onChange={(event) => setResVertical(parseInt(event.target.value, 10))}
        />
        <TextField
          label="Diagonal"
          value={diagonal}
          type="number"
          inputMode="decimal"
          onChange={(event) => setDiagonal(parseFloat(event.target.value))}
        />
        <TextField
          variant="filled"
          label="Pixel density"
          type="number"
          inputMode="decimal"
          value={pixelDensity.toFixed(3)}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </>
  );
};
