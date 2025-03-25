import { Contact } from "./Contact";

export interface Lead {
  id: number;
  contactId: number;
  suburb: string;
  category: string;
  description: string;
  price: number;
  dateCreated: string;
  contact : Contact
}