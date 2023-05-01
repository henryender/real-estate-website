import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';
import millify from 'millify';
import VerifiedIcon from '@mui/icons-material/Verified';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import Details from './Details';
export default function ActionAreaCard({ info, Text,details,setDetails }) {
    const [exID, setExID] = React.useState('')
   
    //Card DIsplay for Filter Options
    return (
        <>
        {details?(<Details exID={exID} setDetails={setDetails}/>):
        <div>
        {Text ? (<Box sx={{ width: "50%", height: "300px", margin: "auto" }}>
                <Typography variant='h6'> Welcome!, here you can find properties <br />with the defined filters above. <br />Please start by specifying the Purpose either Buy/Rent</Typography>
            </Box>) :
                (<Grid container spacing={1} sx={{marginBottom:'60px'}}>
                    {info.map((sell) =>

                        <Grid item lg={4} md={4} sm={6} xs={12}
                            onClick={() => {setExID(sell.externalId);setDetails(true)}}
                            key={sell.Id}>
                            <Card sx={{ maxWidth: 430 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={sell.coverPhoto}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" sx={{ marginRight: '30px' }} >
                                            <VerifiedIcon fontSize='medium'
                                                sx={{ color: 'green', marginRight: '10px', position: 'relative', top: "5px" }} />
                                            ${millify(sell.price)} {sell.rentFrequency ? <p>{sell.rentFrequency}</p> : ''}
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
                                </CardActionArea>
                            </Card>

                        </Grid>

                    )}
                </Grid>)}
        </div>}
    
        </>

    );
}