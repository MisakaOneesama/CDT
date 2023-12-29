/**
 * Preguntas del formulario de madurez de la empresa
 */
export class formulariomadurez {

    /**
     * Innovaciones Constructivas
     */
    /**
     * ¿La empresa cuenta con un área e implementa metodologías de innovación?
     */
    static p1 = [
        // Todas
        { label: 'La empresa no aplica metodologías de innovación.', value: '11' },
        { label: 'La empresa aplica algunas metodologías de innovación.', value: '12' },
        { label: 'La empresa incorpora constantemente metodologías de innovación.', value: '13' },
        { label: 'La empresa aplica metodologías de innovación y está en proceso de creación de un área de innovación.', value: '14' },
        { label: 'La empresa cuenta con un área de innovación.', value: '15' },
    ];

    static p2 = [
        // Todas
        { label: 'La empresa no implementa metodologías para mejorar productividad.', value: '21' },
        { label: 'La empresa está en proceso de implementar metodologías para mejorar productividad.', value: '23' },
        { label: 'La empresa implementa metodologías para mejorar productividad en todas sus etapas.', value: '25' },
    ];

    static p3 = [
        // Constructora e Inmobiliara/Constructora
        { label: 'No, la empresa no cuenta con sus talleres de prefabricación.', value: '31' },
        { label: 'La empresa cuenta con talleres de prefabricación fuera de sus obras.', value: '35' },
        { label: 'La empresa cuenta con talleres de prefabricación en sus obras.', value: '33' },
    ];

    static p4 = [
        // Todas
        { label: '1', value: '41' },
        { label: '2', value: '42' },
        { label: '3', value: '43' },
        { label: '4', value: '44' },
        { label: '5', value: '45' },
    ];

    static p5 = [
        // Todas
        { label: 'La empresa no utiliza softwares de gestión de sus proyectos.', value: '51' },
        { label: 'La empresa ha utilizado softwares de gestión para proyectos específicos.', value: '52' },
        { label: 'La empresa tiene una cultura de digitalización pero no está estandarizada.', value: '53' },
        { label: 'La empresa está en proceso de implementación de un plan de gestión de proyectos mediante la digitalización.', value: '54' },
        { label: 'La empresa tiene digitalizada su gestión de proyectos a través de software.', value: '55' },
    ];

    static p6 = [
        // Constructora e Inmobiliaria/Constructora
        { label: 'La empresa no cuenta con metodologías de gestión de residuos.', value: '61' },
        { label: 'La empresa incentiva la cultura del reciclaje y sustentabilidad.', value: '62' },
        { label: 'La empresa está en proceso de implementar metodologías de gestión de residuos.', value: '63' },
        { label: 'La empresa cuenta con metodologías de gestión de residuos in situ.', value: '64' },
        { label: 'La empresa cuenta con un plan de gestión de residuos que parte desde el diseño.', value: '65' },
    ];

    static p7 = [
        // Inmpobiliaria e Inmobiliaria/Constructora
        { label: 'La empresa no incorpora criterios de diseño sostenible.', value: '71' },
        { label: 'En algunos proyectos se han incorporado criterios de diseño sostenible, pero no siguiendo un plan propio de la empresa.', value: '72' },
        { label: 'Se recomienda una visión y cultura de sustentabilidad en la empresa, pero no se tiene un plan de diseño sostenible.', value: '73' },
        { label: 'La empresa está en proceso de implementación de un plan de diseño sostenible.', value: '74' },
        { label: 'La empresa incorpora en el diseño sostenible, el uso de materiales reciclados/sustentables.', value: '75' },
    ];

    /**
     * Conocimientos Constructivos
     */

    static p8 = [
        // Todas
        // Si no se marca ninguno, 1 punto
        // Si se marca el 6 o 7 son 2 puntos
        // Si es que se marca el 3 o 5 son 3 puntos
        { label: 'No se ha trabajado ninguna solución dentro de los MMC.', value: '5' },
        { label: 'MMC 1', value: 'mmc1' },
        { label: 'MMC 2', value: 'mmc2' },
        { label: 'MMC 3', value: 'mmc3' },
        { label: 'MMC 4', value: 'mmc4' },
        { label: 'MMC 5', value: 'mmc5' },
        { label: 'MMC 6', value: 'mmc6' },
        { label: 'MMC 7', value: 'mmc7' },
        
    ];

    static p9 = [
        // Todas
        { label: '1 a 3 proyectos.', value: '91' },
        { label: '1 a 3 proyectos.', value: '93' },
        { label: '7 o más proyectos.', value: '95' },
    ];

    /**
     * Equipo Experto
     */

    static p10 = [
        // Todas
        { label: 'No cuenta con profesionales capacitados.', value: '101' },
        { label: 'La empresa está en proceso de tener un estándar de contratación de profesionales capacitados.', value: '102' },
        { label: 'La empresa tiene un estándar de contratación de profesionales capacitados.', value: '103' },
        { label: 'La empresa cuenta con profesionales capacitados en algunos de los roles clave.', value: '104' },
        { label: 'La empresa cuenta con profesionales capacitados en los roles clave.', value: '105' },
    ];

