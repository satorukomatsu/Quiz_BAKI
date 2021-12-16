import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import topImage from '../images/baki_top.jpg'
import { StartButton } from './StartButton';

export const StartImage = () => {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container className="topImage" maxWidth="sm">
          <Box sx={{ height: '100vh', width: '100vh', margin: '0 auto' }} >
              <img src={topImage} alt="" />
              <StartButton />
            </Box>
        </Container>
      </React.Fragment>
    );
  }