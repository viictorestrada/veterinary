import React from "react";

const AppointmentComponent = ({ appointment }) => {
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3 className="mt-0">{appointment.petName}</h3>
      </div>
    </div>
  );
};

export default AppointmentComponent;
