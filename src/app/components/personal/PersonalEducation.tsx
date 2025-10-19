export default function PersonalEducation() {
  const education = [
    {
      degree: "Self-Taught Music Production",
      school: "YouTube University & Online Courses",
      period: "2022 - Present",
      description:
        "Learning Ableton Live, sound design, and music theory. Creating ambient and lo-fi beats. Still a beginner but loving the journey!",
    },
    {
      degree: "Photography Workshop Series",
      school: "Local Community Center",
      period: "2021",
      description:
        "Attended weekend workshops on portrait and street photography. Learned about composition, lighting, and post-processing with Lightroom.",
    },
    {
      degree: "Philosophy & Ethics Online Course",
      school: "Coursera",
      period: "2020",
      description:
        "Explored existentialism, ethics in technology, and modern philosophy. Changed my perspective on AI and human connection.",
    },
    {
      degree: "Arduino & Robotics Hobby Learning",
      school: "DIY & Maker Communities",
      period: "2019 - 2020",
      description:
        "Built small robots, LED projects, and home automation gadgets. Joined local maker space and participated in hackathons for fun.",
    },
  ];

  return (
    <section id="education" className="min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-6">Learning Path</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-purple-600 pl-6">
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