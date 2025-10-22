import React from "react";
import "./App.css";
import Boton from "./componentes/Boton";
import Logo from "./imagenes/Logo.jpg";
import Contador from "./componentes/Contador";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0,
    };
    
    this.manejarClic = this.manejarClic.bind(this);
    this.ReiniciarContador = this.ReiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  ReiniciarContador() {
    this.setState({ numClics: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className="logo-contenedor">
          <img className="logo" src={Logo} alt="Logo Gato" />
        </div>
        <div className="contenedor-principal">
          <Contador numClics={this.state.numClics} />

          <Boton
            texto="Clic"
            esBotonDeClic={true}
            manejarClic={this.manejarClic}
          />

          <Boton
            texto="Reiniciar"
            esBotonDeClic={false}
            manejarClic={this.ReiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;
