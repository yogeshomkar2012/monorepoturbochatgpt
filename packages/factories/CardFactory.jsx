import { Suspense } from 'react';
import PropTypes from 'prop-types';
import StatsCard from '../ui/src/components/card/StatsCard';
import ShipmentStatusCard from '../ui/src/components/card/ShipmentStatusCard';
import WarehouseCard from '../ui/src/components/card/WarehouseCard';
import OrderTrackingCard from '../ui/src/components/card/OrderTrackingCard';
import AlertCard from '../ui/src/components/card/AlertCard';
import MediaCard from '../ui/src/components/card/MediaCard';
import ProductCard from '../ui/src/components/card/ProductCard';
import ActionCard from '../ui/src/components/card/ActionCard';
import ReviewCard from '../ui/src/components/card/ReviewCard';
import ProfileCard from '../ui/src/components/card/ProfileCard';
import AnalyticalCard from '../ui/src/components/card/AnalyticalCard';
import InfoCard from '../ui/src/components/card/InfoCard';

const cardMap = {
  Action: ActionCard,
  stats: StatsCard,
  info: InfoCard,
  shipment: ShipmentStatusCard,
  tracking: OrderTrackingCard,
  inventory: WarehouseCard,
  alert: AlertCard,
  media: MediaCard,
  product: ProductCard,
  profile: ProfileCard,
  review: ReviewCard,
  data: AnalyticalCard,
};
const UnknownCard = ({ type }) => (
  <div className="p-4 border-2 border-dashed border-red-200 rounded-lg text-red-500 bg-red-50">
    Error: Card type <strong>"{type}"</strong> is not registered in Factory.
  </div>
);
export default function CardFactory({ type, ...props }) {
  const lookupType = type?.toLowerCase() || 'info';
  const CardComponent = cardMap[lookupType] || UnknownCard;
  return (
    <Suspense
      fallback={<div className="animate-pulse bg-slate-100 h-48 rounded-lg" />}
    >
      <CardComponent type={type} {...props} />
    </Suspense>
  );
}
CardFactory.propTypes = {
  type: PropTypes.oneOf(Object.keys(cardMap)).isRequired,
  data: PropTypes.object,
  onAction: PropTypes.func,
};
