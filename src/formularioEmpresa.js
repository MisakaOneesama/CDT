import React, { useState } from 'react';
import DynamicSelector from './formContructor';
import { formulariomadurez } from './preguntasMadurez'

const FormularioEmpresa = () => {
  const [selectorStates, setSelectorStates] = useState({});

  const handleOptionClick = (selectorId, value) => {
    setSelectorStates((prevStates) => ({
      ...prevStates,
      [selectorId]: value,
    }));
  };

  function Construc_Inmob_Selector() {

  }
  console.log(formulariomadurez.p1);
  return (
    <div>
      <h2>Innovaciones Constructivas</h2>
      <div>
        <h3>¿La empresa cuenta con un área e implementa metodologías de innovación?</h3>
        <DynamicSelector elements = {formulariomadurez.p1} onSelect={(value) => handleOptionClick('selector1', value)} />
        <br></br>
      </div>
      <div>
        <h3>¿La empresa implementa metodologías que permiten mejorar la productividad de sus proyectos? Ej: Lean, DFMA, Last Planner.</h3>
        <DynamicSelector elements= {formulariomadurez.p2} onSelect={(value) => handleOptionClick('selector2', value)} />
      </div>
      <div>
        <h3>En caso de ser una empresa constructora: ¿La empresa tiene talleres de prefabricación fuera o en obra, donde fabrica sus propios elementos para su posterior ensamblaje?</h3>
        <DynamicSelector elements= {formulariomadurez.p3} onSelect={(value) => handleOptionClick('selector3', value)} />
      </div>
      <div>
        <h3>En una escala del 1 al 5, indique cuál es el nivel de BIM de la empresa, siendo 1 que no utilizan BIM en ninguna etapa y 5 que la empresa utiliza BIM 4D o superior de forma integrada en todas las etapas del proyecto.</h3>
        <p>No utilizan BIM</p>
        <DynamicSelector elements= {formulariomadurez.p4} onSelect={(value) => handleOptionClick('selector4', value)} />
        <p>BIM 4D o superior integrado</p>
      </div>
      <div>
        <h3>¿La empresa utiliza softwares de gestión de proyectos para facilitar el desarrollo, planificación y organización del mismo?</h3>
        <DynamicSelector elements= {formulariomadurez.p5} onSelect={(value) => handleOptionClick('selector5', value)} />
      </div>
      <div>
        <h3>En caso de ser una empresa constructora: ¿La empresa cuenta con metodologías de gestión de residuos?</h3>
        <DynamicSelector elements= {formulariomadurez.p6} onSelect={(value) => handleOptionClick('selector6', value)} />
      </div>
      <div>
        <h3>En caso de ser una empresa inmobiliaria: ¿La empresa incorpora en el diseño sostenible, el uso de materiales reciclados/sustentables?</h3>
        <DynamicSelector elements= {formulariomadurez.p7} onSelect={(value) => handleOptionClick('selector7', value)} />
      </div>

      <h2></h2>

      <div>
        <h3>Indique las soluciones de Métodos Modernos de Construcción que la empresa ha utilizado en el pasado.</h3>
        <DynamicSelector elements= {formulariomadurez.p8} onSelect={(value) => handleOptionClick('selector8', value)} />
      </div>
      <div>
        <h3>Indique la cantidad aproximada de proyectos en que han utilizado MMC</h3>
        <DynamicSelector elements= {formulariomadurez.p9} onSelect={(value) => handleOptionClick('selector9', value)} />
      </div>
      <div>
        <h3>¿Los roles claves de la empresa son ocupados por profesionales capacitados en el uso de soluciones industrializadas en construcción?</h3>
        <DynamicSelector elements= {formulariomadurez.p10} onSelect={(value) => handleOptionClick('selector10', value)} />
      </div>
      <div>
        <h3>¿La empresa cuenta con programas de capacitación enfocados en construcción industrializada para la mano de obra tanto profesional como obrera?</h3>
        <DynamicSelector elements= {formulariomadurez.p11_Constructora} onSelect={(value) => handleOptionClick('selector11_Constructora', value)} />
      </div>

      <div>
        <h3>¿La empresa cuenta con programas de capacitación enfocados en construcción industrializada para la mano de obra profesional?</h3>
        <DynamicSelector elements= {formulariomadurez.p11_Inmobiliaria} onSelect={(value) => handleOptionClick('selector11_Profesional', value)} />
      </div>
      <div>
        <h3>¿La empresa cuenta con una metodología de medición de KPIS y registro de estos indicadores para su posterior análisis?</h3>
        <DynamicSelector elements= {formulariomadurez.p12} onSelect={(value) => handleOptionClick('selector12', value)} />
      </div>
      <div>
        <h3>¿La empresa cuenta con una estrategia de gestión del conocimiento y mejora continua?</h3>
        <DynamicSelector elements= {formulariomadurez.p13} onSelect={(value) => handleOptionClick('selector13', value)} />
      </div>
      <div>
        <h3>En caso de ser una empresa inmobiliaria: Indique a que actores relevantes integra de forma temprana (etapa de prediseño) a los proyectos.</h3>
        <DynamicSelector elements= {formulariomadurez.p14} onSelect={(value) => handleOptionClick('selector14', value)} />
      </div>
      <div>
        <h3>¿La empresa utiliza una matriz de responsabilidades en la coordinación de actores?</h3>
        <DynamicSelector elements= {formulariomadurez.p15} onSelect={(value) => handleOptionClick('selector15', value)} />
      </div>
      <div>
        <h3>¿La empresa ha usado contratos colaborativos?</h3>
        <DynamicSelector elements= {formulariomadurez.p16} onSelect={(value) => handleOptionClick('selector16', value)} />
      </div>
      <div>
        <h3>¿La empresa implementa estrategias de procesos estandarizados?</h3>
        <DynamicSelector elements= {formulariomadurez.p17} onSelect={(value) => handleOptionClick('selector17', value)} />
      </div>
      <div>
        <h3>En caso de ser una empresa inmobiliaria: ¿La empresa diseña proyectos que busquen la repetitividad y estandarización de medidas y/o tipologías de elementos o componentes para lograr una mayor eficiencia en la fabricación y construcción?</h3>
        <DynamicSelector elements= {formulariomadurez.p18} onSelect={(value) => handleOptionClick('selector18', value)} />
      </div>
      <div>
        <h3>La empresa ha ejecutado proyectos que tengan diseños con estandarización de medidas y/o tipologías de elementos o componentes.</h3>
        <DynamicSelector elements={formulariomadurez.p19} onSelect={(value) => handleOptionClick('selector19', value)} />
      </div>
      
    </div>
  );
};

export default FormularioEmpresa;


