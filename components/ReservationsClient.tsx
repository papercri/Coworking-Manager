"use client";

import { useState } from "react";
import { Reservation } from "@/types/reservation";
import ReservationCard from "./ReservationCard";
import ReservationForm from "./ReservationForm";
import Modal from "@/components/layout/Modal";
import ReservationFilters from "./ReservationFilters"; 

interface Props {
  reservations: Reservation[];
}

export default function ReservationsClient({ reservations }: Props) {
    const [filters, setFilters] = useState({
         sortOrder: "asc" as "asc" | "desc",
        status: "all",
        user: "",
    });
   const filteredReservations = reservations.filter((r) => {
    if (filters.status !== "all" && r.status !== filters.status) return false;
    if (filters.user && !r.userName.toLowerCase().includes(filters.user.toLowerCase())) return false;
    return true;
    });
    const sortedReservations = [...filteredReservations].sort((a, b) => {
    if (filters.sortOrder === "asc") {
        return a.date.localeCompare(b.date);
    } else {
        return b.date.localeCompare(a.date);
    }
    });

  const [selectedReservation, setSelectedReservation] =
    useState<Reservation | null>(null);

  function closeModal() {
    setSelectedReservation(null);
  }

  return (
    <>
    <ReservationFilters
        filters={filters}
        onChange={setFilters}
      />

      <div className="space-y-4">
        {sortedReservations.map((reservation) => (
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
