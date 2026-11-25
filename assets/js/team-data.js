/**
 * CoAbility - Team Member Directory Data (Static Fallback)
 */

const COABILITY_TEAM = [
  {
    id: "derek-nguyen",
    name: "Derek Nguyen",
    role: "Co-Founder & Engineering",
    initials: "DN",
    avatarColor: "from-blue-600 to-cyan-500",
    image: null,
    shortTeaser: "Focused on human-centered engineering and functional 3D-printed assistive mechanisms.",
    bio: "Passionate about using engineering and additive manufacturing to remove everyday barriers. Dedicated to designing practical, durable, and customized 3D-printed devices that empower individuals and children with disabilities to navigate daily life with greater independence.",
    focusTags: ["3D Prototyping", "Assistive Tech", "Mechanical Design"],
    linkedin: "https://www.linkedin.com/"
  },
  {
    id: "hesham-katabi",
    name: "Hesham Katabi",
    role: "Co-Founder & Strategy",
    initials: "HK",
    avatarColor: "from-cyan-600 to-sky-400",
    image: null,
    shortTeaser: "Driving organizational vision, accessibility standards, and community co-design.",
    bio: "Committed to bridging technology innovation with human empathy. Leads CoAbility's organizational initiatives, ensuring that every assistive tool is developed alongside families and therapists to deliver direct, meaningful, and accessible quality-of-life improvements.",
    focusTags: ["Product Strategy", "Community Co-Design", "Accessibility"],
    linkedin: "https://www.linkedin.com/"
  },
  {
    id: "jonathan-chan-tang",
    name: "Jonathan Chan-Tang",
    role: "Design & Prototyping Lead",
    initials: "JC",
    avatarColor: "from-blue-700 to-indigo-500",
    image: null,
    shortTeaser: "Specializing in ergonomic modeling, material testing, and rapid iteration.",
    bio: "Brings a focus on precision CAD modeling and tactile testing. Works to optimize 3D print geometries for strength, lightweight comfort, and ergonomic grip across a variety of assistive attachments.",
    focusTags: ["CAD Modeling", "Additive Manufacturing", "Ergonomics"],
    linkedin: "https://www.linkedin.com/"
  },
  {
    id: "kelly-nguyen",
    name: "Kelly Nguyen",
    role: "Community & Clinical Outreach",
    initials: "KN",
    avatarColor: "from-sky-500 to-teal-400",
    image: null,
    shortTeaser: "Connecting with families, clinics, and educators to identify daily accessibility needs.",
    bio: "Dedicated to user advocacy and community engagement. Coordinates feedback loops between users, occupational therapists, and makers, helping identify real-world daily challenges that CoAbility can solve.",
    focusTags: ["Clinical Outreach", "User Advocacy", "Accessibility Testing"],
    linkedin: "https://www.linkedin.com/"
  },
  {
    id: "colin-sarabosing",
    name: "Colin Sarabosing",
    role: "Fabrication & Hardware Lead",
    initials: "CS",
    avatarColor: "from-blue-600 to-indigo-600",
    image: null,
    shortTeaser: "Managing printer fleet operations, print quality, and material durability.",
    bio: "Passionate about maker technology and 3D printing workflows. Ensures each assistive attachment is printed to rigorous quality, safety, and durability standards using skin-safe, high-impact polymers.",
    focusTags: ["FDM / Resin Printing", "Material Science", "Hardware"],
    linkedin: ""
  },
  {
    id: "emily-nong",
    name: "Emily Nong",
    role: "Creative Design & Experience",
    initials: "EN",
    avatarColor: "from-cyan-500 to-emerald-400",
    image: null,
    shortTeaser: "Creating approachable, empowering, and destigmatizing assistive aesthetics.",
    bio: "Focused on ensuring assistive devices are not just functional, but vibrant, appealing, and confidence-boosting. Champions inclusive design so that users—especially children—feel proud of their daily tools.",
    focusTags: ["Inclusive Design", "User Experience", "Aesthetics"],
    linkedin: ""
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COABILITY_TEAM };
}
