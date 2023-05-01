import * as React from 'react';
import Box from '@mui/material/Box';
import {Paper, Typography } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation';


export default function Footer() {
    return (
        <Box >
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
           <Typography variant='body2' sx={{margin:'10px'}}>&copy; 2023 Proxima,Inc</Typography>
        </BottomNavigation>
      </Paper>
        </Box>
    );
}