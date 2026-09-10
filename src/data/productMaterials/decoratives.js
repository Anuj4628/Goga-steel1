// src/data/productMaterials/decoratives.js

import tProfileImg from "../../assets/images/Interior&decoratives/t-profile.jpg";
import uProfileImg from "../../assets/images/Interior&decoratives/u profile.jpg";
import glassProfileImg from "../../assets/images/Interior&decoratives/glassprofile.avif";
import decorativesImg from "../../assets/images/Interior&decoratives/decoratives.jpg";
import decoratives2Img from "../../assets/images/Interior&decoratives/decoratives2.avif";

const decoratives = [
  {
    id: 1,
    slug: "t-profile",
    image: tProfileImg,
    title: "T Profile",
    shortDescription:
      "Decorative Stainless Steel T-Section Profile Designed For Seamless Wall Panel Joins, Floor Transitions, And Tile Trims.",
    materialGroup: "Interiors & Decoratives",
    standards: "AISI 304, AISI 316",
    forms: "T Profile, Fluted, Mirror, Hairline",
    application: "Wall Paneling, Tile Accents, Flooring Transitions, Luxury Interior Finishes",
  },
  {
    id: 2,
    slug: "u-profile",
    image: uProfileImg,
    title: "U Profile",
    shortDescription:
      "Precision Engineered Stainless Steel U-Channel Profile For Edge Protection, Recessed Strip Lighting, And Architectural Grooves.",
    materialGroup: "Interiors & Decoratives",
    standards: "AISI 304, AISI 316",
    forms: "U Channel, Grooved Trim, Custom Flange",
    application: "Ceiling Insets, Edge Banding, Decorative Reveals, Wall Partitions",
  },
  {
    id: 3,
    slug: "glass-profile",
    image: glassProfileImg,
    title: "Glass Profile",
    shortDescription:
      "Heavy-Duty Stainless Steel Profile For Glass Railings, Shower Partitions, And Frameless Architectural Enclosures.",
    materialGroup: "Interiors & Decoratives",
    standards: "AISI 304, AISI 316",
    forms: "Glass Channel, Bottom Shoe, Handrail Profile",
    application: "Glass Railings, Balustrades, Shower Screens, Commercial Glass Partitions",
  },
  {
    id: 4,
    slug: "decorative-profiles",
    image: decorativesImg,
    title: "Decorative Profiles",
    shortDescription:
      "Architectural Stainless Steel Profiles In Mirror, Rose Gold, Gold, And Matte Finishes For Bespoke Interior Detailing.",
    materialGroup: "Interiors & Decoratives",
    standards: "AISI 304, PVD Coated",
    forms: "L Profile, Flat Trim, Inlay Profiles",
    application: "Luxury Furniture, Cabinetry, Feature Walls, Elevator Interiors",
  },
  {
    id: 5,
    slug: "interior-decorative-panels-trims",
    image: decoratives2Img,
    title: "Interior Decorative Panels & Trims",
    shortDescription:
      "High-End Stainless Steel Decorative Wall Panels And Accent Trims For Contemporary Hospitality And Residential Spaces.",
    materialGroup: "Interiors & Decoratives",
    standards: "AISI 304, Embossed / Etched",
    forms: "Textured Panels, Wall Cladding, Accent Bands",
    application: "Lobby Feature Walls, Ceiling Cladding, Column Covers, Reception Backdrops",
  },
];

export default decoratives;
