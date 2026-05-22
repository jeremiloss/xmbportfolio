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

• IMPACTO: Se resolvieron ineficiencias operativas concretas mediante la micro-arquitectura de la información, demostrando que el valor del UX va más allá de una renovación estética integral.`, en: "Comprehensive redesign of the platform and design system for Amaya Real Estate. The project focused on optimizing user search flows and building a scalable component library in Figma. Working side-by-side with the development team, I led the technical documentation and a seamless hand-off process, significantly reducing engineering friction and ensuring a fast, efficient production launch that stayed 100% true to the design." },
      },
      {
        id: "cuentadni",
        label: { es: "Rediseño Cuenta-DNI", en: "Cuenta DNI-Redesign" },
        icon: TbFaceId,
        url: "https://www.figma.com/design/JASMjBmeSLXtOCmWsT1LFc/Proyecto-Redise%C3%B1o-Cuenta-DNI---Jerem%C3%ADas-Tor%C3%A9?node-id=0-1&t=eaZa6YJCSZwlGyRt-1",
        description:
          { es: "Proyecto personal de rediseño para Cuenta DNI, la billetera digital líder en la provincia de Buenos Aires. El desafío se centró en optimizar la arquitectura de información y simplificar los flujos críticos de la app (como cobros y pagos con QR) para reducir la carga cognitiva de un público masivo y diverso. En el archivo de Figma vas a encontrar la investigación de usuarios, el benchmark competitivo y las interfaces de alta fidelidad que transforman la herramienta en una experiencia ágil, moderna y accesible.", en: "A personal redesign project for Cuenta DNI, the leading digital wallet in the Buenos Aires province. The challenge focused on optimizing information architecture and simplifying critical user flows—such as QR code payments—to reduce cognitive load for a massive, highly diverse user base. Inside the Figma file, you will find user research, competitive benchmarking, and high-fidelity interfaces crafted to transform the platform into a seamless, modern, and fully accessible experience." },
      },
      {
        id: "bondify",
        label: { es: "Bondify", en: "Bondify" },
        icon: TbBusStop,
        url: "https://www.figma.com/design/OQl57cx7xMOiVgxxKLUYPf/BONDIFY?node-id=0-1&t=tXiJXtcrYYffwZEe-1",
        description:
          { es: "Bondify es un proyecto de diseño conceptual enfocado en revolucionar la experiencia de movilidad urbana y transporte público. El proyecto aborda de manera integral los puntos de dolor más comunes del usuario de colectivos: desde la predictibilidad de horarios en tiempo real hasta la simplificación de la gestión de pasajes. A través de interfaces limpias, componentes de navegación rápida y un sistema visual de alto contraste pensado para el uso dinámico en la calle, el prototipo en Figma despliega una solución ágil que transforma el caos cotidiano en un flujo intuitivo y controlado.", en: "Bondify is a conceptual design project focused on redefining the urban mobility and public transit experience. The case study tackles the most critical pain points of daily commuters: from real-time scheduling predictability to streamlined transit-card management. Featuring clean layouts, rapid-navigation UI components, and a high-contrast visual system tailored for on-the-go street usage, the Figma prototype showcases an agile mobile solution that turns daily transit chaos into a seamless, controlled user journey." },
      },
      {
        id: "pilchago",
        label: { es: "PilchaGO", en: "PilchaGO" },
        icon: TbShirt,
        url: "https://www.figma.com/design/kDUsSnsmEH02I8wOr00Rsk/PilchaGO?node-id=137-102&t=TW2la3lnUORxM6JN-1",
        description:
          { es: "PilchaGO es una plataforma conceptual de 'recommerce' y feria americana virtual diseñada específicamente para la comunidad estudiantil. Rompiendo con el esquema de los marketplaces genéricos, el diseño se centra en la curaduría visual y los gustos personales como eje de navegación, permitiendo a los usuarios comprar y vender ropa de forma organizada, categorizada y con fuerte foco en la identidad de estilo. El prototipo en Figma despliega una interfaz fresca, sistemas de filtrado por estéticas y flujos de publicación ágiles que transforman la moda circular en una experiencia social y comunitaria.", en: "PilchaGO is a conceptual recommerce platform and virtual thrift store tailored for the student community. Shifting away from generic marketplaces, the product focuses on visual curation and personal style as the core navigation drivers, allowing users to buy and sell clothes in an organized, highly categorized space that celebrates personal identity. The Figma prototype showcases a fresh interface, aesthetic-based filtering systems, and frictionless posting flows designed to transform circular fashion into an engaging, community-driven social experience." },
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
