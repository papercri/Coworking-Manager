"use client";

interface FiltersProps {
  filters: {
    sortOrder: "asc" | "desc";
    status: string;
    user: string;
  };
  onChange: (newFilters: {
    sortOrder: "asc" | "desc";
    status: string;
    user: string;
  }) => void;
}

export default function ReservationFilters({ filters, onChange }: FiltersProps) {
  const toggleSort = () => {
    onChange({
      ...filters,
      sortOrder: filters.sortOrder === "asc" ? "desc" : "asc",
    });
  };

  return (
    <div className="flex gap-4 mb-6 items-center">
      {/* Botón de orden */}
      <button
        onClick={toggleSort}
        className="border p-2 rounded flex items-center gap-1"
      >
        Order
        {filters.sortOrder === "asc" ? "↑" : "↓"}
      </button>

      {/* Filtro por estado */}
      <select
        value={filters.status}
        onChange={(e) => onChange({ ...filters, status: e.target.value })}
        className="border p-2 rounded"
      >
        <option value="all">All</option>
        <option value="confirmed">Confirmed</option>
        <option value="pending">Pending</option>
        <option value="cancelled">Cancelled</option>
      </select>

      {/* Filtro por usuario */}
      <input
        type="text"
        placeholder="Filter by user"
        value={filters.user}
        onChange={(e) => onChange({ ...filters, user: e.target.value })}
        className="border p-2 rounded"
      />
    </div>
  );
}
