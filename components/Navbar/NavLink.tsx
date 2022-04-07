import * as React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';
import { Link as SLink } from "react-scroll";
import { navLinksStyle } from "./navStyles"
interface INavLinkProps {
  name: string;
  to : string;
}

const NavLink: React.FunctionComponent<INavLinkProps> = (props) => {
  return(
    <Grid item xs sx={navLinksStyle}>
      <SLink to={props.to}>
        <Typography >
          {props.name}
        </Typography>
      </SLink>
    </Grid>
  ) ;
};

export default NavLink;
