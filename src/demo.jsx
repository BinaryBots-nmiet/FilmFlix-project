import { Button, Badge } from "@material-tailwind/react";
import { FaDownload } from "react-icons/fa6";
import Header from "./_root/Layouts/Header";
import { MdError } from "react-icons/md";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

import { Alert } from "@material-tailwind/react";
import { IoNotifications } from "react-icons/io5";

const App = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full h-full min-h-screen">
      <Header />
      <div className="mt-12 p-8">
        <Button
          size="lg"
          color="blue"
          className="flex flex-row items-center capitalize font-sans"
        >
          <FaDownload />
          Download
        </Button>
      </div>

      <div className="p-8">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
      <div className="p-8">
        <Alert
          color="red"
          icon={<MdError />}
          className="flex flex-row items-center"
        >
          An error alert for showing message.
        </Alert>
      </div>
      <div className="p-8">
        <Badge content="20" overlap="circular" placement="top-right" withBorder>
          <Button className="rounded-full size-12 grid place-content-center text-xl">
            <IoNotifications />
          </Button>
        </Badge>
      </div>
    </div>
  );
};

export default App;
