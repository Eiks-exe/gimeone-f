import { textDecoration } from '@chakra-ui/react';
import { CssBaselineProps, withTheme } from '@mui/material';
import { StyledComponent } from '@mui/styled-engine';
import { height, SxProps } from '@mui/system';
import * as React from 'react';
import { Style } from 'util';

export const navLinksStyle: SxProps  = {
    color:'white',
    cursor:'pointer',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    textDecoration:'none',
    height:'100%',
    width:'10%',
    textAlign: 'center',
    margin:'0px',
    
    ":active": {
        borderBottom: "3px solid #34baeb",
    }
}

