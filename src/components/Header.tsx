// src/components/Header.tsx
import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Add as AddIcon, Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'white', color: '#6A0DAD', p: 2, borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h4" fontWeight="bold">PathFinder</Typography>
      <Box>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} sx={{ mr: 1 }}>+ New Analysis</Button>
        <Button variant="contained" color="primary" startIcon={<SearchIcon />} sx={{ mr: 1 }}>+ Ask PathFinder AI</Button>
        <Button variant="contained" color="primary" startIcon={<MenuIcon />} />
      </Box>
    </Box>
  );
};

export default Header;
