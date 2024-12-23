
import React, { ReactNode } from 'react';
import Header from '../header';
import Footer from '../footer';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import SideBar from '../sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Wrapper = ({ children }: LayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile view detection

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* {/ {/ Header /} /} */}
      <Header />

      <Box sx={{ display: 'flex', flex: 1, marginTop: '64px'   }}>
        {/* {/ {/ Side Navigation /} /} */}
        <SideBar />

        {/* {/ {/ Main Content /} /} */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 2,
            backgroundColor: '#f9f9f9',
            overflow: 'auto', // Handles long content
          }}
        >
          {children}
        </Box>
      </Box>

      {/* {/ {/ Footer /} /} */}
      <Footer />
    </Box>
    </>
  );
};

export default Wrapper;
