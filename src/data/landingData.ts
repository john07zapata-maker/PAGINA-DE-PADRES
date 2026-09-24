export interface ScriptScenario {
  id: string;
  triggerTitle: string;
  category: string;
  childPhrase: string;
  childContext: string;
  wrongResponse: {
    words: string;
    whyFails: string;
  };
  calmResponse: {
    words: string;
    whyWorks: string;
    toneTip: string;
  };
}

export const SCRIPT_SCENARIOS: ScriptScenario[] = [
  {
    id: "error-inseguridad",
    triggerTitle: "Rompe algo o comete un error",
    category: "Culpa y Autoataque",
    childPhrase: '"¡Soy tonto! ¡Todo lo hago mal y no sirvo para nada!"',
    childContext: "Se le cayó un vaso con leche o rompió sin querer un juguete mientras jugaba.",
    wrongResponse: {
      words: '"¡No digas tonterías, no eres tonto! Fue solo un accidente, no llores por eso."',
      whyFails: "Invalida lo que siente en ese instante. El niño no escucha la lógica, siente que su dolor no es comprendido y la vergüenza se convierte en frustración contra sí mismo."
    },
    calmResponse: {
      words: '"Se cayó la leche y te asustaste mucho. Te equivocaste, y equivocarse duele. Pero cometer un error no te hace tonto: te hace humano. Estoy aquí contigo, vamos a limpiarlo juntos."',
      whyWorks: "Separa la acción (el error) de su identidad (su valor como persona). Desactiva la alarma de la amígdala cerebral en los primeros 10 segundos y le enseña que el afecto de mamá/papá no depende de su perfección.",
      toneTip: "Ponte a su altura física, mantén voz baja y suave, y ofrece tu mano antes de corregir."
    }
  },
  {
    id: "recreo-social",
    triggerTitle: "Rechazo o conflicto en la escuela",
    category: "Vínculo y Rechazo",
    childPhrase: '"¡Nadie me quiere en el colegio! ¡Todos me odian!"',
    childContext: "Llega cabizbajo de la escuela tras no haber podido jugar con sus amigos durante el recreo.",
    wrongResponse: {
      words: '"Eso no es verdad, mi amor. Tienes muchos amigos que te quieren, deja de exagerar."',
      whyFails: "Para su cerebro infantil, el rechazo de ese momento se sintió como abandono total. Decirle que 'exagera' lo hace dudar de sus propias emociones y cerrarse en banda."
    },
    calmResponse: {
      words: '"Hoy en el recreo se sintió como si nadie quisiera jugar contigo y eso debió doler muchísimo en el pecho. Ven aquí si quieres un abrazo. Cuéntame despacito qué pasó."',
      whyWorks: "Acepta la intensidad del sentimiento temporal ('hoy se sintió así') sin convertirlo en una verdad definitiva sobre su vida. Abre la puerta a la confidencia en lugar del aislamiento.",
      toneTip: "No interrumpas mientras hable; solo asiente y dale espacio para que descargue la emoción."
    }
  },
  {
    id: "frustracion-tareas",
    triggerTitle: "Frustración extrema con tareas",
    category: "Perfeccionismo",
    childPhrase: '"¡No puedo y no lo voy a hacer nunca! ¡Soy el más burro de la clase!"',
    childContext: "Arruga la hoja del cuaderno, tira el lápiz al piso y se cruza de brazos con lágrimas de rabia.",
    wrongResponse: {
      words: '"¡No seas dramático! Si prestaras atención en clase no te costaría tanto. ¡Recoge el lápiz ya!"',
      whyFails: "Agrega amenaza y humillación a un cerebro que ya está desbordado de cortisol. El niño se bloquea cognitivamente y es incapaz de aprender."
    },
    calmResponse: {
      words: '"Tu cerebro siente que esta tarea es una montaña gigante ahora mismo. Es normal sentirse frustrado cuando algo no sale a la primera. Dejemos el lápiz descansando dos minutos. Tu valor no depende de este ejercicio."',
      whyWorks: "Le quita la urgencia a la tarea, normaliza la dificultad como parte del aprendizaje y repara su autoconcepto antes de retomar la tarea.",
      toneTip: "Invítalo a tomar un sorbo de agua fresca antes de volver a mirar el ejercicio."
    }
  },
  {
    id: "hermanos-comparacion",
    triggerTitle: "Pelea con hermano / 'Soy el malo'",
    category: "Dinámica Familiar",
    childPhrase: '"¡Siempre lo defiendes a él! ¡Soy el peor hermano del mundo!"',
    childContext: "Empujó a su hermano menor tras una disputa por un juguete y tú llegaste a intervenir.",
    wrongResponse: {
      words: '"¡Es que tú siempre estás buscando problemas! Eres el mayor, deberías dar el ejemplo."',
      whyFails: "Refuerza la etiqueta de 'el malo de la casa'. El niño asume ese rol negativo como su identidad defensiva y la hostilidad entre hermanos aumentará."
    },
    calmResponse: {
      words: '"Estabas muy enojado porque querías tu turno, y perdiste el control de tus manos. No permito que nadie pegue en esta casa, pero sigo amándote exactamente igual. Ayúdame a entender qué sentías antes del empujón."',
      whyWorks: "Firmeza en el límite (no se pega) junto a seguridad incondicional en el vínculo de amor. El niño aprende a regularse sin caer en la culpa tóxica.",
      toneTip: "Habla con firmeza serena, sin tono sarcástico ni gritos."
    }
  },
  {
    id: "padre-pierde-calma",
    triggerTitle: "Tú perdiste la paciencia primero",
    category: "Reparación del Vínculo",
    childPhrase: '"Mamá/Papá me gritó... seguro ya no me quiere."',
    childContext: "Tuviste un día agotador, le gritaste por no hacer caso y ves su mirada de miedo o desconexión.",
    wrongResponse: {
      words: '"¡Es que me tienes cansado! Si me hicieras caso a la primera yo no tendría que gritarte."',
      whyFails: "Culpa al niño de tu propia desregulación adulta. Destruye la confianza y le enseña que la violencia verbal es justificable si estás enojado."
    },
    calmResponse: {
      words: '"Grité fuerte y estuvo mal. Mi trabajo como tu papá/mamá es ayudarte a calmarte, no asustarte. Yo perdí el control y lo siento mucho. Nada de lo que hiciste justifica que te haya gritado. ¿Me perdonas?"',
      whyWorks: "Es la lección de resiliencia más poderosa que un ser humano puede recibir: modela la responsabilidad emocional y repara el apego seguro de raíz.",
      toneTip: "Abrázalo solo si él lo acepta; dale espacio si necesita unos segundos para procesarlo."
    }
  }
];

