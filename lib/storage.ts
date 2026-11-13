import fs from "fs/promises";
import path from "path";
import { Ticket } from "@/types/ticket";

const filePath = path.join(process.cwd(), "data", "tickets.json");

async function readTickets(): Promise<Ticket[]> {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getTickets(): Promise<Ticket[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // delay falso
  return readTickets();
}

export async function addTicket(
  newTicketData: Omit<Ticket, "id" | "createdAt" | "status">
): Promise<void> {
  const tickets = await readTickets();
  const newTicket: Ticket = {
    ...newTicketData,
    id: "tkt-" + Date.now(),
    status: "Aberto",
    createdAt: new Date().toISOString(),
  };
  tickets.unshift(newTicket); // novo ticket aparece primeiro
  await fs.writeFile(filePath, JSON.stringify(tickets, null, 2), "utf-8");
}