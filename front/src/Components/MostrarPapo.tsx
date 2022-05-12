import axios from "axios";
import { MouseEvent } from "react";
import * as ReactBootStrap from "react-bootstrap"

type ZapaProps={
    id?: string,
    marca: string,
    talla: number,
    color: string
  };

  export default function MostrarPapo(props: ZapaProps){

    async function HandleDelete(event: MouseEvent<HTMLButtonElement>){
      await axios.delete('http://localhost:3001/zapatos/'+props.id,{
        headers: {
          'Content-Type': 'application/json'
        }
      }
      
      
      );
      console.log(props);
      window.location.reload();
    }
    return (
    <ReactBootStrap.ListGroup  variant="flush">
    <ReactBootStrap.ListGroup.Item className="lt" > Marca: {props.marca} - Talla: {props.talla} - Color: {props.color}
    </ReactBootStrap.ListGroup.Item>
    
    
    <ReactBootStrap.Button  variant="dark " onClick={HandleDelete}>Eliminar</ReactBootStrap.Button>
    <br></br>
  </ReactBootStrap.ListGroup> 
    
    );
    
  }