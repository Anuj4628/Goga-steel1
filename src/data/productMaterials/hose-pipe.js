// src/data/productMaterials/hosepipe.js
import annul from "../../assets/images/stock/annular-corrugated-hose.jpg";
import cor from "../../assets/images/stock/corrugated-ss-hose-pipe.jpg";
import high from "../../assets/images/stock/high-pressure-ss-hose-assembly.jpg";
import ptfe from "../../assets/images/stock/ptfe-lined-ss-hose-pipe.jpg";
import braid from "../../assets/images/stock/ss-braided-hose-pipe.jpg"
import end from "../../assets/images/stock/ss-hose-with-end-fittings.jpg"
import strip from "../../assets/images/stock/strip-wound-hose-pipe.jpg"

// New Copper, Brass, Aluminium imports
import copperProductImg from "../../assets/images/productImage/hosepipe-copper.webp";
import brassProductImg from "../../assets/images/productImage/hosepipe-brass.webp";
import alumProductImg from "../../assets/images/productImage/hosepipe-aluminium.webp";

const hosepipe = [
  {
    id: 1,
    slug: "annular-corrugated-hose",
    image: annul,
    title: "Annular Corrugated Hose",
    shortDescription:
      "Stainless Steel 304, 316L, 321, Close-Pitch Corrugations, Standard Pitch, High-Flexibility Mechanical Fluid Transfer Coils.",
    materialGroup: "Annular Profile",
    standards: "Stainless Steel 304, 316L, 321",
    forms:
      "Close-Pitch Corrugations, Standard Pitch, High-Flexibility Mechanical Fluid Transfer Coils",
    application:
      "Vibration absorption, thermal expansion, and high-pressure fluid transfer",
  },
  {
    id: 2,
    slug: "corrugated-ss-hose-pipe",
    image: cor,
    title: "Corrugated SS Hose Pipe",
    shortDescription:
      "Hydro-formed or Mechanically Formed Corrugations, Grade 316TI, Grade 321, High-Vacuum & Extreme Thermal Gradient Resistance.",
    materialGroup: "Stainless Steel Core",
    standards: "Grade 316TI, Grade 321",
    forms: "Hydro-formed or Mechanically Formed Corrugations",
    application: "High-Vacuum & Extreme Thermal Gradient Resistance",
  },
  {
    id: 3,
    slug: "high-pressure-ss-hose-assembly",
    image: high,
    title: "High Pressure SS Hose Assembly",
    shortDescription:
      "Double/Triple Outer Stainless Steel Wire Braiding, Formed to Withstand Pressures up to 250 Bar, Gas/Cryogenic System Calibrations.",
    materialGroup: "Heavy Duty Matrix",
    standards: "Withstand Pressures up to 250 Bar",
    forms: "Double/Triple Outer Stainless Steel Wire Braiding",
    application:
      "Hydraulic systems, petrochemical plants, power stations, and process industries",
  },
  {
    id: 4,
    slug: "ptfe-lined-ss-hose-pipe",
    image: ptfe,
    title: "PTFE Lined SS Hose Pipe",
    shortDescription:
      "Smooth Bore PTFE Core, Convoluted PTFE Core, Outer SS 304 Wire Braid Cover, Pure Food-Grade Chemical Inert Fluid Conveyance.",
    materialGroup: "Chemical Liner",
    standards: "Smooth Bore PTFE Core, Convoluted PTFE Core",
    forms: "Outer SS 304 Wire Braid Cover",
    application:
      "Handling corrosive fluids, acids, solvents, and pharmaceuticals",
  },
  {
    id: 5,
    slug: "ss-braided-hose-pipe",
    image:braid,
    title: "SS Braided Hose Pipe",
    shortDescription:
      "Single Layer SS 304 / SS 316 Braid Cover, Prevents Elongation of Inner Core under Pressure, Enhances Longitudinal Strength.",
    materialGroup: "Woven Wire Braid",
    standards: "SS 304, SS 316",
    forms: "Single Layer Braid Cover",
    application:
      "Additional strength, pressure resistance, and extended service life",
  },
  {
    id: 6,
    slug: "ss-hose-with-end-fittings",
    image:end,
    title: "SS Hose with End Fittings",
    shortDescription:
      "Fixed/Swivel Flanges (ASA/DIN/JIS), Camlock Couplings, Hex Male NPT Thread, Female Swivel Union, Custom Weld Stub Connections.",
    materialGroup: "Integrated Ends",
    standards: "ASA, DIN, JIS Standards",
    forms:
      "Fixed/Swivel Flanges, Camlock Couplings, Hex Male NPT Thread, Female Swivel Union, Custom Weld Stub Connections",
    application:
      "Complete stainless steel hose assemblies with customized end fittings for leak-proof connections",
  },
  {
    id: 7,
    slug: "strip-wound-hose-pipe",
    image: strip,
    title: "Strip Wound Hose Pipe",
    shortDescription:
      "Interlocked/Square-Locked Flexible Conduit Profile, Hot-Dip Galvanized Steel, SS 304, Mechanical Armour Protection Cable Sleeving & Dry Material Extraction Chutes.",
    materialGroup: "Interlocked Profile",
    standards: "Hot-Dip Galvanized Steel, SS 304",
    forms: "Interlocked/Square-Locked Flexible Conduit Profile",
    application:
      "Ventilation, exhaust systems, dust collection, and low-pressure industrial applications",
  },
  {
    id: 8,
    slug: "copper-hose-pipe",
    image: copperProductImg,
    title: "Copper Hose Pipes",
    shortDescription:
      "Flexible Corrugated Copper Connectors For Vibration Isolation, High-Thermal Transfer, And Gas Transfer Assemblies.",
    materialGroup: "Copper",
    standards: "BS 6501, ISO 10380",
    forms: "Braided Flexible Connectors, Expansion Loops, Annular Hose",
    application: "HVAC Vibration Absorption, Boiler Feeds, Cryogenic Lines",
  },
  {
    id: 9,
    slug: "brass-hose-pipe",
    image: brassProductImg,
    title: "Brass Hose Pipes",
    shortDescription:
      "Durable Brass Armored Hose Assemblies Designed For High Abrasion Resistance, Oil Transfer, And Marine Fuel Feed Lines.",
    materialGroup: "Brass",
    standards: "DIN EN 14420, ISO 10380",
    forms: "Wire-Reinforced Hose, Camlock Assemblies, Swivel Hoses",
    application: "Bilge Pumping, Marine Engine Lines, Hydraulic Return Hose",
  },
  {
    id: 10,
    slug: "aluminium-hose-pipe",
    image: alumProductImg,
    title: "Aluminium Hose Pipes",
    shortDescription:
      "Ultra-Lightweight Aluminium Flexible Ducting And Hoses For Air Exhaust, Engine Intake, And Pneumatic Ventilation Systems.",
    materialGroup: "Aluminium",
    standards: "ISO 10380, SAE J20",
    forms: "Corrugated Flexible Ducting, Interlocked Hose, Sleeve Hoses",
    application: "Turbo Air Ducts, Industrial Dust Extraction, HVAC Return",
  },
];

export default hosepipe;
