import { useState } from "react";
import AppointmentsForm from "../components/appointments/AppointmentsForm";
import AppointmentsList from "../components/appointments/AppointmentsList";

const Appointments = () => {
    const [appointments, setAppointments] = useState([])
    const [appointmentSelected, setAppointmentSelected] = useState({})
    const handleSaveAppointment = (form) => {
        // Guardando lo que nos entrega el AppointmentForm en el estado appointments
        console.log(form);
        setAppointments([...appointments, form])
    }
    const handleRemove = (id) => {
        console.log('handleRemove', id);
        const newAppointments = appointments.filter(
            appointment => appointment.id !== id
        )
        setAppointments(newAppointments)
    }
    const handleEdit = (appointment) => {
        // Actualizando el estado cita seleccionada
        setAppointmentSelected(appointment)
    }
  return (
    <>
    {/*JSON.stringify(appointments)*/}
      <AppointmentsForm onSaveAppointment={handleSaveAppointment} appointment={appointmentSelected}/>
      <AppointmentsList  appointments={appointments} onRemove={handleRemove} onEdit={handleEdit}/>
    </>
  );
};

export default Appointments;
