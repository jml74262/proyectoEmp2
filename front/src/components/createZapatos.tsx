import axios from "axios";
import { ChangeEvent, MouseEvent, useState } from "react";
import Zapato from "../models/zapato";
import * as ReactBootStrap from "react-bootstrap"

export default function CreateZapatoForm() {
  const [id, setid] = useState('');
  const [marca, setmarca] = useState('');
  const [talla, settalla] = useState(0);
  const [color, setcolor]= useState('');

  function HandleidChange(event: ChangeEvent<HTMLInputElement>){
    const newValueId=event.target.value;
    setid(newValueId);
  }
  function HandlemarcaChange(event: ChangeEvent<HTMLInputElement>){
    const newValue=event.target.value;
    setmarca(newValue);
  }
  function HandletallaChange(event: ChangeEvent<HTMLInputElement>){
    const newValue=event.target.value;
    settalla(parseInt(newValue));
  }
  function HandlecolorChange(event: ChangeEvent<HTMLInputElement>){
    const newValue=event.target.value;
    setcolor(newValue);
  }
  async function HandleSave(event: MouseEvent<HTMLButtonElement>){
    event.preventDefault();
    const zapatoToCreate = new Zapato(id,marca,talla,color);
    
    await createZapato(zapatoToCreate);
    clearForm();
    window.alert('Se creo el zapato');

    window.location.reload();
    
  }

async function createZapato(zapato: Zapato){
  await axios.post('http://localhost:3001/zapatos',zapato,{
    headers: {
      'Content-Type': 'application/json'
    }
  }
  );
  
}
  function clearForm(){
    settalla(0);
    setmarca('');
    setid('');
    setcolor('');
  }

  return (
    

    <ReactBootStrap.Form>
      <ReactBootStrap.Form.Label class="fw-bold color" >Crear nuevo Zapato</ReactBootStrap.Form.Label>
      <br />
      <br />
      
       <ReactBootStrap.Form.Group>
       <ReactBootStrap.Form.Label class="color">Código del calzado</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control  className="text-muted" placeholder="id" value={id} onChange={HandleidChange}/>
    <br />
    <ReactBootStrap.Form.Label class="color" >Marca del Zapato</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control className="text-muted" placeholder="marca" value={marca} onChange={HandlemarcaChange}/>
    
    <br />
    <ReactBootStrap.Form.Label class="color" >Talla </ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control className="text-muted"  type="number" placeholder="talla" value={talla} onChange={HandletallaChange}/>
    
    <br />
    <ReactBootStrap.Form.Label class="color" >Color </ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control className="text-muted" placeholder="color" value={color} onChange={HandlecolorChange}/>
   </ReactBootStrap.Form.Group>
    <br />
    
  
    <ReactBootStrap.Button  variant="dark"  onClick={HandleSave}>
      Crear
    </ReactBootStrap.Button>
  </ReactBootStrap.Form>


  );
}