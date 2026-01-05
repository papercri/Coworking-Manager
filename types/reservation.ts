export type ReservationStatus =
  | "pending"
  | "confirmed"
  | "cancelled";

export interface Reservation {
  id: number;
  userName: string;
  spaceName: string;
  sortOrder: string;
  date: string; // YYYY-MM-DD
  timeSlot: "morning" | "afternoon" | "full-day";
  status: ReservationStatus;
}
