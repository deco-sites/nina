export interface CouponProps {
  coupon: string;
  description?: string;
}

export default function Coupon({ coupon = "CUPOM", description }: CouponProps) {
  return (
    <section class="lg:container mx-6 lg:mx-auto">
      <div class="flex flex-col gap-4">
        <h4 class="text-2xl lg:text-3xl">
          Cupom <span class="uppercase">{coupon}</span>
        </h4>
        {description && <div>{description}</div>}
      </div>
    </section>
  );
}
