export default function WorkEducation() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "State University",
      period: "2014 - 2018",
      description:
        "Graduated with honors (GPA: 3.8/4.0). Specialized in software engineering and distributed systems. President of Computer Science Club.",
    },
    {
      degree: "Full Stack Web Development Certificate",
      school: "Professional Coding Academy",
      period: "2017",
      description:
        "Intensive 12-week program covering modern web development stack including React, Node.js, PostgreSQL, and AWS deployment.",
    },
    {
      degree: "AWS Certified Solutions Architect",
      school: "Amazon Web Services",
      period: "2021",
      description:
        "Professional certification demonstrating expertise in designing distributed systems on AWS platform.",
    },
  ];

  return (
    <section id="education" className="min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-6">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-blue-600 pl-6">
            <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-gray-400 mb-2">
              {edu.school} • {edu.period}
            </p>
            <p className="text-gray-300 leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}