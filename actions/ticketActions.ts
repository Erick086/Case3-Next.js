"use server";
import { revalidatePath } from "next/cache";
import { addTicket } from "@/lib/storage";

export async function createTicket(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  if (!title) return;
  await addTicket({ title, description });
  revalidatePath("/");
}