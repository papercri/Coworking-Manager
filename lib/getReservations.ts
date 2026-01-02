import { Reservation } from "@/types/reservation";

export async function getReservations(): Promise<Reservation[]> {
  const res = await fetch("http://localhost:4000/reservations", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch reservations");
  }

  return res.json();
}
