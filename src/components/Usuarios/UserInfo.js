import {Card } from "tailwindcss"
import CardBody from "./CardBody"
import CardHeader from "./CardHeader"


const UserInfo = () => {
    return (
      <Card>
        <CardHeader>
          <h2>Información del usuario</h2>
        </CardHeader>
        <CardBody>
          <h3>Nombre</h3>
          <p>Jennifer Plaza</p>
          <h3>Edad</h3>
          <p>36</p>
          <h3>Peso</h3>
          <p>90 kg</p>
        </CardBody>
      </Card>
    );
  };

  
  export default UserInfo;