import { Avatar, Stack, Typography, Box, Divider } from "@mui/material";
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import "./Accepted.css";
import { useEffect, useState } from "react";
import { Lead } from "../../interfaces/Lead";
import leadService from "../../services/leadsService";
import { formatDate, formatPrice } from "../../utils/util";

const Accepted = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const data = await leadService.getAccepteds();
        setLeads(data);
      } catch (error) {
        console.error("Erro ao buscar leads", error);
      }
    };
    fetchLeads();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {leads.map((lead) => (
        <Box key={lead.id} className="box-invited" sx={{ boxShadow: 2, padding: 2 }}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }}>
              <Avatar className="avatar">P</Avatar>
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
              <Typography>
                <Typography component="span" sx={{ fontWeight: "bold" }}>{formatPrice(Number(lead.price))}</Typography>Lead Invitation
              </Typography>
            </Stack>
            <Divider />

            <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingLeft: 2 }} >
              <LocalPhoneOutlinedIcon /><Typography variant="body1" className="contact-text">{lead.contact.phone}</Typography>
              <MailOutlineOutlinedIcon /><Typography variant="body1" className="contact-text">{lead.contact.email}</Typography>
            </Stack>
            <Typography variant="body2" align="left" sx={{ paddingLeft: 2 }}>{lead.description}</Typography>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default Accepted;
