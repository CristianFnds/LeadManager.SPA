import * as React from 'react';
import { Container, Tabs, Tab, Box ,Typography} from "@mui/material";
import Invited from "./Invited/Invited";
import Accepted from "./Accepted/Accepted";
import './Home.css';

function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return <Container>
          <Typography  variant="h2" sx={{ color: "white" }}> Lead Manager</Typography>
    <Container maxWidth="md" className="container" sx={{ width: "7000px", minHeight: "100vh" }}>
        
        <Box className="box" sx={{ borderBottom: 1, borderColor: 'divider', width: "100%", boxShadow: 2 }}>
            <Tabs value={value} onChange={handleChange} sx={{ "& .MuiTabs-indicator": { backgroundColor: "#ff5722", height: 3 } }}>
                <Tab label="Invited" className={value === 0 ? "tab-active" : "tab-default"} sx={{ borderRight: 1, borderColor: "divider" }} />
                <Tab label="Accepted" className={value === 1 ? "tab-active" : "tab-default"} />
            </Tabs>
        </Box>

        <Box sx={{ mt: 2, flexGrow: 1, minHeight: "500px", display: "flex", flexDirection: "column", }} >
            {value === 0 && <Invited />}
            {value === 1 && <Accepted />}
        </Box>
    </Container>
    </Container>
}

export default Home;
