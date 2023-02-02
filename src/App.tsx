import React from 'react';
import './App.css';
import { Grid, Typography } from '@mui/material';
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import NavBar from './components/navbar/NavBar';
import BlogsView from './containers/blogsView/BlogsView';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Grid container  sx={{background:(theme)=>theme.palette.primary.main}}>
      <Grid item xs={0.7}>
      <NavBar/>
      </Grid>
      <Grid  pl={3} item xs={11.3}>
        <Grid pt={5}>
         <Typography variant='h1'>Kamal's blog</Typography>
        </Grid>
        <Grid>
          <BlogsView/>
        </Grid>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}

export default App;
