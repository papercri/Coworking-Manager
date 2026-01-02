import { Reservation } from "@/types/reservation";
import StatusBadge from "./StatusBadge";

interface Props {
  reservation: Reservation;
}

export default function ReservationCard({ reservation }: Props) {
  return (
    <article className="bg-white rounded-lg border p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">
          {reservation.userName}
        </h3>
        <p className="text-sm text-gray-600">
          {reservation.spaceName} · {reservation.date}
        </p>
      </div>

      <StatusBadge status={reservation.status} />
    </article>
  );
}
