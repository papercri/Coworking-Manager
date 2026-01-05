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
    const [filters, setFilters] = useState({
        date: "",
        status: "all",
        user: "",
    });
    const filteredReservations = reservations.filter((r) => {
    if (filters.status !== "all" && r.status !== filters.status)
        return false;

    if (filters.user && !r.userName.toLowerCase().includes(filters.user.toLowerCase()))
        return false;

    if (filters.date && r.date !== filters.date)
        return false;

    return true;
    });
  const [selectedReservation, setSelectedReservation] =
    useState<Reservation | null>(null);

  function closeModal() {
    setSelectedReservation(null);
  }

  return (
    <>
    <div className="flex gap-4 mb-6">
  <input
    type="date"
    value={filters.date}
    onChange={(e) =>
      setFilters({ ...filters, date: e.target.value })
    }
    className="border p-2 rounded"
  />

  <select
    value={filters.status}
    onChange={(e) =>
      setFilters({ ...filters, status: e.target.value })
    }
    className="border p-2 rounded"
  >
    <option value="all">All</option>
    <option value="confirmed">Confirmed</option>
    <option value="pending">Pending</option>
    <option value="cancelled">Cancelled</option>
  </select>

  <input
    type="text"
    placeholder="Filter by user"
    value={filters.user}
    onChange={(e) =>
      setFilters({ ...filters, user: e.target.value })
    }
    className="border p-2 rounded"
  />
</div>

      <div className="space-y-4">
        {filteredReservations.map((reservation) => (
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
