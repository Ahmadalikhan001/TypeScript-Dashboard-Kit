import React from 'react';
import { Box, Typography, IconButton, SvgIcon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: 1,
        p: 2,
        boxShadow: 1,
        border: '2px solid #6A0DAD',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': { transform: 'translateY(-5px)', boxShadow: 2 },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" color="#6A0DAD" fontWeight="bold">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton>
            <EditIcon sx={{ color: '#6A0DAD' }} />
          </IconButton>
          <IconButton>
            <DeleteIcon sx={{ color: '#6A0DAD' }} />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body2" color="textSecondary" mb={2}>
        Last edited: 2 days ago
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ textAlign: 'center' }}>
          <SvgIcon component="svg" viewBox="0 0 24 24" fill="none" stroke="#6A0DAD" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
          </SvgIcon>
          <Typography variant="body2" color="#6A0DAD">42</Typography>
          <Typography variant="body2" color="textSecondary">Nodes</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <SvgIcon component="svg" viewBox="0 0 24 24" fill="none" stroke="#6A0DAD" strokeWidth="2">
            <path d="M7 20V4h10v16l-5-5-5 5z" />
          </SvgIcon>
          <Typography variant="body2" color="#6A0DAD">15</Typography>
          <Typography variant="body2" color="textSecondary">Gates</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <SvgIcon component="svg" viewBox="0 0 24 24" fill="none" stroke="#6A0DAD" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </SvgIcon>
          <Typography variant="body2" color="#6A0DAD">28</Typography>
          <Typography variant="body2" color="textSecondary">Requirements</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
