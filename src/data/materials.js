// src/data/materials.js
import {
  ShieldCheck,
  Layers,
  FlaskConical,
  Waves,
  CircleDot,
  Disc3,
  Settings,
  Sparkles,
  Box,
} from "lucide-react";

import coilImg from "../assets/images/productImage/coil.webp";
import plateImg from "../assets/images/productImage/plates.webp";
import tubeImg from "../assets/images/productImage/tubes.webp";
import pipeImg from "../assets/images/productImage/pipes.webp";
import roundBarImg from "../assets/images/productImage/rod.webp";
import sheetImg from "../assets/images/productImage/sheets.webp";
import wireImg from "../assets/images/productImage/wires.webp";
import flangeImg from "../assets/images/productImage/Flanges.webp";
import valveImg from "../assets/images/productImage/valves.webp";
import ringImg from "../assets/images/productImage/rings.webp";
import circleImg from "../assets/images/productImage/circles.webp";
import stripImg from "../assets/images/productImage/strips.webp";

// Stock images for different product types
import tubesStockImg from "../assets/images/stock/instrumentation-tubes.jpg";
import roundBarsStockImg from "../assets/images/stock/round-bars.jpg";
import sheetsStockImg from "../assets/images/stock/titanium-sheets.jpg";
import platesStockImg from "../assets/images/stock/cold-rolled-plates.jpg";
import wiresStockImg from "../assets/images/stock/coil-wire.jpg";
import coilsStockImg from "../assets/images/stock/alloy-28-coils.jpg";
import pipesStockImg from "../assets/images/stock/alloy-28-pipes.jpg";
import flangesStockImg from "../assets/images/stock/carbon-steel-flanges.jpg";
import valvesStockImg from "../assets/images/stock/high-purity-ball-valves.jpg";
import ringsStockImg from "../assets/images/stock/nickel-alloy-rings.jpg";
import circlesStockImg from "../assets/images/stock/machined-forged-circles.jpg";
import stripsStockImg from "../assets/images/stock/nickel-alloy-strips.jpg";

// Helper function to assign different images to items

// Copper, Brass, and Aluminium product image imports
import copper_0 from "../assets/images/productImage/angle&channel-copper.jpeg";
import brass_0 from "../assets/images/productImage/angle&channel-brass.jpeg";
import alum_0 from "../assets/images/productImage/angle&channel-aluminium.jpeg";
import copper_1 from "../assets/images/productImage/buttweld-copper.jpg";
import brass_1 from "../assets/images/productImage/buttweld-brass.jpg";
import alum_1 from "../assets/images/productImage/buttweld-aluminium.jpeg";
import copper_2 from "../assets/images/productImage/circle-copper.webp";
import brass_2 from "../assets/images/productImage/circle-brass.jpg";
import alum_2 from "../assets/images/productImage/circle-aluminium.jpg";
import copper_3 from "../assets/images/productImage/Coil-copper.jpeg";
import brass_3 from "../assets/images/productImage/coil-brass.jpg";
import alum_3 from "../assets/images/productImage/coil-aluminium.jpg";
import copper_4 from "../assets/images/productImage/dairyfitting-copper.webp";
import brass_4 from "../assets/images/productImage/dairyfitting-brass.jpg";
import alum_4 from "../assets/images/productImage/dairyfitting-aluminium.jpg";
import copper_5 from "../assets/images/productImage/dairypharma-copper.jpg";
import alum_5 from "../assets/images/productImage/dairypharma-aluminium.jpeg";
import copper_6 from "../assets/images/productImage/fasteners-copper.webp";
import brass_6 from "../assets/images/productImage/fasteners-brass.jpg";
import alum_6 from "../assets/images/productImage/fateners-aluminum.jpg";
import copper_7 from "../assets/images/productImage/flanges-copper.jpeg";
import brass_7 from "../assets/images/productImage/flanges-Brass.jpg";
import alum_7 from "../assets/images/productImage/Flanges-Alluminium.jpeg";
import copper_8 from "../assets/images/productImage/forgedfit-copper.jpeg";
import brass_8 from "../assets/images/productImage/forgedfit-brass.webp";
import alum_8 from "../assets/images/productImage/forgedfit-aluminum.jpeg";
import copper_9 from "../assets/images/productImage/hosepipe-copper.webp";
import brass_9 from "../assets/images/productImage/hosepipe-brass.webp";
import alum_9 from "../assets/images/productImage/hosepipe-aluminium.webp";
import copper_10 from "../assets/images/productImage/patapatti-copper.webp";
import brass_10 from "../assets/images/productImage/Pattapatti-brass.webp";
import alum_10 from "../assets/images/productImage/patapatti-aluminium.jpg";
import copper_11 from "../assets/images/productImage/perforated-copper.webp";
import brass_11 from "../assets/images/productImage/perforated-brass.webp";
import alum_11 from "../assets/images/productImage/perforated-aluminum.avif";
import copper_12 from "../assets/images/productImage/pharma-copper.jpg";
import brass_12 from "../assets/images/productImage/pharma-brass.jpg";
import alum_12 from "../assets/images/productImage/pharma-aluminium.jpeg";
import copper_13 from "../assets/images/productImage/pipe-copper.jpeg";
import brass_13 from "../assets/images/productImage/pipes-brass.jpg";
import alum_13 from "../assets/images/productImage/pipes-aluminium.jpg";
import copper_14 from "../assets/images/productImage/plate-copper.jpeg";
import brass_14 from "../assets/images/productImage/plate-brass.jpeg";
import alum_14 from "../assets/images/productImage/plate-aluminium.jpeg";
import copper_15 from "../assets/images/productImage/ring-copper.webp";
import brass_15 from "../assets/images/productImage/ring-brass.webp";
import alum_15 from "../assets/images/productImage/ring-aluminium.jpg";
import copper_16 from "../assets/images/productImage/rods&bars-copper.jpg";
import brass_16 from "../assets/images/productImage/rods&bars-brass.jpg";
import alum_16 from "../assets/images/productImage/Rod&Bars-aluminum.jpg";
import copper_17 from "../assets/images/productImage/sheets-copper.jpeg";
import brass_17 from "../assets/images/productImage/sheet-brass.png";
import alum_17 from "../assets/images/productImage/sheet-aluminium.jpeg";
import copper_18 from "../assets/images/productImage/stripes-copper.jpg";
import brass_18 from "../assets/images/productImage/stripes-brass.jpg";
import alum_18 from "../assets/images/productImage/stripes-aluminium.jpeg";
import copper_19 from "../assets/images/productImage/tube-copper.jpg";
import brass_19 from "../assets/images/productImage/tube-brass.jpeg";
import alum_19 from "../assets/images/productImage/tubes-aluminnium.jpeg";
import copper_20 from "../assets/images/productImage/wiremesh-copper.webp";
import brass_20 from "../assets/images/productImage/wiremesh-brass.jpeg";
import alum_20 from "../assets/images/productImage/wiremesh-aluminium.jpg";
import copper_21 from "../assets/images/productImage/wires-copper.jpg";
import brass_21 from "../assets/images/productImage/wires-brass.jpg";
import alum_21 from "../assets/images/productImage/Wires-Aluminum.jpg";

const buildItemsWithImages = (items) => {
  return items.map((item) => {
    let image = item.image;
    const slug = item.slug || "";

    if (slug.includes("tubes") || slug.includes("tube")) {
      image = tubesStockImg;
    } else if (slug.includes("round-bars") || slug.includes("round-bar")) {
      image = roundBarsStockImg;
    } else if (slug.includes("sheets") || slug.includes("sheet")) {
      image = sheetsStockImg;
    } else if (slug.includes("plates") || slug.includes("plate")) {
      image = platesStockImg;
    } else if (slug.includes("wires") || slug.includes("wire")) {
      image = wiresStockImg;
    } else if (slug.includes("coils") || slug.includes("coil")) {
      image = coilsStockImg;
    } else if (slug.includes("pipes") || slug.includes("pipe")) {
      image = pipesStockImg;
    } else if (slug.includes("flanges") || slug.includes("flange")) {
      image = flangesStockImg;
    } else if (slug.includes("valves") || slug.includes("valve")) {
      image = valvesStockImg;
    } else if (slug.includes("rings") || slug.includes("ring")) {
      image = ringsStockImg;
    } else if (slug.includes("circles") || slug.includes("circle")) {
      image = circlesStockImg;
    } else if (slug.includes("strips") || slug.includes("strip")) {
      image = stripsStockImg;
    }

    return { ...item, image };
  });
};

