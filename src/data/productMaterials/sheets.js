
import tita from "../../assets/images/stock/titanium-sheets.jpg"
import stain from "../../assets/images/stock/stainless-steel-sheets.jpg"
import high from "../../assets/images/stock/high-performance-alloy-sheets.jpg"
import ally28 from "../../assets/images/stock/alloy-28-sheets.jpg"
import special from "../../assets/images/stock/special-alloy-sheets.jpg"
import ally200  from "../../assets/images/stock/nickel-alloy-200-201-sheets.jpg"
import mon from "../../assets/images/stock/monel-400-sheets.jpg"
import inc from "../../assets/images/stock/inconel-sheets.jpg"
import cop from "../../assets/images/stock/copper-nickel-sheets.jpg"


// New Copper, Brass, Aluminium imports
import copperProductImg from "../../assets/images/productImage/sheets-copper.jpeg";
import brassProductImg from "../../assets/images/productImage/sheet-brass.png";
import alumProductImg from "../../assets/images/productImage/sheet-aluminium.jpeg";

const sheets = [
  {
    id: 1,
    slug: "titanium-sheets",
    image: tita,
    title: "Titanium Sheets Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Titanium Sheets offering exceptional strength, lightweight properties, and superior corrosion resistance for aerospace, marine, and chemical industries.",
  },

  {
    id: 2,
    slug: "stainless-steel-sheets",
    image: stain,
    title:
      "Stainless Steel Sheets Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    shortDescription:
      "Premium Stainless Steel Sheets manufactured in various grades for fabrication, pressure vessels, food processing, pharmaceutical, and engineering applications.",
  },

  {
    id: 3,
    slug: "high-performance-alloy-sheets",
    image: high,
    title:
      "High-Performance Alloy Sheets Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    shortDescription:
      "High-performance alloy sheets engineered for extreme temperatures, aerospace, power generation, and demanding industrial applications.",
  },

  {
    id: 4,
    slug: "alloy-28-sheets",
    image: ally28,
    title: "Alloy 28 Sheets Supplier",
    shortDescription:
      "Alloy 28 Sheets offering excellent resistance to pitting, crevice corrosion, and aggressive chemical processing environments.",
  },

  {
    id: 5,
    slug: "special-alloy-sheets",
    image: special,
    title: "Special Alloy Sheets Supplier – SMO 254 (F44) & Alloy 20",
    shortDescription:
      "Special Alloy Sheets manufactured for outstanding corrosion resistance in offshore, marine, and chemical processing industries.",
  },

  {
    id: 6,
    slug: "nickel-alloy-200-201-sheets",
    image: ally200,
    title: "Nickel Alloy 200 / 201 Sheets Supplier",
    shortDescription:
      "Nickel Alloy 200/201 Sheets providing excellent thermal conductivity and corrosion resistance for industrial and chemical applications.",
  },

  {
    id: 7,
    slug: "monel-400-sheets",
    image: mon,
    title: "Monel 400 Sheets Supplier",
    shortDescription:
      "Monel 400 Sheets designed for superior resistance to seawater, acids, alkalis, and harsh marine environments.",
  },

  {
    id: 8,
    slug: "inconel-sheets",
    image:  inc, 
    title: "Inconel Sheets Supplier – 600, 601, 625, 690, 718, 725 & X-750",
    shortDescription:
      "Inconel Sheets engineered for high-temperature strength, oxidation resistance, and demanding industrial applications.",
  },

  {
    id: 9,
    slug: "incoloy-sheets",
    image: special,
    title:
      "Incoloy Sheets Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    shortDescription:
      "Incoloy Sheets offering superior mechanical strength and excellent resistance to oxidation and carburization at elevated temperatures.",
  },

  {
    id: 10,
    slug: "hastelloy-sheets",
    image: high,
    title: "Hastelloy Sheets Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    shortDescription:
      "Hastelloy Sheets providing exceptional corrosion resistance in highly aggressive chemical and industrial environments.",
  },

  {
    id: 11,
    slug: "duplex-super-duplex-steel-sheets",
    image: ally28,
    title:
      "Duplex & Super Duplex Steel Sheets Supplier – S31803, S32205, S32750 & S32760",
    shortDescription:
      "Duplex and Super Duplex Steel Sheets combining high mechanical strength with outstanding corrosion resistance for offshore and marine applications.",
  },

  {
    id: 12,
    slug: "copper-nickel-sheets",
    image: cop,
    title: "Copper Nickel Sheets Supplier",
    shortDescription:
      "Copper Nickel Sheets manufactured for marine engineering, desalination plants, heat exchangers, condensers, and seawater piping systems.",
  },
  {
    id: 13,
    slug: "copper-sheets",
    image: copperProductImg,
    title: "Copper Sheets",
    shortDescription:
      "Premium Cold-Rolled Copper Sheets Ideal For Roofing, Cladding, Architectural Accents, And Electromagnetic Shielding.",
    materialGroup: "Copper",
    standards: "ASTM B152, EN 1652",
    forms: "Mirror Finish, 2B Finish, Oxidized Patina, Soft Temper",
    application: "Architectural Roofing, Guttering, RF Shielding, Wall Panels",
  },
  {
    id: 14,
    slug: "brass-sheets",
    image: brassProductImg,
    title: "Brass Sheets",
    shortDescription:
      "Mirror And Satin Finish Brass Sheets Widely Utilized In Premium Interiors, Signage, Elevator Cabs, And Decorative Inlays.",
    materialGroup: "Brass",
    standards: "ASTM B36, EN 1652",
    forms: "Hairline Finish, Mirror Polished, Leaded Engraving Sheet",
    application: "Nameplates, Elevator Cladding, Door Hardware, Luxury Interiors",
  },
  {
    id: 15,
    slug: "aluminium-sheets",
    image: alumProductImg,
    title: "Aluminium Sheets",
    shortDescription:
      "Lightweight Versatile Aluminium Sheets Offering Excellent Corrosion Resistance And Formability For Enclosures And Paneling.",
    materialGroup: "Aluminium",
    standards: "ASTM B209, AMS 4001",
    forms: "Stucco Embossed, Anodized, Brush Finish, Mill Finish",
    application: "Electronics Enclosures, Transport Paneling, Appliance Panels",
  },
];

export default sheets;

