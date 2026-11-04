export type Faq = {
    id: number;
    question: string;
    answer: string;
    defaultOpen?: boolean;
};

const faqs: Faq[] = [
    {
        id: 1,
        question: "¿Cuál es el tiempo de entrega de una Landing Page de alto rendimiento?",
        answer: "Nuestro proceso ágil nos permite entregar versiones listas para producción en un plazo típico de <strong>7 a 14 días laborables</strong>. Esto incluye arquitectura de información, redacción persuasiva (copywriting), diseño UI/UX en Figma y desarrollo frontend optimizado para velocidad Core Web Vitals.",
        defaultOpen: true,
    },
    {
        id: 2,
        question: "¿Cómo garantizan que la página aumentará las conversiones?",
        answer: "No diseñamos basándonos en conjeturas. Aplicamos principios de psicología cognitiva, jerarquía visual estricta y reducción sistemática de fricción. Integramos elementos de prueba social estratégica y respondemos de manera anticipada a las dudas del usuario para maximizar el retorno de inversión en tus campañas de tráfico.",
    },
    {
        id: 3,
        question: "¿El código generado es compatible con cualquier CMS o plataforma?",
        answer: "Totalmente. Desarrollamos con HTML5 estándar, CSS utility-first y JavaScript nativo sin librerías pesadas. Puedes embeber el código o integrarlo con fluidez en plataformas como Webflow, WordPress, Shopify, Next.js, Astro o cualquier stack frontend personalizado.",
    },
    {
        id: 4,
        question: "¿Ofrecen soporte y mantenimiento post-lanzamiento?",
        answer: "Sí, todos nuestros entregables incluyen <strong>30 días de soporte técnico de garantía</strong> tras el despliegue para solucionar cualquier detalle imprevisto. Además, disponemos de planes de optimización continua mediante pruebas A/B y auditorías analíticas.",
    },
    {
        id: 5,
        question: "¿Cuál es la modalidad de pago y contratación?",
        answer: "Manejamos un esquema 50% de anticipo al firmar la propuesta y 50% contra entrega y satisfacción final. Emitimos factura fiscal y aceptamos transferencia bancaria, Stripe y tarjetas corporativas internacionales.",
    },
];

export default faqs;
