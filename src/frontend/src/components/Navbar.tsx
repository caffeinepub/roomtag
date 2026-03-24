import { Button } from "@/components/ui/button";

interface NavbarProps {
  onUploadClick: () => void;
  onAboutClick: () => void;
}

export function Navbar({ onUploadClick, onAboutClick }: NavbarProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-foreground"
          data-ocid="nav.link"
        >
          <img
            src="/assets/generated/roomtag-logo-transparent.dim_200x200.png"
            alt="RoomTag logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold tracking-tight font-display text-foreground">
            RoomTag
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            type="button"
            onClick={() => scrollTo("listings")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.explore.link"
          >
            Explore
          </button>
          <button
            type="button"
            onClick={onUploadClick}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.upload.link"
          >
            Upload a Room
          </button>
          <button
            type="button"
            onClick={onAboutClick}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.about.link"
          >
            About
          </button>
        </nav>

        <Button
          type="button"
          onClick={onUploadClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-5"
          data-ocid="nav.upload.primary_button"
        >
          + Tag a Room
        </Button>
      </div>
    </header>
  );
}