export interface BookChapter {
  number: string;
  title: string;
  duration: string;
  summary: string;
  highlights: string[];
}

export const BOOK_CHAPTERS: BookChapter[] = [
  {
    number: "Capítulo 1",
    title: "La Neuroanatomía de la Vergüenza Infantil",
    duration: "6 min de lectura",
    summary: "Descubre exactamente qué ocurre en el cerebro de tu hijo cuando comete un fallo: la diferencia biológica entre la culpa sana ('hice algo mal') y la vergüenza tóxica ('yo soy malo').",
    highlights: [
      "Por qué '¡no eres malo!' dispara más resistencia cerebral",
      "Las 3 máscaras invisibles: perfeccionismo, bravuconería y mutismo",
      "La regla de oro de los 10 segundos: el umbral de rescate"
    ]
  },
  {
    number: "Capítulo 2",
    title: "El Termómetro de la Espiral (Semáforo de 2 Minutos)",
    duration: "8 min de lectura",
    summary: "Una herramienta visual e intuitiva para diagnosticar en segundos la fase en la que se encuentra tu hijo antes de que la crisis escale a llanto desgarrador o bloqueo.",
    highlights: [
      "Fase Verde (Tensión inicial): micro-señales corporales",
      "Fase Amarilla (Desborde de culpa): frases autodestructivas",
      "Fase Roja (Cierre total): qué hacer cuando no permite el contacto físico"
    ]
  },
  {
    number: "Capítulo 3",
    title: "Los 30 Guiones Situacionales de Respuesta Rápida",
    duration: "15 min de consulta",
    summary: "Fórmulas verbales exactas redactadas para 30 situaciones cotidianas reales: errores escolares, torpezas físicas, rivalidad fraterna, frustración deportiva y desobediencia.",
    highlights: [
      "Fórmula: Validación del dolor + Disociación de identidad + Puente a la solución",
      "Adaptaciones para niños pequeños (3-6 años) y mayores (7-11 años)",
      "Respuestas específicas para niños con alta sensibilidad o baja tolerancia a la frustración"
    ]
  },
  {
    number: "Capítulo 4",
    title: "El Plan Antes · Durante · Después",
    duration: "6 min de lectura",
    summary: "Cómo estructurar el entorno para prevenir la espiral antes de que ocurra, cómo conducirla sin desgastarte y cómo hacer el cierre reparador a la hora de dormir.",
    highlights: [
      "El ritual nocturno de las 3 preguntas reparadoras",
      "Cómo enseñar a reparar un error con empatía, no con castigos pasivo-agresivos",
      "El mapa mental para que el niño aprenda a auto-consolarse"
    ]
  },
  {
    number: "Capítulo 5",
    title: "Señales de Alerta y Acompañamiento Profesional",
    duration: "4 min de lectura",
    summary: "Criterios claros y honestos para identificar cuándo la vergüenza crónica requiere valoración de un psicólogo infantil o terapeuta de familia.",
    highlights: [
      "Indicadores de depresión o ansiedad infantil encubierta",
      "Cómo comunicar las observaciones al pediatra o terapeuta",
      "Bibliografía recomendada y recursos complementarios"
    ]
  }
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  childInfo: string;
  tag: "Madre" | "Padre" | "Especialista";
  quote: string;
  result: string;
  stars: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Valeria Mendoza",
    role: "Mamá de Mateo",
    location: "Madrid, España",
    childInfo: "Mateo (6 años) · Perfeccionismo severo",
    tag: "Madre",
    quote: "Mateo rompía sus tareas con tijeras cada vez que una letra le quedaba un poco torcida y gritaba que era un monstruo. Me partía el alma. Yo le decía '¡pero si dibujas hermoso!' y él se enojaba más. Cuando apliqué el guion del Capítulo 3, en menos de un minuto aflojó los hombros y me abrazó llorando en vez de encerrarse. Esta guía debería entregarse en el hospital con el certificado de nacimiento.",
    result: "En 2 semanas las crisis por tareas bajaron de 4 por semana a cero.",
    stars: 5
  },
  {
    id: "test-2",
    name: "Andrés Silva",
    role: "Papá de Julieta y Tomás",
    location: "Bogotá, Colombia",
    childInfo: "Julieta (8 años) y Tomás (5 años)",
    tag: "Padre",
    quote: "Como papá siempre creí que debía ser firme y corregir rápido. Pero cada vez que le llamaba la atención a Julieta, ella decía 'ya sé que prefieres a Tomás, soy una mala hija'. El Bono 2 ('Cuando Tú Pierdes la Calma Primero') me abrió los ojos sobre cómo mis propios tonos alimentaban su vergüenza. Es el mejor dinero que he invertido en mi paternidad.",
    result: "Mejoró drásticamente la relación con su hija mayor en 10 días.",
    stars: 5
  },
  {
    id: "test-3",
    name: "Dra. Sofía Carrión",
    role: "Psicóloga Infantil y de Familia",
    location: "Buenos Aires, Argentina",
    childInfo: "12 años de consulta clínica",
    tag: "Especialista",
    quote: "La vergüenza es la emoción más destructiva en el desarrollo infantil porque ataca el sentido del 'yo'. Recomiendo esta guía a casi todos los padres que vienen a mi consulta. Tiene un rigor neurobiológico impecable presentado de forma tan sencilla y humana que cualquier familia puede aplicarlo en el desayuno o en el auto.",
    result: "Herramienta recomendada en sus sesiones de orientación parental.",
    stars: 5
  },
  {
    id: "test-4",
    name: "Laura Patricia Gómez",
    role: "Madre de Diego",
    location: "Ciudad de México",
    childInfo: "Diego (7 años) · Altamente Sensible",
    tag: "Madre",
    quote: "Tengo la tarjeta de los 30 guiones pegada en la nevera con un imán. Hace dos días Diego tiró un plato de sopa caliente. Su carita fue de terror absoluto esperando el regaño. Le dije exactamente las palabras del guion 4. Su mirada cambió de terror a paz. No tiene precio ver a tu hijo saberse amado en sus peores momentos.",
    result: "Mayor seguridad en sí mismo y menos miedo a equivocarse.",
    stars: 5
  }
];

