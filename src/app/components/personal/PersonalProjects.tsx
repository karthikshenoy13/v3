export default function PersonalProjects() {
  const projects = [
    {
      title: "Mood-Based Music Generator",
      tech: "React, Tone.js, TensorFlow.js",
      description:
        "An experimental web app that generates ambient music based on your current mood. Uses facial recognition and AI to create unique soundscapes.",
    },
    {
      title: "Digital Nostalgia Archive",
      tech: "Next.js, Three.js, Web Audio API",
      description:
        "Interactive 3D space showcasing old internet aesthetics - MySpace layouts, Windows XP vibes, and early 2000s web culture. A love letter to Web 1.0.",
    },
    {
      title: "Coffee Shop Finder Bot",
      tech: "Python, Telegram API, Google Maps API",
      description:
        "Telegram bot that finds cozy coffee shops with good WiFi for remote work. Rates them by vibe, noise level, and outlet availability.",
    },
    {
      title: "Minimal Habit Tracker",
      tech: "React, Local Storage, Canvas API",
      description:
        "Super simple habit tracker with beautiful data visualization. No accounts, no cloud - just you and your streaks. Privacy-first design.",
    },
    {
      title: "Pixel Art Daily Generator",
      tech: "JavaScript, Canvas API",
      description:
        "Daily pixel art generator that creates unique 16x16 art based on the current date. Each day brings a new piece. Simple and meditative.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-6">Creative Works</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg border-l-4 border-purple-600 hover:bg-gray-650 transition-colors"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-purple-400 text-sm mb-3">{project.tech}</p>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}