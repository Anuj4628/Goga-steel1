// src/data/productMaterials/wheels.js
import aluminiumImg from "../../assets/images/Wheels Products/aluminium.jpg";
import brassImg from "../../assets/images/Wheels Products/brass.jpeg";
import hastelloyImg from "../../assets/images/Wheels Products/hastelloy.jpeg";
import inconelImg from "../../assets/images/Wheels Products/inconel.jpg";
import monelFlangedImg from "../../assets/images/Wheels Products/monel.jpeg";
import monelNeedleImg from "../../assets/images/Wheels Products/monel.jpg";
import nickelImg from "../../assets/images/Wheels Products/nikle.jpg";
import sanicroImg from "../../assets/images/Wheels Products/sanicro.jpg";
import titaniumImg from "../../assets/images/Wheels Products/titainium.jpeg";

// Preserved fallback images for backward compatibility
import stain from "../../assets/images/stock/stainless-duplex-steel-valves.jpg";
import ind from "../../assets/images/stock/industrial-valves.jpg";

export const wheels = [
  {
    id: 1,
    slug: "aluminium-valves",
    image: aluminiumImg,
    title: "Aluminium Valves & Handwheels",
    shortDescription:
      "High-integrity lightweight aluminium ball, butterfly, and check valves engineered for pneumatic systems, cryogenics, and aviation fueling.",
    materialGroup: "Aluminium Alloy (6061-T6 / 5083 / A356)",
    standards: "ASTM B221, ASTM B241, ASME B16.34, API 609, ISO 5211",
    forms: "Ball Valves, Butterfly Valves, Check Valves, Handwheel Operated",
    application:
      "Pneumatic automation systems, aviation fuel conveyance, cryogenic gas containment, offshore lightweight process skids, water treatment",
    keyProperties:
      "Superior strength-to-weight ratio, non-sparking characteristics, cryogenic ductility down to -196°C, excellent atmospheric corrosion resistance",
    industries:
      "Aerospace, Marine Transportation, Cryogenics, Pneumatics, Chemical Plant Utilities",
  },
  {
    id: 2,
    slug: "brass-valves",
    image: brassImg,
    title: "Brass Gate & Handwheel Valves",
    shortDescription:
      "Heavy-duty forged and cast brass gate valves with rugged red handwheels for dependable flow shut-off and throttling in plumbing and HVAC.",
    materialGroup: "Copper Alloy / Brass (CW617N / IS 319 / C36000)",
    standards: "IS 778 Class 1 & 2, BS 5154, ASTM B62, ASME B16.18, DIN 3352",
    forms: "Gate Valves, Globe Valves, Check Valves, Handwheel Valves",
    application:
      "Municipal water supply networks, industrial plumbing, HVAC chilled water loops, domestic gas distribution, fire fighting booster lines",
    keyProperties:
      "High thermal conductivity, natural biofouling resistance, excellent machinability, tight metal-to-metal wedge seating up to PN25",
    industries:
      "Plumbing & Irrigation, HVAC, Shipbuilding, Construction, Municipal Water Supply",
  },
  {
    id: 3,
    slug: "hastelloy-valves",
    image: hastelloyImg,
    title: "Hastelloy High-Pressure Valves & Wheels",
    shortDescription:
      "Severe-service nickel-chromium-molybdenum Hastelloy C276/C22 instrument ball and manifold valves for sour gas and aggressive chemical media.",
    materialGroup: "Hastelloy C276 / C22 / Alloy X (UNS N10276 / N06022)",
    standards: "ASTM B574, ASTM B575, ASME B16.34, NACE MR0175 / ISO 15156, API 6D",
    forms: "Instrument Ball Valves, 2-Way & 3-Way Manifolds, Needle Valves, Check Valves",
    application:
      "Flue gas desulfurization (FGD), sour crude oil processing, chlorine bleach generation, pharmaceutical synthesis, waste acid neutralization",
    keyProperties:
      "Immunity to wet chlorine and chlorine dioxide, exceptional resistance to pitting and crevice corrosion (PREN > 65), high stress-corrosion cracking resistance",
    industries:
      "Petrochemical Refining, Chemical Processing, Pulp & Paper, Pollution Control, Energy & Utilities",
  },
  {
    id: 4,
    slug: "inconel-valves",
    image: inconelImg,
    title: "Inconel High-Pressure Needle Valves & Wheels",
    shortDescription:
      "Ultra-high-pressure Inconel 625/600/718 needle and control valves rated up to 6000 PSI with T-bar and handwheel actuators for extreme environments.",
    materialGroup: "Inconel 625 / 600 / 718 (UNS N06625 / N06600)",
    standards: "ASTM B564, ASTM B446, ASME B16.34 Class 2500, API 6A, MSS-SP-99",
    forms: "High-Pressure Needle Valves, Gauge Valves, Block & Bleed Manifolds, Globe Valves",
    application:
      "Subsea wellheads, steam turbine bypass loops, nuclear reactor instrumentation, aerospace thruster controls, ultra-deep sour hydrocarbon production",
    keyProperties:
      "High creep-rupture strength up to 980°C, virtually immune to chloride-induced stress corrosion, extreme yield strength under cyclic pressures up to 10,000 PSI",
    industries:
      "Nuclear Power Generation, Aerospace & Propulsion, Offshore Oil & Gas, Supercritical Thermal Plants",
  },
  {
    id: 5,
    slug: "monel-flanged-valves",
    image: monelFlangedImg,
    title: "Monel 400 Flanged Process Valves",
    shortDescription:
      "Heavy-duty 3-piece bolted body Monel 400 flanged ball and process valves built for flowing seawater, saline solutions, and hydrofluoric acid alkylation.",
    materialGroup: "Monel 400 / Alloy 400 (UNS N04400)",
    standards: "ASTM B164, ASTM B564, ASME B16.5, ASME B16.34 Class 150/300, MSS-SP-72",
    forms: "Flanged Ball Valves, Full-Port 3-Piece Valves, Swing Check Valves, Trunnion Valves",
    application:
      "Seawater cooling intakes, marine desalination plants, HF acid alkylation units, crude oil distillation columns, chemical cargo tankers",
    keyProperties:
      "Zero corrosion in high-velocity seawater, outstanding resistance to non-oxidizing acids and stress cracking, rugged solid solution alloy microstructure",
    industries:
      "Marine Engineering, Offshore Platforms, Petrochemical Alkylation, Naval Defense, Desalination",
  },
  {
    id: 6,
    slug: "monel-valves",
    image: monelNeedleImg,
    title: "Monel Precision Needle & Metering Valves",
    shortDescription:
      "Precision-machined Monel 400/K500 compression end and needle valves equipped with stainless handwheels for exact flow metering in marine instrumentation.",
    materialGroup: "Monel 400 / K-500 (UNS N04400 / N05500)",
    standards: "ASTM B164, ASTM B865, ASME B16.34, MSS-SP-99, NACE MR0175",
    forms: "Needle Valves, Metering Valves, Compression-Tube Valves, Regulating Valves",
    application:
      "Offshore instrument panels, marine sample extraction lines, acid dosing skids, naval hydraulic pressure regulation, brine flow measurement",
    keyProperties:
      "Leak-tight metal-to-metal bubble shut-off, non-magnetic properties, non-galling hardened Monel K500 stem threads, cavitation resistance",
    industries:
      "Marine & Subsea, Offshore Instrumentation, Chemical Processing, Oilfield Exploration",
  },
  {
    id: 7,
    slug: "nickel-valves",
    image: nickelImg,
    title: "Nickel Alloy Multi-Port Ball Valves & Wheels",
    shortDescription:
      "Commercially pure Nickel 200/201 three-way diverter ball valves with ergonomic lever/wheel handles for caustic soda and molten salt processing.",
    materialGroup: "Nickel 200 / 201 (UNS N02200 / N02201)",
    standards: "ASTM B160, ASTM B162, ASME B16.34, DIN 17752, ISO 15761",
    forms: "3-Way Ball Valves, L-Port & T-Port Diverters, Inline Shut-Off Valves",
    application:
      "Caustic soda (NaOH) evaporation skids, vinyl chloride monomer (VCM) units, chlorine handling, molten caustic salt bath systems, synthetic fiber plants",
    keyProperties:
      "Unequaled resistance to all concentrations of caustic alkalis up to molten state, excellent thermal stability, ferromagnetic characteristics below 360°C",
    industries:
      "Chlor-Alkali Plants, Chemical Synthesis, Synthetic Fibers, Soap & Detergent Manufacturing",
  },
  {
    id: 8,
    slug: "sanicro-valves",
    image: sanicroImg,
    title: "Sanicro 28 Severe-Service Ball Valves",
    shortDescription:
      "Premium Sanicro 28 (UNS N08028) high-alloy austenitic stainless steel ball valves designed for phosphoric acid and high-chloride industrial duties.",
    materialGroup: "Sanicro 28 / Alloy 28 (UNS N08028 / 1.4563)",
    standards: "ASTM B668, ASTM B649, ASME B16.34, NACE MR0175 / ISO 15156, EN 10204 3.1",
    forms: "High-Pressure Ball Valves, Lever & Wheel Operated, Inline Check Valves",
    application:
      "Wet-process phosphoric acid evaporators, deep sour gas wells, nuclear fuel reprocessing plants, fertilizer synthesis reactors, sulfuric acid piping",
    keyProperties:
      "Outstanding resistance to pure and contaminated phosphoric acid, superior pitting resistance (PREN ≥ 38), resistant to intergranular attack in acid halides",
    industries:
      "Fertilizer Manufacturing, Phosphoric & Sulfuric Acid Plants, Sour Gas Production, Nuclear Fuel Reprocessing",
  },
  {
    id: 9,
    slug: "titanium-valves",
    image: titaniumImg,
    title: "Titanium Industrial Check & Shut-Off Valves",
    shortDescription:
      "High-integrity Titanium Grade 2 and Grade 5 flanged swing check and shut-off valves offering total immunity to seawater and wet chlorine.",
    materialGroup: "Titanium Grade 2 / Grade 5 (UNS R50400 / R56400)",
    standards: "ASTM B348, ASTM B367, ASTM B381, ASME B16.34 Class 150/300, API 600, API 598",
    forms: "Swing Check Valves, Flanged Non-Return Valves, Industrial Gate & Ball Valves",
    application:
      "Seawater desalination plants, chlor-alkali electrolysis cells, pulp bleaching with chlorine dioxide, marine scrubber discharge lines, titanium offshore skids",
    keyProperties:
      "Instantaneous protective TiO2 oxide layer renewal, completely impervious to crevice corrosion in chlorides up to 80°C, zero biofouling, 45% lighter than steel",
    industries:
      "Desalination, Marine & Naval, Chlor-Alkali, Pulp & Paper Bleaching, Offshore Energy",
  },
];

