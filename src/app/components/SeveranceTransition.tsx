interface SeveranceTransitionProps {
  isTransitioning: boolean;
  mode: 'work' | 'personal';
}

export default function SeveranceTransition({ isTransitioning, mode }: SeveranceTransitionProps) {
  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 animate-fade-in">
      {/* Brain SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg
          width="600"
          height="600"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse-slow"
        >
          {/* Brain illustration */}
          <path
            d="M100 40C85 40 75 50 75 65C75 70 76 74 78 78C72 80 68 86 68 93C68 98 70 102 73 105C70 108 68 112 68 117C68 125 74 131 82 132C82 140 88 147 96 149C96 155 100 160 106 162C106 168 111 173 117 174C120 174 123 173 125 171C128 173 132 174 136 174C144 174 151 168 152 160C158 158 163 153 164 146C170 144 175 139 176 132C184 131 190 125 190 117C190 112 188 108 185 105C188 102 190 98 190 93C190 86 186 80 180 78C182 74 183 70 183 65C183 50 173 40 158 40C153 40 148 41 144 43C140 41 135 40 130 40C125 40 120 41 116 43C112 41 107 40 100 40Z"
            fill={mode === 'work' ? 'rgba(96, 165, 250, 0.3)' : 'rgba(192, 132, 252, 0.3)'}
            stroke={mode === 'work' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(192, 132, 252, 0.5)'}
            strokeWidth="2"
          />
          {/* Brain details - left hemisphere */}
          <path
            d="M85 70C85 70 90 75 90 82C90 89 85 94 85 94"
            stroke={mode === 'work' ? 'rgba(96, 165, 250, 0.4)' : 'rgba(192, 132, 252, 0.4)'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M80 90C80 90 85 95 85 102C85 109 80 114 80 114"
            stroke={mode === 'work' ? 'rgba(96, 165, 250, 0.4)' : 'rgba(192, 132, 252, 0.4)'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M90 110C90 110 95 115 95 122C95 129 90 134 90 134"
            stroke={mode === 'work' ? 'rgba(96, 165, 250, 0.4)' : 'rgba(192, 132, 252, 0.4)'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Brain details - right hemisphere */}
          <path
            d="M115 70C115 70 110 75 110 82C110 89 115 94 115 94"
            stroke={mode === 'work' ? 'rgba(96, 165, 250, 0.4)' : 'rgba(192, 132, 252, 0.4)'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M120 90C120 90 115 95 115 102C115 109 120 114 120 114"
            stroke={mode === 'work' ? 'rgba(96, 165, 250, 0.4)' : 'rgba(192, 132, 252, 0.4)'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M110 110C110 110 105 115 105 122C105 129 110 134 110 134"
            stroke={mode === 'work' ? 'rgba(96, 165, 250, 0.4)' : 'rgba(192, 132, 252, 0.4)'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Center division line */}
          <line
            x1="100"
            y1="50"
            x2="100"
            y2="160"
            stroke={mode === 'work' ? 'rgba(96, 165, 250, 0.6)' : 'rgba(192, 132, 252, 0.6)'}
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h2 
          className={`text-5xl font-bold mb-6 tracking-wider animate-pulse ${
            mode === 'work' ? 'text-blue-400' : 'text-purple-400'
          }`}
        >
          IMPLEMENTING
        </h2>
        <h3 
          className={`text-6xl font-bold mb-4 tracking-wider ${
            mode === 'work' ? 'text-blue-300' : 'text-purple-300'
          }`}
          style={{
            textShadow: mode === 'work' 
              ? '0 0 30px rgba(96, 165, 250, 0.5)' 
              : '0 0 30px rgba(192, 132, 252, 0.5)'
          }}
        >
          SEVERANCE PROTOCOL
        </h3>
        <div className="flex justify-center gap-2 mt-8">
          <div className={`w-3 h-3 rounded-full animate-bounce ${
            mode === 'work' ? 'bg-blue-400' : 'bg-purple-400'
          }`} style={{ animationDelay: '0s' }}></div>
          <div className={`w-3 h-3 rounded-full animate-bounce ${
            mode === 'work' ? 'bg-blue-400' : 'bg-purple-400'
          }`} style={{ animationDelay: '0.2s' }}></div>
          <div className={`w-3 h-3 rounded-full animate-bounce ${
            mode === 'work' ? 'bg-blue-400' : 'bg-purple-400'
          }`} style={{ animationDelay: '0.4s' }}></div>
        </div>
        <p className="text-gray-500 text-sm mt-6 tracking-widest">
          {mode === 'work' ? 'ACTIVATING PROFESSIONAL CONSCIOUSNESS' : 'ACTIVATING PERSONAL CONSCIOUSNESS'}
        </p>
      </div>
    </div>
  );
}