export const FAQ_ITEMS = [
  {
    q: "¿Esto reemplaza la terapia psicológica infantil?",
    a: "No. Es un manual práctico de comunicación parental y primeros auxilios emocionales para el hogar, no un diagnóstico clínico. Si tu hijo muestra signos de depresión profunda, autolesiones o retraimiento prolongado, el Capítulo 5 te orienta sobre cómo buscar apoyo profesional especializado."
  },
  {
    q: "¿Para qué rango de edades está diseñada la guía?",
    a: "Está especialmente optimizada para niños de 3 a 11 años, que es la etapa crítica donde se consolida la autocrítica y el autoconcepto. No obstante, las frases de reparación y validación funcionan extraordinariamente bien incluso con preadolescentes y en la propia relación de pareja."
  },
  {
    q: "¿Cómo y cuándo recibo la guía tras hacer el pago?",
    a: "El acceso es 100% inmediato. Una vez procesado el pago seguro, recibes un correo electrónico con tu enlace personal de descarga para leer el PDF en tu teléfono, tablet o computadora, junto a los archivos listos para imprimir."
  },
  {
    q: "¿Puedo imprimir la guía y las tarjetas de bonificación?",
    a: "¡Sí, totalmente! Todo el material viene en formato PDF de alta resolución optimizado tanto para lectura en pantallas (modo oscuro y claro) como para impresión limpia en hojas tamaño carta o A4 para plastificar o pegar en la nevera."
  },
  {
    q: "¿Qué pasa si siento que la guía no me funciona?",
    a: "Cuentas con nuestra Garantía de Tranquilidad de 10 días: léela, prueba los guiones en situaciones reales con tu hijo y si en 10 días no sientes que transformó tu forma de conectar, simplemente nos envías un correo y te reembolsamos el 100% de tu dinero de inmediato, sin preguntas ni letras chicas."
  },
  {
    q: "¿El pago es mensual o se cobra una sola vez?",
    a: "Es un pago único de solo $14.90 USD. Sin suscripciones ocultas, sin cuotas mensuales y con acceso de por vida a futuras actualizaciones de la guía."
  }
];
