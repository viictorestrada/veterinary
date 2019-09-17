import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Appointment from "./components/Appointment";
import AppointmentsList from "./components/AppointmentsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    };
  }

  createAppointment = data => {
    const appointments = [...this.state.appointments, data];
    this.setState({ appointments });
  };

  render() {
    return (
      <div className="container">
        <Header title="Administrador de pacientes veterinaria" />
        <div className="row">
          <div className="col-sm-10 mx-auto">
            <Appointment createAppointment={this.createAppointment} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <AppointmentsList appointments={this.state.appointments} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
