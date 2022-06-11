import { Box, createTheme, Stack,ThemeProvider } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Feed from "./Feed";
import AddPost from "./AddPost";
import { useState } from "react";



function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar mode={mode} setmode={setMode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <AddPost />
    </Box>
    </ThemeProvider>
  );
}

export default App;
