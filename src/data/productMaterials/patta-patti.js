import pattapattiImage from "../../assets/images/productImage/patta-patti.webp";
import carbon from "../../assets/images/stock/carbon-steel-flat-bar.jpg";
import patti from "../../assets/images/stock/patti-carbon-alloy-steel.jpg";
import stainless from "../../assets/images/stock/patti-stainless-duplex-steel.jpg";
import bar from "../../assets/images/stock/patti-stainless-stell-flat-bars.jpg";


// New Copper, Brass, Aluminium imports
import copperProductImg from "../../assets/images/productImage/patapatti-copper.webp";
import brassProductImg from "../../assets/images/productImage/Pattapatti-brass.webp";
import alumProductImg from "../../assets/images/productImage/patapatti-aluminium.jpg";

const pattapatti = [
  {
    id: 1,
    slug: "carbon-alloy-steel-flat-bars",
    image: carbon,
    title: "Carbon Alloy Steel Flat Bars (Patta)",
    shortDescription:
      "High Tensile Carbon Steel, Mild Steel, ASTM A36, AISI 1018, 1045 Hot Rolled & Cold Drawn Heavy Structural Flat Bars.",
    materialGroup: "Carbon & Alloy Steel Patta",
    standards:
      "High Tensile Carbon Steel, Mild Steel, ASTM A36, AISI 1018, 1045",
    forms: "Hot Rolled & Cold Drawn",
    application: "Heavy Structural Flat Bars",
  },
  {
    id: 2,
    slug: "carbon-alloy-steel-patti",
    image: patti,
    title: "Carbon Alloy Steel Patti",
    shortDescription:
      "EN8, EN9, EN24, AISI 4140 Precision Slit Steel Patti Bars for Manufacturing, Tooling & Dynamic Engineering Applications.",
    materialGroup: "Carbon & Alloy Steel Patti",
    standards: "EN8, EN9, EN24, AISI 4140",
    forms: "Precision Slit",
    application: "Manufacturing, Tooling & Dynamic Engineering Applications",
  },
  {
    id: 3,
    slug: "stainless-duplex-steel-patti",
    image: stainless,
    title: "Stainless & Duplex Steel Patti",
    shortDescription:
      "Duplex UNS S31803, S32205, Super Duplex S32750, High-Alloy Corrosive Resistant Slit Patti Formats.",
    materialGroup: "Stainless & Duplex Patti",
    standards: "Duplex UNS S31803, S32205, Super Duplex S32750",
    forms: "Slit Patti Formats",
    application: "High-Alloy Corrosive Resistant Applications",
  },
  {
    id: 4,
    slug: "stainless-steel-flat-bars",
    image: bar,
    title: "Stainless Steel Flat Bars (Patta)",
    shortDescription:
      "ASTM A240 / ASME SA240 TP 304, 304L, 316, 316L, 317L, 321, 347, 904L Industrial Polished & Hot Rolled Patta Plates.",
    materialGroup: "Stainless Steel Patta",
    standards:
      "ASTM A240 / ASME SA240 TP 304, 304L, 316, 316L, 317L, 321, 347, 904L",
    forms: "Industrial Polished & Hot Rolled",
    application: "Patta Plates",
  },
  {
    id: 5,
    slug: "copper-patta-patti",
    image: copperProductImg,
    title: "Copper Patta Patti",
    shortDescription:
      "Flat Copper Patta Patti Strips Engineered For Grounding Braid Systems, Busbar Interconnects, And Earthing Conductors.",
    materialGroup: "Copper",
    standards: "ASTM B187, IS 1897",
    forms: "Flat Strips, Edge-Radiused Flats, Annealed Patti",
    application: "Earthing Systems, Switchboards, Lightning Arrestor Strips",
  },
  {
    id: 6,
    slug: "brass-patta-patti",
    image: brassProductImg,
    title: "Brass Patta Patti",
    shortDescription:
      "Decorative And Engineering Brass Patta Patti Flats Offering Clean Edges, High Polishability, And Dimensional Stability.",
    materialGroup: "Brass",
    standards: "ASTM B36, IS 410",
    forms: "Mirror Polished Flats, Slit Patti, Architectural Strips",
    application: "Flooring Inlays, Furniture Detailing, Elevator Door Edges",
  },
  {
    id: 7,
    slug: "aluminium-patta-patti",
    image: alumProductImg,
    title: "Aluminium Patta Patti",
    shortDescription:
      "Extruded Aluminium Patta Patti Strips Delivering High Structural Straightness For Framing, Trims, And Architectural Inlays.",
    materialGroup: "Aluminium",
    standards: "ASTM B221, IS 733",
    forms: "Anodized Flats, Mill Finish Strips, Chamfered Patti",
    application: "Solar Frame Edge Trims, Signage Borders, Wall Partitions",
  },
];

export default pattapatti;
