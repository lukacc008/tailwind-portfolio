// import React from "react";

// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function About() {
//   return (
//     <>
//       <div className="grid grid-cols-3 gap-4 bg-gray h-96">
//         <div className="col-span-1">
//           <Accordion sx={{ backgroundColor: '#393f4d', color: 'gold' }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//               <Typography>Tailwind</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 Tailwind CSS is a utility-first CSS framework for rapidly building
//                 custom designs.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </div>
//         <div className="col-span-1">
//           <Accordion>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//               <Typography>useRef</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 useRef is a Hook that returns a mutable ref object whose .current
//                 property is initialized to the passed argument (initialValue).
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </div>
//         <div className="col-span-1">
//           <Accordion>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//               <Typography>useState</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 useState is a Hook that lets you add state variables to functional
//                 components.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 gap-4 bg-gray h-96">
//         <div className="col-span-1">
//           <Accordion>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//               <Typography>SmoothScroll</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 SmoothScroll is a technique to animate the scrolling behavior of the
//                 webpage smoothly.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </div>
//         <div className="col-span-1">
//           <Accordion>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//               <Typography>AOS</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 Animate on Scroll is a library that allows you to animate elements
//                 as they enter or leave the viewport during scrolling.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </div>
//         <div className="col-span-1">
//           <Accordion>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//               <Typography>EmailJS</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 Library used for the Contact section, it allows users to send emails straight to me.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </div>
//       </div>
//     </>
//   );
// }



// const Accordion = styled((props) => (
  //   <MuiAccordion disableGutters elevation={0} square {...props} />
  // ))(({ theme }) => ({
    //   border: `1px solid ${theme.palette.divider}`,
    //   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&::before': {
  //     display: 'none',
  //   },
  // }));
  
  // const AccordionSummary = styled((props) => (
    //   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
  //   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
  //     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

// export default function CustomizedAccordions() {
//   const [expanded, setExpanded] = React.useState('panel1');

//   const handleChange = (panel) => (event, newExpanded) => {
  //     setExpanded(newExpanded ? panel : false);
  //   };
  import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

export default function About() {  
  return (
    <div>
      <div>
        <Accordion>
          <AccordionSummary>
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary>
            <Typography>Collapsible Group Item #2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary>
            <Typography>Collapsible Group Item #3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary>
            <Typography>Collapsible Group Item #4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary>
            <Typography>Collapsible Group Item #5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary>
            <Typography>Collapsible Group Item #6</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}