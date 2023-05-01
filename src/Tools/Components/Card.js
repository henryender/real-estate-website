import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import millify from 'millify';

//Display Card for Rent Section on the Home Page
export default function MediaCard({ rent }) {


    return (
        <>
            <Grid container spacing={1} >
                {rent.map((sell) =>
                    <Grid item lg={4} md={6} sm={6} xs={12} key={sell.Id}>
                        <Card sx={{ maxWidth: 430 }}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={sell.coverPhoto}
                                title="coverphoto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ marginRight: '40px' }} >
                                    <VerifiedIcon fontSize='medium'
                                        sx={{ color: 'green', marginRight: '10px', position: 'relative', top: "5px" }} />
                                    {millify(sell.price)}/{sell.rentFrequency}
                                </Typography>

                                <Typography sx={{ fontSize: '13px' }} ><strong>{sell.agency}</strong></Typography>

                                <Box sx={{ display: "flex" }} >

                                    <Typography variant='body2' sx={{ marginLeft: '20px' }} >{sell.baths}
                                        <BathtubIcon fontSize='medium' color='primary' sx={{ position: 'relative', top: "5px" }} /> </Typography>

                                    <Typography variant='body2' sx={{ marginLeft: '120px' }} >
                                        <BedIcon fontSize='medium' color='primary' sx={{ position: 'relative', top: "5px" }} />{sell.rooms}</Typography>

                                    <Typography variant='body2' sx={{ marginLeft: '70px' }} ><ViewCompactIcon fontSize='medium' color='primary' sx={{ position: 'relative', top: "5px" }} />{millify(sell.area)}/sqkm</Typography>
                                </Box>

                                <Typography sx={{ fontSize: '13px' }}>{sell.title}</Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </>

    );
}