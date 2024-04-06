import { useState, useRef } from "react";
import PostHeader from "../../../components/PostHeader";
import SimpleCard from "../../../components/SimpleCard";

function UncontrolledComponent() {

    const inputRef = useRef();

    function submitUncontrolledComponent(e){
        e.preventDefault();
        window.alert(`Você enviou o formulário da turma: ${inputRef.current.value}`);

    }
 return (
    <form onSubmit={e=>submitUncontrolledComponent(e)}>
        <input type="text" ref={inputRef} name="uncontrolledComponent"/>
        <button type="submit">Enviar</button>
    </form>
 );
}

function ControlledComponent() {
    const [controlledClass,setControlledClass] = useState("");
    
    function submitControlledClass(e){
        e.preventDefault();
        window.alert(`Você enviou o formulário da turma:${controlledClass}`)
    }

    return (
     <form onSubmit={(e)=>submitControlledClass(e)}>
        <input type="text"
        value={controlledClass}
        onChange={(e)=>setControlledClass(e.target.value)}
        name="controlled-class"
        />
        <button type="submit">Enviar</button>
     </form>  
    );
}

function ControlledVsUncontrolledComponents() {
 return (
  <div>
   <PostHeader
    title="Componentes controlados e não controlados"
    description="Descreva o recurso de forma breve"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Componentes controlados</h2>

     <SimpleCard>
      <h2 className="caption">Definição</h2>
      <span>...</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>Adicione</li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Componentes não controlados</h2>

     <SimpleCard>
      <h2 className="caption">Definição</h2>
      <span>...</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>...</li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Componente não controlado</h2>
      <UncontrolledComponent />
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Componente controlado</h2>
      <ControlledComponent />
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default ControlledVsUncontrolledComponents;
