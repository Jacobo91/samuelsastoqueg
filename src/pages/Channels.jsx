import { ImageList, ImageListItem, Typography } from "@mui/material";
import data from "../assets/channels"

export default function Channels(){
    return(
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    width: "100%"
                }}
            >
                <ImageList
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr)) !important",
                        padding: "8rem 2rem 2rem 2rem",
                    }}

                >
                    {
                        data.map(item => (
                            <ImageListItem
                                sx={{
                                    padding: "1rem"
                                }}
                            >
                                <img src={item.img} alt={item.name} />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        padding: "1rem",
                                        textAlign: "center"
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </div>
            <h2
                style={{
                    textAlign:"center",
                    marginBottom:"2rem",
                    padding:"0 2rem"
                }}
            >
                What are the channels for producing deliveries? And how do they benefit the team's work?
            </h2>
            <p
                style={{
                    maxWidth:"900px",
                    textAlign:"center",
                    margin:"0 auto",
                    padding:"0 2rem"
                }}
            >
                The use of technological tools can have multiple benefits for team work. For example, Excel is a very useful tool for handling large amounts of data and performing complex calculations, which can be valuable in projects involving statistics or budgets. Google Suite, on the other hand, allows for real-time collaboration and facilitates communication and organization of work by allowing for file sharing and comments from anywhere with internet access.

                Prezi is another technological tool that can help teams communicate their ideas more effectively and attractively, which can be especially useful in presentations. It also allows for real-time collaboration and the ability to add content and comments to enrich the presentation.

                Finally, WhatsApp is an application that can be useful for maintaining communication between team members, allowing for efficient task coordination and problem-solving. It also allows for quick and easy file sharing.

                Overall, the use of these technological tools can increase productivity and improve collaboration, communication, and organization of work in teams. This can result in better team performance and the achievement of high-quality results.
            </p>
        </div>
    )
}