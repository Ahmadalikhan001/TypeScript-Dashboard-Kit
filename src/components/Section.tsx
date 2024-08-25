// src/components/Section.tsx
import React, { useState } from 'react';
import { Box, Typography, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from './Card';

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title }) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleToggle}>
        <IconButton>
          <ExpandMoreIcon sx={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', mr: 1 }} />
        </IconButton>
        <Typography variant="h6" color="#6A0DAD" onClick={handleToggle}>{title}</Typography>
      </Box>
      <Collapse in={open}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 3, mt: 2 }}>
          <Card title="Main System FTA" />
          <Card title="Automotive Camera" />
          <Card title="Dual Modular Redundant System" />
          <Card title="Operating System" />
        </Box>
      </Collapse>
    </Box>
  );
};

export default Section;
