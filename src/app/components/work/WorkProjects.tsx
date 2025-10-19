export default function WorkProjects() {
  const projects = [
    {
      title: "Enterprise E-Commerce Platform",
      tech: "Next.js, TypeScript, Stripe, PostgreSQL, AWS",
      description:
        "Full-stack e-commerce solution handling 100K+ daily transactions. Implemented payment processing, inventory management, and admin dashboard.",
    },
    {
      title: "SaaS Analytics Dashboard",
      tech: "React, Node.js, MongoDB, Redis, Docker",
      description:
        "Real-time analytics platform for tracking user behavior and business metrics. Built scalable data pipeline processing millions of events daily.",
    },
    {
      title: "Microservices API Gateway",
      tech: "Node.js, Express, RabbitMQ, Kubernetes",
      description:
        "Designed and implemented API gateway for microservices architecture. Improved system reliability and reduced latency by 35%.",
    },
    {
      title: "Content Management System",
      tech: "Next.js, Prisma, PostgreSQL, Tailwind CSS",
      description:
        "Custom CMS for managing multi-language content across web and mobile platforms. Features role-based access control and version history.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-6">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg border-l-4 border-blue-600 hover:bg-gray-650 transition-colors"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-blue-400 text-sm mb-3">{project.tech}</p>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}