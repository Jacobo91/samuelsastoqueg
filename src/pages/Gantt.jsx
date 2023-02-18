import tabla from "../assets/tabla.jpg"


export default function Gantt(){
    return(
        <div
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                margin:"8rem 0"
            }}
        >
            <img src={tabla} alt="diagrama de gantt" 
                width="60%"
                style={{
                    maxWidth:"900px"
                }}

            />
        </div>
    )
}