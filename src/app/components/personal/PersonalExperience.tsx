export default function PersonalExperience() {
  const experiences = [
    {
      role: "Digital Nomad Adventures",
      company: "Around the World",
      period: "2023 - Present",
      description:
        "Traveling while working remotely, experiencing different cultures, and documenting the journey through photography and writing. Currently exploring Southeast Asia.",
    },
    {
      role: "Home Studio Setup",
      company: "Personal Project",
      period: "2022",
      description:
        "Built a home music production studio and started learning electronic music composition. Released two ambient tracks on SoundCloud.",
    },
    {
      role: "Community Coding Mentor",
      company: "Local Code Club",
      period: "2020 - 2022",
      description:
        "Volunteered to teach coding basics to high school students. Helped over 30 students build their first websites and sparked their interest in tech.",
    },
  ];

  return (
    <section id="experience" className="min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-6">Life Journey</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-purple-600 pl-6">
            <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
            <p className="text-gray-400 mb-2">
              {exp.company} • {exp.period}
            </p>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}