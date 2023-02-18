import data from "../assets/sop";
import { Typography } from "@mui/material"


import { Box } from '@mui/material';

export default function Sop(){
    return(
        <Box
            sx={{
                padding:"8rem 2rem 4rem 2rem",
                textAlign:"center",
                display:"grid"
            }}
        >
            {
                data.map(item => (
                    <Box>
                        <Box>
                            <Typography 
                                variant="h5"
                                sx={{ 
                                    padding:"2rem 0",
                                    textDecoration:"underline" 
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography 
                                variant="p"
                                sx={{
                                paddingBottom:"2rem",
                                }}  
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}