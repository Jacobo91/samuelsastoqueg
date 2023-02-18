import { Box, ImageListItem, Typography } from '@mui/material';
import foto from "../assets/photo.jpg"

export default function Team(){
    return(
        <Box
            sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                margin:"8rem"
            }}
        >
            <ImageListItem
                sx={{
                    width:"400px",
                    height:"400px",
                    textAlign:"center"
                }}
            >
            <img src={foto} style={{ 
                width:"300px",
                height:"300px",
                borderRadius:"50%",
                display:"block",
                margin:"0 auto"
                }}/>
                <Box>
                    <Typography
                        variant="h4"
                        padding="2rem 0"
                    >   
                        Samuel Sastoque
                    </Typography>
                </Box>
            </ImageListItem>
            <Typography
                sx={{
                    textAlign:"center",
                    width:"80%",
                    maxWidth:"600px"
                }}
            >
                    Samuel Sastoque is a successful entrepreneur. He is a highly disciplined and reliable person with strong ethical values that are reflected in his businesses. He owns four companies, three in the field of nightlife entertainment and one distributing imported tobacco products for hookah, in which he is the authorized distributor of different brands at a national level. Additionally, he is in the process of creating a new company which is the proposed study for this project. As a pilot by profession, he has flown to different parts of the world, finding business ideas and experiencing different cultures. He is also studying international business to improve his business skills. Furthermore, he is an animal lover and greatly enjoys what he currently does.
            </Typography>
        </Box>
    )
}