import React from "react";
import AppointmentComponent from "./AppointmentComponent";

const AppointmentsList = props => {
  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">Gestionar Citas</h2>
        <div className="appointments-list">
          {props.appointments.map(date => (
            <AppointmentComponent
              key={date.id}
              appointment={props.appointments}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsList;
