import * as React from 'react';
import styled, { Typography } from '@mui/material';

interface INavlogoProps {
    label: string;
}


const Navlogo: React.FunctionComponent<INavlogoProps> = (props) => {
  return(
      <Typography
        fontFamily={"Anton"}
        color="white"
        variant='h4'
      >
            {props.label? props.label : "companyName"} 
      </Typography>
  ) ;
};

export default Navlogo;
