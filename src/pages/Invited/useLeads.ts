import { useState, useEffect } from "react";
import leadService from "../../services/leadsService"; // Ajuste o caminho conforme necessário
import { Lead } from "../../interfaces/Lead";

const useLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const fetchInviteds = async () => {
      try {
        const data = await leadService.getInviteds();
        setLeads(data);
      } catch (error) {
        console.error("Erro ao buscar leads", error);
      }
    };
    fetchInviteds();
  }, []);

  const handleAccept = async (leadId: number) => {
    try {
      await leadService.acceptLead(leadId);
      setLeads(prevLeads => prevLeads.filter(lead => lead.id !== leadId));
    } catch (error) {
      alert(error);
    }
  };

  const handleDecline = async (leadId: number) => {
    try {
      await leadService.declineLead(leadId);
      setLeads(prevLeads => prevLeads.filter(lead => lead.id !== leadId));
    } catch (error) {
      alert(error);
    }
  };

  return { leads, handleAccept, handleDecline };
};

export default useLeads;
