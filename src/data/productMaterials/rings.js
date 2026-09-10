// src/data/productMaterials/rings.js

import stain from "../../assets/images/stock/stainless-steel-forged-rings.jpg";
import duplex from "../../assets/images/stock/duplex-super-duplex-rings.jpg";
import nik from "../../assets/images/stock/nickel-alloy-rings.jpg";
import car from "../../assets/images/stock/carbon-mild-steel-rings.jpg";


// New Copper, Brass, Aluminium imports
import copperProductImg from "../../assets/images/productImage/ring-copper.webp";
import brassProductImg from "../../assets/images/productImage/ring-brass.webp";
import alumProductImg from "../../assets/images/productImage/ring-aluminium.jpg";

const rings = [
  {
    id: 1,
    slug: "stainless-steel-forged-rings",
    image: stain,
    title: "Stainless Steel Forged Rings",
    shortDescription:
      "ASTM A182 F304, F304L, F316, F316L, F317L, F321, F347, F44 (904L), Seamless Rolled Band Rings.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A182 F304, F304L, F316, F316L, F317L, F321, F347, F44 (904L)",
    forms: "Seamless Rolled Band Rings",
    application:
      "Flanges, pressure vessels, heavy engineering, and industrial applications",
  },
  {
    id: 2,
    slug: "duplex-super-duplex-rings",
    image: duplex,
    title: "Duplex & Super Duplex Rings",
    shortDescription:
      "ASTM A182 F51, F53, F55, UNS S31803, S32205, S32750, S32760, High-Stress Marine Seawater Ring Shells.",
    materialGroup: "Duplex Alloys",
    standards: "ASTM A182 F51, F53, F55, UNS S31803, S32205, S32750, S32760",
    forms: "High-Stress Marine Seawater Ring Shells",
    application: "Offshore, marine, chemical, and oil & gas industries",
  },
  {
    id: 3,
    slug: "nickel-alloy-rings",
    image: nik,
    title: "Nickel & Alloy Steel Rings",
    shortDescription:
      "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Alloy 20, Alloy Steel F11, F22, F91.",
    materialGroup: "Nickel & Alloys",
    standards:
      "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Alloy 20, Alloy Steel F11, F22, F91",
    forms: "Seamless Rolled Rings",
    application:
      "High-temperature, corrosive, and critical industrial applications requiring superior mechanical strength",
  },
  {
    id: 4,
    slug: "carbon-mild-steel-rings",
    image: car,
    title: "Carbon & Mild Steel Rings",
    shortDescription:
      "ASTM A105 Forged Carbon, A350 LF2 Class 1/2, Carbon Steel C45, Structural MS Grade Shells & Heavy Base Rings.",
    materialGroup: "Carbon Steel",
    standards: "ASTM A105 Forged Carbon, A350 LF2 Class 1/2, Carbon Steel C45",
    forms: "Structural MS Grade Shells & Heavy Base Rings",
    application:
      "Structural fabrication, heavy machinery, power plants, refineries, and general engineering",
  },
  {
    id: 5,
    slug: "copper-rings",
    image: copperProductImg,
    title: "Copper Rings",
    shortDescription:
      "Seamless Forged And Rolled Copper Rings Built For Electrical Commutators, High-Thermal Gaskets, And Flange Spacers.",
    materialGroup: "Copper",
    standards: "ASTM B152, ASTM B187",
    forms: "Forged Seamless Rings, Rolled Rings, Machined Washers",
    application: "Transformer Seal Rings, Motor Commutators, Seal Gaskets",
  },
  {
    id: 6,
    slug: "brass-rings",
    image: brassProductImg,
    title: "Brass Rings",
    shortDescription:
      "Machined Brass Rings Suitable For Low-Friction Bearing Retainers, Marine Packing Glands, And Precision Decorative Spacers.",
    materialGroup: "Brass",
    standards: "ASTM B16, ASTM B62",
    forms: "Bearing Rings, Retaining Collars, Face Seal Rings",
    application: "Marine Propeller Shaft Seals, Valve Bushings, Mechanical Gauges",
  },
  {
    id: 7,
    slug: "aluminium-rings",
    image: alumProductImg,
    title: "Aluminium Rings",
    shortDescription:
      "Seamless Forged Aluminium Rings Engineered For Aerospace Flanges, Circular Manways, And Rocket Stage Couplings.",
    materialGroup: "Aluminium",
    standards: "ASTM B247, AMS 4124",
    forms: "Forged Rolled Rings, Transition Collars, Retaining Rings",
    application: "Aerospace Adapters, Cryogenic Seals, Rotating Ring Mounts",
  },
];

export default rings;