    static p11_Constructora = [
        // Constructora e Inmobiliaria/Construuctora
        { label: 'La empresa no cuenta con programas de capacitación interna.', value: '111' },
        { label: 'La empresa está en proceso de implementar programas de capacitación interna.', value: '112' },
        { label: 'La empresa cuenta con programas de capacitación interna solamente a mano de obra no calificada. (Solo para constructoras)', value: '113' },
        { label: 'La empresa cuenta con programas de capacitación interna solamente a profesionales.', value: '114' },
        { label: 'La empresa cuenta con programas de capacitación interna para profesionales y mano de obra no calificada. (Solo para constructoras)', value: '115' },
    ];

    static p11_Inmobiliaria = [
        // Inmobiliaria
        { label: 'La empresa no cuenta con programas de capacitación interna.', value: '111' },
        { label: 'La empresa está en proceso de implementar programas de capacitación interna.', value: '113' },
        { label: 'La empresa cuenta con programas de capacitación interna solamente a profesionales.', value: '115' },
    ];

    /**
     * Retroalimentación
     */

    static p12 = [
        // Todas
        { label: 'La empresa no cuenta con una metodología de medición de KPIS y registro de  indicadores.', value: '121' },
        { label: 'La empresa posee registro de KPIS en algunas obras, pero no están estandarizados.', value: '122' },
        { label: 'La empresa está en proceso de implementación de una metodología de medición de KPIS.', value: '123' },
        { label: 'La empresa dispone de una metodología de registro de indicadores, sin embargo no son analizados.', value: '124' },
        { label: 'La empresa cuenta con una metodología de medición de KPIS y registro de estos indicadores para su posterior análisis.', value: '125' },
    ];

    static p13 = [
        // Todas
        { label: 'La empresa no cuenta con una estrategia de gestión del conocimiento y mejora continua.', value: '131' },
        { label: 'La empresa está en proceso de implementación de una estrategia de gestión del conocimiento y mejora continua.', value: '133' },
        { label: 'La empresa cuenta con una estrategia de gestión del conocimiento y mejora continua.', value: '135' },
    ];

    /**
     * Integración
     */

    static p14 = [
        // Inmobiliaria e Inmobiliaria/Cosntructora
        // Seleccion multiple. Cada una vale un punto
        { label: 'Arquitectura', value: '141' },
        { label: 'Calculistas', value: '142' },
        { label: 'Proveedores', value: '143' },
        { label: 'Constructora', value: '144' },
    ];

    static p15 = [
        // Todas
        { label: 'La empresa no utiliza herramientas de coordinación de actores.', value: '151' },
        { label: 'La empresa designa ciertas responsabilidades a sus actores.', value: '152' },
        { label: 'La empresa coordina a sus actores como parte de sus procesos de integración, pero no lo tiene estandarizado.', value: '153' },
        { label: 'La empresa está en proceso de implementar una matriz de responsabilidades.', value: '154' },
        { label: 'La empresa utiliza una matriz de responsabilidades en la coordinación de actores.', value: '155' },
    ];

    static p16 = [
        // Todas
        { label: 'La empresa no tiene experiencia con convenios ni contratos colaborativos.', value: '161' },
        { label: 'La empresa fomenta la colaboración interna en los proyectos.', value: '162' },
        { label: 'La empresa ha realizado acuerdos o convenios colaborativos con otras empresas. (Ej: consorcio para participación de algún desafio)', value: '163' },
        { label: 'La empresa ha tenido experiencia con contratos colaborativos. (Ej: contrato tipo NEC, IPD, etc.)', value: '164' },
        { label: 'La empresa aplica contratos colaborativos en sus proyectos. (Ej: contrato tipo NEC, IPD, etc.)', value: '165' },
    ];

    /**
     * Planificación y Cierre
     */

    static p17 = [
        // Todas
        { label: 'La empresa no cuenta con procesos estandarizados.', value: '171' },
        { label: 'La empresa está en plan de implementación de una estrategia de estandarización de procesos.', value: '173' },
        { label: 'La empresa cuenta con todos sus procesos estandarizados.', value: '175' },
    ];

    /**
     * Estandarización
     */

    static p18 = [
        // Inmobiliaria e Inmobiliaria/Constructora
        { label: 'La empresa no cuenta con estrategia de diseño estandarizado o repetitivo en sus medidas y tipologías.', value: '181' },
        { label: 'Para ciertos proyectos la empresa ha diseñado de forma repetitiva ciertas medidas.', value: '182' },
        { label: 'La empresa posee tipologías de diseño que repite en sus proyectos, pero no son parte de una estrategia.', value: '183' },
        { label: 'La empresa está en proceso de implementar una estrategia de diseño estandarizado.', value: '184' },
        { label: 'La empresa cuenta con diseños estandarizados y repetitivos en sus medidas y tipologías.', value: '185' },
    ];

    // La empresa ha ejecutado proyectos que tengan diseños con estandarización de medidas y/o tipologías de elementos o
    // componentes.
    static p19 = [
        // Constructora
        { label: 'La empresa no ha ejecutado proyectos con diseño estandarizados.', value: '191' },
        { label: 'La empresa ha ejecutado proyectos con un bajo nivel de estandarización.', value: '193' },
        { label: 'La empresa ha ejecutado proyectos con un alto nivel de estandarización.', value: '195' },
    ];
}