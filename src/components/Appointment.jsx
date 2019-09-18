import React, { Component } from "react";
import uuid from "uuid";

const initialData = {
  data: {
    petName: "",
    ownerName: "",
    date: "",
    hour: "",
    cause: ""
  },
  error: false
};

class Appointment extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialData };
  }

  handleChange = e => {
    this.setState({
      data: { ...this.state.data,  [e.target.name]: e.target.value}
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { petName, ownerName, date, hour, cause } = this.state.data;

    if (
      petName === "" ||
      ownerName === "" ||
      date === "" ||
      hour === "" ||
      cause === ""
    ) {
      this.setState({ error: true });
      return;
    }

    const newAppointment = { ...this.state.data };
    newAppointment.id = uuid();

    this.props.createAppointment(newAppointment);

    this.setState({ ...initialData });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Crear nueva cita</h2>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos los campos son obligatorios
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre mascota"
                  name="petName"
                  onChange={this.handleChange}
                  value={this.state.data.petName}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño"
                  name="ownerName"
                  onChange={this.handleChange}
                  value={this.state.data.ownerName}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.data.date}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hour"
                  onChange={this.handleChange}
                  value={this.state.data.hour}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Motivo Visita
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  name="cause"
                  rows="2"
                  className="form-control"
                  placeholder="Descripción de los sintomas"
                  onChange={this.handleChange}
                  value={this.state.data.cause}
                ></textarea>
              </div>
            </div>

            <div className="form-group d-flex justify-content-end">
              <input
                type="submit"
                className="py-2 mt-2 btn btn-success"
                value="Guardar"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Appointment;
