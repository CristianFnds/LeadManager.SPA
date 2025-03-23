import { Avatar, Stack, Typography, Box, Divider } from "@mui/material";
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import "./Accepted.css";
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
  }
];

const Accepted = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    {leads.map((lead) => (
        <Box key={lead.id} className="box-invited" sx={{ boxShadow: 2,padding: 2}}>

      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }}>
          <Avatar className="avatar">P</Avatar>
          <Stack alignItems="flex-start">
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
              Pete
            </Typography>
            <Typography sx={{ fontSize: 14, color: "gray" }}>
              January 4 @ 2:37 pm
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }} >
          <PinDropOutlinedIcon />
          <Typography variant="body1">Carramar 6031</Typography>
          <BusinessCenterOutlinedIcon />
          <Typography variant="body1">General Building Work</Typography>
          <Typography variant="body1">Job ID: 557742ss1</Typography>
          <Typography>
            <Typography component="span" sx={{ fontWeight: "bold" }}>$63.00 </Typography>Lead Invitation
          </Typography>
        </Stack>
        <Divider />

        <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }} >
          <LocalPhoneOutlinedIcon /><Typography variant="body1"  className="contact-text">28 99999-6720</Typography>
          <MailOutlineOutlinedIcon /><Typography variant="body1"  className="contact-text">another.fake@hipmail.com</Typography>
        </Stack>
        <Typography variant="body2" align="left" sx={{ paddingLeft: 2 }}>
          Plaster exposed brick walls (see photos), square off 2 archways (see photos), and expand pantry (see photos)
        </Typography>

      </Stack>
      </Box>
    ))}
</Box>
  );
};

export default Accepted;
