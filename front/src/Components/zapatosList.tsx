import axios from "axios";
import { useState, useEffect   } from "react";
import Zapato from "../models/zapato";
import MostrarPapo from "./MostrarPapo";


export default function ZapatoList() {
  const [ zapato, setZapato ] = useState<Zapato[]>([]); 
  const [ Loaded, setLoaded ] = useState<boolean>(false);

  async function getZapatos() {
    const response  = await axios.get('http://localhost:3001/zapatos');
    setZapato(
      response.data.map((z: Zapato) => new Zapato(z.id, z.marca,z.talla,z.color))
    );
    setLoaded(true);
  }

  useEffect(()=>{
  if(!Loaded){    
    getZapatos();
  }
  setLoaded(true);

  }, [zapato, Loaded]);

  // agregar elemento key para que reac haga un render eficiente
  const renderZapato = () => zapato.map(p => (
    <MostrarPapo key={p.id} id={p.id} marca={p.marca} talla={p.talla} color={p.color}/>
  ));

   
    
  return (
  <div>{renderZapato()}
  
  </div>
  );
}