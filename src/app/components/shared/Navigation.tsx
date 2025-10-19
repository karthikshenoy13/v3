interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  mode: 'work' | 'personal';
}

export default function Navigation({ activeSection, onNavigate, mode }: NavigationProps) {
  const workNavItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  const personalNavItems = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Life Journey" },
    { id: "education", label: "Learning Path" },
    { id: "projects", label: "Creative Works" },
  ];

  const navItems = mode === 'work' ? workNavItems : personalNavItems;
  const activeColor = mode === 'work' ? 'text-blue-400' : 'text-purple-400';

  return (
    <nav className="space-y-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`block text-left text-lg font-medium transition-all ${
            activeSection === item.id
              ? `${activeColor} text-2xl`
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}