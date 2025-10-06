// Channel Logo Component - Uses brand colors and styled text
// TODO: Replace with actual SVG logos in public/images/channels/

interface ChannelLogoProps {
  name: string;
  className?: string;
}

const channelStyles: Record<string, { bg: string; text: string; font?: string }> = {
  'Fox News': { bg: 'bg-blue-900', text: 'text-white', font: 'font-black' },
  'ESPN': { bg: 'bg-red-600', text: 'text-white', font: 'font-black' },
  'Hulu': { bg: 'bg-green-500', text: 'text-black', font: 'font-black' },
  'Roku': { bg: 'bg-purple-700', text: 'text-white', font: 'font-black' },
  'Samsung TV+': { bg: 'bg-blue-600', text: 'text-white' },
  'TNT': { bg: 'bg-black', text: 'text-white', font: 'font-black' },
  'TLC': { bg: 'bg-purple-600', text: 'text-white' },
  'Comedy Central': { bg: 'bg-yellow-400', text: 'text-black', font: 'font-black' },
  'fuboTV': { bg: 'bg-blue-500', text: 'text-white' },
  'BET': { bg: 'bg-black', text: 'text-white', font: 'font-black' },
  'CNN': { bg: 'bg-red-600', text: 'text-white', font: 'font-black' },
  'Food Network': { bg: 'bg-orange-500', text: 'text-white' },
  'CBS Sports': { bg: 'bg-blue-800', text: 'text-white', font: 'font-black' },
  'AMC': { bg: 'bg-black', text: 'text-white', font: 'font-black' },
  'Discovery+': { bg: 'bg-blue-500', text: 'text-white' },
  'Paramount+': { bg: 'bg-blue-600', text: 'text-white' },
  'Peacock': { bg: 'bg-gradient-to-r from-purple-600 to-blue-500', text: 'text-white' },
  'Pluto TV': { bg: 'bg-purple-900', text: 'text-white' },
  'Tubi': { bg: 'bg-orange-600', text: 'text-white' },
  'Apple TV+': { bg: 'bg-black', text: 'text-white' },
  'Bloomberg TV': { bg: 'bg-black', text: 'text-yellow-400', font: 'font-black' },
  'NBC Sports': { bg: 'bg-gradient-to-r from-yellow-400 to-orange-500', text: 'text-black', font: 'font-black' },
  'NFL Network': { bg: 'bg-blue-900', text: 'text-white', font: 'font-black' },
  'NBA TV': { bg: 'bg-blue-700', text: 'text-white', font: 'font-black' },
};

export const ChannelLogo = ({ name, className = '' }: ChannelLogoProps) => {
  // Convert name to filename (e.g., "Fox News" -> "fox-news", "Apple TV+" -> "apple-tv")
  const filename = name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\+/g, '')
    .replace('tv-', 'tv');
  const logoPath = `/images/channels/${filename}.svg`;

  // Try to load image, fallback to styled text
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <img
        src={logoPath}
        alt={name}
        className="w-full h-[60px] object-cover"
        onError={(e) => {
          // Fallback to styled text if image not found
          const style = channelStyles[name] || { bg: 'bg-gray-800', text: 'text-white' };
          const target = e.target as HTMLImageElement;
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<div class="${style.bg} ${style.text} ${style.font || 'font-semibold'} px-6 py-3 flex items-center justify-center h-[60px]"><span class="text-sm whitespace-nowrap">${name}</span></div>`;
          }
        }}
      />
    </div>
  );
};

export default ChannelLogo;
