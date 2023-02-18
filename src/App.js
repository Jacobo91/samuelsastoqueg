import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Sop from "./pages/Sop";
import Channels from "./pages/Channels";
import Gantt from "./pages/Gantt"


function App() {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/samuelsastoqueg" element={<Home/>}/>
        <Route path="/samuelsastoqueg/about" element={<About/>}/>
        <Route path="/samuelsastoqueg/team" element={<Team/>}/>
        <Route path="/samuelsastoqueg/sop" element={<Sop/>}/>
        <Route path="/samuelsastoqueg/channels" element={<Channels/>}/>
        <Route path="/samuelsastoqueg/gantt" element={<Gantt/>}/>
      </Routes>
    </Box>
  );
}

export default App;
