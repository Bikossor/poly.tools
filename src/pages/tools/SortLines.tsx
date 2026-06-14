import { FormLabel, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";

export default () => {
  const [unsorted, setUnsorted] = useState("");
  const [sorted, setSorted] = useState("");

  return (
    <>
      <Heading as={"h1"}>Sort Lines</Heading>

      <FormLabel>
        {"Unsorted input"}
        <Textarea
          onChange={event => setUnsorted(event.target.value)}
          value={unsorted}
        />
      </FormLabel>

      <Button
        onClick={() =>
          setSorted(
            unsorted
              .split("\n")
              .filter(value => value !== "")
              .sort()
              .join("\n"),
          )
        }
      >
        Sort
      </Button>

      <FormLabel>
        {"Sorted output"}
        <Textarea value={sorted} readOnly />
      </FormLabel>
    </>
  );
};
