"use client";

import { useRouter } from "next/navigation";
import ReservationForm from "./ReservationForm";
import { Reservation } from "@/types/reservation";
interface Props {
  reservation?: Reservation;
}
export default function NewReservationClient({ reservation }: Props) {
  const router = useRouter();

  return (
    <ReservationForm
    initialData={reservation}
      onSuccess={() => {
        router.refresh();
      }}
    />
  );
}
