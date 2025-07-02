import Decor from "./Decor";
import "../scroll-animation.css";

export default function QuoteSection() {
  return (
    <section className="relative h-56 flex justify-center items-center mb-10">
      <div className="absolute -top-10" id="story"></div>
      <Decor
        lightSrc="https://res.cloudinary.com/dx85szvao/image/upload/v1750499945/cloud-4-day_q3xd9k.webp"
        darkSrc="https://res.cloudinary.com/dx85szvao/image/upload/v1750498678/cloud-3-night_zoacyq.webp"
        className="absolute  w-[35%] lg:w-[20%] top-0 left-0"
      />
      <Decor
        lightSrc="https://res.cloudinary.com/dx85szvao/image/upload/v1750500201/cloud-3-day_mwovgb.webp"
        darkSrc="https://res.cloudinary.com/dx85szvao/image/upload/v1750498678/cloud-4-night_d4jef7.webp"
        className="absolute w-[35%] lg:w-[20%] top-0 right-0"
      />
      <p
        className="w-[50%] autoShow text-center font-serif 
            text-3xl
            lg:text-5xl"
      >
        Breathe. Bloom. Become.
      </p>
    </section>
  );
}
