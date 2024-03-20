import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function About() {
  return (
    <div>
        <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Tailwind CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tailwind CSS is a utility-first CSS framework for rapidly building
            custom designs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>useRef</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            useRef is a Hook that returns a mutable ref object whose .current
            property is initialized to the passed argument (initialValue).
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>useState</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            useState is a Hook that lets you add state variables to functional
            components.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>SmoothScroll</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SmoothScroll is a technique to animate the scrolling behavior of the
            webpage smoothly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Animate on Scroll</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Animate on Scroll is a library that allows you to animate elements
            as they enter or leave the viewport during scrolling.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>EmailJS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Library used for the Contact section, it allows users to send emails straight to me.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}
