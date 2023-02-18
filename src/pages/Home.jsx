import { Box,  ImageList, ImageListItem, ImageListItemBar, Typography, IconButton } from '@mui/material';
import { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';


export default function Home(){
    const [rental, setRental] = useState([]);
    useEffect(() => {
        fetchData()
    }, []);
    const baseUrl = "https://my-json-server.typicode.com/Jacobo91/rentals/rentals";
    const fetchData = async() => {
        
        try{
            const response = await fetch(baseUrl);
            if (response.ok){
                const jsonResponse = await response.json();
                setRental(jsonResponse)
                console.log(jsonResponse)
            }
        }
        catch(error){
            console.log(error)
        }
    }


    return(
        <Box>
            <Typography variant='h5'
                sx={{
                    padding:"8rem 2rem 2rem 2rem",
                    textAlign:"center"
                }}
            >
            Our new company in Medellin is focused on offering unique and memorable stays that go beyond just providing accommodation. We are passionate about creating exceptional experiences for our guests, and our team is committed to going above and beyond to ensure that every guest has an unforgettable stay.
            </Typography>
            <ImageList
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr)) !important",
                    gridAutoRows: "340px",
                    padding: "2rem",
                    
                }}
            >
                {
                    rental.map(item => (
                        <ImageListItem sx={{ height: "auto" }}>
                            <img src={item.img} alt={item.title}
                                width="100%"
                                height="100%"
                                object-fit="cover"
                            />
                            
                            <ImageListItemBar title={item.rating}/>
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </Box>
    )
}

