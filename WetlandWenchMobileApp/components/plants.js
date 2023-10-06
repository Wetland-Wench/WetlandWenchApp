import React, { useState, useEffect } from 'react';

import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import image from '../assets/free-plant-icon-1573-thumb.png'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

class PlantsList extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            plants: []
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/get_address/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        plants: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
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

        const plantItems = this.state.plants.map((plant) =>
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
                        <div  style = {{padding: '40px 0 0 0'}}>
                            {plantItems}
                        </div>
                    </Grid>
                </Box>
            </Container>
        );
    }
}

export default PlantsList;