// Backward-compatible fallback products
export const fallbackProducts = [
  {
    id: 10,
    slug: "stainless-duplex-steel-valves",
    image: stain,
    title: "Stainless Steel & Duplex Steel Valves",
    shortDescription:
      "Butterfly, Check, Globe, Ball, Gate, and Safety Valves. SS 304, 304L, 316, 316L, 321, Duplex Alloys.",
    materialGroup: "Stainless & Duplex Steel",
    standards: "SMS, 3A, DIN, BS, ISO, DS, ASME BPE, Aseptic",
    forms: "Butterfly, Check, Globe, Ball, Gate, and Safety Valves",
    application:
      "Oil & Gas, Chemical Processing, Marine, Pharmaceutical, and Power Generation Industries",
  },
  {
    id: 11,
    slug: "industrial-valves",
    image: ind,
    title: "Sanitary & Industrial Valve Matrix",
    shortDescription:
      'Gate/Globe/Butterfly (Up to 25"), Ball (Up to 10"), Check (Up to 12"). Applications: Food, Dairy, Beverage, Pharma, Healthcare, Cosmetics.',
    materialGroup: "Sanitary & Industrial",
    standards: "High-Grade Stainless Steel Construction (304/316/321)",
    forms:
      'Gate, Globe, Butterfly (Up to 25"), Ball (Up to 10"), Check (Up to 12")',
    application: "Food, Dairy, Beverage, Pharma, Healthcare, Cosmetics",
  },
];

export default wheels;
