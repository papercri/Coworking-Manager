import { getReservations } from "@/lib/getReservations";
import ReservationsClient from "@/components/ReservationsClient";

export default async function ReservationsPage() {
  const reservations = await getReservations();
 

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">
        Reservations
      </h2>

      <ReservationsClient reservations={reservations} />
    </section>
  );
}
