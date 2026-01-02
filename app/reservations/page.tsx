import ReservationCard from "@/components/ReservationCard";
import { getReservations } from "@/lib/getReservations";

export default async function ReservationsPage() {
  const reservations = await getReservations();

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">
        Reservations
      </h2>

      {reservations.length === 0 ? (
        <p className="text-gray-600">
          No reservations found
        </p>
      ) : (
        <div className="space-y-4">
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
            />
          ))}
        </div>
      )}
    </section>
  );
}
