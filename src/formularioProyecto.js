import React, { useState } from 'react';
import DynamicSelector from './formContructor';
import { useNavigate } from 'react-router-dom';
import { PreguntasMadurez } from './preguntasProyecto'


/**
 * Este formulario sólo tienne que estar presente cuando las empresas son Inmobiliarias e Inmobiliarias/Constructoras
 * Estas preguntas solo estarán habilitadas solo despues de haber creado el perfil de empresa
 * @returns
 */
const FormularioProyecto = () => {
  const [selectorStates, setSelectorStates] = useState({});
  const history = useNavigate();

  const handleSubmit = () => {
    console.log()
  }

  const handleButtonClick = () => {
    // Navigate to another route (e.g., "/other") when the button is clicked
    console.log('Current selectorStates:', selectorStates);
    const innovacion = (Number(selectorStates["selector1"])%10 + Number(selectorStates["selector2"])%10)/2
    const terreno = (Number(selectorStates["selector3"])%10 + Number(selectorStates["selector4"])%10+Number(selectorStates["selector5"])%10+Number(selectorStates["selector6"])%10+Number(selectorStates["selector7"])%10)/5
    const geometria = (Number(selectorStates["selector8"])%10 + Number(selectorStates["selector9"])%10)/2
    const ejecucion = (Number(selectorStates["selector10"])%10 + Number(selectorStates["selector11"])%10)/2
    const sostenibilidad = (Number(selectorStates["selector12"])%10 + Number(selectorStates["selector13"])%10+Number(selectorStates["selector14"])%10 + Number(selectorStates["selector15"])%10+Number(selectorStates["selector16"])%10 + Number(selectorStates["selector17"])%10+Number(selectorStates["selector18"])%10 + Number(selectorStates["selector19"])%10)/8
    const ouptut = [innovacion*100/5,terreno*100/5, geometria*100/5, ejecucion*100/5, sostenibilidad*100/5];
    const outputM = [innovacion, terreno, geometria, ejecucion, sostenibilidad]
    console.log(ouptut)
    console.log(outputM)
    history('/outputProyecto', { data: Object.values(ouptut) });
  };

  const handleOptionClick = (selectorId, value) => {
    console.log(selectorId, value)
    setSelectorStates((prevStates) => ({
      ...prevStates,
      [selectorId]: value,
    }));
  };
  // (value) => handleOptionClick('selectorTipo', value)

  console.log(PreguntasMadurez.p1);
  console.log('Current selectorStates:', selectorStates);
  return (
    // formulario solo para inmobiliarias.
    <div>
      <div>
        <h3>Nombre Proyecto</h3>
        <h3>Ubicación</h3>
        <h3>Tipo de Proyecto</h3>
        <DynamicSelector elements = {PreguntasMadurez.tipo} toExecute={(value) => handleOptionClick('selectorTipo', value)} groupName="Tipo"/>
        <DynamicSelector elements={PreguntasMadurez.Zonificaión_Urbana} toExecute={(value) => handleOptionClick('selectoZona', value)} groupName="Zona"></DynamicSelector> 
        <h2>Características Generales del Proyecto</h2>
        <p>En general los proyectos de construcción son complejos y costosos, requieren una planificación detallada, una eficiente ejecución y seguimiento rigurosos.
        Principalmente los factores tiempo y costos son muy importantes en este tipo de proyectos. Sin embargo, 
        en algunos casos, uno de estos factores puede ser más importante que el otro. 
        Por este motivo, es importante encontrar un equilibrio entre estos 2 factores para ayudar a 
        garantizar que el proyecto se complete a tiempo y dentro del presupuesto.</p>
        <h3>¿Considera en su proyecto que el tiempo es un factor crítico?</h3>
        <DynamicSelector elements = {PreguntasMadurez.p1} toExecute={(value) => handleOptionClick('selector1', value)} groupName="p1"/>
        <br></br>
      </div>
      <div>
        <h3>¿Considera en su proyecto que el costo es una restricción crítica?</h3>
        <DynamicSelector elements= {PreguntasMadurez.p2} toExecute={(value) => handleOptionClick('selector2', value)} groupName="p2"/>
      </div>
      <div>
        <h2>Terreno/Emplazamiento</h2>
        <p>
        El terreno o emplazamiento de una obra es un factor fundamental para el éxito del proyecto, 
        debido a que impacta en la viabilidad del proyecto 
        (terreno desnivelado implica mayores costos), impacta en la seguridad de la construcción 
        (las condiciones del suelo deben ser adecuadas) e impacta en el entorno 
        (cumplir con normativas para evitar sanciones innecesarias que perjudiquen el proyecto). 
        Este factor debe ser adecuado para el tipo de construcción que se va a realizar y debe cumplir 
        con todas las normativas y regulaciones aplicadas. 
        </p>
        <h3>¿Cuál es el desnivel de terreno que existe en su proyecto?</h3>
        <p>Alto</p>
        <DynamicSelector elements= {PreguntasMadurez.p3} toExecute={(value) => handleOptionClick('selector3', value)} groupName="p3"/>
        <p>Bajo</p>
      </div>
      <div>
        <h3>¿Cómo es la accesibilidad a la obra?</h3>
        <p>Complejo</p>
        <DynamicSelector elements= {PreguntasMadurez.p4} toExecute={(value) => handleOptionClick('selector4', value)} groupName="p4"/>
        <p>Bajo</p>
      </div>
      <div>
        <h3>¿Cómo son las rutas de transporte?</h3>
        <p>Complejas</p>
        <DynamicSelector elements= {PreguntasMadurez.p5} toExecute={(value) => handleOptionClick('selector5', value)} groupName="p5"/>
        <p>Bajas</p>
      </div>
      <div> 
        <h3>¿Cómo es la situación con las comunidades aledañas?</h3>
        <p>Complejas</p>
        <DynamicSelector elements= {PreguntasMadurez.p6} toExecute={(value) => handleOptionClick('selector6', value)} groupName="p6"/>
        <p>Bajas</p>
      </div>
      <div>
        <h3>¿La obra cuenta con un espacio de terreno adecuado?</h3>
        <p>Gran espacio in-situ</p>
        <DynamicSelector elements= {PreguntasMadurez.p7} toExecute={(value) => handleOptionClick('selector7', value)} groupName="p7"/>
        <p>Espacio reducido</p>
      </div>
      <h2>Geometría</h2>
      <p>La geometría o el diseño de una obra de edificación en altura se refiere a la forma y el tamaño del edificio. Estos factores son importantes para garantizar la seguridad y la funcionalidad del edificio. Además, hay otros factores influyentes como la carga que soportará el edificio y el entorno en el que se construirá el edificio.</p>
      <div>
        <h3>¿Prevé en su proyecto grandes luces?</h3>
        <p>No se prevén grandes luces</p>
        <DynamicSelector elements= {PreguntasMadurez.p8} toExecute={(value) => handleOptionClick('selector8', value)} groupName="p8"/>
        <p>Se prevén grandes luces</p>
      </div>
      <div>
        <h3>¿Prevé grandes alturas? (en un rango pisos)</h3>
        <DynamicSelector elements= {PreguntasMadurez.p9} toExecute={(value) => handleOptionClick('selector9', value)} groupName="p9"/>
      </div>

      <h2>Ejecución</h2>
      <p>La ejecución de una obra de edificación en altura es un proceso complejo que requiere una planificación adecuada, una ejecución precisa y una buena gestión. Para este caso de edificación en altura se divide en varias fases: Planificación, Preparación del terreno, Construcción de los cimientos, Construcción de la estructura, Construcción de los pisos y el techo, Instalaciones y por último Terminaciones.</p>
      <div>
        <h3>¿La incertidumbre en las condiciones de terreno son?</h3>
        <p>Condiciones conocidas</p>
        <DynamicSelector elements= {PreguntasMadurez.p10} toExecute={(value) => handleOptionClick('selector10', value)} groupName="p10"/>
        <p>Condiciones inciertas</p>
      </div>
      <div>
        <h3>¿La obra es susceptible a retrasos en la construcción debido al clima?</h3>
        <p>Clima afecta</p>
        <DynamicSelector elements= {PreguntasMadurez.p11} toExecute={(value) => handleOptionClick('selector11', value)} groupName="p11"/>
        <p>Clima no afecta</p>
      </div>

      <h2>Innovación y Sostenibilidad</h2>
      <p>Dos conceptos clave en la construcción de edificios en altura. La innovación nos permite mejorar algo que ya existe a través de diversos métodos o puede ser la creación de algo completamente nuevo, ambas nos ayudan a mejorar la eficiencia, la seguridad y la sostenibilidad de los edificios, mientras que la sostenibilidad se centra en la protección del medio ambiente, esto puede implicar la reducción de las emisiones de gases de efecto invernadero, la conservación de recursos naturales y materias primas, la huella de carbono en toda la cadena de valor, entre otros.</p>
      <div>
        <h3>Eficiencia Energética</h3>
        <p>No es relevante en el proyecto</p>
        <DynamicSelector elements= {PreguntasMadurez.p12} toExecute={(value) => handleOptionClick('selector12', value)} groupName="p12"/>
        <p>Es relevante en el proyecto</p>
      </div>
      <div>
        <h3>Huella de Carbono</h3>
        <p>No es relevante en el proyecto</p>
        <DynamicSelector elements= {PreguntasMadurez.p13} toExecute={(value) => handleOptionClick('selector13', value)} groupName="p13"/>
        <p>Es relevante en el proyecto</p>
      </div>
      <div>
        <h3>Emisión de Ruido</h3>
        <p>No es relevante en el proyecto</p>
        <DynamicSelector elements= {PreguntasMadurez.p14} toExecute={(value) => handleOptionClick('selector14', value)} groupName="p14"/>
        <p>Es relevante en el proyecto</p>
      </div>
      <div>
        <h3>Emisión de Material Particulado</h3>
        <p>No es relevante en el proyecto</p>
        <DynamicSelector elements= {PreguntasMadurez.p15} toExecute={(value) => handleOptionClick('selector15', value)} groupName="p15"/>
        <p>Es relevante en el proyecto</p>
      </div>
      <div>
        <h3>Optimización de materiales</h3>
        <p>No es relevante en el proyecto</p>
        <DynamicSelector elements= {PreguntasMadurez.p16} toExecute={(value) => handleOptionClick('selector16', value)} groupName="p16"/>
        <p>Es relevante en el proyecto</p>
      </div>
      <div>
        <h3>Uso de materiales reciclados</h3>
        <p>No es relevante en el proyecto</p>
        <DynamicSelector elements= {PreguntasMadurez.p17} toExecute={(value) => handleOptionClick('selector17', value)} groupName="p17"/>
        <p>Es relevante en el proyecto</p>
      </div>
      <div>
        <h3>Gestión de Residuos</h3>
        <p>No es relevante en el proyecto</p>
        <DynamicSelector elements= {PreguntasMadurez.p18} toExecute={(value) => handleOptionClick('selector18', value)} groupName="p18"/>
        <p>Es relevante en el proyecto</p>
      </div>
      <div>
        <h3>Innovación</h3>
        <p>Se busca lo más tradicional</p>
        <DynamicSelector elements= {PreguntasMadurez.p19} toExecute={(value) => handleOptionClick('selector19', value)} groupName="p19"/>
        <p>Se busca posicionar como un proyecto innovador en el rubro</p>
      </div>

      <button onClick={handleButtonClick}>Submit</button>
      
    </div>
  );
};

export default FormularioProyecto;