import React from 'react'
import {Divider, Typography} from "@mui/material"

const Title = ({text, ...others}) => {
  return (
    <Divider sx={{
        width: '100%',
        "&::before":{
          borderColor: '#ffffff22',
          borderTopWidth: '2px'
        },
        "&::after":{
          borderColor: '#ffffff22',
          borderTopWidth: '2px'
        },
        m: 0
      }}
      textAlign={'left'}
      variant={'inset'}
      
      >
        <Typography variant={'body1'}>{text}</Typography>
      </Divider>
  )
}

export default Title