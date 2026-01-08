"use client";

import { Reservation } from "@/types/reservation";

interface Props {
  reservations: Reservation[];
  onSelect: (reservation: Reservation) => void;
}

export default function ReservationCalendar({
  reservations,
  onSelect,
}: Props) {
  const groupedByDate = reservations.reduce<Record<string, Reservation[]>>(
    (acc, reservation) => {
      acc[reservation.date] = acc[reservation.date] || [];
      acc[reservation.date].push(reservation);
      return acc;
    },
    {}
  );

  return (
    <div className="grid gap-6">
      {Object.entries(groupedByDate).map(([date, dayReservations]) => (
        <div key={date}>
          <h3 className="font-bold mb-2">{date}</h3>

          <div className="space-y-2">
            {dayReservations.map((reservation) => (
              <button
                key={reservation.id}
                onClick={() => onSelect(reservation)}
                className="w-full text-left border p-2 rounded"
              >
                {reservation.userName} — {reservation.status}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
