export type Lang = "en" | "es";

export interface Project {
    title: string;

    subtitle: {
        en: string;
        es: string;
    };

    description: {
        en: string;
        es: string;
    };

    tech: string[];

    github: string;

    demo?: string;

    featured?: boolean;

    image?: string;
}

export const projects: Project[] = [
    {
        title: "ThesisMatch",

        subtitle: {
            en: "PhD Supervisor Matching Platform",
            es: "Plataforma de búsqueda de directores de tesis doctoral",
        },

        description: {
            en: "Full-stack web application developed as my Bachelor's Final Project at UPM. It helps students find suitable PhD supervisors through an automatic compatibility matching system.",
            es: "Aplicación web full-stack desarrollada como Trabajo Fin de Grado en la UPM. Ayuda a los estudiantes a encontrar directores de tesis doctoral mediante un sistema automático de compatibilidad.",
        },

        tech: [
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "React",
            "Next.js",
            "TypeScript",
            "JWT",
        ],

        github: "https://github.com/alvaroogarciia1/TFG-PlataformaDirectoresTesis",

        demo: "https://youtu.be/hM7BE8F7HXs",

        featured: true,
    },

    {
        title: "Sokoban",

        subtitle: {
            en: "Java Desktop Game",
            es: "Videojuego de escritorio en Java",
        },

        description: {
            en: "Java implementation of the classic Sokoban puzzle game with GUI, undo system, persistence and automated testing.",
            es: "Implementación en Java del clásico juego Sokoban con interfaz gráfica, sistema de deshacer, persistencia y pruebas automatizadas.",
        },

        tech: ["Java", "Maven", "JUnit 5", "SonarQube"],

        github: "https://github.com/alvaroogarciia1/sokoban",
    },

    {
        title: "MiniShell",

        subtitle: {
            en: "Unix Command Interpreter in C",
            es: "Intérprete de comandos Unix en C",
        },

        description: {
            en: "Unix-like shell developed in C, featuring process management, pipes, redirections and signal handling.",
            es: "Shell tipo Unix desarrollada en C con gestión de procesos, tuberías, redirecciones y manejo de señales.",
        },

        tech: ["C", "Linux", "Makefile"],

        github: "https://github.com/alvaroogarciia1/minishell",
    },

    {
        title: "PPS Wordle",

        subtitle: {
            en: "Dictionary Management in C",
            es: "Gestión de diccionarios en C",
        },

        description: {
            en: "Low-level C project focused on binary file handling, Caesar cipher encryption, logging and shared library integration.",
            es: "Proyecto en C centrado en manejo de ficheros binarios, cifrado César, sistema de logs e integración de bibliotecas compartidas.",
        },

        tech: ["C", "Linux", "Shared Libraries"],

        github: "https://github.com/alvaroogarciia1/wordle",
    },

    {
        title: "Language Processor",

        subtitle: {
            en: "Compiler in Java",
            es: "Compilador en Java",
        },

        description: {
            en: "Compiler-style project including lexical, syntax and semantic analysis with AST and symbol table management.",
            es: "Proyecto de compiladores con análisis léxico, sintáctico y semántico, árbol AST y gestión de tablas de símbolos.",
        },

        tech: ["Java", "Compilers", "AST"],

        github: "https://github.com/alvaroogarciia1/languageProcessor",
    },

    {
        title: "Tennis Tournament Manager",

        subtitle: {
            en: "Flutter Mobile Application",
            es: "Aplicación móvil en Flutter",
        },

        description: {
            en: "Mobile application developed in Flutter for managing individual tennis tournaments.",
            es: "Aplicación móvil desarrollada en Flutter para gestionar torneos individuales de tenis.",
        },

        tech: ["Flutter", "Dart", "Firebase"],

        github: "https://github.com/alvaroogarciia1/tenisApp",
    },

    {
        title: "Library Management",

        subtitle: {
            en: "REST API",
            es: "API REST",
        },

        description: {
            en: "RESTful API developed with Spring Boot following REST principles and SQL persistence.",
            es: "API REST desarrollada con Spring Boot siguiendo los principios REST y persistencia SQL.",
        },

        tech: ["Java", "Spring Boot", "PostgreSQL", "REST API"],

        github: "https://github.com/alvaroogarciia1/libraryRESTApi",
    },

    {
        title: "Library Management",

        subtitle: {
            en: "SOAP Web Service",
            es: "Servicio web SOAP",
        },

        description: {
            en: "SOAP-based web service developed with WSDL and Apache Axis2, deployable on Tomcat.",
            es: "Servicio web SOAP desarrollado con WSDL y Apache Axis2 desplegable sobre Tomcat.",
        },

        tech: ["Java", "SOAP", "WSDL", "Axis2", "Tomcat"],

        github: "https://github.com/alvaroogarciia1/wsdlLibrary",
    },
];