// src/data/productMaterials/strips.js
import stripeImage from "../../assets/images/productImage/strips.webp";
import stain from "../../assets/images/stock/stainless-steel-strips.jpg";
import nik from "../../assets/images/stock/nickel-alloy-strips.jpg";
import duplex from "../../assets/images/stock/Carbon-Steel-Strips.jpg";

// New Copper, Brass, Aluminium imports
import copperProductImg from "../../assets/images/productImage/stripes-copper.jpg";
import brassProductImg from "../../assets/images/productImage/stripes-brass.jpg";
import alumProductImg from "../../assets/images/productImage/stripes-aluminium.jpeg";

const strips = [
  {
    id: 1,
    slug: "stainless-steel-strips",
    image: stain,
    title: "Stainless Steel Strips",
    shortDescription:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 317L, 321, 347, 430, 904L, Cold-Rolled Precision Slit Coils.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 317L, 321, 347, 430, 904L",
    forms: "Cold-Rolled Precision Slit Coils",
    application:
      "Premium narrow-width slitted coils, cold-rolled foil strips, and precision-engineered metal ribbon runs",
  },
  {
    id: 2,
    slug: "nickel-high-alloy-strips",
    image: nik,
    title: "Nickel & High Alloy Strips",
    shortDescription:
      "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Carpenter Alloy 20 (UNS N08020).",
    materialGroup: "High Alloy Core",
    standards:
      "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Carpenter Alloy 20 (UNS N08020)",
    forms: "Precision Slit Coils, Cold-Rolled Foil Strips",
    application: "Chemical, Aerospace, and Marine Industries",
  },
  {
    id: 3,
    slug: "duplex-precision-carbon-strips",
    image: duplex,
    title: "Duplex & Precision Carbon Strips",
    shortDescription:
      "Duplex UNS S31803 / S32205, Super Duplex S32750, High Carbon Spring Steel C67 / C75 / EN42J, Low Carbon Deep Draw Shims.",
    materialGroup: "Specialized Matrix",
    standards:
      "Duplex UNS S31803 / S32205, Super Duplex S32750, High Carbon Spring Steel C67 / C75 / EN42J, Low Carbon Deep Draw Shims",
    forms: "Precision Slit Coils, Deep Draw Shims",
    application:
      "High Strength, Dimensional Accuracy, Engineering & Manufacturing Applications",
  },
  {
    id: 4,
    slug: "copper-strips",
    image: copperProductImg,
    title: "Copper Strips",
    shortDescription:
      "Precision Cold-Rolled Copper Strips Engineered For Continuous Stamping, Terminal Lugs, And Battery Interconnects.",
    materialGroup: "Copper",
    standards: "ASTM B152, ASTM B248",
    forms: "Narrow Slit Strip, Coil Strip, Deburred Edge Strips",
    application: "EV Battery Interconnects, Cable Shielding, Fuse Contacts",
  },
  {
    id: 5,
    slug: "brass-strips",
    image: brassProductImg,
    title: "Brass Strips",
    shortDescription:
      "High-Tensile Precision Brass Strips Suitable For Electrical Terminals, Spring Contacts, And Radiator Tubes.",
    materialGroup: "Brass",
    standards: "ASTM B36, ASTM B121",
    forms: "Spring Temper Strip, Shim Stock, Annealed Stamping Strip",
    application: "Switch Contacts, Terminals, Lock Shims, Musical Instruments",
  },
  {
    id: 6,
    slug: "aluminium-strips",
    image: alumProductImg,
    title: "Aluminium Strips",
    shortDescription:
      "Lightweight Slit Aluminium Strips Offering Superior Uniformity For Transformer Windings, Cable Wrapping, And Trim.",
    materialGroup: "Aluminium",
    standards: "ASTM B209, AMS 4003",
    forms: "Anodized Trim Strip, Coil Winding Strip, Slit Edges",
    application: "Transformer Foil Windings, Lighting Louvers, Automotive Trim",
  },
];

export default strips;
