"use client";

import { Reservation, ReservationStatus } from "@/types/reservation";
import NewReservationClient from "@/components/NewReservationClient";

export default function BookPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">
        Book a Reservation
      </h2>

      <NewReservationClient />
    </section>
  );
}
