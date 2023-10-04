import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';

import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import image from './assets/free-plant-icon-1573-thumb.png'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const RedBar = styled(BorderLinearProgress)(({ theme }) => ({
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#ff0000',
  }
}));

const GreenBar = styled(BorderLinearProgress)(({ theme }) => ({
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#00FF00',
  }
}));

const plants = [
  {
    "name": "Plante 1",
    "id": 32,
    "moist": 60
  },
  {
    "name": "Plante 2",
    "id": 33,
    "moist": 40
  },
  {
    "name": "Plante 3",
    "id": 34,
    "moist": 75
  }
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const plantItems = plants.map((plant) =>
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <img src={image} style={{ width: '100%' }}></img>
      </Grid>
      <Grid item xs={10}>
        <p>{plant.name}</p>
        <GreenBar variant="determinate" value={plant.moist} />
      </Grid>
    </Grid>
  )

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {plantItems}
        </Grid>
      </Box>
    </Container>
  );
}