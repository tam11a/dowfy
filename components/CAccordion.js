import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

const CAccordion = ({title, description}) => {
    const [expended, setExpended] = React.useState(false);
  return (
    <Accordion 
    square={true}
    elevation={0}
    sx={{
        width: '100%',
        borderRadius: '4px',
        overflow: 'hidden',
        bgcolor: 'black.dark',
        color: 'white.dark',
        "& *": {
            color: 'white.dark'
        },
        my: 1
    }}
    onChange={(e, expended) => setExpended(expended)}
    >
       <AccordionSummary
          expandIcon={expended ? <AiOutlineMinus /> : <AiOutlinePlus />}
          // aria-controls="panel1a-content"
          // id="panel1a-header"
        >
          <Typography variant='subtitle2' sx={{fontWeight: '600'}}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='subtitle2' sx={{fontWeight: 'light'}}>
            {description}
          </Typography>
        </AccordionDetails>
       </Accordion>
  )
}

export default CAccordion