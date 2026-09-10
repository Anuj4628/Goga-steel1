// src/data/productMaterials/anchorChannel.js
import channelImage from "../../assets/images/productImage/angle-channels.webp";
import regular from "../../assets/images/stock/regular-angle.jpg"
import channel from "../../assets/images/stock/regular-channel.jpg"
import carbon from "../../assets/images/stock/carbon-angle-channel.jpg"

// New Copper, Brass, Aluminium imports
import copperProductImg from "../../assets/images/productImage/angle&channel-copper.jpeg";
import brassProductImg from "../../assets/images/productImage/angle&channel-brass.jpeg";
import alumProductImg from "../../assets/images/productImage/angle&channel-aluminium.jpeg";

const anchorChannel = [
  {
    id: 1,
    slug: "regular-angle",
    image: regular,
    title: "Regular Angle",
    shortDescription:
      "ASTM A36, IS 2062 Gr E250 / E350, SS 304/304L, SS 316/316L, Hot-Rolled L-Shape Structural Profiles.",
    materialGroup: "Equal & Unequal",
    standards: "ASTM A36, IS 2062 Gr E250 / E350, SS 304/304L, SS 316/316L",
    forms: "Hot-Rolled L-Shape Structural Profiles",
    application:
      "Structural fabrication, construction, industrial frameworks, and support systems",
  },
  {
    id: 2,
    slug: "regular-channel",
    image: channel,
    title: "Regular Channel",
    shortDescription:
      "IS 808 Standard, ASTM A36, ASME SA36, Stainless Steel 304, 316, Tapered Flange, Parallel Flange Iron Sections.",
    materialGroup: "C & U Channels",
    standards: "IS 808 Standard, ASTM A36, ASME SA36, Stainless Steel 304, 316",
    forms: "Tapered Flange, Parallel Flange Iron Sections",
    application:
      "Heavy-duty structural support, machinery frames, and industrial fabrication",
  },
  {
    id: 3,
    slug: "carbon-angle-channel",
    image: carbon,
    title: "Carbon Steel Angle & Channel",
    shortDescription:
      "ASTM A572 Gr 50 / Gr 60, A529, IS 2062 E250A/B, High-Yield Carbon Steel Structural Conduits & Framework Sections.",
    materialGroup: "Carbon Steel Deck",
    standards: "ASTM A572 Gr 50 / Gr 60, A529, IS 2062 E250A/B",
    forms: "High-Yield Carbon Steel Structural Conduits & Framework Sections",
    application: "Construction, infrastructure, and engineering industries",
  },
  {
    id: 4,
    slug: "copper-angle-channels",
    image: copperProductImg,
    title: "Copper Angles & Channels",
    shortDescription:
      "High-Purity Copper Angles And Channels Engineered For Electrical Busbars, Heavy Conductors, And Structural Marine Frameworks.",
    materialGroup: "Copper",
    standards: "ASTM B187, ASTM B152",
    forms: "Equal Angles, Unequal Angles, C Channels, Custom Profiles",
    application: "Electrical Switchgear, Power Distribution, Marine Framing",
  },
  {
    id: 5,
    slug: "brass-angle-channels",
    image: brassProductImg,
    title: "Brass Angles & Channels",
    shortDescription:
      "Precision Extruded Brass Angles And Channels Offering Superior Corrosion Resistance, Excellent Machinability, And Structural Rigidity.",
    materialGroup: "Brass",
    standards: "ASTM B16, ASTM B453",
    forms: "L Profile, Channel Sections, Polished Angles",
    application: "Architectural Trims, Marine Fittings, Mechanical Construction",
  },
  {
    id: 6,
    slug: "aluminium-angle-channels",
    image: alumProductImg,
    title: "Aluminium Angles & Channels",
    shortDescription:
      "Lightweight Structural Aluminium Angles And Channels Designed For Architectural Framing, Transport Vehicles, And Structural Support.",
    materialGroup: "Aluminium",
    standards: "ASTM B221, ASTM B308",
    forms: "Architectural Angle, Structural Channel, T Sections",
    application: "Framing Systems, Aerospace Structures, Curtain Walls",
  },
];

export default anchorChannel;
