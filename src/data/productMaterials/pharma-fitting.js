// src/data/productMaterials/pharmaFitting.js
import pharmaImage from "../../assets/images/productImage/pharma-fittings.webp";
import high from "../../assets/images/stock/high-purity-pharma-fittings.jpg"
import tc from "../../assets/images/stock/tc-clamps-ferrules.jpg"
import asme from "../../assets/images/stock/asme-bpe-sanitary-tubing.jpg"
import val from "../../assets/images/stock/pneumatic-butterfly-valves.jpg"
import family from "../../assets/images/stock/Diaphragm-Valve-Family.jpg"
import housing from "../../assets/images/stock/ss-filter-housings.jpg"
import gmp from "../../assets/images/stock/gmp-floor-drain-traps.jpg"
import sms from "../../assets/images/stock/sms-din-union-fittings.jpg"


// New Copper, Brass, Aluminium imports
import copperProductImg from "../../assets/images/productImage/pharma-copper.jpg";
import brassProductImg from "../../assets/images/productImage/pharma-brass.jpg";
import alumProductImg from "../../assets/images/productImage/pharma-aluminium.jpeg";

const pharmaFitting = [
  {
    id: 1,
    slug: "high-purity-pharma-fittings",
    image: high,
    title: "High Purity Pharma Fittings",
    shortDescription:
      "Electropolished & Mirror Finish, CIP / SIP Compatible, High Purity SS 316L Construction.",
    materialGroup: "ASME BPE",
    standards: "ASME BPE, GMP, High Purity SS 316L",
    forms: "Electropolished & Mirror Finish Fittings",
    application: "Pharmaceutical, Biotech, and Cleanroom Environments",
  },
  {
    id: 2,
    slug: "tc-clamps-ferrules",
    image: tc,
    title: "TC (Tri-Clover) Clamps & Ferrules",
    shortDescription:
      "Quick-connect hygienic fittings for sterile pipeline systems.",
    materialGroup: "Tri-Clover",
    standards: "Sanitary Grade Stainless Steel",
    forms: "Clamps & Ferrules",
    application:
      "Pharmaceutical, Biotech, Food Processing, and Sterile Process Applications",
  },
  {
    id: 3,
    slug: "asme-bpe-sanitary-tubing",
    image: asme,
    title: "ASME BPE Sanitary Tubing",
    shortDescription:
      "High purity tubing designed for pharmaceutical-grade applications.",
    materialGroup: "ASME BPE",
    standards: "ASME BPE Certified, High Surface Finish",
    forms: "Sanitary Tubing",
    application:
      "Sterile Fluid Transfer in Pharmaceutical and Biotechnology Plants",
  },
  {
    id: 4,
    slug: "pneumatic-butterfly-valves",
    image: val,
    title: "Pneumatic Butterfly Valves",
    shortDescription: "Automated flow control valves for cleanroom operations.",
    materialGroup: "Sanitary Valves",
    standards: "Sanitary Grade, Automated Control",
    forms: "Pneumatic Butterfly Valves",
    application: "Hygienic Process Systems",
  },
  {
    id: 5,
    slug: "diaphragm-valves-pharma-grade",
    image: family,
    title: "Diaphragm Valves (Pharma Grade)",
    shortDescription:
      "Sterile valves ensuring zero contamination in fluid handling.",
    materialGroup: "Pharma Grade",
    standards: "Sterile, Contamination-Free Operation",
    forms: "Diaphragm Valves",
    application: "Sterile Processing Environments",
  },
  {
    id: 6,
    slug: "ss-filter-housings",
    image: housing,
    title: "SS Filter Housings",
    shortDescription:
      "Efficient filtration units for removing contaminants in pipelines.",
    materialGroup: "Filtration",
    standards: "Stainless Steel, High Purity",
    forms: "Filter Housings",
    application: "Pharmaceutical, Food, Beverage, and Chemical Industries",
  },
  {
    id: 7,
    slug: "gmp-floor-drain-traps",
    image: gmp,
    title: "GMP Floor Drain Traps",
    shortDescription:
      "Hygienic drainage solutions for pharmaceutical facilities.",
    materialGroup: "GMP Compliant",
    standards: "GMP Standards, Stainless Steel",
    forms: "Floor Drain Traps",
    application: "Cleanroom Facilities",
  },
  {
    id: 8,
    slug: "sms-din-union-fittings",
    image: sms,
    title: "SMS / DIN Union Fittings",
    shortDescription:
      "Easy dismantling connections for maintenance and cleaning.",
    materialGroup: "Sanitary Connections",
    standards: "SMS, DIN Standards",
    forms: "Union Fittings",
    application: "Hygienic Piping System Connections",
  },
  {
    id: 9,
    slug: "electropolished-ep-pipes",
    image: pharmaImage,
    title: "Electropolished (EP) Pipes",
    shortDescription:
      "Ultra-smooth surface pipes ensuring high purity flow systems.",
    materialGroup: "Electropolished",
    standards: "Ultra-Smooth Internal Surface, High Purity",
    forms: "Electropolished Pipes",
    application: "Pharmaceutical, Semiconductor, and Biotech Applications",
  },
  {
    id: 10,
    slug: "copper-pharma-fittings",
    image: copperProductImg,
    title: "Copper Pharma Fittings",
    shortDescription:
      "Precision Micro-Finished Copper Pharma Fittings For Specialized Clean Process Lines, Fermentation, And Lab Chillers.",
    materialGroup: "Copper",
    standards: "ASME BPE, ISO 2852",
    forms: "Tri-Clamp Ferrules, Sanitary Bends, Instrument Tees",
    application: "Fermentation Systems, Botanical Extraction, Pure Steam Lines",
  },
  {
    id: 11,
    slug: "brass-pharma-fittings",
    image: brassProductImg,
    title: "Brass Pharma Fittings",
    shortDescription:
      "Precision Brass Clean-Line Fittings Manufactured For Medical Gas Handling, Vacuum Lines, And Lab Distribution Manifolds.",
    materialGroup: "Brass",
    standards: "ASME BPE, DIN 11850",
    forms: "Medical Gas Connectors, Quick-Couplers, Swivel Adapters",
    application: "Hospital Gas Outlets, Vacuum Regulators, Autoclave Piping",
  },
  {
    id: 12,
    slug: "aluminium-pharma-fittings",
    image: alumProductImg,
    title: "Aluminium Pharma Fittings",
    shortDescription:
      "Clean Anodized Aluminium Fittings Designed For Cleanroom Tooling, Dry Pharma Processing, And Diagnostic Equipment.",
    materialGroup: "Aluminium",
    standards: "ASME BPE, ISO 14644",
    forms: "Cleanroom Flanges, Pneumatic Manifolds, Filter Mounts",
    application: "Cleanroom Pass-Throughs, Tablet Press Ducting, Lab Enclosures",
  },
];

export default pharmaFitting;
