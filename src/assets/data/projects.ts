
import Humana11 from "../images/projects/humana11.png";
import Talento from "../images/projects/talento.png";
import Uhe from "../images/projects/uhe.png";
import Suitedo from "../images/projects/suitedo.png";
import CalculadoraPropinas from "../images/projects/Calculadora-propinas.png";
import Shopi from "../images/projects/Shopi.png";
import ComandosLinux from "../images/projects/Comandos-Linux.png";
import CabEspacial from "../images/projects/Cab-Espacial.png";
import APV from "../images/projects/APV.png";
import SeguimientoPacientes from "../images/projects/Seguimiento-Pacientes.png";
import Cotizador from "../images/projects/Cotizador.png";
import Carrito from "../images/projects/Carrito.png";

type Project = {
    title: string;
    description: string;
    image: ImageMetadata;
    tags: string[];
    repoUrl: string | null;
    liveUrl: string | null;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        title: "SuiteDO",
        featured: true,
        description: "Sistema integral de diagnósticos de Desarrollo Organizacional para empresas cliente, que facilita la toma de decisiones estratégicas.",
        image: Suitedo,
        tags: ["Laravel", "React", "TypeScript", "Tailwind", "MariaDB"],
        repoUrl: null,
        liveUrl: "https://suitedo.com/"
    },
    {
        title: "Universidad Humana Empresaria",
        featured: true,
        description: "Plataforma educativa para la gestión de programas formativos, con experiencias de aprendizaje organizadas y dinámicas.",
        image: Uhe,
        tags: ["Laravel", "React", "TypeScript", "Tailwind", "MariaDB"],
        repoUrl: null,
        liveUrl: "https://universidadhumanaempresaria.com/"
    },
    {
        title: "Atracción de Talento",
        featured: true,
        description: "Aplicación web para la gestión de procesos de atracción y selección de talento humano, optimizando la experiencia tanto para candidatos como para reclutadores.",
        image: Talento,
        tags: ["Laravel", "React", "TypeScript", "Tailwind", "MariaDB"],
        repoUrl: null,
        liveUrl: "https://talento11.com/"
    },
    {
        title: "Humana 11 — sitio corporativo",
        featured: true,
        description: "Sitio corporativo autogestionable con panel administrativo de contenidos.",
        image: Humana11,
        tags: ["Laravel", "React", "TypeScript", "Astro", "Tailwind", "MariaDB"],
        repoUrl: null,
        liveUrl: "https://humana11.com/"
    },
    {
        title: "Calculadora de Propinas",
        description: "Aplicación interactiva que permite calcular fácilmente el consumo total y las propinas, con interfaz amigable y diseño responsivo.",
        image: CalculadoraPropinas,
        tags: ["React", "TypeScript", "Tailwind"],
        repoUrl: "https://github.com/WarCrazhed/calculadora-propinas",
        liveUrl: "https://harmonious-scone-0c626b.netlify.app/"
    },
    {
        title: "Shopi",
        description: "Tienda en línea con carrito de compras, navegación por categorías y gestión de productos, enfocada en ofrecer una experiencia fluida al usuario.",
        image: Shopi,
        tags: ["React", "Tailwind"],
        repoUrl: "https://github.com/WarCrazhed/react-course",
        liveUrl: "https://shopi-react-course.netlify.app/"
    },
    {
        title: "Comandos Linux",
        description: "Tabla interactiva con buscador de comandos Linux y sus descripciones, pensada como recurso de consulta rápida para desarrolladores y estudiantes.",
        image: ComandosLinux,
        tags: ["React", "Tailwind"],
        repoUrl: "https://github.com/WarCrazhed/comandos-linux",
        liveUrl: "https://cosmic-sorbet-8f52fd.netlify.app/"
    },
    {
        title: "Cabina Espacial",
        description: "Simulación visual de una cabina espacial con elementos interactivos, enfocada en la experimentación con diseño y animaciones.",
        image: CabEspacial,
        tags: ["React", "Tailwind"],
        repoUrl: "https://github.com/WarCrazhed/cab-espacial",
        liveUrl: "https://cab-espacial.netlify.app/"
    },
    {
        title: "Administrador de Pacientes (MERN)",
        description: "Interfaz para la gestión de pacientes veterinarios, parte de un proyecto MERN, enfocada en registro, edición y seguimiento de historiales clínicos.",
        image: APV,
        tags: ["React", "Tailwind", "MongoDB", "Express", "NodeJS"],
        repoUrl: "https://github.com/WarCrazhed/APV_MERN_frontend",
        liveUrl: "https://sparkling-dodol-90cad2.netlify.app/"
    },
    {
        title: "Seguimiento de Pacientes",
        description: "Aplicación web para la gestión y seguimiento de pacientes en una clínica veterinaria, con funcionalidades de registro y control de citas.",
        image: SeguimientoPacientes,
        tags: ["React", "Tailwind"],
        repoUrl: "https://github.com/WarCrazhed/CRM-React-Router-Dom-VITE",
        liveUrl: "https://fastidious-fudge-7a290e.netlify.app"
    },
    {
        title: "Cotizador de Préstamos",
        description: "Herramienta interactiva para calcular montos, intereses y cuotas de préstamos de manera rápida y sencilla.",
        image: Cotizador,
        tags: ["React", "CSS"],
        repoUrl: null,
        liveUrl: "https://resplendent-pegasus-790308.netlify.app/"
    },
    {
        title: "Carrito de Compras de Cursos",
        description: "Tienda online para la compra de cursos en línea, con carrito de compras y simulación de flujo de compra.",
        image: Carrito,
        tags: ["JavaScript", "CSS"],
        repoUrl: null,
        liveUrl: "https://naughty-lovelace-023be0.netlify.app/"
    },
];
