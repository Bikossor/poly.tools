import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  useClipboard,
} from "@chakra-ui/react";

const getWeekNumber = (date: Date): number => {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );

  const dayNum = d.getUTCDay() || 7;

  d.setUTCDate(d.getUTCDate() + 4 - dayNum);

  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

  return Math.ceil(((d.getTime() - yearStart.getTime()) / 8.64e7 + 1) / 7);
};

const leapYear = (year: number): boolean =>
  new Date(year, 1, 29).getMonth() === 1;

export const DateTools = () => {
  const today = new Date();
  const { hasCopied, onCopy, value } = useClipboard(
    getWeekNumber(today).toString(),
  );
  const thisYear = today.getUTCFullYear();

  const leapYearString = (year: number) =>
    leapYear(year)
      ? `${thisYear} is a leap year`
      : `${thisYear} is not a leap year`;

  const copyIcon = hasCopied ? <CheckIcon /> : <CopyIcon />;
  const copyText = hasCopied ? "Value copied!" : "Copy value";

  return (
    <>
      <Heading as={"h1"}>Date tools</Heading>
      <div style={{ display: "grid", rowGap: "2rem" }}>
        <InputGroup>
          <InputLeftAddon children={"Calendar week"} />
          <Input defaultValue={value} />
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
        <InputGroup>
          <InputLeftAddon children={"Leap year"} />
          <Input defaultValue={leapYearString(thisYear)} />
        </InputGroup>
      </div>
    </>
  );
};
