// src/data/productMaterials/buttweldFitting.js

import carbon from "../../assets/images/stock/carbon-steel-butt-weld-fittings.jpg"
import inco from "../../assets/images/stock/buttweld-fitting.jpg"
import hast from "../../assets/images/stock/Hastelloy-Buttweld-Fittings.jpg"
import incol from "../../assets/images/stock/Inconel-Buttweld-Fittings.jpg"
import nic from "../../assets/images/stock/Nickel-Copper-Alloy-Buttweld-Fittings.jpg"
import duplex from "../../assets/images/stock/duplex-steel-buttweld-fittings.jpg"
import titani from "../../assets/images/stock/titanium-buttweld-fittings.jpg"

// New Copper, Brass, Aluminium imports
import copperProductImg from "../../assets/images/productImage/buttweld-copper.jpg";
import brassProductImg from "../../assets/images/productImage/buttweld-brass.jpg";
import alumProductImg from "../../assets/images/productImage/buttweld-aluminium.jpeg";

const buttweldFitting = [
  {
    id: 1,
    slug: "carbon-alloy-steel-buttweld-fittings",
    image: carbon,
    title: "Carbon Alloy Steel Buttweld Fittings",
    shortDescription:
      "ASTM A234 WPB, WPC, WP11, WP22, WP91, ASTM A420 WPL6 High-Yield Seamless Pipe Elbows & Concentric Reducers.",
    materialGroup: "Carbon & Alloy Steel",
    standards: "ASTM A234 WPB, WPC, WP11, WP22, WP91, ASTM A420 WPL6",
    forms: "High-Yield Seamless Pipe Elbows, Concentric Reducers",
    application:
      "High-pressure piping systems, refineries, power plants, and heavy engineering applications",
  },
  {
    id: 2,
    slug: "hastelloy-buttweld-fittings",
    image: hast,
    title: "Hastelloy Buttweld Fittings",
    shortDescription:
      "Hastelloy C276, C22, B2, B3, X Equal Tees and Long Radius Bends for High-Acid Volatility Refineries.",
    materialGroup: "Hastelloy Core",
    standards: "Hastelloy C276, C22, B2, B3, X",
    forms: "Equal Tees, Long Radius Bends",
    application: "High-Acid Volatility Refineries",
  },
  {
    id: 3,
    slug: "incoloy-buttweld-fittings",
    image: inco,
    title: "Incoloy Buttweld Fittings",
    shortDescription:
      "Incoloy 800, 800H, 800HT, 825 Short Radius Stub Ends and Lateral Tees for Structural Process Plants.",
    materialGroup: "Incoloy Superalloy",
    standards: "Incoloy 800, 800H, 800HT, 825",
    forms: "Short Radius Stub Ends, Lateral Tees",
    application: "Structural Process Plants",
  },
  {
    id: 4,
    slug: "inconel-buttweld-fittings",
    image: incol,
    title: "Inconel Buttweld Fittings",
    shortDescription:
      "Inconel 600, 625, 718, X-750 Oxidization Proof Welded Pipe Caps and Returns for Thermal Power Core Environments.",
    materialGroup: "Inconel Core",
    standards: "Inconel 600, 625, 718, X-750",
    forms: "Oxidization Proof Welded Pipe Caps, Returns",
    application: "Thermal Power Core Environments",
  },
  {
    id: 5,
    slug: "monel-buttweld-fittings",
    image: titani,
    title: "Monel Buttweld Fittings",
    shortDescription:
      "Monel 400, Monel K500 Cross Tees and Custom Slanted Returns Built for Desalination Infrastructure Components.",
    materialGroup: "Monel Alloy",
    standards: "Monel 400, Monel K500",
    forms: "Cross Tees, Custom Slanted Returns",
    application: "Desalination Infrastructure Components",
  },
  {
    id: 6,
    slug: "nickel-copper-alloy-buttweld-fittings",
    image: nic,
    title: "Nickel Copper Alloy Buttweld Fittings",
    shortDescription:
      "Copper-Nickel 70/30, 90/10 Alloys, Sub-Sea Pipeline Reducers and Anti-Biofouling Offshore Joint Runs.",
    materialGroup: "Nickel Copper",
    standards: "Copper-Nickel 70/30, 90/10 Alloys",
    forms: "Sub-Sea Pipeline Reducers, Anti-Biofouling Offshore Joint Runs",
    application:
      "Sub-Sea Pipeline Reducers and Anti-Biofouling Offshore Joint Runs",
  },
  {
    id: 7,
    slug: "stainless-duplex-steel-buttweld-fittings",
    image: duplex,
    title: "Stainless & Duplex Steel Buttweld Fittings",
    shortDescription:
      "WP304L, WP316L, 317L, 321, 347, 904L / Duplex WP2205 / Super Duplex WP2507 Intergranular Corrosion-Proof Fittings.",
    materialGroup: "Stainless & Duplex",
    standards:
      "WP304L, WP316L, 317L, 321, 347, 904L, Duplex WP2205, Super Duplex WP2507",
    forms: "Intergranular Corrosion-Proof Fittings",
    application: "Oil & Gas, Petrochemical, Marine, and Process Industries",
  },
  {
    id: 8,
    slug: "titanium-buttweld-fittings",
    image: hast,
    title: "Titanium Buttweld Fittings",
    shortDescription:
      "ASTM B363 WP Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7 High Strength-to-Weight Cryogenic Pipeline Fittings.",
    materialGroup: "Titanium Core",
    standards: "ASTM B363 WP Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7",
    forms: "High Strength-to-Weight Cryogenic Pipeline Fittings",
    application: "Aerospace and Marine Industries",
  },
  {
    id: 9,
    slug: "copper-buttweld-fittings",
    image: copperProductImg,
    title: "Copper Buttweld Fittings",
    shortDescription:
      "Seamless And Welded Copper Buttweld Fittings Designed For High-Flow Industrial Piping, HVAC, And Refrigeration Circuits.",
    materialGroup: "Copper",
    standards: "ASME B16.9, ASTM B366",
    forms: "Elbows (45°/90°/180°), Tees, Reducers, End Caps",
    application: "Cryogenic Systems, Industrial Cooling, Marine Piping",
  },
  {
    id: 10,
    slug: "brass-buttweld-fittings",
    image: brassProductImg,
    title: "Brass Buttweld Fittings",
    shortDescription:
      "Corrosion-Resistant Brass Buttweld Fittings Engineered For Secure Jointing In Seawater, Chemical, And Sanitary Fluid Systems.",
    materialGroup: "Brass",
    standards: "ASME B16.9, ASTM B124",
    forms: "Equal Tees, Concentric Reducers, Long Radius Elbows",
    application: "Marine Water Lines, Chemical Handling, Fire Protection",
  },
  {
    id: 11,
    slug: "aluminium-buttweld-fittings",
    image: alumProductImg,
    title: "Aluminium Buttweld Fittings",
    shortDescription:
      "Precision Manufactured Aluminium Buttweld Fittings Offering Excellent Flow Dynamics And Lightweight Piping Connections.",
    materialGroup: "Aluminium",
    standards: "ASME B16.9, ASTM B361",
    forms: "Short Radius Elbows, Reducing Tees, Stub Ends",
    application: "Lightweight Industrial Lines, Pneumatic Systems, Automotive",
  },
];

export default buttweldFitting;
