"use client";

import { useState } from "react";
import { Reservation } from "@/types/reservation";
import ReservationCard from "./ReservationCard";
import ReservationForm from "./ReservationForm";
import Modal from "@/components/layout/Modal";

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
            className="w-full text-left cursor-pointer"
          >
            <ReservationCard reservation={reservation} />
          </button>
        ))}
      </div>

      {selectedReservation && (
        <Modal
            title="Edit reservation"
            onClose={() => setSelectedReservation(null)}
        >
            <ReservationForm
            initialData={selectedReservation}
            onSuccess={() => setSelectedReservation(null)}
            />
        </Modal>
      )}
    </>
  );
}
