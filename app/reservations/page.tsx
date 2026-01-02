import ReservationCard from "@/components/ReservationCard";
import { mockReservations } from "@/lib/mockReservations";

export default function ReservationsPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">
        Reservations
      </h2>

      <div className="space-y-4">
        {mockReservations.map((reservation) => (
          <ReservationCard
            key={reservation.id}
            reservation={reservation}
          />
        ))}
      </div>
    </section>
  );
}