const materials = [
  {
    name: "Stainless Steel",
    slug: "stainless-steel",
    image: coilImg,
    icon: ShieldCheck,
    description:
      "Corrosion-Resistant Austenitic, Ferritic, And Martensitic Grades For General Industrial, Food, And Architectural Use.",
    overview:
      "A Versatile Range Of Stainless Grades Suited To Food Processing, Architecture, And General Engineering.",
    highlight: [
      "Excellent corrosion resistance",
      "Clean finishing",
      "High weldability",
    ],
    items: buildItemsWithImages([
      {
        title: "Stainless Steel Tubes",
        slug: "stainless-steel-tubes",
        shortDescription:
          "Stainless Steel Tubes Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        description:
          "Premium stainless steel tubes available in grades 304, 304L, 316, 316L, 310S, 904L for heat exchangers, instrumentation, and high-temperature applications.",
        properties: [
          "Excellent corrosion resistance",
          "High strength-to-weight ratio",
          "Good weldability",
          "Temperature resistance",
        ],
        applications: [
          "Heat exchangers",
          "Instrumentation",
          "High-temperature applications",
          "Chemical processing",
        ],
      },
      {
        title: "Stainless Steel Round Bars",
        slug: "stainless-steel-round-bars",
        shortDescription:
          "Stainless Steel Round Bars Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        description:
          "Precision-engineered stainless steel round bars in grades 304, 304L, 316, 316L, 310S, 904L for machining, fabrication, and structural applications.",
        properties: [
          "High tensile strength",
          "Excellent machinability",
          "Corrosion resistance",
          "Dimensional accuracy",
        ],
        applications: [
          "Machining",
          "Fabrication",
          "Structural applications",
          "Shafts and fasteners",
        ],
      },
      {
        title: "Stainless Steel Sheets",
        slug: "stainless-steel-sheets",
        shortDescription:
          "Stainless Steel Sheets Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        description:
          "High-quality stainless steel sheets available in grades 304, 304L, 316, 316L, 310S, 904L for industrial fabrication, architectural, and food processing applications.",
        properties: [
          "Excellent formability",
          "Superior surface finish",
          "Corrosion resistance",
          "Wide size range",
        ],
        applications: [
          "Industrial fabrication",
          "Architectural cladding",
          "Food processing equipment",
          "Tanks and vessels",
        ],
      },
      {
        title: "Stainless Steel Plates",
        slug: "stainless-steel-plates",
        shortDescription:
          "Stainless Steel Plates Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        description:
          "Heavy-duty stainless steel plates in grades 304, 304L, 316, 316L, 310S, 904L for pressure vessels, structural fabrication, and heavy engineering.",
        properties: [
          "High strength",
          "Excellent impact resistance",
          "Corrosion resistance",
          "Weldability",
        ],
        applications: [
          "Pressure vessels",
          "Structural fabrication",
          "Heavy engineering",
          "Offshore platforms",
        ],
      },
      {
        title: "Stainless Steel Wires",
        slug: "stainless-steel-wires",
        shortDescription:
          "Stainless Steel Wires Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        description:
          "Premium stainless steel wires in grades 304, 304L, 316, 316L, 310S, 904L for welding, fasteners, springs, and industrial applications.",
        properties: [
          "High tensile strength",
          "Good ductility",
          "Corrosion resistance",
          "Consistent quality",
        ],
        applications: [
          "Welding electrodes",
          "Fasteners",
          "Springs",
          "Wire mesh",
        ],
      },
      {
        title: "Stainless Steel Coils",
        slug: "stainless-steel-coils",
        shortDescription:
          "Stainless Steel Coils Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        description:
          "High-quality stainless steel coils available in grades 304, 304L, 316, 316L, 310S, 904L for stamping, forming, and continuous processing applications.",
        properties: [
          "Excellent formability",
          "Uniform thickness",
          "Corrosion resistance",
          "Consistent quality",
        ],
        applications: [
          "Stamping",
          "Forming",
          "Continuous processing",
          "Automotive components",
        ],
      },
      {
        title: "Stainless Steel Pipes",
        slug: "stainless-steel-pipes",
        shortDescription:
          "Stainless Steel Pipes Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        description:
          "Seamless and welded stainless steel pipes in grades 304, 304L, 316, 316L, 310S, 904L for fluid transport, structural, and industrial applications.",
        properties: [
          "High pressure resistance",
          "Excellent corrosion resistance",
          "Good weldability",
          "Temperature resistance",
        ],
        applications: [
          "Fluid transport",
          "Structural applications",
          "Industrial processing",
          "Oil and gas",
        ],
      },
    ]),
  },
  {
    name: "Duplex Steel",
    slug: "duplex-steel",
    image: plateImg,
    icon: Layers,
    description:
      "High-Strength Duplex And Super Duplex Grades Combining Austenitic And Ferritic Properties For Demanding Environments.",
    overview:
      "Balanced Strength And Corrosion Resistance For Offshore And Process Industry Use.",
    highlight: [
      "Double strength of austenitic grades",
      "Excellent pitting resistance",
      "Good fatigue performance",
    ],
    items: buildItemsWithImages([
      {
        title: "Duplex Steel Tubes",
        slug: "duplex-steel-tubes",
        shortDescription:
          "Duplex Steel Tubes Supplier – 2205, 2507, S31803, S32205 & More",
        description:
          "High-strength duplex steel tubes for offshore, chemical, and pressure applications with excellent corrosion resistance.",
        properties: [
          "High strength",
          "Excellent chloride resistance",
          "Good weldability",
          "Corrosion resistance",
        ],
        applications: [
          "Offshore piping",
          "Heat exchangers",
          "Pressure vessels",
        ],
      },
      {
        title: "Duplex Steel Round Bars",
        slug: "duplex-steel-round-bars",
        shortDescription:
          "Duplex Steel Round Bars Supplier – 2205, 2507, S31803, S32205 & More",
        description:
          "Precision duplex steel round bars for high-strength applications in marine, chemical, and oil & gas industries.",
        properties: [
          "High mechanical strength",
          "Excellent corrosion resistance",
          "Good machinability",
          "Dimensional accuracy",
        ],
        applications: [
          "Fasteners",
          "Shafts",
          "Marine components",
          "Valve stems",
        ],
      },
      {
        title: "Duplex Steel Sheets",
        slug: "duplex-steel-sheets",
        shortDescription:
          "Duplex Steel Sheets Supplier – 2205, 2507, S31803, S32205 & More",
        description:
          "High-quality duplex steel sheets for structural and corrosion-resistant applications in demanding environments.",
        properties: [
          "Excellent strength",
          "Corrosion resistance",
          "Good formability",
          "Weldability",
        ],
        applications: [
          "Structural fabrication",
          "Chemical tanks",
          "Marine structures",
        ],
      },
      {
        title: "Duplex Steel Plates",
        slug: "duplex-steel-plates",
        shortDescription:
          "Duplex Steel Plates Supplier – 2205, 2507, S31803, S32205 & More",
        description:
          "Heavy-duty duplex steel plates for pressure vessels, structural fabrication, and heavy engineering applications.",
        properties: [
          "High strength",
          "Excellent corrosion resistance",
          "Impact resistance",
          "Weldability",
        ],
        applications: [
          "Pressure vessels",
          "Offshore platforms",
          "Structural steel",
        ],
      },
      {
        title: "Duplex Steel Wires",
        slug: "duplex-steel-wires",
        shortDescription:
          "Duplex Steel Wires Supplier – 2205, 2507, S31803, S32205 & More",
        description:
          "Premium duplex steel wires for welding, fasteners, and specialized industrial applications.",
        properties: [
          "High tensile strength",
          "Corrosion resistance",
          "Good ductility",
          "Consistent quality",
        ],
        applications: ["Welding electrodes", "Fasteners", "Springs"],
      },
      {
        title: "Duplex Steel Coils",
        slug: "duplex-steel-coils",
        shortDescription:
          "Duplex Steel Coils Supplier – 2205, 2507, S31803, S32205 & More",
        description:
          "High-quality duplex steel coils for continuous processing, forming, and structural applications.",
        properties: [
          "Excellent formability",
          "Uniform thickness",
          "Corrosion resistance",
          "Strength",
        ],
        applications: ["Stamping", "Forming", "Structural components"],
      },
      {
        title: "Duplex Steel Pipes",
        slug: "duplex-steel-pipes",
        shortDescription:
          "Duplex Steel Pipes Supplier – 2205, 2507, S31803, S32205 & More",
        description:
          "Seamless and welded duplex steel pipes for fluid transport, structural, and industrial applications.",
        properties: [
          "High pressure resistance",
          "Excellent corrosion resistance",
          "Good weldability",
          "Strength",
        ],
        applications: ["Oil and gas", "Chemical processing", "Fluid transport"],
      },
    ]),
  },
  {
    name: "Nickel Alloy",
    slug: "nickel-alloy",
    image: tubeImg,
    icon: FlaskConical,
    description:
      "High-Performance Nickel-Based Alloys For Extreme Temperature And Corrosive Service.",
    overview:
      "Engineered For Thermal Stability And Resistance To Harsh Reducing And Oxidizing Chemistries.",
    highlight: [
      "High temperature strength",
      "Excellent chemical resistance",
      "Stable under thermal cycling",
    ],
    items: buildItemsWithImages([
      {
        title: "Nickel Alloy Tubes",
        slug: "nickel-alloy-tubes",
        shortDescription:
          "Nickel Alloy Tubes Supplier – 200, 201, 600, 625 & More",
        description:
          "Premium nickel alloy tubes for heat exchangers, instrumentation, and high-temperature applications.",
        properties: [
          "Excellent corrosion resistance",
          "High temperature strength",
          "Good weldability",
          "Thermal stability",
        ],
        applications: ["Heat exchangers", "Instrumentation", "Chemical plants"],
      },
      {
        title: "Nickel Alloy Round Bars",
        slug: "nickel-alloy-round-bars",
        shortDescription:
          "Nickel Alloy Round Bars Supplier – 200, 201, 600, 625 & More",
        description:
          "Precision nickel alloy round bars for high-strength applications in demanding environments.",
        properties: [
          "High tensile strength",
          "Corrosion resistance",
          "Good machinability",
          "Temperature resistance",
        ],
        applications: ["Fasteners", "Shafts", "Valve components"],
      },
      {
        title: "Nickel Alloy Sheets",
        slug: "nickel-alloy-sheets",
        shortDescription:
          "Nickel Alloy Sheets Supplier – 200, 201, 600, 625 & More",
        description:
          "High-quality nickel alloy sheets for chemical processing, aerospace, and industrial applications.",
        properties: [
          "Excellent corrosion resistance",
          "High temperature stability",
          "Good formability",
          "Weldability",
        ],
        applications: [
          "Chemical processing",
          "Aerospace components",
          "Industrial fabrication",
        ],
      },
      {
        title: "Nickel Alloy Plates",
        slug: "nickel-alloy-plates",
        shortDescription:
          "Nickel Alloy Plates Supplier – 200, 201, 600, 625 & More",
        description:
          "Heavy-duty nickel alloy plates for pressure vessels, heat exchangers, and structural applications.",
        properties: [
          "High strength",
          "Corrosion resistance",
          "Temperature resistance",
          "Weldability",
        ],
        applications: [
          "Pressure vessels",
          "Heat exchangers",
          "Structural steel",
        ],
      },
      {
        title: "Nickel Alloy Wires",
        slug: "nickel-alloy-wires",
        shortDescription:
          "Nickel Alloy Wires Supplier – 200, 201, 600, 625 & More",
        description:
          "Premium nickel alloy wires for welding, fasteners, and specialized industrial applications.",
        properties: [
          "High tensile strength",
          "Corrosion resistance",
          "Good ductility",
          "Consistent quality",
        ],
        applications: ["Welding electrodes", "Fasteners", "Springs"],
      },
      {
        title: "Nickel Alloy Coils",
        slug: "nickel-alloy-coils",
        shortDescription:
          "Nickel Alloy Coils Supplier – 200, 201, 600, 625 & More",
        description:
          "High-quality nickel alloy coils for continuous processing and forming applications.",
        properties: [
          "Excellent formability",
          "Uniform thickness",
          "Corrosion resistance",
          "Strength",
        ],
        applications: ["Stamping", "Forming", "Industrial components"],
      },
      {
        title: "Nickel Alloy Pipes",
        slug: "nickel-alloy-pipes",
        shortDescription:
          "Nickel Alloy Pipes Supplier – 200, 201, 600, 625 & More",
        description:
          "Seamless and welded nickel alloy pipes for fluid transport, structural, and industrial applications.",
        properties: [
          "High pressure resistance",
          "Corrosion resistance",
          "Temperature resistance",
          "Weldability",
        ],
        applications: ["Chemical processing", "Fluid transport", "Oil and gas"],
      },
    ]),
  },
  {
    name: "Copper Nickel",
    slug: "copper-nickel",
    image: pipeImg,
    icon: Waves,
    description:
      "Copper-Nickel Alloys Prized For Seawater Corrosion Resistance In Marine And Offshore Applications.",
    overview:
      "Preferred For Marine Service Where Saltwater Resistance And Ease Of Fabrication Matter.",
    highlight: [
      "Seawater compatibility",
      "Low marine growth",
      "Good thermal transfer",
    ],
    items: buildItemsWithImages([
      {
        title: "Copper Nickel Tubes",
        slug: "copper-nickel-tubes",
        shortDescription: "Copper Nickel Tubes Supplier – 90/10, 70/30 & More",
        description:
          "Premium copper nickel tubes for marine heat exchangers, condensers, and seawater applications.",
        properties: [
          "Excellent seawater resistance",
          "Good thermal conductivity",
          "Anti-fouling properties",
          "Durability",
        ],
        applications: [
          "Marine heat exchangers",
          "Condensers",
          "Seawater piping",
        ],
      },
      {
        title: "Copper Nickel Pipes",
        slug: "copper-nickel-pipes",
        shortDescription: "Copper Nickel Pipes Supplier – 90/10, 70/30 & More",
        description:
          "Seamless and welded copper nickel pipes for marine and offshore applications.",
        properties: [
          "Seawater resistance",
          "Good mechanical properties",
          "Weldability",
          "Corrosion resistance",
        ],
        applications: ["Marine piping", "Offshore platforms", "Shipbuilding"],
      },
      {
        title: "Copper Nickel Sheets",
        slug: "copper-nickel-sheets",
        shortDescription: "Copper Nickel Sheets Supplier – 90/10, 70/30 & More",
        description:
          "High-quality copper nickel sheets for marine and industrial applications.",
        properties: [
          "Corrosion resistance",
          "Good formability",
          "Thermal conductivity",
          "Durability",
        ],
        applications: [
          "Marine fabrication",
          "Heat exchangers",
          "Industrial equipment",
        ],
      },
      {
        title: "Copper Nickel Plates",
        slug: "copper-nickel-plates",
        shortDescription: "Copper Nickel Plates Supplier – 90/10, 70/30 & More",
        description:
          "Heavy-duty copper nickel plates for marine and offshore applications.",
        properties: [
          "Seawater resistance",
          "High strength",
          "Good weldability",
          "Thermal conductivity",
        ],
        applications: [
          "Offshore platforms",
          "Marine equipment",
          "Shipbuilding",
        ],
      },
      {
        title: "Copper Nickel Round Bars",
        slug: "copper-nickel-round-bars",
        shortDescription:
          "Copper Nickel Round Bars Supplier – 90/10, 70/30 & More",
        description:
          "Precision copper nickel round bars for marine and industrial applications.",
        properties: [
          "Corrosion resistance",
          "Good machinability",
          "Strength",
          "Durability",
        ],
        applications: ["Shafts", "Fasteners", "Marine components"],
      },
      {
        title: "Copper Nickel Coils",
        slug: "copper-nickel-coils",
        shortDescription: "Copper Nickel Coils Supplier – 90/10, 70/30 & More",
        description:
          "High-quality copper nickel coils for continuous processing and forming.",
        properties: [
          "Corrosion resistance",
          "Good formability",
          "Uniform thickness",
          "Thermal conductivity",
        ],
        applications: ["Stamping", "Forming", "Marine components"],
      },
    ]),
  },
  {
    name: "Hastelloy",
    slug: "hastelloy",
    image: roundBarImg,
    icon: Settings,
    description:
      "Nickel-Molybdenum-Chromium Alloys Engineered For Severe Chemical Processing Environments.",
    overview:
      "Built For Aggressive Chemical Processes Where Conventional Alloys Fail.",
    highlight: [
      "Superior chloride resistance",
      "Excellent resistance to oxidizers",
      "Long service life",
    ],
    items: buildItemsWithImages([
      {
        title: "Hastelloy Tubes",
        slug: "hastelloy-tubes",
        shortDescription: "Hastelloy Tubes Supplier – C276, C22, B2, B3 & More",
        description:
          "Premium Hastelloy tubes for chemical processing, pollution control, and high-temperature applications.",
        properties: [
          "Outstanding corrosion resistance",
          "High temperature strength",
          "Good weldability",
          "Chemical resistance",
        ],
        applications: [
          "Chemical processing",
          "Pollution control",
          "Heat exchangers",
        ],
      },
      {
        title: "Hastelloy Pipes",
        slug: "hastelloy-pipes",
        shortDescription: "Hastelloy Pipes Supplier – C276, C22, B2, B3 & More",
        description:
          "Seamless and welded Hastelloy pipes for aggressive chemical and high-temperature service.",
        properties: [
          "Corrosion resistance",
          "High temperature strength",
          "Pressure resistance",
          "Weldability",
        ],
        applications: ["Chemical plants", "Petrochemical", "Pollution control"],
      },
      {
        title: "Hastelloy Round Bars",
        slug: "hastelloy-round-bars",
        shortDescription:
          "Hastelloy Round Bars Supplier – C276, C22, B2, B3 & More",
        description:
          "Precision Hastelloy round bars for high-performance applications in corrosive environments.",
        properties: [
          "High strength",
          "Corrosion resistance",
          "Good machinability",
          "Temperature resistance",
        ],
        applications: ["Fasteners", "Shafts", "Valve components"],
      },
      {
        title: "Hastelloy Sheets",
        slug: "hastelloy-sheets",
        shortDescription:
          "Hastelloy Sheets Supplier – C276, C22, B2, B3 & More",
        description:
          "High-quality Hastelloy sheets for chemical processing and corrosion-resistant applications.",
        properties: [
          "Excellent corrosion resistance",
          "High temperature stability",
          "Good formability",
          "Weldability",
        ],
        applications: [
          "Chemical tanks",
          "Process equipment",
          "Industrial fabrication",
        ],
      },
      {
        title: "Hastelloy Plates",
        slug: "hastelloy-plates",
        shortDescription:
          "Hastelloy Plates Supplier – C276, C22, B2, B3 & More",
        description:
          "Heavy-duty Hastelloy plates for pressure vessels, heat exchangers, and structural applications.",
        properties: [
          "High strength",
          "Corrosion resistance",
          "Temperature resistance",
          "Weldability",
        ],
        applications: [
          "Pressure vessels",
          "Heat exchangers",
          "Chemical reactors",
        ],
      },
      {
        title: "Hastelloy Wires",
        slug: "hastelloy-wires",
        shortDescription: "Hastelloy Wires Supplier – C276, C22, B2, B3 & More",
        description:
          "Premium Hastelloy wires for welding and specialized industrial applications.",
        properties: [
          "High tensile strength",
          "Corrosion resistance",
          "Good ductility",
          "Consistent quality",
        ],
        applications: [
          "Welding electrodes",
          "Fasteners",
          "Specialized hardware",
        ],
      },
      {
        title: "Hastelloy Coils",
        slug: "hastelloy-coils",
        shortDescription: "Hastelloy Coils Supplier – C276, C22, B2, B3 & More",
        description:
          "High-quality Hastelloy coils for continuous processing and forming applications.",
        properties: [
          "Excellent formability",
          "Uniform thickness",
          "Corrosion resistance",
          "Strength",
        ],
        applications: ["Stamping", "Forming", "Industrial components"],
      },
    ]),
  },
  {
    name: "Incoloy",
    slug: "incoloy",
    icon: Layers,
    image: sheetImg,
    description:
      "Iron-Nickel-Chromium Alloys Offering Strong Resistance To Oxidation And Carburization At High Temperatures.",
    overview:
      "A Dependable Choice For High-Temperature Service And Thermal Processing Equipment.",
    highlight: [
      "Oxidation resistance",
      "Carburization resistance",
      "Thermal stability",
    ],
    items: buildItemsWithImages([
      {
        title: "Incoloy Tubes",
        slug: "incoloy-tubes",
        shortDescription:
          "Incoloy Tubes Supplier – 800, 800H, 800HT, 825 & More",
        description:
          "Premium Incoloy tubes for heat exchangers, furnace components, and high-temperature applications.",
        properties: [
          "High temperature strength",
          "Oxidation resistance",
          "Good weldability",
          "Creep strength",
        ],
        applications: [
          "Heat exchangers",
          "Furnace components",
          "Petrochemical",
        ],
      },
      {
        title: "Incoloy Pipes",
        slug: "incoloy-pipes",
        shortDescription:
          "Incoloy Pipes Supplier – 800, 800H, 800HT, 825 & More",
        description:
          "Seamless and welded Incoloy pipes for high-temperature and corrosive service.",
        properties: [
          "Temperature resistance",
          "Corrosion resistance",
          "Pressure resistance",
          "Weldability",
        ],
        applications: ["Petrochemical", "Power plants", "Process piping"],
      },
      {
        title: "Incoloy Round Bars",
        slug: "incoloy-round-bars",
        shortDescription:
          "Incoloy Round Bars Supplier – 800, 800H, 800HT, 825 & More",
        description:
          "Precision Incoloy round bars for high-temperature and corrosion-resistant applications.",
        properties: [
          "High tensile strength",
          "Temperature resistance",
          "Good machinability",
          "Corrosion resistance",
        ],
        applications: ["Fasteners", "Shafts", "Valve components"],
      },
      {
        title: "Incoloy Sheets",
        slug: "incoloy-sheets",
        shortDescription:
          "Incoloy Sheets Supplier – 800, 800H, 800HT, 825 & More",
        description:
          "High-quality Incoloy sheets for thermal processing and high-temperature applications.",
        properties: [
          "Oxidation resistance",
          "High temperature stability",
          "Good formability",
          "Weldability",
        ],
        applications: [
          "Furnace components",
          "Thermal processing",
          "Industrial fabrication",
        ],
      },
      {
        title: "Incoloy Plates",
        slug: "incoloy-plates",
        shortDescription:
          "Incoloy Plates Supplier – 800, 800H, 800HT, 825 & More",
        description:
          "Heavy-duty Incoloy plates for pressure vessels, heat exchangers, and high-temperature applications.",
        properties: [
          "High strength",
          "Temperature resistance",
          "Corrosion resistance",
          "Weldability",
        ],
        applications: [
          "Pressure vessels",
          "Heat exchangers",
          "Furnace components",
        ],
      },
      {
        title: "Incoloy Wires",
        slug: "incoloy-wires",
        shortDescription:
          "Incoloy Wires Supplier – 800, 800H, 800HT, 825 & More",
        description:
          "Premium Incoloy wires for welding and specialized high-temperature applications.",
        properties: [
          "High tensile strength",
          "Temperature resistance",
          "Good ductility",
          "Consistent quality",
        ],
        applications: ["Welding electrodes", "Fasteners", "Springs"],
      },
      {
        title: "Incoloy Coils",
        slug: "incoloy-coils",
        shortDescription:
          "Incoloy Coils Supplier – 800, 800H, 800HT, 825 & More",
        description:
          "High-quality Incoloy coils for continuous processing and forming.",
        properties: [
          "Excellent formability",
          "Uniform thickness",
          "Temperature resistance",
          "Corrosion resistance",
        ],
        applications: ["Stamping", "Forming", "Industrial components"],
      },
    ]),
  },
  {
    name: "Inconel",
    slug: "inconel",
    image: wireImg,
    icon: CircleDot,
    description:
      "Nickel-Chromium Superalloys Built For Extreme Heat, Pressure, And Corrosive Service In Aerospace And Energy.",
    overview:
      "Ideal For Turbine, Exhaust, And High-Stress Industrial Applications.",
    highlight: [
      "Exceptional heat resistance",
      "Excellent creep strength",
      "Reliable under pressure",
    ],
    items: buildItemsWithImages([
      {
        title: "Inconel Tubes",
        slug: "inconel-tubes",
        shortDescription:
          "Inconel Tubes Supplier – 600, 601, 625, 718, X-750 & More",
        description:
          "Premium Inconel tubes for aerospace, chemical processing, and high-temperature applications.",
        properties: [
          "High temperature strength",
          "Oxidation resistance",
          "Good weldability",
          "Creep strength",
        ],
        applications: [
          "Aerospace",
          "Chemical processing",
          "Furnace components",
        ],
      },
      {
        title: "Inconel Pipes",
        slug: "inconel-pipes",
        shortDescription:
          "Inconel Pipes Supplier – 600, 601, 625, 718, X-750 & More",
        description:
          "Seamless and welded Inconel pipes for extreme temperature and pressure applications.",
        properties: [
          "Temperature resistance",
          "Pressure resistance",
          "Corrosion resistance",
          "Weldability",
        ],
        applications: ["Aerospace", "Power generation", "Chemical processing"],
      },
      {
        title: "Inconel Round Bars",
        slug: "inconel-round-bars",
        shortDescription:
          "Inconel Round Bars Supplier – 600, 601, 625, 718, X-750 & More",
        description:
          "Precision Inconel round bars for high-performance applications in extreme environments.",
        properties: [
          "High tensile strength",
          "Temperature resistance",
          "Good machinability",
          "Corrosion resistance",
        ],
        applications: ["Fasteners", "Shafts", "Aerospace components"],
      },
      {
        title: "Inconel Sheets",
        slug: "inconel-sheets",
        shortDescription:
          "Inconel Sheets Supplier – 600, 601, 625, 718, X-750 & More",
        description:
          "High-quality Inconel sheets for extreme temperature and corrosive applications.",
        properties: [
          "High temperature stability",
          "Oxidation resistance",
          "Good formability",
          "Weldability",
        ],
        applications: ["Aerospace", "Heat treatment", "Industrial fabrication"],
      },
      {
        title: "Inconel Plates",
        slug: "inconel-plates",
        shortDescription:
          "Inconel Plates Supplier – 600, 601, 625, 718, X-750 & More",
        description:
          "Heavy-duty Inconel plates for pressure vessels, turbines, and high-temperature applications.",
        properties: [
          "High strength",
          "Temperature resistance",
          "Corrosion resistance",
          "Weldability",
        ],
        applications: ["Pressure vessels", "Turbines", "Heat exchangers"],
      },
      {
        title: "Inconel Wires",
        slug: "inconel-wires",
        shortDescription:
          "Inconel Wires Supplier – 600, 601, 625, 718, X-750 & More",
        description:
          "Premium Inconel wires for welding and specialized high-temperature applications.",
        properties: [
          "High tensile strength",
          "Temperature resistance",
          "Good ductility",
          "Consistent quality",
        ],
        applications: ["Welding electrodes", "Fasteners", "Springs"],
      },
      {
        title: "Inconel Coils",
        slug: "inconel-coils",
        shortDescription:
          "Inconel Coils Supplier – 600, 601, 625, 718, X-750 & More",
        description:
          "High-quality Inconel coils for continuous processing and forming.",
        properties: [
          "Excellent formability",
          "Uniform thickness",
          "Temperature resistance",
          "Corrosion resistance",
        ],
        applications: ["Stamping", "Forming", "Industrial components"],
      },
    ]),
  },
  {
    name: "Monel",
    slug: "monel",
    image: flangeImg,
    icon: Box,
    description:
      "Nickel-Copper Alloys With Excellent Resistance To Seawater And Hydrofluoric Acid Environments.",
    overview:
      "A Dependable Nickel-Copper Solution For Marine And Acid Handling Applications.",
    highlight: [
      "Excellent seawater resistance",
      "Good ductility",
      "Strong acid resistance",
    ],
    items: buildItemsWithImages([
      {
        title: "Monel Tubes",
        slug: "monel-tubes",
        shortDescription: "Monel Tubes Supplier – 400, K500 & More",
        description:
          "Premium Monel tubes for marine, chemical, and heat exchanger applications.",
        properties: [
          "Seawater resistance",
          "Corrosion resistance",
          "Good weldability",
          "Strength",
        ],
        applications: [
          "Marine heat exchangers",
          "Condensers",
          "Chemical plants",
        ],
      },
      {
        title: "Monel Pipes",
        slug: "monel-pipes",
        shortDescription: "Monel Pipes Supplier – 400, K500 & More",
        description:
          "Seamless and welded Monel pipes for marine and chemical applications.",
        properties: [
          "Seawater resistance",
          "Pressure resistance",
          "Corrosion resistance",
          "Weldability",
        ],
        applications: ["Marine piping", "Chemical processing", "Oil and gas"],
      },
      {
        title: "Monel Round Bars",
        slug: "monel-round-bars",
        shortDescription: "Monel Round Bars Supplier – 400, K500 & More",
        description:
          "Precision Monel round bars for marine and chemical applications.",
        properties: [
          "High strength",
          "Corrosion resistance",
          "Good machinability",
          "Seawater resistance",
        ],
        applications: ["Shafts", "Fasteners", "Pump components"],
      },
      {
        title: "Monel Sheets",
        slug: "monel-sheets",
        shortDescription: "Monel Sheets Supplier – 400, K500 & More",
        description:
          "High-quality Monel sheets for marine and chemical applications.",
        properties: [
          "Corrosion resistance",
          "Seawater resistance",
          "Good formability",
          "Weldability",
        ],
        applications: [
          "Marine fabrication",
          "Chemical tanks",
          "Industrial equipment",
        ],
      },
      {
        title: "Monel Plates",
        slug: "monel-plates",
        shortDescription: "Monel Plates Supplier – 400, K500 & More",
        description:
          "Heavy-duty Monel plates for marine, offshore, and chemical applications.",
        properties: [
          "Seawater resistance",
          "High strength",
          "Corrosion resistance",
          "Weldability",
        ],
        applications: [
          "Offshore platforms",
          "Marine equipment",
          "Chemical plants",
        ],
      },
      {
        title: "Monel Wires",
        slug: "monel-wires",
        shortDescription: "Monel Wires Supplier – 400, K500 & More",
        description:
          "Premium Monel wires for welding and specialized marine applications.",
        properties: [
          "High tensile strength",
          "Corrosion resistance",
          "Good ductility",
          "Consistent quality",
        ],
        applications: ["Welding electrodes", "Fasteners", "Marine hardware"],
      },
      {
        title: "Monel Coils",
        slug: "monel-coils",
        shortDescription: "Monel Coils Supplier – 400, K500 & More",
        description:
          "High-quality Monel coils for continuous processing and forming.",
        properties: [
          "Corrosion resistance",
          "Good formability",
          "Uniform thickness",
          "Strength",
        ],
        applications: ["Stamping", "Forming", "Marine components"],
      },
    ]),
  },
  {
    name: "Titanium",
    slug: "titanium",
    image: valveImg,
    icon: Sparkles,
    description:
      "Lightweight, High-Strength Titanium Grades With Outstanding Corrosion Resistance For Aerospace And Marine Use.",
    overview:
      "Strong, Lightweight, And Highly Corrosion Resistant For Critical Performance Needs.",
    highlight: [
      "High strength-to-weight ratio",
      "Excellent corrosion resistance",
      "Biocompatible",
    ],
    items: buildItemsWithImages([
      {
        title: "Titanium Tubes",
        slug: "titanium-tubes",
        shortDescription: "Titanium Tubes Supplier – Grade 1, 2, 5, 7 & More",
        description:
          "Premium titanium tubes for aerospace, marine, and heat exchanger applications.",
        properties: [
          "Lightweight",
          "Corrosion resistance",
          "High strength-to-weight ratio",
          "Good weldability",
        ],
        applications: ["Aerospace", "Marine equipment", "Heat exchangers"],
      },
      {
        title: "Titanium Pipes",
        slug: "titanium-pipes",
        shortDescription: "Titanium Pipes Supplier – Grade 1, 2, 5, 7 & More",
        description:
          "Seamless and welded titanium pipes for aerospace, marine, and chemical applications.",
        properties: [
          "High strength-to-weight ratio",
          "Corrosion resistance",
          "Pressure resistance",
          "Weldability",
        ],
        applications: ["Aerospace", "Marine piping", "Chemical processing"],
      },
      {
        title: "Titanium Round Bars",
        slug: "titanium-round-bars",
        shortDescription:
          "Titanium Round Bars Supplier – Grade 1, 2, 5, 7 & More",
        description:
          "Precision titanium round bars for aerospace, marine, and medical applications.",
        properties: [
          "High strength",
          "Lightweight",
          "Corrosion resistance",
          "Good machinability",
        ],
        applications: ["Aerospace components", "Medical devices", "Fasteners"],
      },
      {
        title: "Titanium Sheets",
        slug: "titanium-sheets",
        shortDescription: "Titanium Sheets Supplier – Grade 1, 2, 5, 7 & More",
        description:
          "High-quality titanium sheets for aerospace, marine, and industrial applications.",
        properties: [
          "Lightweight",
          "Corrosion resistance",
          "Good formability",
          "Weldability",
        ],
        applications: [
          "Aerospace",
          "Marine fabrication",
          "Industrial equipment",
        ],
      },
      {
        title: "Titanium Plates",
        slug: "titanium-plates",
        shortDescription: "Titanium Plates Supplier – Grade 1, 2, 5, 7 & More",
        description:
          "Heavy-duty titanium plates for aerospace, marine, and structural applications.",
        properties: [
          "High strength-to-weight ratio",
          "Corrosion resistance",
          "Temperature resistance",
          "Weldability",
        ],
        applications: ["Aerospace", "Offshore platforms", "Marine equipment"],
      },
      {
        title: "Titanium Wires",
        slug: "titanium-wires",
        shortDescription: "Titanium Wires Supplier – Grade 1, 2, 5, 7 & More",
        description:
          "Premium titanium wires for welding and specialized aerospace applications.",
        properties: [
          "High tensile strength",
          "Corrosion resistance",
          "Lightweight",
          "Good ductility",
        ],
        applications: [
          "Welding electrodes",
          "Aerospace hardware",
          "Medical devices",
        ],
      },
      {
        title: "Titanium Coils",
        slug: "titanium-coils",
        shortDescription: "Titanium Coils Supplier – Grade 1, 2, 5, 7 & More",
        description:
          "High-quality titanium coils for continuous processing and forming.",
        properties: [
          "Lightweight",
          "Corrosion resistance",
          "Good formability",
          "Uniform thickness",
        ],
        applications: ["Stamping", "Forming", "Industrial components"],
      },
    ]),
  },
  {
    name: "Sanicro",
    slug: "sanicro",
    image: ringImg,
    icon: ShieldCheck,
    description:
      "Specialty Austenitic Stainless Steels Engineered For Demanding Sulfuric And Phosphoric Acid Service.",
    overview:
      "A Premium Stainless Option For Demanding Acid Service And Process Equipment.",
    highlight: [
      "Excellent acid resistance",
      "High process reliability",
      "Strong weldability",
    ],
    items: buildItemsWithImages([
      {
        title: "Alloy 28 Tubes",
        slug: "alloy-28-tubes",
        shortDescription: "Alloy 28 Tubes Supplier – High-Alloy Stainless",
        description:
          "Premium Alloy 28 (Sanicro 28) tubes for heat exchangers, condensers, and high-temperature acid service applications.",
        properties: [
          "Excellent acid resistance",
          "High strength",
          "Good weldability",
          "Corrosion resistance",
        ],
        applications: ["Heat exchangers", "Condensers", "Chemical processing"],
      },
      {
        title: "Alloy 28 Round Bars",
        slug: "alloy-28-round-bars",
        shortDescription: "Alloy 28 Round Bars Supplier – High-Alloy Stainless",
        description:
          "High-quality Alloy 28 (Sanicro 28) round bars for fasteners, shafts, and structural components in corrosive environments.",
        properties: [
          "High tensile strength",
          "Excellent corrosion resistance",
          "Good machinability",
          "Dimensional accuracy",
        ],
        applications: ["Fasteners", "Shafts", "Valve components"],
      },
      {
        title: "Alloy 28 Sheets",
        slug: "alloy-28-sheets",
        shortDescription: "Alloy 28 Sheets Supplier – High-Alloy Stainless",
        description:
          "Premium Alloy 28 (Sanicro 28) sheets for industrial fabrication, acid plants, and chemical processing equipment.",
        properties: [
          "Excellent acid resistance",
          "Good formability",
          "Superior surface finish",
          "Weldability",
        ],
        applications: [
          "Industrial fabrication",
          "Acid plants",
          "Chemical equipment",
        ],
      },
      {
        title: "Alloy 28 Plates",
        slug: "alloy-28-plates",
        shortDescription: "Alloy 28 Plates Supplier – High-Alloy Stainless",
        description:
          "Heavy-duty Alloy 28 (Sanicro 28) plates for pressure vessels, chemical reactors, and structural applications.",
        properties: [
          "High strength",
          "Excellent acid resistance",
          "Impact resistance",
          "Weldability",
        ],
        applications: [
          "Pressure vessels",
          "Chemical reactors",
          "Structural fabrication",
        ],
      },
      {
        title: "Alloy 28 Wires",
        slug: "alloy-28-wires",
        shortDescription: "Alloy 28 Wires Supplier – High-Alloy Stainless",
        description:
          "Premium Alloy 28 (Sanicro 28) wires for welding, fasteners, and specialized industrial applications.",
        properties: [
          "High tensile strength",
          "Corrosion resistance",
          "Good ductility",
          "Consistent quality",
        ],
        applications: ["Welding electrodes", "Fasteners", "Springs"],
      },
      {
        title: "Alloy 28 Coils",
        slug: "alloy-28-coils",
        shortDescription: "Alloy 28 Coils Supplier – High-Alloy Stainless",
        description:
          "High-quality Alloy 28 (Sanicro 28) coils for continuous processing, forming, and industrial applications.",
        properties: [
          "Excellent formability",
          "Uniform thickness",
          "Corrosion resistance",
          "Strength",
        ],
        applications: ["Stamping", "Forming", "Industrial components"],
      },
      {
        title: "Alloy 28 Pipes",
        slug: "alloy-28-pipes",
        shortDescription: "Alloy 28 Pipes Supplier – High-Alloy Stainless",
        description:
          "Seamless and welded Alloy 28 (Sanicro 28) pipes for fluid transport, structural, and industrial applications.",
        properties: [
          "High pressure resistance",
          "Excellent corrosion resistance",
          "Good weldability",
          "Temperature resistance",
        ],
        applications: ["Acid plants", "Chemical processing", "Fluid transport"],
      },
    ]),
  },
  {
    name: "Special Materials",
    slug: "special-materials",
    image: circleImg,
    icon: Settings,
    description:
      "Custom And Specialty Alloy Grades Sourced For Unique Project Specifications And Critical Applications.",
    overview:
      "Tailored Solutions For Niche Industrial And Engineering Challenges.",
    highlight: [
      "Custom sourcing",
      "Application-specific grades",
      "Project engineering support",
    ],
    items: buildItemsWithImages([
      {
        title: "High-Performance Alloy Pipes",
        slug: "high-performance-alloy-pipes",
        shortDescription:
          "High-Performance Alloy Pipes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        description:
          "Premium high-performance alloy pipes in grades including Nimonic, Nichrome, Nitronic, and Nilo alloys for extreme temperature, corrosion-resistant, and high-stress applications.",
        properties: [
          "High temperature resistance",
          "Excellent corrosion resistance",
          "High strength",
          "Good weldability",
        ],
        applications: [
          "Aerospace",
          "Power generation",
          "Chemical processing",
          "High-temperature systems",
        ],
      },
      {
        title: "High-Performance Alloy Tubes",
        slug: "high-performance-alloy-tubes",
        shortDescription:
          "High-Performance Alloy Tubes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        description:
          "Premium high-performance alloy tubes in grades including Nimonic, Nichrome, Nitronic, and Nilo alloys for heat exchangers, instrumentation, and high-temperature applications.",
        properties: [
          "High temperature strength",
          "Excellent oxidation resistance",
          "Good weldability",
          "Corrosion resistance",
        ],
        applications: [
          "Heat exchangers",
          "Instrumentation",
          "Aerospace components",
          "Chemical processing",
        ],
      },
      {
        title: "High-Performance Alloy Round Bars",
        slug: "high-performance-alloy-round-bars",
        shortDescription:
          "High-Performance Alloy Round Bars Supplier – Nimonic, Nichrome, Nitronic & Alloy",
        description:
          "Precision-engineered high-performance alloy round bars in grades including Nimonic, Nichrome, and Nitronic alloys for machining, fabrication, and structural applications.",
        properties: [
          "High tensile strength",
          "Temperature resistance",
          "Good machinability",
          "Corrosion resistance",
        ],
        applications: [
          "Fasteners",
          "Shafts",
          "Aerospace components",
          "Valve stems",
        ],
      },
      {
        title: "High-Performance Alloy Sheets",
        slug: "high-performance-alloy-sheets",
        shortDescription:
          "High-Performance Alloy Sheets – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        description:
          "High-quality high-performance alloy sheets in grades including Nimonic, Nichrome, Nitronic, and Nilo alloys for industrial fabrication, aerospace, and high-temperature applications.",
        properties: [
          "High temperature stability",
          "Excellent oxidation resistance",
          "Good formability",
          "Weldability",
        ],
        applications: [
          "Aerospace",
          "Heat treatment",
          "Industrial fabrication",
          "Chemical processing",
        ],
      },
      {
        title: "High-Performance Alloy Plates",
        slug: "high-performance-alloy-plates",
        shortDescription:
          "High-Performance Alloy Plates – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        description:
          "Heavy-duty high-performance alloy plates in grades including Nimonic, Nichrome, Nitronic, and Nilo alloys for pressure vessels, structural applications, and high-temperature environments.",
        properties: [
          "High strength",
          "Temperature resistance",
          "Corrosion resistance",
          "Weldability",
        ],
        applications: [
          "Pressure vessels",
          "Turbines",
          "Heat exchangers",
          "Structural steel",
        ],
      },
      {
        title: "High-Performance Alloy Wires",
        slug: "high-performance-alloy-wires",
        shortDescription:
          "High-Performance Alloy Wires Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        description:
          "Premium high-performance alloy wires in grades including Nimonic, Nichrome, Nitronic, and Nilo alloys for welding, fasteners, and specialized high-temperature applications.",
        properties: [
          "High tensile strength",
          "Temperature resistance",
          "Good ductility",
          "Corrosion resistance",
        ],
        applications: [
          "Welding electrodes",
          "Fasteners",
          "Springs",
          "Heating elements",
        ],
      },
      {
        title: "High-Performance Alloy Coils",
        slug: "high-performance-alloy-coils",
        shortDescription:
          "High-Performance Alloy Coils Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        description:
          "High-quality high-performance alloy coils in grades including Nimonic, Nichrome, Nitronic, and Nilo alloys for continuous processing, forming, and industrial applications.",
        properties: [
          "Excellent formability",
          "Uniform thickness",
          "Temperature resistance",
          "Corrosion resistance",
        ],
        applications: [
          "Stamping",
          "Forming",
          "Industrial components",
          "Automotive",
        ],
      },
    ]),
  },
  {
    name: "Other Materials",
    slug: "other-materials",
    image: stripImg,
    icon: Box,
    description:
      "Additional Carbon Steel, Alloy Steel, And Engineering Material Grades Available On Request.",
    overview:
      "Supporting Broader Industrial Requirements With Carbon And Engineering Steel Options.",
    highlight: [
      "Wide grade availability",
      "Cost-effective options",
      "Fast sourcing",
    ],
    items: buildItemsWithImages([
      {
        title: "Special Alloy Tubes",
        slug: "special-alloy-tubes",
        shortDescription:
          "Special Alloy Tubes Supplier – SMO 254 (F44) & Alloy 20",
        description:
          "Premium special alloy tubes in SMO 254 (F44) and Alloy 20 grades for heat exchangers, instrumentation, and high-temperature applications.",
        properties: [
          "Excellent corrosion resistance",
          "High strength",
          "Good weldability",
          "Temperature resistance",
        ],
        applications: [
          "Heat exchangers",
          "Instrumentation",
          "Chemical processing",
          "High-temperature applications",
        ],
      },
      {
        title: "Special Alloy Round Bars",
        slug: "special-alloy-round-bars",
        shortDescription:
          "Special Alloy Round Bars Supplier – SMO 254 & Alloy 20",
        description:
          "Precision-engineered special alloy round bars in SMO 254 (F44) and Alloy 20 grades for machining, fabrication, and structural applications.",
        properties: [
          "High tensile strength",
          "Excellent corrosion resistance",
          "Good machinability",
          "Dimensional accuracy",
        ],
        applications: ["Machining", "Fabrication", "Fasteners", "Shafts"],
      },
      {
        title: "Special Alloy Sheets",
        slug: "special-alloy-sheets",
        shortDescription:
          "Special Alloy Sheets Supplier – SMO 254 (F44) & Alloy 20",
        description:
          "High-quality special alloy sheets in SMO 254 (F44) and Alloy 20 grades for industrial fabrication, chemical processing, and corrosion-resistant applications.",
        properties: [
          "Excellent corrosion resistance",
          "Good formability",
          "Superior surface finish",
          "Weldability",
        ],
        applications: [
          "Industrial fabrication",
          "Chemical processing",
          "Food processing equipment",
          "Tanks and vessels",
        ],
      },
      {
        title: "Special Alloy Plates",
        slug: "special-alloy-plates",
        shortDescription:
          "Special Alloy Plates Supplier – SMO 254 (F44) & Alloy 20",
        description:
          "Heavy-duty special alloy plates in SMO 254 (F44) and Alloy 20 grades for pressure vessels, structural fabrication, and heavy engineering.",
        properties: [
          "High strength",
          "Excellent impact resistance",
          "Corrosion resistance",
          "Weldability",
        ],
        applications: [
          "Pressure vessels",
          "Structural fabrication",
          "Heavy engineering",
          "Chemical plants",
        ],
      },
      {
        title: "Special Alloy Wires",
        slug: "special-alloy-wires",
        shortDescription:
          "Special Alloy Wires Supplier – SMO 254 (F44) & Alloy 20",
        description:
          "Premium special alloy wires in SMO 254 (F44) and Alloy 20 grades for welding, fasteners, springs, and industrial applications.",
        properties: [
          "High tensile strength",
          "Corrosion resistance",
          "Good ductility",
          "Consistent quality",
        ],
        applications: [
          "Welding electrodes",
          "Fasteners",
          "Springs",
          "Wire mesh",
        ],
      },
      {
        title: "Special Alloy Coils",
        slug: "special-alloy-coils",
        shortDescription: "Special Alloy Coils Supplier – SMO 254 & Alloy 20",
        description:
          "High-quality special alloy coils in SMO 254 (F44) and Alloy 20 grades for stamping, forming, and continuous processing applications.",
        properties: [
          "Excellent formability",
          "Uniform thickness",
          "Corrosion resistance",
          "Consistent quality",
        ],
        applications: [
          "Stamping",
          "Forming",
          "Continuous processing",
          "Automotive components",
        ],
      },
      {
        title: "SMO 254 Pipes",
        slug: "smo-254-pipes",
        shortDescription: "SMO 254 Pipes Supplier – High-Alloy Stainless",
        description:
          "Specialized SMO 254 (F44) pipes designed for high corrosion resistance, particularly in chloride-containing environments, and sulfuric acid service.",
        properties: [
          "High corrosion resistance",
          "Excellent chloride resistance",
          "Good weldability",
          "Temperature resistance",
        ],
        applications: [
          "Chemical processing",
          "Desalination plants",
          "Heat exchangers",
          "Sulfuric acid service",
        ],
      },
    ]),
  },

  {
    name: "Copper",
    slug: "copper",
    image: copper_14,
    icon: CircleDot,
    description:
      "High Electrical And Thermal Conductivity Copper Products For Industrial, Electrical, And Marine Engineering.",
    overview:
      "Comprehensive Range Of High-Purity Copper Pipes, Tubes, Flanges, Sheets, Plates, Coils, And Precision Fabricated Items.",
    highlight: [
      "Superior Thermal And Electrical Conductivity",
      "High Corrosion Resistance In Marine Environments",
      "Exceptional Ductility And Formability",
    ],
    items: [
      {
        title: "Copper Angles & Channels",
        slug: "copper-angle-channels",
        image: copper_0,
        shortDescription: "High-Purity Copper Angles And Channels Engineered For Electrical Busbars, Heavy Conductors, And Structural Marine Frameworks.",
        description: "High-Purity Copper Angles And Channels Engineered For Electrical Busbars, Heavy Conductors, And Structural Marine Frameworks.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Electrical Switchgear",
          "Power Distribution",
          "Marine Framing",
        ],
      },
      {
        title: "Copper Buttweld Fittings",
        slug: "copper-buttweld-fittings",
        image: copper_1,
        shortDescription: "Seamless And Welded Copper Buttweld Fittings Designed For High-Flow Industrial Piping, HVAC, And Refrigeration Circuits.",
        description: "Seamless And Welded Copper Buttweld Fittings Designed For High-Flow Industrial Piping, HVAC, And Refrigeration Circuits.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Cryogenic Systems",
          "Industrial Cooling",
          "Marine Piping",
        ],
      },
      {
        title: "Copper Circles",
        slug: "copper-circles",
        image: copper_2,
        shortDescription: "High-Purity Copper Circles Cut With High Precision For Pressure Vessel Heads, Cookware, And Electrical Discs.",
        description: "High-Purity Copper Circles Cut With High Precision For Pressure Vessel Heads, Cookware, And Electrical Discs.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Gaskets",
          "Heat Dissipation Discs",
          "Industrial Vessels",
        ],
      },
      {
        title: "Copper Coils",
        slug: "copper-coils",
        image: copper_3,
        shortDescription: "High-Conductivity Copper Coils Ideal For Transformer Windings, Heat Exchanger Coils, And Continuous Stamping Operations.",
        description: "High-Conductivity Copper Coils Ideal For Transformer Windings, Heat Exchanger Coils, And Continuous Stamping Operations.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Transformers",
          "Heat Pumps",
          "Electronic Terminals",
        ],
      },
      {
        title: "Copper Dairy Fittings",
        slug: "copper-dairy-fittings",
        image: copper_4,
        shortDescription: "Specially Cleaned Copper Sanitary Fittings Engineered For Specialized Brewing, Distillation, And Heat Exchanger Loops.",
        description: "Specially Cleaned Copper Sanitary Fittings Engineered For Specialized Brewing, Distillation, And Heat Exchanger Loops.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Brewing Vessels",
          "Distillery Stills",
          "Heat Recovery",
        ],
      },
      {
        title: "Copper Dairy & Pharma Valves",
        slug: "copper-dairy-pharma-valves",
        image: copper_5,
        shortDescription: "Specialized High-Purity Copper Process Valves Crafted For Thermal Stability And Specialized Distillation Systems.",
        description: "Specialized High-Purity Copper Process Valves Crafted For Thermal Stability And Specialized Distillation Systems.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Distillation Columns",
          "Wort Coolers",
          "Thermal Process Loops",
        ],
      },
      {
        title: "Copper Fasteners",
        slug: "copper-fasteners",
        image: copper_6,
        shortDescription: "Non-Magnetic High-Conductivity Copper Fasteners Essential For Electrical Panels, Grounding Networks, And Marine Fixtures.",
        description: "Non-Magnetic High-Conductivity Copper Fasteners Essential For Electrical Panels, Grounding Networks, And Marine Fixtures.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Electrical Grounding",
          "Cathodic Protection",
          "Switchboards",
        ],
      },
      {
        title: "Copper Flanges",
        slug: "copper-flanges",
        image: copper_7,
        shortDescription: "Premium Copper Flanges Designed For Reliable Industrial Piping Applications In Marine, Electrical, And Heat Transfer Systems.",
        description: "Premium Copper Flanges Designed For Reliable Industrial Piping Applications In Marine, Electrical, And Heat Transfer Systems.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Marine Condensers",
          "Heat Exchangers",
          "Chilled Water Loops",
        ],
      },
      {
        title: "Copper Forged Fittings",
        slug: "copper-forged-fittings",
        image: copper_8,
        shortDescription: "High-Density Forged Copper Pipe Fittings Engineered For High Pressure Fluid Handling, Refrigeration, And Electrical Lines.",
        description: "High-Density Forged Copper Pipe Fittings Engineered For High Pressure Fluid Handling, Refrigeration, And Electrical Lines.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "HVAC Chillers",
          "Oxygen Lines",
          "High-Amp Electrical Feedthroughs",
        ],
      },
      {
        title: "Copper Hose Pipes",
        slug: "copper-hose-pipe",
        image: copper_9,
        shortDescription: "Flexible Corrugated Copper Connectors For Vibration Isolation, High-Thermal Transfer, And Gas Transfer Assemblies.",
        description: "Flexible Corrugated Copper Connectors For Vibration Isolation, High-Thermal Transfer, And Gas Transfer Assemblies.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "HVAC Vibration Absorption",
          "Boiler Feeds",
          "Cryogenic Lines",
        ],
      },
      {
        title: "Copper Patta Patti",
        slug: "copper-patta-patti",
        image: copper_10,
        shortDescription: "Flat Copper Patta Patti Strips Engineered For Grounding Braid Systems, Busbar Interconnects, And Earthing Conductors.",
        description: "Flat Copper Patta Patti Strips Engineered For Grounding Braid Systems, Busbar Interconnects, And Earthing Conductors.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Earthing Systems",
          "Switchboards",
          "Lightning Arrestor Strips",
        ],
      },
      {
        title: "Copper Perforated Sheets",
        slug: "copper-perforated-sheets",
        image: copper_11,
        shortDescription: "Aesthetic And Functional Perforated Copper Sheets For Acoustic Attenuation, Architectural Screens, And Filtration Units.",
        description: "Aesthetic And Functional Perforated Copper Sheets For Acoustic Attenuation, Architectural Screens, And Filtration Units.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Acoustic Wall Panels",
          "Distillery Filters",
          "Architectural Shading",
        ],
      },
      {
        title: "Copper Pharma Fittings",
        slug: "copper-pharma-fittings",
        image: copper_12,
        shortDescription: "Precision Micro-Finished Copper Pharma Fittings For Specialized Clean Process Lines, Fermentation, And Lab Chillers.",
        description: "Precision Micro-Finished Copper Pharma Fittings For Specialized Clean Process Lines, Fermentation, And Lab Chillers.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Fermentation Systems",
          "Botanical Extraction",
          "Pure Steam Lines",
        ],
      },
      {
        title: "Copper Pipes",
        slug: "copper-pipes",
        image: copper_13,
        shortDescription: "Seamless Heavy-Gauge Copper Pipes Engineered For Chilled Water Systems, Industrial Plumbing, And Marine Condensers.",
        description: "Seamless Heavy-Gauge Copper Pipes Engineered For Chilled Water Systems, Industrial Plumbing, And Marine Condensers.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Marine Water Lines",
          "Steam Condensate",
          "HVAC Piping",
        ],
      },
      {
        title: "Copper Plates",
        slug: "copper-plates",
        image: copper_14,
        shortDescription: "Heavy-Duty Electrolytic Copper Plates Cut To Size For Transformer Busbars, Grounding Beds, And Heavy Heat Sinks.",
        description: "Heavy-Duty Electrolytic Copper Plates Cut To Size For Transformer Busbars, Grounding Beds, And Heavy Heat Sinks.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Electrolytic Cells",
          "Smelting Busbars",
          "Furnace Electrodes",
        ],
      },
      {
        title: "Copper Rings",
        slug: "copper-rings",
        image: copper_15,
        shortDescription: "Seamless Forged And Rolled Copper Rings Built For Electrical Commutators, High-Thermal Gaskets, And Flange Spacers.",
        description: "Seamless Forged And Rolled Copper Rings Built For Electrical Commutators, High-Thermal Gaskets, And Flange Spacers.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Transformer Seal Rings",
          "Motor Commutators",
          "Seal Gaskets",
        ],
      },
      {
        title: "Copper Round Bars",
        slug: "copper-round-bars",
        image: copper_16,
        shortDescription: "High-Conductivity Solid Copper Round Bars Engineered For Electrical Switchgear, Machine Shafts, And Precision Contacts.",
        description: "High-Conductivity Solid Copper Round Bars Engineered For Electrical Switchgear, Machine Shafts, And Precision Contacts.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Electrical Contacts",
          "Heavy Duty Studs",
          "Welding Electrodes",
        ],
      },
      {
        title: "Copper Sheets",
        slug: "copper-sheets",
        image: copper_17,
        shortDescription: "Premium Cold-Rolled Copper Sheets Ideal For Roofing, Cladding, Architectural Accents, And Electromagnetic Shielding.",
        description: "Premium Cold-Rolled Copper Sheets Ideal For Roofing, Cladding, Architectural Accents, And Electromagnetic Shielding.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Architectural Roofing",
          "Guttering",
          "RF Shielding",
          "Wall Panels",
        ],
      },
      {
        title: "Copper Strips",
        slug: "copper-strips",
        image: copper_18,
        shortDescription: "Precision Cold-Rolled Copper Strips Engineered For Continuous Stamping, Terminal Lugs, And Battery Interconnects.",
        description: "Precision Cold-Rolled Copper Strips Engineered For Continuous Stamping, Terminal Lugs, And Battery Interconnects.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "EV Battery Interconnects",
          "Cable Shielding",
          "Fuse Contacts",
        ],
      },
      {
        title: "Copper Tubes",
        slug: "copper-tubes",
        image: copper_19,
        shortDescription: "High-Efficiency Seamless Copper Heat Exchanger Tubes Engineered For Industrial Boilers, HVAC, And Refrigeration Systems.",
        description: "High-Efficiency Seamless Copper Heat Exchanger Tubes Engineered For Industrial Boilers, HVAC, And Refrigeration Systems.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Heat Exchangers",
          "Condensers",
          "Solar Thermal Collectors",
        ],
      },
      {
        title: "Copper Wire Mesh",
        slug: "copper-wire-mesh",
        image: copper_20,
        shortDescription: "Fine Woven Copper Wire Mesh Providing Superior EMI/RFI Shielding, Precision Chemical Filtration, And Pest Exclusion.",
        description: "Fine Woven Copper Wire Mesh Providing Superior EMI/RFI Shielding, Precision Chemical Filtration, And Pest Exclusion.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Faraday Cages",
          "EMI Shielding",
          "Petroleum Filtration",
          "Insect Screen",
        ],
      },
      {
        title: "Copper Wires",
        slug: "copper-wires",
        image: copper_21,
        shortDescription: "High-Conductivity Annealed Copper Wires Essential For Power Transmission, Magnet Windings, And Grounding Cable Systems.",
        description: "High-Conductivity Annealed Copper Wires Essential For Power Transmission, Magnet Windings, And Grounding Cable Systems.",
        properties: [
          "High Thermal Conductivity",
          "Superior Electrical Conductivity",
          "Excellent Corrosion Resistance",
          "High Ductility And Formability",
        ],
        applications: [
          "Motor Windings",
          "Industrial Cables",
          "Grounding Systems",
          "Telecomm",
        ],
      },
    ],
  },
  {
    name: "Brass",
    slug: "brass",
    image: brass_14,
    icon: Disc3,
    description:
      "Durable And Corrosion-Resistant Brass Products For Marine, Plumbing, Decorative, And Engineering Applications.",
    overview:
      "High-Grade Brass Pipes, Tubes, Flanges, Sheets, Plates, Rods, And Fasteners Engineered For High Machinability And Longevity.",
    highlight: [
      "Excellent Machinability And Polish",
      "High Resistance To Water And Marine Corrosion",
      "Outstanding Spark-Resistance And Friction Properties",
    ],
    items: [
      {
        title: "Brass Angles & Channels",
        slug: "brass-angle-channels",
        image: brass_0,
        shortDescription: "Precision Extruded Brass Angles And Channels Offering Superior Corrosion Resistance, Excellent Machinability, And Structural Rigidity.",
        description: "Precision Extruded Brass Angles And Channels Offering Superior Corrosion Resistance, Excellent Machinability, And Structural Rigidity.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Architectural Trims",
          "Marine Fittings",
          "Mechanical Construction",
        ],
      },
      {
        title: "Brass Buttweld Fittings",
        slug: "brass-buttweld-fittings",
        image: brass_1,
        shortDescription: "Corrosion-Resistant Brass Buttweld Fittings Engineered For Secure Jointing In Seawater, Chemical, And Sanitary Fluid Systems.",
        description: "Corrosion-Resistant Brass Buttweld Fittings Engineered For Secure Jointing In Seawater, Chemical, And Sanitary Fluid Systems.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Marine Water Lines",
          "Chemical Handling",
          "Fire Protection",
        ],
      },
      {
        title: "Brass Circles",
        slug: "brass-circles",
        image: brass_2,
        shortDescription: "Premium Machined Brass Circles Suitable For Stamping, Deep Drawing, Marine Instrument Faces, And Decorative Discs.",
        description: "Premium Machined Brass Circles Suitable For Stamping, Deep Drawing, Marine Instrument Faces, And Decorative Discs.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Precision Instruments",
          "Clocks",
          "Marine Clock Casings",
        ],
      },
      {
        title: "Brass Coils",
        slug: "brass-coils",
        image: brass_3,
        shortDescription: "Durable Brass Slit And Mill-Edge Coils Manufactured For Precision Progressive Die Stamping, Radiators, And Terminal Strips.",
        description: "Durable Brass Slit And Mill-Edge Coils Manufactured For Precision Progressive Die Stamping, Radiators, And Terminal Strips.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Automotive Radiators",
          "Electrical Connectors",
          "Hardware",
        ],
      },
      {
        title: "Brass Dairy Fittings",
        slug: "brass-dairy-fittings",
        image: brass_4,
        shortDescription: "Heavy-Duty Brass Sanitary Unions And Couplings Providing Long-Life Sealing In Process Water And Beverage Equipment.",
        description: "Heavy-Duty Brass Sanitary Unions And Couplings Providing Long-Life Sealing In Process Water And Beverage Equipment.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Process Water Systems",
          "Washdown Stations",
          "Blending Units",
        ],
      },
      {
        title: "Brass Fasteners",
        slug: "brass-fasteners",
        image: brass_6,
        shortDescription: "Corrosion-Resistant Brass Bolts, Screws, Nuts, And Washers Engineered For Marine Rigging, Electrical, And Plumbing Trim.",
        description: "Corrosion-Resistant Brass Bolts, Screws, Nuts, And Washers Engineered For Marine Rigging, Electrical, And Plumbing Trim.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Marine Hardware",
          "Architectural Fixtures",
          "Plumbing Systems",
        ],
      },
      {
        title: "Brass Flanges",
        slug: "brass-flanges",
        image: brass_7,
        shortDescription: "Precision Machined Brass Flanges Built To Deliver Leak-Proof Connections In Saltwater, Sanitary, And Industrial Fuel Lines.",
        description: "Precision Machined Brass Flanges Built To Deliver Leak-Proof Connections In Saltwater, Sanitary, And Industrial Fuel Lines.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Saltwater Piping",
          "Lubrication Lines",
          "Plumbing Manifolds",
        ],
      },
      {
        title: "Brass Forged Fittings",
        slug: "brass-forged-fittings",
        image: brass_8,
        shortDescription: "Heavy-Duty Forged Brass Fittings Providing Robust Leak-Tight Connections In Severe Marine And Hydraulic Environments.",
        description: "Heavy-Duty Forged Brass Fittings Providing Robust Leak-Tight Connections In Severe Marine And Hydraulic Environments.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Marine Propulsion Coolers",
          "Pneumatic Circuits",
          "Fire Mains",
        ],
      },
      {
        title: "Brass Hose Pipes",
        slug: "brass-hose-pipe",
        image: brass_9,
        shortDescription: "Durable Brass Armored Hose Assemblies Designed For High Abrasion Resistance, Oil Transfer, And Marine Fuel Feed Lines.",
        description: "Durable Brass Armored Hose Assemblies Designed For High Abrasion Resistance, Oil Transfer, And Marine Fuel Feed Lines.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Bilge Pumping",
          "Marine Engine Lines",
          "Hydraulic Return Hose",
        ],
      },
      {
        title: "Brass Patta Patti",
        slug: "brass-patta-patti",
        image: brass_10,
        shortDescription: "Decorative And Engineering Brass Patta Patti Flats Offering Clean Edges, High Polishability, And Dimensional Stability.",
        description: "Decorative And Engineering Brass Patta Patti Flats Offering Clean Edges, High Polishability, And Dimensional Stability.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Flooring Inlays",
          "Furniture Detailing",
          "Elevator Door Edges",
        ],
      },
      {
        title: "Brass Perforated Sheets",
        slug: "brass-perforated-sheets",
        image: brass_11,
        shortDescription: "Decorative Perforated Brass Sheets Widely Specified For Speaker Grilles, Luxury Partitions, And Ventilation Panels.",
        description: "Decorative Perforated Brass Sheets Widely Specified For Speaker Grilles, Luxury Partitions, And Ventilation Panels.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Cabinet Grilles",
          "Lighting Diffusers",
          "Marine Ventilation",
        ],
      },
      {
        title: "Brass Pharma Fittings",
        slug: "brass-pharma-fittings",
        image: brass_12,
        shortDescription: "Precision Brass Clean-Line Fittings Manufactured For Medical Gas Handling, Vacuum Lines, And Lab Distribution Manifolds.",
        description: "Precision Brass Clean-Line Fittings Manufactured For Medical Gas Handling, Vacuum Lines, And Lab Distribution Manifolds.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Hospital Gas Outlets",
          "Vacuum Regulators",
          "Autoclave Piping",
        ],
      },
      {
        title: "Brass Pipes",
        slug: "brass-pipes",
        image: brass_13,
        shortDescription: "Heavy-Wall Brass Pipes Offering Exceptional Corrosion Resistance For Seawater Intake, Fuel Transfer, And Plumbing.",
        description: "Heavy-Wall Brass Pipes Offering Exceptional Corrosion Resistance For Seawater Intake, Fuel Transfer, And Plumbing.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Seawater Cooling",
          "Fire Protection Mains",
          "Sanitation Lines",
        ],
      },
      {
        title: "Brass Plates",
        slug: "brass-plates",
        image: brass_14,
        shortDescription: "Precision Rolled Brass Plates Delivering High Rigidity And Superb Resistance To Biofouling In Marine Structural Work.",
        description: "Precision Rolled Brass Plates Delivering High Rigidity And Superb Resistance To Biofouling In Marine Structural Work.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Tube Sheets",
          "Condenser Covers",
          "Shipboard Mounting Plates",
        ],
      },
      {
        title: "Brass Rings",
        slug: "brass-rings",
        image: brass_15,
        shortDescription: "Machined Brass Rings Suitable For Low-Friction Bearing Retainers, Marine Packing Glands, And Precision Decorative Spacers.",
        description: "Machined Brass Rings Suitable For Low-Friction Bearing Retainers, Marine Packing Glands, And Precision Decorative Spacers.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Marine Propeller Shaft Seals",
          "Valve Bushings",
          "Mechanical Gauges",
        ],
      },
      {
        title: "Brass Round Bars",
        slug: "brass-round-bars",
        image: brass_16,
        shortDescription: "Free-Machining Brass Round Bars Engineered For High-Speed CNC Turning Of Precision Fittings, Valves, And Fasteners.",
        description: "Free-Machining Brass Round Bars Engineered For High-Speed CNC Turning Of Precision Fittings, Valves, And Fasteners.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Plumbing Valve Stems",
          "Instrumentation Screws",
          "Lock Cylinders",
        ],
      },
      {
        title: "Brass Sheets",
        slug: "brass-sheets",
        image: brass_17,
        shortDescription: "Mirror And Satin Finish Brass Sheets Widely Utilized In Premium Interiors, Signage, Elevator Cabs, And Decorative Inlays.",
        description: "Mirror And Satin Finish Brass Sheets Widely Utilized In Premium Interiors, Signage, Elevator Cabs, And Decorative Inlays.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Nameplates",
          "Elevator Cladding",
          "Door Hardware",
          "Luxury Interiors",
        ],
      },
      {
        title: "Brass Strips",
        slug: "brass-strips",
        image: brass_18,
        shortDescription: "High-Tensile Precision Brass Strips Suitable For Electrical Terminals, Spring Contacts, And Radiator Tubes.",
        description: "High-Tensile Precision Brass Strips Suitable For Electrical Terminals, Spring Contacts, And Radiator Tubes.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Switch Contacts",
          "Terminals",
          "Lock Shims",
          "Musical Instruments",
        ],
      },
      {
        title: "Brass Tubes",
        slug: "brass-tubes",
        image: brass_19,
        shortDescription: "High-Precision Brass Tubes Ideal For Condensers, Heat Exchangers, Musical Instruments, And Fluid Instrumentation.",
        description: "High-Precision Brass Tubes Ideal For Condensers, Heat Exchangers, Musical Instruments, And Fluid Instrumentation.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Desalination Plants",
          "Marine Coolers",
          "Plumbing Sleeves",
        ],
      },
      {
        title: "Brass Wire Mesh",
        slug: "brass-wire-mesh",
        image: brass_20,
        shortDescription: "Corrosion-Resistant Woven Brass Wire Mesh Engineered For Liquid Filtration, Grain Sifting, And Architectural Partitions.",
        description: "Corrosion-Resistant Woven Brass Wire Mesh Engineered For Liquid Filtration, Grain Sifting, And Architectural Partitions.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "Laboratory Sieves",
          "Fuel Filtration",
          "Decorative Space Dividers",
        ],
      },
      {
        title: "Brass Wires",
        slug: "brass-wires",
        image: brass_21,
        shortDescription: "High-Tensile Brass Wires Specially Drawn For EDM Wire Cutting, Fastener Heading, Brushes, And Spring Manufacturing.",
        description: "High-Tensile Brass Wires Specially Drawn For EDM Wire Cutting, Fastener Heading, Brushes, And Spring Manufacturing.",
        properties: [
          "Outstanding Machinability",
          "Corrosion Resistant In Aqueous Media",
          "High Mechanical Strength",
          "Superior Aesthetic Finish",
        ],
        applications: [
          "EDM Wire Spark Machining",
          "Wire Brushes",
          "Fastener Cold Heading",
        ],
      },
    ],
  },
  {
    name: "Aluminium",
    slug: "aluminium",
    image: alum_14,
    icon: Layers,
    description:
      "Lightweight High-Strength Aluminium Products For Aerospace, Automotive, Marine, And Construction Industries.",
    overview:
      "Versatile Aluminium Pipes, Tubes, Sheets, Plates, Coils, Profiles, And Wire Mesh Offering Superb Strength-To-Weight Ratio.",
    highlight: [
      "Lightweight And Durable Construction",
      "Natural Atmospheric Corrosion Resistance",
      "High Strength-To-Weight Ratio And Thermal Efficiency",
    ],
    items: [
      {
        title: "Aluminium Angles & Channels",
        slug: "aluminium-angle-channels",
        image: alum_0,
        shortDescription: "Lightweight Structural Aluminium Angles And Channels Designed For Architectural Framing, Transport Vehicles, And Structural Support.",
        description: "Lightweight Structural Aluminium Angles And Channels Designed For Architectural Framing, Transport Vehicles, And Structural Support.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Framing Systems",
          "Aerospace Structures",
          "Curtain Walls",
        ],
      },
      {
        title: "Aluminium Buttweld Fittings",
        slug: "aluminium-buttweld-fittings",
        image: alum_1,
        shortDescription: "Precision Manufactured Aluminium Buttweld Fittings Offering Excellent Flow Dynamics And Lightweight Piping Connections.",
        description: "Precision Manufactured Aluminium Buttweld Fittings Offering Excellent Flow Dynamics And Lightweight Piping Connections.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Lightweight Industrial Lines",
          "Pneumatic Systems",
          "Automotive",
        ],
      },
      {
        title: "Aluminium Circles",
        slug: "aluminium-circles",
        image: alum_2,
        shortDescription: "Clean-Cut High-Strength Aluminium Circles Widely Used For Cookware Spinning, Lighting Reflectors, And Vessel Closures.",
        description: "Clean-Cut High-Strength Aluminium Circles Widely Used For Cookware Spinning, Lighting Reflectors, And Vessel Closures.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Reflectors",
          "Cookware",
          "Can Ends",
          "Decorative Caps",
        ],
      },
      {
        title: "Aluminium Coils",
        slug: "aluminium-coils",
        image: alum_3,
        shortDescription: "Lightweight Aluminium Slit Coils Featuring High Formability And Superior Surface Cleanliness For Industrial Processing.",
        description: "Lightweight Aluminium Slit Coils Featuring High Formability And Superior Surface Cleanliness For Industrial Processing.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "HVAC Fins",
          "Roofing Panels",
          "Vehicle Body Components",
        ],
      },
      {
        title: "Aluminium Dairy Fittings",
        slug: "aluminium-dairy-fittings",
        image: alum_4,
        shortDescription: "Lightweight Food-Grade Compatible Aluminium Fittings For Dry Bulk Processing, Pneumatic Conveying, And Process Assemblies.",
        description: "Lightweight Food-Grade Compatible Aluminium Fittings For Dry Bulk Processing, Pneumatic Conveying, And Process Assemblies.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Pneumatic Powder Transfer",
          "Dry Ingredients",
          "Packaging Lines",
        ],
      },
      {
        title: "Aluminium Dairy & Pharma Valves",
        slug: "aluminium-dairy-pharma-valves",
        image: alum_5,
        shortDescription: "Precision Lightweight Aluminium Valves Engineered For Bulk Pharmaceutical Material Handling And Clean Air Control.",
        description: "Precision Lightweight Aluminium Valves Engineered For Bulk Pharmaceutical Material Handling And Clean Air Control.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Clean Powder Transport",
          "Air Handling Units",
          "Cleanrooms",
        ],
      },
      {
        title: "Aluminium Fasteners",
        slug: "aluminium-fasteners",
        image: alum_6,
        shortDescription: "High-Strength Ultra-Light Aluminium Fasteners Designed For Aerospace, Electronics, And Marine Assemblies.",
        description: "High-Strength Ultra-Light Aluminium Fasteners Designed For Aerospace, Electronics, And Marine Assemblies.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Lightweight Aircraft Panels",
          "Drone Enclosures",
          "Solar Mounts",
        ],
      },
      {
        title: "Aluminium Flanges",
        slug: "aluminium-flanges",
        image: alum_7,
        shortDescription: "Lightweight Corrosion-Resistant Aluminium Flanges Engineered For Aerospace, Low-Pressure Fluid, And Structural Piping.",
        description: "Lightweight Corrosion-Resistant Aluminium Flanges Engineered For Aerospace, Low-Pressure Fluid, And Structural Piping.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Aircraft Fuel Lines",
          "Cryogenic Piping",
          "Water Purification",
        ],
      },
      {
        title: "Aluminium Forged Fittings",
        slug: "aluminium-forged-fittings",
        image: alum_8,
        shortDescription: "Precision Forged Aluminium Fittings Delivering Superior Fatigue Resistance In Critical Aerospace And Automotive Applications.",
        description: "Precision Forged Aluminium Fittings Delivering Superior Fatigue Resistance In Critical Aerospace And Automotive Applications.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Aerospace Fluid Controls",
          "Motorsports Hydraulics",
          "Cryogenics",
        ],
      },
      {
        title: "Aluminium Hose Pipes",
        slug: "aluminium-hose-pipe",
        image: alum_9,
        shortDescription: "Ultra-Lightweight Aluminium Flexible Ducting And Hoses For Air Exhaust, Engine Intake, And Pneumatic Ventilation Systems.",
        description: "Ultra-Lightweight Aluminium Flexible Ducting And Hoses For Air Exhaust, Engine Intake, And Pneumatic Ventilation Systems.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Turbo Air Ducts",
          "Industrial Dust Extraction",
          "HVAC Return",
        ],
      },
      {
        title: "Aluminium Patta Patti",
        slug: "aluminium-patta-patti",
        image: alum_10,
        shortDescription: "Extruded Aluminium Patta Patti Strips Delivering High Structural Straightness For Framing, Trims, And Architectural Inlays.",
        description: "Extruded Aluminium Patta Patti Strips Delivering High Structural Straightness For Framing, Trims, And Architectural Inlays.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Solar Frame Edge Trims",
          "Signage Borders",
          "Wall Partitions",
        ],
      },
      {
        title: "Aluminium Perforated Sheets",
        slug: "aluminium-perforated-sheets",
        image: alum_11,
        shortDescription: "Lightweight Perforated Aluminium Sheets Engineered For Sunshade Facades, Ceilings, And Industrial Sifting Screens.",
        description: "Lightweight Perforated Aluminium Sheets Engineered For Sunshade Facades, Ceilings, And Industrial Sifting Screens.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Building Facades",
          "Ceiling Tiles",
          "Bulk Grain Screening",
        ],
      },
      {
        title: "Aluminium Pharma Fittings",
        slug: "aluminium-pharma-fittings",
        image: alum_12,
        shortDescription: "Clean Anodized Aluminium Fittings Designed For Cleanroom Tooling, Dry Pharma Processing, And Diagnostic Equipment.",
        description: "Clean Anodized Aluminium Fittings Designed For Cleanroom Tooling, Dry Pharma Processing, And Diagnostic Equipment.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Cleanroom Pass-Throughs",
          "Tablet Press Ducting",
          "Lab Enclosures",
        ],
      },
      {
        title: "Aluminium Pipes",
        slug: "aluminium-pipes",
        image: alum_13,
        shortDescription: "Extruded Aluminium Seamless Pipes Engineered For Low-Weight High-Integrity Fluid Lines, Structural Rails, And Air Mains.",
        description: "Extruded Aluminium Seamless Pipes Engineered For Low-Weight High-Integrity Fluid Lines, Structural Rails, And Air Mains.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Compressed Air Loops",
          "Handrails",
          "Irrigation Pipelines",
        ],
      },
      {
        title: "Aluminium Plates",
        slug: "aluminium-plates",
        image: alum_14,
        shortDescription: "High-Strength Structural Aluminium Plates Engineered For Aerospace Ribs, Tooling Jigs, And Marine Hull Decks.",
        description: "High-Strength Structural Aluminium Plates Engineered For Aerospace Ribs, Tooling Jigs, And Marine Hull Decks.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Aircraft Wings",
          "Mold Tooling",
          "Marine Bulkheads",
          "Vehicle Chassis",
        ],
      },
      {
        title: "Aluminium Rings",
        slug: "aluminium-rings",
        image: alum_15,
        shortDescription: "Seamless Forged Aluminium Rings Engineered For Aerospace Flanges, Circular Manways, And Rocket Stage Couplings.",
        description: "Seamless Forged Aluminium Rings Engineered For Aerospace Flanges, Circular Manways, And Rocket Stage Couplings.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Aerospace Adapters",
          "Cryogenic Seals",
          "Rotating Ring Mounts",
        ],
      },
      {
        title: "Aluminium Round Bars",
        slug: "aluminium-round-bars",
        image: alum_16,
        shortDescription: "High-Strength Aluminium Round Bars Offering Excellent Machinability And Weldability For Aerospace And Mechanical Engineering.",
        description: "High-Strength Aluminium Round Bars Offering Excellent Machinability And Weldability For Aerospace And Mechanical Engineering.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Aircraft Bushings",
          "Hydraulic Pistons",
          "Robotic Arms",
          "Shafts",
        ],
      },
      {
        title: "Aluminium Sheets",
        slug: "aluminium-sheets",
        image: alum_17,
        shortDescription: "Lightweight Versatile Aluminium Sheets Offering Excellent Corrosion Resistance And Formability For Enclosures And Paneling.",
        description: "Lightweight Versatile Aluminium Sheets Offering Excellent Corrosion Resistance And Formability For Enclosures And Paneling.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Electronics Enclosures",
          "Transport Paneling",
          "Appliance Panels",
        ],
      },
      {
        title: "Aluminium Strips",
        slug: "aluminium-strips",
        image: alum_18,
        shortDescription: "Lightweight Slit Aluminium Strips Offering Superior Uniformity For Transformer Windings, Cable Wrapping, And Trim.",
        description: "Lightweight Slit Aluminium Strips Offering Superior Uniformity For Transformer Windings, Cable Wrapping, And Trim.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Transformer Foil Windings",
          "Lighting Louvers",
          "Automotive Trim",
        ],
      },
      {
        title: "Aluminium Tubes",
        slug: "aluminium-tubes",
        image: alum_19,
        shortDescription: "Lightweight Extruded Aluminium Precision Tubes Designed For Automotive Radiators, Structural Frameworks, And Pneumatics.",
        description: "Lightweight Extruded Aluminium Precision Tubes Designed For Automotive Radiators, Structural Frameworks, And Pneumatics.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Automotive Condensers",
          "Heat Dissipation Tubes",
          "Lightweight Frames",
        ],
      },
      {
        title: "Aluminium Wire Mesh",
        slug: "aluminium-wire-mesh",
        image: alum_20,
        shortDescription: "Lightweight Non-Rusting Aluminium Wire Mesh Used For Aerospace De-Icing, Insect Screens, And Industrial Filtration.",
        description: "Lightweight Non-Rusting Aluminium Wire Mesh Used For Aerospace De-Icing, Insect Screens, And Industrial Filtration.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Architectural Ceilings",
          "Air Filters",
          "Automotive Grilles",
        ],
      },
      {
        title: "Aluminium Wires",
        slug: "aluminium-wires",
        image: alum_21,
        shortDescription: "High-Strength Conductive Aluminium Wires Engineered For Overhead Power Lines, Tie Wires, And Electrical Windings.",
        description: "High-Strength Conductive Aluminium Wires Engineered For Overhead Power Lines, Tie Wires, And Electrical Windings.",
        properties: [
          "Lightweight High-Strength Ratio",
          "Natural Corrosion Resistance",
          "Excellent Thermal Transfer",
          "High Weldability And Formability",
        ],
        applications: [
          "Overhead Power Cables (ACSR)",
          "Electrical Bus Lines",
          "Fencing",
        ],
      },
    ],
  },
];

export default materials;
