"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Reservation } from "@/types/reservation";

interface Props {
  reservations: Reservation[];
  onSelectReservation?: (reservation: Reservation) => void;
}

export default function ReservationCalendar({
  reservations,
  onSelectReservation,
}: Props) {
  const events = reservations.map((r) => ({
    id: String(r.id),
    title: r.userName,
    date: r.date, // YYYY-MM-DD
    extendedProps: r,
  }));

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventClick={(info) => {
        const reservation = info.event.extendedProps as Reservation;
        onSelectReservation?.(reservation);
      }}
      height="auto"
    />
  );
}
