const SocialIcons = ({ className = '', vertical = false }) => {
  const socials = [
    { name: 'Pinterest', icon: 'P' },
    { name: 'Instagram', icon: 'IG' },
    { name: 'TikTok', icon: 'TT' },
    { name: 'X', icon: 'X' },
  ];

  return (
    <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-3 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href="#"
          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors text-xs font-medium"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
