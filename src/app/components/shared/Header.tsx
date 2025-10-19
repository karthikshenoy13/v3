interface HeaderProps {
  mode: 'work' | 'personal';
  onToggle: () => void;
}

export default function Header({ mode, onToggle }: HeaderProps) {
  const workTagline = "Full Stack Developer & Software Engineer";
  const personalTagline = "Creative Thinker & Digital Explorer";

  return (
    <div>
      {/* Name - Clickable with glow effect */}
      <h1 
        onClick={onToggle}
        className={`text-6xl font-bold mb-4 cursor-pointer transition-all duration-700 select-none ${
          mode === 'work' 
            ? 'text-white hover:text-blue-300 animate-pulse-subtle' 
            : 'text-white hover:text-purple-300 animate-pulse-subtle'
        }`}
        style={{
          textShadow: mode === 'work' 
            ? '0 0 20px rgba(96, 165, 250, 0.3), 0 0 40px rgba(96, 165, 250, 0.1)' 
            : '0 0 20px rgba(192, 132, 252, 0.3), 0 0 40px rgba(192, 132, 252, 0.1)'
        }}
      >
        Your Name
      </h1>
      
      {/* Tagline - changes based on mode */}
      <p className={`text-2xl mb-12 transition-all duration-700 ${
        mode === 'work' ? 'text-blue-400' : 'text-purple-400'
      }`}>
        {mode === 'work' ? workTagline : personalTagline}
      </p>

      {/* Subtle mode indicator */}
      <p className="text-xs text-gray-500 mb-8 italic">
        {mode === 'work' ? '— professional mode' : '— personal mode'}
      </p>
    </div>
  );
}