import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { LOCATIONS } from "../data/seedData";
import type { Filters, RoomType } from "../types";

interface FilterSidebarProps {
  filters: Filters;
  onChange: (f: Filters) => void;
  onReset: () => void;
}

const ROOM_TYPES: RoomType[] = ["Single", "Double", "Dormitory"];

export function FilterSidebar({
  filters,
  onChange,
  onReset,
}: FilterSidebarProps) {
  const toggleRoomType = (rt: RoomType) => {
    const next = filters.roomTypes.includes(rt)
      ? filters.roomTypes.filter((t) => t !== rt)
      : [...filters.roomTypes, rt];
    onChange({ ...filters, roomTypes: next });
  };

  return (
    <aside className="bg-card rounded-xl border border-border p-5 space-y-6 h-fit sticky top-24">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm text-foreground">Filters</h3>
        <button
          type="button"
          onClick={onReset}
          className="text-xs text-primary hover:underline font-medium"
          data-ocid="filter.reset.button"
        >
          Reset All
        </button>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Location
        </Label>
        <Select
          value={filters.location || "all"}
          onValueChange={(v) =>
            onChange({ ...filters, location: v === "all" ? "" : v })
          }
        >
          <SelectTrigger
            className="w-full text-sm"
            data-ocid="filter.location.select"
          >
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {LOCATIONS.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price range */}
      <div className="space-y-3">
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Max Rent
        </Label>
        <Slider
          min={1000}
          max={15000}
          step={500}
          value={[filters.maxPrice]}
          onValueChange={([v]) => onChange({ ...filters, maxPrice: v })}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>₹1,000</span>
          <span className="font-semibold text-foreground">
            ₹{filters.maxPrice.toLocaleString()}/mo
          </span>
          <span>₹15,000</span>
        </div>
      </div>

      {/* Room type */}
      <div className="space-y-2">
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Room Type
        </Label>
        <div className="space-y-2">
          {ROOM_TYPES.map((rt) => (
            <div key={rt} className="flex items-center gap-2">
              <Checkbox
                id={`rt-${rt}`}
                checked={filters.roomTypes.includes(rt)}
                onCheckedChange={() => toggleRoomType(rt)}
                data-ocid={`filter.${rt.toLowerCase()}.checkbox`}
              />
              <label
                htmlFor={`rt-${rt}`}
                className="text-sm text-foreground cursor-pointer"
              >
                {rt}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="w-full text-primary border-primary hover:bg-accent"
        onClick={onReset}
        data-ocid="filter.apply.button"
      >
        Apply Filters
      </Button>
    </aside>
  );
}
