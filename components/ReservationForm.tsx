"use client";

import { useState } from "react";
import { Reservation, ReservationStatus } from "@/types/reservation";

interface Props {
  initialData?: Reservation;
  onSuccess: () => void;
}

export default function ReservationForm({ initialData, onSuccess }: Props) {
  const [userName, setUserName] = useState(initialData?.userName ?? "");
  const [spaceName, setSpaceName] = useState(initialData?.spaceName ?? "");
  const [date, setDate] = useState(initialData?.date ?? "");
  const [timeSlot, setTimeSlot] = useState<Reservation["timeSlot"]>(
    initialData?.timeSlot ?? "morning"
  );
  const [status, setStatus] = useState<ReservationStatus>(
    initialData?.status ?? "pending"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const reservationData = {
      userName,
      spaceName,
      date,
      timeSlot,
      status,
    };

    await fetch(
      initialData
        ? `http://localhost:4000/reservations/${initialData.id}`
        : "http://localhost:4000/reservations",
      {
        method: initialData ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      }
    );

    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">User</label>
        <input
          className="mt-1 w-full border rounded px-3 py-2"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Space</label>
        <input
          className="mt-1 w-full border rounded px-3 py-2"
          value={spaceName}
          onChange={(e) => setSpaceName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          className="mt-1 w-full border rounded px-3 py-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Time slot</label>
        <select
          className="mt-1 w-full border rounded px-3 py-2"
          value={timeSlot}
          onChange={(e) =>
            setTimeSlot(e.target.value as Reservation["timeSlot"])
          }
        >
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="full-day">Full day</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          className="mt-1 w-full border rounded px-3 py-2"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as ReservationStatus)
          }
        >
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded cursor-pointer"
      >
        {initialData ? "Update reservation" : "Create reservation"}
      </button>
    </form>
  );
}
