import { Camera, MessageCircle, Search } from "lucide-react";

const STEPS = [
  {
    icon: Camera,
    title: "Tag a Room",
    description:
      "Take photos of hostel rooms and upload them with price and location details to help fellow students.",
  },
  {
    icon: Search,
    title: "Search & Filter",
    description:
      "Browse listings by location, price range, and room type. Find the best match for your budget.",
  },
  {
    icon: MessageCircle,
    title: "Connect & Book",
    description:
      "Contact the tagger or hostel directly to arrange a visit and secure your room.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          How It Works
        </h2>
        <p className="text-muted-foreground mb-12 text-sm">
          Three simple steps to find or share student hostel rooms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="font-semibold text-base text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
