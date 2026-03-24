import { Anchor } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="about-bg py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl border border-border shadow-sm p-8 md:p-12 text-center"
          data-ocid="about.card"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Anchor className="w-6 h-6 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">
            About the Creator
          </h2>
          <p className="text-sm font-semibold text-primary mb-6 tracking-wide uppercase">
            Gaurav Dahiya
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4 text-base">
            I am Gaurav Dahiya, son of an Ex-Indian Navy serviceman. Growing up
            in a constantly moving environment taught me adaptability and
            independence.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6 text-base">
            When I moved to Delhi to prepare for competitive exams, I realized
            the challenges students face while relocating. This inspired me to
            build RoomTag — to help others find a comfortable stay and settle
            easily, wherever their goals take them.
          </p>

          <div className="w-12 h-px bg-border mx-auto mb-6" />

          <p className="text-muted-foreground italic text-sm">
            "Helping students find their home away from home."
          </p>

          <div className="mt-8 flex items-center justify-center gap-2">
            <img
              src="/assets/generated/roomtag-logo-transparent.dim_200x200.png"
              alt="RoomTag"
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-bold font-display text-foreground">
              RoomTag
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
