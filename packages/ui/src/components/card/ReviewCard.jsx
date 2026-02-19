// ReviewCard.jsx
import BaseCard from './BaseCard';

export default function ReviewCard({
  reviewer,
  rating,
  comment,
  date,
  isVerified,
}) {
  return (
    <BaseCard className="flex flex-col gap-3">
      {/* Reviewer Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold">
            {reviewer.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">{reviewer}</p>
            <p className="text-[10px] text-slate-500">{date}</p>
          </div>
        </div>
        {isVerified && (
          <span className="bg-green-50 text-green-700 text-[10px] px-2 py-0.5 rounded-full border border-green-200">
            Verified
          </span>
        )}
      </div>

      {/* Star Rating */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < rating ? 'text-amber-400' : 'text-slate-200'}
          >
            ★
          </span>
        ))}
      </div>

      {/* Content */}
      <p className="text-sm text-slate-600 italic line-clamp-3">"{comment}"</p>

      {/* Feedback Action */}
      <div className="mt-auto pt-2 flex gap-4 text-[11px] text-slate-400 border-t border-slate-50">
        <button className="hover:text-blue-600">👍 Helpful</button>
        <button className="hover:text-blue-600">💬 Reply</button>
      </div>
    </BaseCard>
  );
}
