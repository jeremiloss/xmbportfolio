import { 
    TbBrandVercelFilled,
    TbBrandVscode,
    TbBrandFigma,
    TbBrandFramer,
    TbBrandLinkedin,
    TbBrandInstagram,
    TbBrandTwitter, 
    TbCards,
    TbShirt,
    TbBuildingSkyscraper,
    TbBriefcase2,
    TbChartDots2,
    TbCertificate,
    TbDatabase,
    TbTerminal,
    TbFaceId,
    TbPill,
    TbMessageChatbot,
    TbMoodSmile ,
    TbMail,
    TbSettings,
    TbLanguage,
    TbBusStop,
    TbDevices,
    TbStack3,
    TbInfoSquareRounded,
    TbClock,
    TbWand,
    TbComponents,
    TbTools,
    TbColorSwatch,   
  } from "react-icons/tb";
import type { ComponentType } from "react"
export interface MenuItem {
  id: string
  label: { es: string, en: string }
  icon: ComponentType<{ className?: string }>
  description?: { es: string, en: string }
  url?: string
}

export interface Category {
  id: string
  label: { es: string, en: string }
  icon: ComponentType<{ className?: string }>
  items: MenuItem[]
}

export const portfolioData: Category[] = [
  {
    id: "profile",
    label: { es: "Perfil", en: "Profile" },
    icon: TbMoodSmile,
    items: [
      {
        id: "about",
        label: { es: "Sobre mi", en: "About Me" },
        icon: TbInfoSquareRounded,
        description:
          { es: "Mi camino empezó en la antropología, pero mi pulso creativo siempre me guio hacia el diseño. En el mundo UX/UI encontré el punto de encuentro perfecto: la amalgama entre el estudio del comportamiento humano y mi pasión por crear. Como Diseñador de Producto, me especializo en experiencias digitales centradas en el usuario, con experiencia punta a punta (E2E) —desde la conceptualización y sistemas de diseño hasta el hand-off técnico— asegurando que cada interfaz tenga un propósito claro.", en: "With a background in Anthropology and a heart for creative problem-solving, I found my sweet spot in UX/UI Design. My practice is where human behavior studies meet digital craftsmanship. As a Product Designer focused on UX, I specialize in building end-to-end experiences—from conceptual research and design systems to seamless technical hand-offs. I don't just design interfaces; I build bridges between people and technology." },
      },
      {
        id: "experience",
        label: { es: "Experiencia", en: "Experience" },
        icon: TbClock,
        description:
          { es: "Mi enfoque como Product Designer se centra en el ciclo completo del producto (E2E), transformando problemas complejos en interfaces de alta fidelidad, escalables y con un propósito claro. Esta visión estratégica se potencia con mi experiencia en gestión de e-commerce y dirección de arte visual en proyectos independientes, donde aprendí a conectar la estética de marca con la eficiencia operativa del negocio digital. Podés conocer el desglose milimétrico de mis roles anteriores, proyectos comerciales y recomendaciones profesionales visitando mi perfil de LinkedIn o descargando mi CV en los enlaces de abajo.", en: "As a Product Designer, my practice focuses on the complete end-to-end (E2E) lifecycle, transforming complex challenges into high-fidelity, scalable, and purpose-driven interfaces. This strategic approach is backed by my background in e-commerce management and visual art direction for independent brands, where I learned to bridge brand aesthetics with digital business operations. For a detailed breakdown of my past roles, commercial projects, and professional endorsements, feel free to check my LinkedIn profile or download my CV below." },
      },
    ],
  },
  {
    id: "education",
    label: { es: "Formación", en: "Education" },
    icon: TbCertificate,
    items: [
      {
        id: "multimedia",
        label: { es: "Lic. Diseño Multimedial", en: "B.A in Multimedia Design" },
        icon: TbDevices,
        description:
          { es: "Formación universitaria en la UNLP enfocada en la intersección de sistemas interactivos, narración visual y diseño de comunicación digital. Aquí desarrollé mis bases metodológicas y el pensamiento crítico aplicado a productos digitales.", en: "University background at UNLP focused on the intersection of interactive systems, visual storytelling, and digital communication design. This is where I built my methodological foundations and critical thinking applied to digital products." },
      },
      {
        id: "uxui",
        label: { es: "Diseño de Producto", en: "Product Design" },
        icon: TbStack3,
        description:
          { es: "Especialización práctica orientada al mercado tecnológico. Profundicé en metodologías ágiles, investigación de usuarios (User Research), sistemas de diseño escalables y la optimización de flujos de trabajo UX mediante herramientas de IA.", en: "Hands-on specialization tailored for the tech market. I dove deep into agile methodologies, user research, scalable design systems, and the optimization of UX workflows using AI tools." },
      },
      {
        id: "databi",
        label: { es: "Análisis de Datos & BI", en: "Data Analytics & BI" },
        icon: TbChartDots2,
        description:
          { es: "Capacitación en Jupi Digital, enfocada en la toma de decisiones de diseño basadas en evidencia. Modelado de datos y analítica para transformar métricas e información de negocio en mejoras de experiencia de usuario cuantitativas y medibles.", en: "Training focused on data-driven design decision-making. Data modeling and analytics to transform business metrics and raw insights into quantitative, measurable improvements in user experience." },
      },
    ],
  },
  {
    id: "projects",
    label: { es: "Proyectos", en: "Projects" },
    icon: TbBriefcase2,
    items: [
      {
        id: "amaya",
        label: { es: "Amaya Real Estate", en: "Amaya Real Estate" },
        icon: TbBuildingSkyscraper,
        url: "https://amaya.realestate/",
        description:
          { es: `• OVERVIEW: El canal de soporte colapsaba por consultas de datos ocultos en textos extensos. Se reestructuró la visualización para autoabastecer al usuario y liberar la carga operativa.

• EL DESAFÍO: Resolver la fricción informativa sin modificar el sistema de diseño existente ni la estructura técnica profunda, maximizando el impacto bajo restricciones estrictas.

• DECISIONES CLAVE: 
1. Metadata crítica en primer nivel (m², ambientes, baños).
2. Etiquetas de disponibilidad en tiempo real ("en venta", "reservada").
3. Indicador de volumen de fotos en la vista previa.

• LA SOLUCIÓN: El catálogo pasó de una galería estética a un tablero eficiente que prioriza atributos técnicos y permite un escaneo rápido.

• IMPACTO: Se resolvieron ineficiencias operativas concretas mediante la micro-arquitectura de la información, demostrando que el valor del UX va más allá de una renovación estética integral.`, en: `• OVERVIEW: Support channels were overwhelmed due to property data hidden in long texts. Visualizations were restructured to enable user autonomy and reduce operational load.

• THE CHALLENGE: Resolve information friction without altering the existing design system or deep technical structure, maximizing impact under tight constraints.

• KEY DECISIONS:
1. First-level critical metadata (sqft, rooms, bathrooms).
2. Real-time availability labels ("for sale", "reserved").
3. Image count indicator on previews.

• THE SOLUTION: Shifted the catalog from a purely aesthetic gallery to an efficient dashboard that prioritizes technical attributes for quick scanning.

• IMPACT: Resolved concrete operational inefficiencies through information micro-architecture, proving UX value goes far beyond full aesthetic redesigns.` },
      },
      {
        id: "cuentadni",
        label: { es: "Rediseño Cuenta-DNI", en: "Cuenta DNI-Redesign" },
        icon: TbFaceId,
        url: "https://www.figma.com/design/JASMjBmeSLXtOCmWsT1LFc/Proyecto-Redise%C3%B1o-Cuenta-DNI---Jerem%C3%ADas-Tor%C3%A9?node-id=0-1&t=eaZa6YJCSZwlGyRt-1",
        description:
          { es: `• OVERVIEW: Curva de aprendizaje elevada debido a una interfaz irregular que generaba confusión y ansiedad en entornos reales (como supermercados), afectando principalmente a adultos mayores.

• EL DESAFÍO: Reestructurar la arquitectura de información y optimizar el micro-copy bajo presiones operativas, equilibrando el modelo basado en DNI con las convenciones financieras que los usuarios ya traían de otras apps.

• DECISIONES CLAVE:
1. Unificación de accesos: Se eliminaron duplicados, concentrando la acción en: transferir, solicitar y depositar.
2. Convenciones de la industria: Navegación familiar agrupando destinatarios (Alias, CBU, DNI) e historial en un solo lugar.
3. Refuerzo contextual: Micro-copy descriptivo e iconografía literal para asistir acciones críticas bajo presión de tiempo.

• LA SOLUCIÓN: Pantalla principal y flujos optimizados bajo una lógica de consistencia externa, transformando una interfaz impredecible en un entorno familiar, seguro y de baja carga cognitiva.

• IMPACTO: Las pruebas cualitativas demostraron que la predictibilidad eliminó el pánico pre-pago en comercios. Se validó que en productos financieros masivos, la familiaridad es el factor clave para la verdadera inclusión digital.`,
    
    en: `• OVERVIEW: High learning curve due to an inconsistent interface that caused confusion and anxiety during real-world use (e.g., supermarket checkout), heavily impacting older adults.

• THE CHALLENGE: Restructure the information architecture and optimize micro-copy under tight operational constraints, balancing the identity-card-based model with established digital wallet habits.

• KEY DECISIONS:
1. Unified shortcuts: Removed duplicate workflows, focusing the interface on: transfer, request, and deposit.
2. Industry standards: Replaced experimental layouts with common patterns, grouping recipient types and history.
3. Contextual reinforcement: Introduced descriptive micro-copy and literal iconography to guide critical actions under pressure.

• THE SOLUTION: Reorganized the home screen and transfer flows using external consistency, transforming an unpredictable environment into a familiar, safe, and low-cognitive-load experience.

• IMPACT: Qualitative testing showed that structural predictability eliminated checkout anxiety. The project proved that for mass-market financial tools, familiarity is the ultimate driver for digital inclusion.` },
      },
      {
        id: "bondify",
        label: { es: "Bondify", en: "Bondify" },
        icon: TbBusStop,
        url: "https://www.figma.com/proto/OQl57cx7xMOiVgxxKLUYPf/BONDIFY?node-id=2406-4301&t=CTo92jhIzOaGh97q-1&scaling=contain&content-scaling=fixed&page-id=2406%3A4215",
        description:
          { es: `• OVERVIEW: Los usuarios no frecuentes de transporte público carecen de información confiable ante imprevistos en la calle, enfrentando interfaces saturadas de publicidad o datos inexactos.

• EL DESAFÍO: Contener el alcance del producto dentro de límites viables. Se resistió la tentación de sumar pagos o rastreo en tiempo real sobre el mapa para priorizar el foco principal: la orientación inmediata del pasajero en apuros.

• DECISIONES CLAVE:
1. Interfaz de acompañamiento: Modelo dinámico por etapas inspirado en apps de movilidad privada (caminata, espera, arribo).
2. Reducción transaccional: Se canceló la pasarela de pago; se limitó a la consulta estática de saldo y costo de pasaje.
3. Alertas de contingencia: Priorización visual de desvíos y cambios operativos antes de que el usuario inicie el viaje.

• LA SOLUCIÓN: Un asistente de navegación secuencial y guiado que reemplaza la búsqueda libre por un flujo asistido. Provee solo los datos necesarios para el tramo actual, acelerando la toma de decisiones en la vía pública.

• IMPACTO: Los testeos demostraron asimilación inmediata al heredar patrones visuales de apps de delivery y transporte. Se validó que la claridad informativa en momentos de estrés vale más que un listado extenso de funciones difíciles de programar.`,
    
    en: `• OVERVIEW: Infrequent public transit users lack reliable real-time info during roadside updates, often facing ad-heavy interfaces or inaccurate data.

• THE CHALLENGE: Keep the product scope strictly within viable development limits, resisting the urge to add ticket payments or complex live tracking to keep the focus on immediate route guidance.

• KEY DECISIONS:
1. Stage-based companion UI: A dynamic state model inspired by ride-hailing apps (walking to stop, waiting time, proximity).
2. Reduced transactional scope: Canceled payment gateways, limiting financial features to basic card balance views.
3. Contingency alerts: Structured the layout to highlight route detours and schedule changes before the trip begins.

• THE SOLUTION: A sequential navigation assistant that replaces open-ended search with a guided workflow. It delivers only the required data for the current leg of the trip, speeding up decision-making on the street.

• IMPACT: Interactive prototype tests showed immediate adoption by leveraging familiar delivery and mobility UX patterns. The process proved that clarity under stress outweighs a long list of complex features.` },
      },
      {
        id: "pilchago",
        label: { es: "PilchaGO", en: "PilchaGO" },
        icon: TbShirt,
        url: "https://www.figma.com/design/kDUsSnsmEH02I8wOr00Rsk/PilchaGO?node-id=137-102&t=TW2la3lnUORxM6JN-1",
        description:
          { es: `• OVERVIEW: Estudiantes universitarios con presupuestos ajustados dependen de ferias americanas presenciales, pero la falta de tiempo y el clima frustran la experiencia. Se diseñó una plataforma local de moda circular que digitaliza la dinámica de feria sin los costos de los marketplaces tradicionales.

• EL DESAFÍO: Garantizar transacciones seguras entre desconocidos a costo cero. Al descartar envíos y pasarelas de pago por viabilidad económica, el diseño debió asumir la responsabilidad total de mitigar la desconfianza del encuentro presencial.

• DECISIONES CLAVE:
1. Logística descentralizada: Se eliminaron envíos integrados, delegando la coordinación en los usuarios para mantener el costo cero y el sentido comunitario.
2. Reputación en primer nivel: Validación social del vendedor (ventas e historial positivo) compartiendo protagonismo inmediato con la foto de la prenda.
3. Jerarquización de identidad: Se rechazó el anonimato de catálogos masivos, fijando bloques que anclan el artículo a una persona real dentro del circuito local.

• LA SOLUCIÓN: Una plataforma de catálogo curado donde la arquitectura de la información antepone la identidad y confiabilidad del ofertante por sobre la ficha técnica de la ropa, habilitando un contacto seguro fuera de la app.

• IMPACTO: Los testeos demostraron que visibilizar agresivamente las reseñas neutralizó el miedo a coordinar encuentros físicos en la ciudad. Se aprendió que, al remover funciones como el envío, el diseño debe sobrecompensar la seguridad mediante transparencia visual para hacer sostenible el modelo.`,
    
    en: `• OVERVIEW: College students on tight budgets rely on physical thrift markets, but limited time and volatile weather break the experience. Designed a local circular fashion platform that digitizes the market dynamic without traditional marketplace fees.

• THE CHALLENGE: Ensure safe peer-to-peer transactions locally at zero cost. By ruling out integrated shipping and payment gateways for affordability, the UI design had to take full responsibility for mitigating meetup anxiety.

• KEY DECISIONS:
1. Decentralized logistics: Removed integrated shipping, empowering users to self-coordinate to preserve the community feel and zero-cost model.
2. First-level reputation: Social proof (completed sales and rating percentages) shares immediate screen space with the product photography.
3. Identity hierarchy: Rejected anonymous marketplace listings by establishing visible profile blocks that anchor items to real people within the student circuit.

• LA SOLUCIÓN: A curated catalog platform where the information architecture prioritizes user identity and trust over technical garment details, driving a secure framework for off-app coordination.

• IMPACT: Testing showed that aggressively showcasing user reviews neutralized resistance to physical meetups in the city. The project proved that when removing core features like shipping, the UI must overcompensate with visual transparency to keep community models sustainable.` },
      },
      {
        id: "tcc",
        label: { es: "TCC:Trading Card Center", en: "TCC:Trading Card Center" },
        icon: TbCards,
        url: "https://www.figma.com/design/yiuEfQ2ZfLQMjOfVXy2Xjp/TCC--Trading-Card-Center-?t=lmmZ0zHxMpgVmbWu-1",
        description:
          { es: "Trading Card Center (TCC) es una plataforma móvil conceptual diseñada para revolucionar el intercambio en las comunidades de juegos de cartas coleccionables (TCG). El producto fusiona la inmediatez de las mecánicas de emparejamiento bidireccional ('matching') con la robustez de un marketplace especializado. El prototipo en Figma despliega flujos optimizados de carga de inventario personal, sistemas de búsqueda avanzada por rareza o edición, y un motor de 'match' inteligente que conecta automáticamente a usuarios con intereses de canje mutuos, transformando el comercio de nicho en una experiencia lúdica, segura y eficiente.", en: "Trading Card Center (TCC) is a conceptual mobile app designed to revolutionize how Trading Card Game (TCG) communities swap collectibles. The platform seamlessly merges the rapid interaction pattern of two-way matching mechanics with the structural infrastructure of a specialized marketplace. The Figma prototype features optimized flows for personal inventory logging, advanced database filters based on card rarity or set edition, and a smart match engine that instantly connects collectors with complementary needs, turning niche trading into a gamified, safe, and frictionless user journey." },
      },
      {
        id: "ioma",
        label: { es: "IOMA Digital", en: "IOMA Digital" },
        icon: TbPill,
        url: "https://www.figma.com/design/iCHG8sRETAd8IccWvgZWK7/Redise%C3%B1o-IOMA-DIGITAL?node-id=0-1&t=TBT0ecfZsStMs0ne-1",
        description:
          { es: "Proyecto conceptual de rediseño para IOMA Digital, la aplicación de la obra social de la provincia de Buenos Aires. Con el foco puesto en la accesibilidad y el diseño inclusivo, el desafío principal fue reestructurar la arquitectura de información para un público intergeneracional. El prototipo en Figma optimiza flujos críticos como la gestión de recetas digitales, autorizaciones de trámites y la credencial obligatoria, reduciendo la fricción visual y el estrés operativo del afiliado en momentos de vulnerabilidad médica.", en: "A conceptual redesign project for IOMA Digital, the primary public healthcare app for the Buenos Aires province. With a strong commitment to accessibility and inclusive design, the main challenge was restructuring the information architecture for an intergenerational user base. The Figma prototype optimizes critical healthcare flows—such as digital prescriptions, medical clearings, and mandatory ID verification—reducing visual friction and user anxiety during medical administrative tasks." },
      },
    ],
  },
  {
    id: "skills",
    label: { es: "Skills", en: "Skills" },
    icon: TbWand,
    items: [
      {
        id: "productdesign",
        label: { es: "Diseño de Producto & Estrategia UX", en: "Product Design & UX Strategy" },
        icon: TbTools,
        description:
          { es: "Capacidad integral para liderar el ciclo de vida de un producto digital. Mi enfoque combina la investigación de usuarios, la arquitectura de información y el diseño de interacción para resolver problemas complejos de negocio, transformándolos en flujos intuitivos, accesibles y con una sólida estrategia visual orientada a la conversión.", en: "End-to-end capability to lead the lifecycle of a digital product. My approach combines user research, information architecture, and interaction design to solve complex business problems, transforming them into intuitive, accessible flows with a strong visual strategy focused on conversion." },
      },
      {
        id: "frontend",
        label: { es: "Desarrollo Front-End & Lógica de Interfaz", en: "Front-End Development & UI Logic" },
        icon: TbTerminal,
        description:
          { es: "Comprensión profunda de la arquitectura web y la traducción de componentes visuales a código limpio y funcional. Mi conocimiento en maquetación, lógica de interfaz y sistemas interactivos me permite colaborar en perfecta sintonía con equipos de ingeniería, asegurando un hand-off fluido y una implementación fiel al diseño.", en: "Deep understanding of web architecture and the translation of visual components into clean, functional code. My knowledge in layouts, interface logic, and interactive systems allows me to collaborate in perfect harmony with engineering teams, ensuring a seamless hand-off and production-accurate implementation." },
      },
      {
        id: "sql",
        label: { es: "Análisis de Datos, SQL & Procesos ETL", en: "Data Analytics, SQL & ETL Processes" },
        icon: TbDatabase,
        description:
          { es: "Capacidad para extraer, transformar y modelar datos cuantitativos (ETL) mediante consultas estructuradas en SQL. Utilizo la analítica de negocio y la inteligencia de datos como herramientas de validación de experiencia, permitiéndome tomar decisiones de diseño basadas en evidencia y métricas reales de comportamiento.", en: "Capability to extract, transform, and model quantitative data (ETL) using structured SQL queries. I leverage business intelligence and data analytics as user experience validation tools, enabling me to make data-driven design decisions based on evidence and real user behavior metrics." },
      },
    ],
  },
  {
    id: "toolstack",
    label: { es: "ToolStack", en: "ToolStack" },
    icon: TbComponents,
    items: [
      {
        id: "figma",
        label: { es: "Figma", en: "Figma" },
        icon: TbBrandFigma,
        description: { es: "", en: "" },
      },
      {
        id: "v0",
        label: { es: "V0", en: "V0" },
        icon: TbBrandVercelFilled,
        description: { es: "", en: "" },
      },
      {
        id: "framer",
        label: { es: "Framer", en: "Framer" },
        icon: TbBrandFramer,
        description: { es: "", en: "" },
      },
      {
        id: "vscode",
        label: { es: "VS Code", en: "VS Code" },
        icon: TbBrandVscode,
        description: { es: "", en: "" },
      },



    ],
  },
  {
    id: "contact",
    label: { es: "Contacto", en: "Contact" },
    icon: TbMessageChatbot,
    items: [
      {
        id: "email",
        label: { es: "Correo", en: "Mail" },
        icon: TbMail,
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=jeremiastore2003@gmail.com",
        description: { es: "jeremiastore2003@gmail.com", en: "jeremiastore2003@gmail.com" },
      },
      {
        id: "linkedin",
        label: { es: "LinkedIn", en: "LinkedIn" },
        icon: TbBrandLinkedin,
        url: "https://www.linkedin.com/in/jerem%C3%ADas-tor%C3%A9-productdesigner/",
        description: { es: "Mi perfil de LinkedIn.", en: "My LinkedIn profile." },
      },
      {
        id: "instagram",
        label: { es: "Instagram", en: "Instagram" },
        icon: TbBrandInstagram,
        url: "https://www.instagram.com/jereeedisenia/",
        description: { es: "Seguime en Instagram", en: "Follow me on Instagram" },
      },
      {
        id: "twitter",
        label: { es: "X/Twitter", en: "X/Twitter" },
        icon: TbBrandTwitter,
        url: "https://x.com/jereemilos",
        description: { es: "Seguime en X.", en: "Follow me on X." },
      },
    ],
  },
  {
    id: "settings",
    label: { es: "Ajustes", en: "Settings" },
    icon: TbSettings,
    items: [
      {
        id: "language",
        label: { es: "Idioma", en: "Language" },
        icon: TbLanguage,
        description: { es: "Cambiar el idioma de la interfaz del sistema (Actual: Español).", en: "Change the system interface language (Current: English)." },
      },
      {
        id: "theme",
        label: { es: "Tema", en: "Theme" },
        icon: TbColorSwatch,
        description: { es: "Elegí tu propio estilo", en: "Choose your own style" },
      }


    ],
  },


]
