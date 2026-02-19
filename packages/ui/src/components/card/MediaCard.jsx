// MediaCard.jsx
import BaseCard from './BaseCard';

export default function MediaCard({
  type = 'image',
  src,
  title,
  description,
  badge,
}) {
  return (
    <BaseCard className="p-0 overflow-hidden flex flex-col h-full">
      {/* Media Section */}
      <div className="relative aspect-video bg-slate-200">
        {type === 'video' ? (
          <div className="flex items-center justify-center h-full group cursor-pointer">
            <img
              src={src}
              className="w-full h-full object-cover opacity-80"
              alt={title}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
              <span className="text-4xl text-white drop-shadow-md">▶️</span>
            </div>
          </div>
        ) : (
          <img src={src} className="w-full h-full object-cover" alt={title} />
        )}

        {badge && (
          <span className="absolute top-2 right-2 px-2 py-1 bg-white/90 text-[10px] font-bold uppercase rounded shadow-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h4 className="text-md font-bold text-slate-800 line-clamp-1">
          {title}
        </h4>
        <p className="text-sm text-slate-500 mt-1 line-clamp-2">
          {description}
        </p>
      </div>
    </BaseCard>
  );
}
