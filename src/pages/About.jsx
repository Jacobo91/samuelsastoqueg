import { Box, Typography } from '@mui/material';
import buildings from "../assets/b&wbuildings.jpg"
import { Typography } from '@mui/material';

export default function About(){
    return(
        <Box
            sx={{
                textAlign:"center",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                padding:"4rem"
            }}
        >
            <Typography
                variant="h3"
                padding="4rem 0 2rem 0"
            >
                Estancias Únicas
            </Typography>
            <Typography
                variant="h5"
                padding="2rem 0 4rem  0"
                sx={{ fontStyle:"italic" }}
            >
                "Ethics in action: Building a better future together."
            </Typography>
            <Box sx={{ 
                width:"60%"
            }}>
            <Typography
                variant="h5"
                padding="1rem 0 2rem  0"
                sx={{
                    textDecoration:"underline",
                    letterSpacing:"1px"
                }}
            >
                Ethics Code
            </Typography>
            <Typography
                variant="p"
                padding="2rem 0 2rem 0"
                sx={{
                    lineHeight: 1.5
                }}
            >
                As a university team, we believe in upholding ethical standards and treating all individuals with respect, honesty, and fairness. We value transparency and accountability in all our actions and prioritize the well-being and safety of all team members, customers, and partners. We strive to create a culture of inclusivity, collaboration, and continuous learning. In conducting our assessments, we will maintain integrity and comply with all applicable laws and regulations.
            </Typography>
            <Box
                sx={{ 
                    display:"block",
                    margin:"4rem auto",
                }}
            >
                
                <img 
                    src={buildings} 
                    alt="buildings"
                    style={{ maxWidth:"100%" }}
                    />
                <figcaption>This image identifies us</figcaption>
            </Box>
            </Box>
            <Typography
                variant="h5"
                padding="1rem 0 2rem  0"
                sx={{
                    textDecoration:"underline",
                    letterSpacing:"1px"
                }}
            >
                Business Model
            </Typography>
            <Typography
                variant="p"
                padding="2rem 0 2rem 0"
                sx={{
                    lineHeight: 1.5
                }}
            >
                Based on the recent statistics, Medellin has emerged as the preferred destination for both domestic and foreign tourists. In 2022, the city received approximately 1.4 million visitors, exceeding the projections set by the Medellin City Council by 200,000. Notably, these figures reveal that there is no specific peak season for visiting the city's numerous tourist attractions, which can be attributed to its extensive air connectivity with 18 international destinations across 12 countries and 24 domestic destinations with direct flights. This feat has earned Medellin recognition as Colombia's first smart tourism destination and the second in America.

In light of this data, I have identified an attractive business opportunity to create a unique hospitality experience through the conceptualization of innovative accommodation projects. Medellin's high tourism potential and its impressive connectivity to various regions of the world present an ideal environment to invest in the tourism and hospitality sector. By developing and implementing unique, innovative concepts, we can position ourselves as a leading player in the local and international hospitality industry.

Our business model will focus on leveraging the latest technological advancements to provide exceptional customer experiences, maximizing efficiency, and promoting sustainability. We intend to collaborate with local businesses, such as restaurants, tour operators, and transportation services, to create a comprehensive tourism package that provides visitors with an unforgettable experience.

In conclusion, the current tourism trends in Medellin present an exciting opportunity to invest in the tourism and hospitality sector. We aim to capitalize on these trends and create a leading, innovative, and sustainable hospitality brand that enhances the city's reputation as a smart tourism destination.
            </Typography>
            <Typography>
                nueva cosa aqui
            </Typography>
        </Box>
    )
}