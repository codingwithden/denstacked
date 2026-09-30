// Ported verbatim from reference/prototype. Keep [BRACKET] placeholders until Den fills them.
// Taste Test demo: illustrative sample data only, not real cafés.
import type { Amenity, Cafe } from "./types";

export const AMENITIES: Amenity[] = [
  {
    id: "wifi",
    label: "SECURE WI-FI",
  },
  {
    id: "outlets",
    label: "OUTLETS",
  },
  {
    id: "quiet",
    label: "QUIET SEATING",
  },
  {
    id: "restroom",
    label: "RESTROOM",
  },
  {
    id: "food",
    label: "FOOD",
  },
  {
    id: "matcha",
    label: "MATCHA",
  },
];

export const CAFES: Cafe[] = [
  {
    id: 1,
    name: "Café No. 01",
    hood: "MOTT HAVEN · BX",
    x: 57,
    y: 18,
    has: ["wifi", "outlets", "restroom", "food"],
    vibe: "Big communal tables, sunny front window.",
  },
  {
    id: 2,
    name: "Café No. 02",
    hood: "FORDHAM · BX",
    x: 68,
    y: 9,
    has: ["wifi", "quiet", "matcha"],
    vibe: "Tiny, calm and great for heads-down mornings.",
  },
  {
    id: 3,
    name: "Café No. 03",
    hood: "HARLEM · MN",
    x: 46,
    y: 26,
    has: ["wifi", "outlets", "quiet", "restroom"],
    vibe: "Library-quiet back room with outlets at every seat.",
  },
  {
    id: 4,
    name: "Café No. 04",
    hood: "EAST VILLAGE · MN",
    x: 40,
    y: 64,
    has: ["wifi", "outlets", "food", "matcha"],
    vibe: "Buzzy, bright, best for calls-free afternoons.",
  },
  {
    id: 5,
    name: "Café No. 05",
    hood: "ASTORIA · QN",
    x: 72,
    y: 38,
    has: ["wifi", "outlets", "quiet", "restroom", "food", "matcha"],
    vibe: "The all-rounder. Bring a laptop and stay a while.",
  },
  {
    id: 6,
    name: "Café No. 06",
    hood: "LONG ISLAND CITY · QN",
    x: 66,
    y: 53,
    has: ["wifi", "outlets", "restroom"],
    vibe: "Skyline views and long tables.",
  },
  {
    id: 7,
    name: "Café No. 07",
    hood: "BUSHWICK · BK",
    x: 76,
    y: 77,
    has: ["wifi", "food", "matcha"],
    vibe: "Art on the walls, pastries on the counter.",
  },
  {
    id: 8,
    name: "Café No. 08",
    hood: "CROWN HEIGHTS · BK",
    x: 58,
    y: 86,
    has: ["wifi", "outlets", "quiet", "restroom", "food"],
    vibe: "Neighborhood staple with a quiet mezzanine.",
  },
];
