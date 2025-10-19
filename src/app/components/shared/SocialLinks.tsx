import { Github, Linkedin, Mail, Twitter } from "lucide-react";

interface SocialLinksProps {
  mode: 'work' | 'personal';
}

export default function SocialLinks({ mode }: SocialLinksProps) {
  const hoverColor = mode === 'work' ? 'hover:text-blue-400' : 'hover:text-purple-400';

  return (
    <div className="flex gap-6">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-400 ${hoverColor} transition-colors`}
        aria-label="GitHub"
      >
        <Github size={28} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-400 ${hoverColor} transition-colors`}
        aria-label="LinkedIn"
      >
        <Linkedin size={28} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-400 ${hoverColor} transition-colors`}
        aria-label="Twitter"
      >
        <Twitter size={28} />
      </a>
      <a
        href="mailto:your.email@example.com"
        className={`text-gray-400 ${hoverColor} transition-colors`}
        aria-label="Email"
      >
        <Mail size={28} />
      </a>
    </div>
  );
}