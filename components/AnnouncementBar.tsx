import { formatINR, FREE_DELIVERY_THRESHOLD } from '@/lib/currency';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#111111] text-white text-[10px] tracking-[0.25em] text-center py-2.5 px-4 uppercase font-light">
      Complimentary Express Delivery on Orders Above {formatINR(FREE_DELIVERY_THRESHOLD)}
    </div>
  );
}
