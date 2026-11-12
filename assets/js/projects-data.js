/**
 * CoAbility - Assistive Device Projects & Concepts Data
 * 
 * Instructions:
 * To add, edit, or remove project showcases, simply update this array.
 * Note: Example devices are clearly designated as concept designs / prototypes in progress.
 */

const COABILITY_PROJECTS = [
  {
    id: "zipper-pull-assist",
    title: "Adaptive Zipper Pull Attachment",
    category: "Daily Living",
    status: "Concept & Prototyping",
    statusType: "prototype", // 'concept' | 'prototype' | 'testing'
    shortDesc: "An ergonomic loop attachment that clips onto standard jacket, hoodie, and backpack zippers to enable effortless one-finger or whole-hand pulling.",
    challenge: "Standard metal zipper pull tabs are small, thin, and difficult to grasp for children and adults with limited pinch grip, tremor, arthritis, or muscle weakness.",
    solution: "A customized 3D-printed curved ring with rounded edges and high-friction grip grooves. It snaps securely onto existing zipper sliders without damaging garments, allowing users to pull up or down using forearm, palm, or single-finger motion.",
    techSpecs: {
      material: "PETG / PLA+ (Durable & Washable)",
      printTime: "~45 minutes",
      customization: "Custom inner diameter, finger ring size, and high-visibility colors"
    },
    iconType: "zipper"
  },
  {
    id: "ergonomic-utensil-grip",
    title: "Universal Contoured Utensil & Pen Grip",
    category: "Dining & Fine Motor",
    status: "Concept & Prototyping",
    statusType: "prototype",
    shortDesc: "A contoured palm-stabilizing sleeve that accommodates standard dining forks, spoons, pens, and paintbrushes.",
    challenge: "Holding narrow cylindrical objects like dining cutlery or pens requires sustained pinch force, leading to hand fatigue, cramping, and loss of control.",
    solution: "An ergonomically molded handle with an internal multi-size elastomer retention sleeve. It distributes grip pressure across the broader palm and metacarpal joints, restoring independence at mealtime and in schoolwork.",
    techSpecs: {
      material: "TPU (Flexible, Skin-safe) / PLA Core",
      printTime: "~1 hour 30 mins",
      customization: "Left or right-handed contours, pediatric and adult palm sizing"
    },
    iconType: "utensil"
  },
  {
    id: "one-handed-opener",
    title: "One-Handed Leverage Bottle & Jar Opener",
    category: "Kitchen Independence",
    status: "Exploratory Design",
    statusType: "concept",
    shortDesc: "An under-cabinet or countertop gripping wedge that holds bottles and twist caps firmly for single-handed opening.",
    challenge: "Opening twist caps and sealed bottles typically demands two hands—one to anchor the base and another to twist the lid—posing a barrier for individuals with hemiplegia or limb differences.",
    solution: "A tapered, ribbed V-groove mount that grips lids securely through friction when pushed forward. The user can open containers with one hand using minimal rotational force.",
    techSpecs: {
      material: "Tough PETG / PLA with TPU Grip Liners",
      printTime: "~2 hours 15 mins",
      customization: "Mountable with heavy-duty non-destructive adhesive or screws"
    },
    iconType: "opener"
  },
  {
    id: "key-turner-assist",
    title: "Ergonomic High-Torque Key Turner",
    category: "Home Accessibility",
    status: "Exploratory Design",
    statusType: "concept",
    shortDesc: "An enlarged lever handle housing house keys to multiply torque and eliminate painful finger pinching.",
    challenge: "Small brass keys require precise alignment and significant twisting torque in stiff deadbolts, presenting challenges for individuals with rheumatoid arthritis or limited wrist rotation.",
    solution: "An aerodynamic dual-lobe lever casing that clips over standard key heads. The extended handle acts as a lever arm, reducing necessary twisting force by up to 70%.",
    techSpecs: {
      material: "High-impact PLA / Recycled Filament",
      printTime: "~50 minutes",
      customization: "Color-coded for easy key identification; tactile braille/ridge markings"
    },
    iconType: "key"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COABILITY_PROJECTS };
}
