// src/App.tsx
import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Section from './components/Section';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 2, p: 2, backgroundColor: '#FFFFFF', borderRadius: 2, boxShadow: 1 }}>
      <CssBaseline />
      <Header />
      <SearchBar />
      <Section title="PathFinder Library" />
      <hr style={{ border: '0', height: '2px', background: 'linear-gradient(to right, #6A0DAD, #F0F0FF)', margin: '40px 0', borderRadius: '5px' }} />
      <Section title="User Library" />
    </Container>
  );
};

export default App;
