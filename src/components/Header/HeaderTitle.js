import { React } from 'react';

import { Typography } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Box } from '@mui/system';

const HeaderTitle = () => {
    return (
        <Box display="flex" justifySelf="center">
            <MusicNoteIcon fontSize="large" />
            <Typography color="white" component="h1" variant="h4" ml={2}>Music Player</Typography>
        </Box>
    );
}

export default HeaderTitle;