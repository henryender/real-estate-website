import React from 'react'
import { Box} from '@mui/material'
import { styled, Paper } from '@mui/material';
import BasicSelect from '../utils/Select';


function Buy() {
  const Wrap = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  }));

  return (

    <Wrap>
      <Box sx={{marginTop:'80px'}}>
            
           <BasicSelect/>
       
      </Box>
    </Wrap>




  )
}

export default Buy
