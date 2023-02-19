import { CopyIcon } from "@chakra-ui/icons";
import {
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
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
  const calendarWeek = getWeekNumber(today);
  const thisYear = today.getUTCFullYear();

  const copyCalendarWeek = () =>
    navigator.clipboard.writeText(calendarWeek.toString());

  const leapYearString = (year: number) =>
    leapYear(year)
      ? `${thisYear} is a leap year`
      : `${thisYear} is not a leap year`;

  return (
    <>
      <Heading as={"h1"}>Date tools</Heading>
      <div style={{ display: "grid", rowGap: "2rem" }}>
        <InputGroup>
          <InputLeftAddon children={"Calendar week"} />
          <Input defaultValue={calendarWeek} />
          <InputRightElement>
            <IconButton
              icon={<CopyIcon />}
              title="Copy"
              aria-label="Copy"
              onClick={copyCalendarWeek}
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
