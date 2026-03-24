const LINKS = [
  {
    heading: "Explore",
    items: ["All Listings", "By Location", "By Price", "New Listings"],
  },
  {
    heading: "Cities",
    items: ["Bangalore", "Pune", "Hyderabad", "Chennai", "Mumbai"],
  },
  {
    heading: "Room Types",
    items: ["Single Rooms", "Double Sharing", "Dormitories", "PG Rooms"],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="footer-bg text-white/80">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <img
            src="/assets/generated/roomtag-logo-transparent.dim_200x200.png"
            alt="RoomTag"
            className="h-9 w-9 object-contain"
          />
          <span className="text-white text-lg font-bold font-display tracking-tight">
            RoomTag
          </span>
        </div>
        <p className="text-white/50 text-sm max-w-sm mb-10">
          Tag real hostel rooms for students — with actual prices and locations.
          Built by a student, for students.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12">
          {LINKS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <span className="text-white/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-white/40 text-xs">
            Helping students find their home away from home.
          </p>
        </div>
      </div>
    </footer>
  );
}
