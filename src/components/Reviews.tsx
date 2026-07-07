import AnimateOnScroll from "./AnimateOnScroll";

interface ReviewData {
  id: string;
  authorName: string;
  authorInitials: string;
  authorLocation: string | null;
  rating: number;
  text: string;
}

interface ReviewsProps {
  reviews: ReviewData[];
}

function Stars({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < rating ? "★" : "☆");
  }
  return <span className="text-gold text-lg tracking-[3px]">{stars.join("")}</span>;
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <section
      id="reviews"
      className="py-25 text-white max-md:py-16"
      style={{
        background:
          "linear-gradient(160deg, var(--color-spice-dark), var(--color-spice-deep))",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="eyebrow text-gold-light mb-2 text-center">Ulasan Pelanggan</p>
        <h2
          className="font-[Playfair_Display] text-white font-bold mb-12 text-center"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}
        >
          Kata Mereka
        </h2>
        <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1">
          {reviews.map((review, i) => (
            <AnimateOnScroll key={review.id} delay={(i % 3) * 0.1}>
              <div className="bg-white/10 border border-gold/20 rounded-[20px] p-8 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4">
                  <Stars rating={review.rating} />
                </div>
                <p className="text-[0.95rem] text-white/88 leading-relaxed mb-6 italic">
                  {review.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gold text-spice-deep flex items-center justify-center font-bold text-[0.85rem] flex-shrink-0">
                    {review.authorInitials}
                  </div>
                  <div>
                    <strong className="block text-sm">{review.authorName}</strong>
                    {review.authorLocation && (
                      <span className="text-xs text-white/50">
                        {review.authorLocation}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
