
import { Avatar, Stack, Typography, Button, Divider, Box } from "@mui/material";
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import "../Invited/Invited.css";

const leads = [
    {
        id: 1,
        name: "Bill",
        date: "January 4 @ 2:37 pm",
        location: "Yanderra 2574",
        profession: "Painters",
        jobId: "5577421",
        description: "Need to paint 22 aluminum windows and sliding glass door.",
        price: "$63.00"
    },
    {
        id: 2,
        name: "John",
        date: "March 10 @ 4:20 pm",
        location: "New York 10001",
        profession: "Plumber",
        jobId: "998877",
        description: "Fix leaking pipes in the kitchen.",
        price: "$45.50"
    },
    {
        id: 2,
        name: "John",
        date: "March 10 @ 4:20 pm",
        location: "New York 10001",
        profession: "Plumber",
        jobId: "998877",
        description: "Fix leaking pipes in the kitchen.",
        price: "$45.50"
    }
];



const Invited = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {leads.map((lead) => (
            <Box key={lead.id} className="box-invited" sx={{ boxShadow: 2,padding: 2}}>
            <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }}>
                    <Avatar className="avatar">B</Avatar>
                    <Stack alignItems="flex-start">
                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                            Bill
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: "gray" }}>
                            January 4 @ 2:37 pm
                        </Typography>
                    </Stack>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }} >
                    <PinDropOutlinedIcon />
                    <Typography variant="body1">Yanderra 2574</Typography>
                    <BusinessCenterOutlinedIcon />
                    <Typography variant="body1">Painters</Typography>
                    <Typography variant="body1">Job ID: 5577421</Typography>
                </Stack>
                <Divider />
                <Typography variant="body2" align="left" sx={{ paddingLeft: 2 }}>
                    Need to paint 22 aluminum windows and sliding glass door.
                </Typography>
                <Divider />
                <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }}>
                    <Button className="button-accepted">Accepted</Button>
                    <Button className="button-decline">Decline</Button>
                    <Typography variant="body1">
                        <Typography component="span" sx={{ fontWeight: "bold" }}>$63.00</Typography> Lead Invitation
                    </Typography>
                </Stack>
            </Stack>
        
        </Box>
    ))}
</Box>
    );
};

export default Invited;
