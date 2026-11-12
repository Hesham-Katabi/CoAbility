/**
 * CoAbility - Team Member Directory Data
 * 
 * Instructions:
 * To add, edit, or remove team members, simply update this array.
 * Each member requires:
 * - id: unique identifier
 * - name: Full name (placeholder until provided)
 * - role: Organization position or role
 * - bio: Short biography
 * - image: Path to photo or null for default avatar
 * - linkedin: (optional) URL to LinkedIn profile or ""
 * - email: (optional) Contact email or ""
 */

const COABILITY_TEAM = [
  {
    id: "member-1",
    name: "Founder & Executive Director",
    role: "Leadership & Strategy",
    isPlaceholder: true,
    bio: "Dedicated to bridging mechanical engineering, accessible design, and community empathy to develop practical, personalized 3D-printed tools that foster independence.",
    image: null,
    avatarColor: "from-blue-600 to-cyan-500",
    initials: "FD",
    linkedin: "https://www.linkedin.com/",
    email: ""
  },
  {
    id: "member-2",
    name: "Lead Design & Mechanical Engineer",
    role: "3D CAD & Prototyping",
    isPlaceholder: true,
    bio: "Focuses on iterative CAD modeling, parametric design, and rapid additive manufacturing to produce durable, ergonomic, and custom-fit assistive devices.",
    image: null,
    avatarColor: "from-cyan-600 to-sky-400",
    initials: "ME",
    linkedin: "https://www.linkedin.com/",
    email: ""
  },
  {
    id: "member-3",
    name: "Occupational Therapy Advisor",
    role: "Clinical & Accessibility Consultation",
    isPlaceholder: true,
    bio: "Guides human-centered ergonomics and biomechanics, ensuring each 3D-printed attachment genuinely meets individual dexterity needs and physical safety requirements.",
    image: null,
    avatarColor: "from-blue-700 to-indigo-500",
    initials: "OT",
    linkedin: "https://www.linkedin.com/",
    email: ""
  },
  {
    id: "member-4",
    name: "Community & Volunteer Coordinator",
    role: "Outreach & Maker Network",
    isPlaceholder: true,
    bio: "Connects individuals, families, educators, and local maker spaces with CoAbility's open-source assistive device programs and volunteer initiatives.",
    image: null,
    avatarColor: "from-sky-500 to-teal-400",
    initials: "CC",
    linkedin: "https://www.linkedin.com/",
    email: ""
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COABILITY_TEAM };
}
