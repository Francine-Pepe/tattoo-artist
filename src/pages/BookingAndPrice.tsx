import DateTimePicker from "../components/dateTimePicker/DateTimePicker";
import SimpleText from "../components/props/SimpleText";
import { appointmentTextData } from "../data";

function AppointmentsAndPrice() {
  return (
    <main className="booking-container container">
      <section className="booking-text">
        <SimpleText text={appointmentTextData.text} />
      </section>

      <DateTimePicker />
    </main>
  );
}

export default AppointmentsAndPrice;
