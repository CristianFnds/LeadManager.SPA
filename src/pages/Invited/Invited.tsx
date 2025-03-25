import { Avatar, Stack, Typography, Button, Divider, Box } from "@mui/material";
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import "../Invited/Invited.css";
import { formatDate,formatPrice } from "../../utils/util";
import useLeads from "./useLeads";

const Invited = () => {
     const { leads, handleAccept, handleDecline } = useLeads(); // Use o hook customizado

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {leads.map((lead) => (
                <Box key={lead.id} className="box-invited" sx={{ boxShadow: 2, padding: 2 }}>
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }}>
                            <Avatar className="avatar">{lead.contact.firstName?.charAt(0).toUpperCase()}</Avatar>
                            <Stack alignItems="flex-start">
                                <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                                    {lead.contact.firstName}
                                </Typography>
                                <Typography sx={{ fontSize: 14, color: "gray" }}>
                                    {formatDate(lead.dateCreated)}
                                </Typography>

                            </Stack>
                        </Stack>
                        <Divider />
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }} >
                            <PinDropOutlinedIcon />
                            <Typography variant="body1">{lead.suburb}</Typography>
                            <BusinessCenterOutlinedIcon />
                            <Typography variant="body1">{lead.category}</Typography>
                            <Typography variant="body1">Job ID: {lead.id}</Typography>
                        </Stack>
                        <Divider />
                        <Typography variant="body2" align="left" sx={{ paddingLeft: 2 }}>
                            {lead.description}
                        </Typography>
                        <Divider />
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }}>
                            <Button className="button-accepted"  onClick={()=>handleAccept(lead.id)}>Accepted</Button>
                            <Button className="button-decline"  onClick={()=>handleDecline(lead.id)}>Decline</Button>
                            <Typography variant="body1">
                                <Typography component="span" sx={{ fontWeight: "bold" }}>{formatPrice(Number(lead.price))}</Typography> Lead Invitation
                            </Typography>
                        </Stack>
                    </Stack>

                </Box>
            ))}
        </Box>
    );
};

export default Invited;
