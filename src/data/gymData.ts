export interface GymInfo {
  name: string;
  category: string;
  rating: number;
  reviewsCount: number;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    pincode: string;
    full: string;
  };
  phone: string;
  phoneRaw: string;
  phoneLink: string;
  hours: string;
  mapsQueryUrl: string;
}

export const GYM_DATA: GymInfo = {
  name: "Energy Fitness",
  category: "Gym / Fitness Center",
  rating: 4.9,
  reviewsCount: 178,
  address: {
    line1: "BT 35 Basement, Block BT",
    line2: "West Shalimar Bagh",
    area: "Shalimar Bagh",
    city: "Delhi",
    pincode: "110088",
    full: "BT 35 Basement, Block BT, West Shalimar Bagh, Shalimar Bagh, Delhi, 110088",
  },
  phone: "098911 71898",
  phoneRaw: "09891171898",
  phoneLink: "tel:09891171898",
  hours: "6:00 AM onwards",
  mapsQueryUrl: "https://www.google.com/maps/place/Energy+Fitness/@28.7042863,77.1573861,17z/data=!4m11!1m2!2m1!1snear+by+gym!3m7!1s0x390d01fbc69a7367:0x88b47a471f60b167!8m2!3d28.7042863!4d77.1573861!10e5!15sCgtuZWFyIGJ5IGd5bSIDkAEBWg0iC25lYXIgYnkgZ3ltkgEDZ3ltmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJTY0V0MWNrZDNFQUXgAQD6AQQIXRBJ!16s%2Fg%2F11kjjjbyvx",
};

export interface ProgramItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  intensity: "High" | "Moderate to High" | "All Levels";
}

export const PROGRAMS: ProgramItem[] = [
  {
    id: "strength",
    name: "Strength Training",
    tagline: "Compound Power & Progressive Overload",
    description: "Structured resistance protocols to build functional total-body strength, muscular endurance, and bulletproof joint stability.",
    features: ["Barbell compound lifts", "Core strengthening", "Form discipline"],
    intensity: "High",
  },
  {
    id: "weight",
    name: "Weight Training",
    tagline: "Hypertrophy & Physique Sculpting",
    description: "Extensive free weights and targeted selectorized machine stations to tone lean muscle, increase metabolic rate, and improve conditioning.",
    features: ["Full dumbbell selection", "Targeted isolation stations", "Cable systems"],
    intensity: "High",
  },
  {
    id: "yoga",
    name: "Power Yoga",
    tagline: "Dynamic Flow, Balance & Mobility",
    description: "An invigorating flow sequence harmonizing breath control, deep flexibility, active core stability, and post-workout mental recovery.",
    features: ["Mobility & flexibility", "Core control", "Mindful stamina"],
    intensity: "Moderate to High",
  },
  {
    id: "zumba",
    name: "Zumba",
    tagline: "High-Energy Rhythm & Calorie Burn",
    description: "Fast-paced, music-driven cardiovascular dance workouts that turn intense cardio conditioning into an exhilarating community session.",
    features: ["Cardio conditioning", "Rhythmic coordination", "Full-body tone"],
    intensity: "High",
  },
  {
    id: "aerobics",
    name: "Aerobics",
    tagline: "Endurance & Agility Training",
    description: "Choreographed rhythmic cardiovascular exercises designed to elevate stamina, strengthen heart and lungs, and boost all-day vitality.",
    features: ["Aerobic stamina", "Agility & footwork", "Cardiovascular health"],
    intensity: "Moderate to High",
  },
  {
    id: "personal",
    name: "Personal Training",
    tagline: "1-on-1 Guidance & Custom Support",
    description: "Individual attention tailored to your exact fitness level, target goals, and technique correction to accelerate sustainable results.",
    features: ["Dedicated trainer oversight", "Personalized workout plans", "Daily encouragement"],
    intensity: "All Levels",
  },
];

export interface FacilityItem {
  id: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
}

export const FACILITIES: FacilityItem[] = [
  {
    id: "strength-eq",
    name: "Strength Equipment",
    category: "Heavy Resistance",
    description: "Heavy-duty power racks, Olympic barbells, and durable plates engineered for progressive strength building and safe lifting.",
    highlights: ["Olympic bars & plates", "Power & squat racks", "Reinforced safety bars"],
  },
  {
    id: "weight-area",
    name: "Weight Training Area",
    category: "Free Weights & Machines",
    description: "Spacious free-weight zone equipped with full dumbbell pairs, adjustable benches, and multi-angle cable stations.",
    highlights: ["Wide range of dumbbells", "Multi-angle benches", "Smooth cable mechanics"],
  },
  {
    id: "cardio-area",
    name: "Cardio Area",
    category: "Endurance & Conditioning",
    description: "Cardiovascular stations for warm-ups, endurance building, and stamina development before or after strength routines.",
    highlights: ["Treadmills & bikes", "Heart-rate monitoring", "Smooth warm-up stations"],
  },
  {
    id: "functional-zone",
    name: "Functional Training",
    category: "Movement & Agility",
    description: "Open floor section dedicated to bodyweight training, agility work, kettlebells, and dynamic core routines.",
    highlights: ["Open movement turf", "Kettlebells & bands", "Core stability zone"],
  },
  {
    id: "yoga-space",
    name: "Yoga Space",
    category: "Mobility & Recovery",
    description: "Dedicated studio area with non-slip flooring and balanced lighting for Power Yoga, stretching, and mobility routines.",
    highlights: ["Comfortable yoga mats", "Calm studio environment", "Mobility props"],
  },
  {
    id: "group-fitness",
    name: "Group Fitness Area",
    category: "Group Studio",
    description: "Roomy studio floor with full-length wall mirrors for energetic group Aerobics and Zumba classes.",
    highlights: ["Full-length mirrors", "Dynamic sound system", "Spacious wooden-style floor"],
  },
];

export interface ReviewItem {
  id: string;
  quote: string;
  theme: string;
  tag: string;
  rating: number;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    quote: "Personal attention and guidance every single day.",
    theme: "Personal Attention & Daily Support",
    tag: "Verified Member Review",
    rating: 5,
  },
  {
    id: "rev-2",
    quote: "Great gym with a welcoming vibe. It’s always clean, the equipment is excellent, and the staff is very helpful.",
    theme: "Cleanliness, Equipment & Helpful Staff",
    tag: "Verified Member Review",
    rating: 5,
  },
  {
    id: "rev-3",
    quote: "Friendly and motivating atmosphere with genuine personal attention from trainers on every workout.",
    theme: "Motivating Atmosphere & Guidance",
    tag: "Verified Member Review",
    rating: 5,
  },
];
