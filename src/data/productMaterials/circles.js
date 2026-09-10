// src/data/productMaterials/circles.js

import stain from "../../assets/images/stock/stainless-steel-circles.jpg"
import mach from "../../assets/images/stock/machined-forged-circles.jpg"
import ind from "../../assets/images/stock/specialty-industrial-circles.jpg"

// New Copper, Brass, Aluminium imports
import copperProductImg from "../../assets/images/productImage/circle-copper.webp";
import brassProductImg from "../../assets/images/productImage/circle-brass.jpg";
import alumProductImg from "../../assets/images/productImage/circle-aluminium.jpg";

const circles = [
  {
    id: 1,
    slug: "stainless-steel-circles",
    image: stain,
    title: "Stainless Steel Circles",
    shortDescription:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L, Dual Certified Alloys.",
    materialGroup: "Stainless Disks",
    standards:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L",
    forms: "Dual Certified Alloys",
    application:
      "Pressure vessels, cookware, fabrication, and engineering applications",
  },
  {
    id: 2,
    slug: "machined-forged-circles",
    image: mach,
    title: "Machined & Forged Circles",
    shortDescription:
      "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, Alloy Steel SAE 4140/4340, Seamless Blind Flange Blocks & Dynamic Rotating Discs.",
    materialGroup: "Heavy Duty Disks",
    standards:
      "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, Alloy Steel SAE 4140/4340",
    forms: "Seamless Blind Flange Blocks, Dynamic Rotating Discs",
    application: "Flanges, rings, heavy engineering, and industrial equipment",
  },
  {
    id: 3,
    slug: "specialty-industrial-circles",
    image: ind,
    title: "Specialty Industrial Circles",
    shortDescription:
      "Monel 400/K500, Inconel 600/625/718, Hastelloy C276, Duplex F51/UNS S31803, Super Duplex S32750, Titanium Grade 2/5.",
    materialGroup: "High Alloy Disks",
    standards:
      "Monel 400/K500, Inconel 600/625/718, Hastelloy C276, Duplex F51/UNS S31803, Super Duplex S32750, Titanium Grade 2/5",
    forms: "High Alloy Disks",
    application: "Demanding industrial applications across various industries",
  },
  {
    id: 4,
    slug: "copper-circles",
    image: copperProductImg,
    title: "Copper Circles",
    shortDescription:
      "High-Purity Copper Circles Cut With High Precision For Pressure Vessel Heads, Cookware, And Electrical Discs.",
    materialGroup: "Copper",
    standards: "ASTM B152, ASTM B11",
    forms: "Cold Rolled Discs, Hot Pressed Blanks, Annealed Circles",
    application: "Gaskets, Heat Dissipation Discs, Industrial Vessels",
  },
  {
    id: 5,
    slug: "brass-circles",
    image: brassProductImg,
    title: "Brass Circles",
    shortDescription:
      "Premium Machined Brass Circles Suitable For Stamping, Deep Drawing, Marine Instrument Faces, And Decorative Discs.",
    materialGroup: "Brass",
    standards: "ASTM B36, ASTM B121",
    forms: "Stamped Discs, Machined Circles, Polished Plates",
    application: "Precision Instruments, Clocks, Marine Clock Casings",
  },
  {
    id: 6,
    slug: "aluminium-circles",
    image: alumProductImg,
    title: "Aluminium Circles",
    shortDescription:
      "Clean-Cut High-Strength Aluminium Circles Widely Used For Cookware Spinning, Lighting Reflectors, And Vessel Closures.",
    materialGroup: "Aluminium",
    standards: "ASTM B209, AMS 4027",
    forms: "Spinning Grade Discs, Deep Drawing Circles",
    application: "Reflectors, Cookware, Can Ends, Decorative Caps",
  },
];

export default circles;
