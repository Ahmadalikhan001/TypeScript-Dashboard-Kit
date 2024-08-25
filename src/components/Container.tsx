// src/components/Container.tsx
import React from 'react';
import { Container as MuiContainer } from '@mui/material';

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MuiContainer maxWidth="lg" sx={{ mt: 2, mb: 2, p: 2, backgroundColor: '#FFFFFF', borderRadius: 2, boxShadow: 1 }}>
      {children}
    </MuiContainer>
  );
};

export default Container;
