// ProductCard.jsx
import BaseCard from './BaseCard';

export default function ProductCard({ product }) {
  const { name, sku, stock, location, price, image, threshold } = product;
  const isLowStock = stock <= threshold;

  return (
    <BaseCard className="flex flex-col gap-3 group">
      {/* Product Image & SKU */}
      <div className="relative aspect-square bg-slate-50 rounded-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-contain" />
        <span className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-[10px] font-mono shadow-sm">
          {sku}
        </span>
      </div>

      {/* Main Info */}
      <div className="flex-1">
        <h4 className="font-bold text-slate-800 line-clamp-1">{name}</h4>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-tighter">
          📍 {location}
        </p>
      </div>

      {/* Stock & Price Metrics */}
      <div className="flex justify-between items-end pt-2 border-t border-slate-100">
        <div>
          <p className="text-[10px] text-slate-400 uppercase font-bold">
            In Stock
          </p>
          <p
            className={`text-lg font-black ${isLowStock ? 'text-red-600' : 'text-slate-900'}`}
          >
            {stock}{' '}
            <span className="text-xs font-normal text-slate-400">units</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-600">${price}</p>
        </div>
      </div>
    </BaseCard>
  );
}
