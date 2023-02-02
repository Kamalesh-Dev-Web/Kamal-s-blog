import { Grid } from '@mui/material';
import React from 'react';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

const NavBar = () => {
    return (<>
      <Grid sx={{height:'100vh', background:(theme)=>theme.palette.secondary.main}}>
        <Grid pt={5} container item xs={12} direction='column'  alignContent='center' >
       <AutoStoriesOutlinedIcon fontSize='large' sx={{color:(theme)=>theme.palette.text.primary}}/>
        </Grid>
      </Grid>
    </>);
}
 
export default NavBar;