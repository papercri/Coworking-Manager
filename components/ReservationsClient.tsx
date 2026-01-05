"use client";

import { useState } from "react";
import { Reservation } from "@/types/reservation";
import ReservationCard from "./ReservationCard";
import ReservationForm from "./ReservationForm";

interface Props {
  reservations: Reservation[];
}

export default function ReservationsClient({ reservations }: Props) {
  const [selectedReservation, setSelectedReservation] =
    useState<Reservation | null>(null);

  function closeModal() {
    setSelectedReservation(null);
  }

  return (
    <>
      <div className="space-y-4">
        {reservations.map((reservation) => (
          <button
            key={reservation.id}
            onClick={() => setSelectedReservation(reservation)}
            className="w-full text-left"
          >
            <ReservationCard reservation={reservation} />
          </button>
        ))}
      </div>

      {selectedReservation && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black/40 flex items-center justify-center"
        >
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">
              Edit reservation
            </h3>

            <ReservationForm
              initialData={selectedReservation}
              onSuccess={closeModal}
            />

            <button
              onClick={closeModal}
              className="mt-4 text-sm underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
