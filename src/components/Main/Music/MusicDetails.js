import React, { useContext } from "react";
import { Box } from '@mui/system';
import { Typography } from "@mui/material";
import { Contexts } from './../../../context/Context';

const MusicDetails = (props) => {

    const { activeSong } = useContext(Contexts)

    return (
        <Box
            textAlign="center"
        >
            <Typography variant="h5" component="h2">{activeSong?.name}</Typography>
            <Typography mb={5} variant="subtitle1" component="h3">{activeSong?.artist}</Typography>
        </Box>
    );
}

export default MusicDetails;