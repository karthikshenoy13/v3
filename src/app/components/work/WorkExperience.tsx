export default function WorkExperience() {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Corporation Inc.",
      period: "2022 - Present",
      description:
        "Led development of enterprise-scale applications using Next.js and React. Architected microservices infrastructure and mentored junior developers.",
    },
    {
      role: "Full Stack Developer",
      company: "Startup Solutions LLC",
      period: "2020 - 2022",
      description:
        "Built and maintained the company's main SaaS product using React, Node.js, and PostgreSQL. Improved application performance by 40% through optimization.",
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2018 - 2020",
      description:
        "Developed responsive web applications for Fortune 500 clients. Collaborated with design teams to implement pixel-perfect user interfaces.",
    },
  ];

  return (
    <section id="experience" className="min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((job, index) => (
          <div key={index} className="border-l-2 border-blue-600 pl-6">
            <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
            <p className="text-gray-400 mb-2">
              {job.company} • {job.period}
            </p>
            <p className="text-gray-300 leading-relaxed">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}