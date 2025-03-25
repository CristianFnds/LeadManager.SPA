import api from "./api";
import { Lead } from "../interfaces/Lead";

const leadService = {
  getAll: async (): Promise<Lead[]> => {
    const response = await api.get("/all");
    return response.data;
  },

  getInviteds: async (): Promise<Lead[]> => {
    const response = await api.get(`/inviteds`);
    return response.data;
  },

  getAccepteds: async (): Promise<Lead[]> => {
    const response = await api.get(`/accepteds`);
    return response.data;
  },

  acceptLead: async (leadId: number): Promise<void> => {
    const response = await api.put(`/${leadId}/accept`);
    console.log(response);
    if (response.status !== 204) {
      throw new Error(`Failed to accept lead with ID: ${leadId}`);
    }
  },

  declineLead: async (leadId: number): Promise<void> => {
    const response = await api.put(`/${leadId}/reject`);
    console.log(response);
    if (response.status !== 204) {
      throw new Error(`Failed to accept lead with ID: ${leadId}`);
    }
  }
};

export default leadService;
