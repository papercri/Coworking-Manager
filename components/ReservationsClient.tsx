"use client";

import { useState } from "react";
import { Reservation } from "@/types/reservation";
import ReservationCard from "./ReservationCard";
import ReservationForm from "./ReservationForm";
import Modal from "@/components/layout/Modal";
import ReservationFilters from "./ReservationFilters"; 
import ReservationCalendar from "./ReservationCalendar";

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
  const [view, setView] = useState<"list" | "calendar">("list");
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
      {/* Calendar switcher */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setView("list")}
          className={`px-3 py-1 border rounded ${
            view === "list" ? "bg-black text-white" : ""
          }`}
        >
          List
        </button>

        <button
          onClick={() => setView("calendar")}
          className={`px-3 py-1 border rounded ${
            view === "calendar" ? "bg-black text-white" : ""
          }`}
        >
          Calendar
        </button>
      </div>



        {view === "list" ? (
          <div className="space-y-4">
            {sortedReservations.map((reservation) => (
              <button
                key={reservation.id}
                onClick={() => setSelectedReservation(reservation)}
                className="w-full text-left"
              >
                <ReservationCard reservation={reservation} />
              </button>
            ))}
          </div>
        ) : (
          <ReservationCalendar
            reservations={filteredReservations}
            onSelectReservation={(r) => setSelectedReservation(r)}
          />
        )}


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
