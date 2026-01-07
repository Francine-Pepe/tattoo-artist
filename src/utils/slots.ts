export const generateSlots = (
  startHour = 10,
  endHour = 18,
  intervalMinutes = 60
) => {
  const slots: string[] = [];

  for (let h = startHour; h < endHour; h++) {
    slots.push(`${String(h).padStart(2, "0")}:00`);
  }

  return slots;
};
