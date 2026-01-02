import { ReservationStatus } from "@/types/reservation";

interface Props {
  status: ReservationStatus;
}

export default function StatusBadge({ status }: Props) {
  const styles = {
    confirmed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
