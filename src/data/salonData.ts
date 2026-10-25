export interface ServiceItem {
  id: string;
  name: string;
  category: 'Hair & Braids' | 'Nails & Care' | 'Spa & Massage' | 'Waxing & Threading' | 'Beauty & Glam';
  priceAED: number;
  duration: string;
  description: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  timeAgo: string;
  review: string;
  service: string;
  isMain?: boolean;
}

export const SALON_INFO = {
  name: "Silky Divas Beauty Salon",
  logoImage: "/assets/aistudio/IMG_20261025_093435_700_2d1d1ac9.png",
  tagline: "Consistently Reliable Hair Styling & Flawless Care in Deira",
  whatsappNumber: "+971551618271",
  whatsappDisplay: "+971 55 161 8271",
  whatsappUrl: "https://wa.me/971551618271",
  address: "18 23rd St - Deira Al Rigga - Dubai, Near Al Ghurair Centre, Union Metro, Dubai Hospital",
  shortAddress: "18 23rd St, Deira Al Rigga, Dubai (Near Union Metro)",
  hours: "10:00 AM - 10:00 PM (Daily)",
  paymentNote: "Cash only",
  amenities: [
    "Appointments recommended",
    "Cash only",
    "Customer toilet available",
    "Near Union Metro & Dubai Hospital"
  ],
  googleMapsUrl: "https://maps.google.com/?q=18+23rd+St+Deira+Al+Rigga+Dubai",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.267674174351!2d55.3204859!3d25.2677843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cd5e2c7ab9f%3A0x6b4c81dd89aa3690!2sDeira%20-%20Al%20Rigga%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
};

// Exactly the 22 services requested by the user
export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "waxing",
    name: "Waxing",
    category: "Waxing & Threading",
    priceAED: 45,
    duration: "25 mins",
    description: "Gentle, hygienic waxing using premium warm wax formulated for sensitive skin leaving silky smooth finish.",
    popular: true
  },
  {
    id: "eyebrow-threading",
    name: "Eyebrow threading",
    category: "Waxing & Threading",
    priceAED: 20,
    duration: "15 mins",
    description: "Crisp, precise eyebrow contouring by patient specialists to enhance your natural facial architecture.",
    popular: true
  },
  {
    id: "body-waxing",
    name: "Body waxing",
    category: "Waxing & Threading",
    priceAED: 140,
    duration: "60 mins",
    description: "Comprehensive full body waxing treatment in a clean, hygienic private suite with soothing aftercare.",
    popular: false
  },
  {
    id: "pedicure",
    name: "Pedicure",
    category: "Nails & Care",
    priceAED: 75,
    duration: "45 mins",
    description: "Relaxing foot soak, scrub exfoliation, cuticle care, nail shaping, light massage, and flawless polish.",
    popular: true
  },
  {
    id: "hairstyling",
    name: "Hairstyling",
    category: "Hair & Braids",
    priceAED: 85,
    duration: "45 mins",
    description: "Professional blowouts, heat styling, glamour curls, or elegant updos tailored to your face shape and occasion.",
    popular: true
  },
  {
    id: "braids",
    name: "Braids",
    category: "Hair & Braids",
    priceAED: 160,
    duration: "120 - 180 mins",
    description: "Expert protective braiding crafted with patience and precision. Light tension, neat partings, and long-lasting hold.",
    popular: true
  },
  {
    id: "make-up-services",
    name: "Make-up services",
    category: "Beauty & Glam",
    priceAED: 190,
    duration: "60 mins",
    description: "Radiant party, soft glam, or bridal makeup customized with high-pigment, heat-resistant cosmetic formulations.",
    popular: false
  },
  {
    id: "manicure",
    name: "Manicure",
    category: "Nails & Care",
    priceAED: 55,
    duration: "35 mins",
    description: "Nail trimming, cuticle perfection, gentle hand massage, and long-lasting regular or strengthening polish.",
    popular: true
  },
  {
    id: "hair-extensions",
    name: "Hair extensions",
    category: "Hair & Braids",
    priceAED: 220,
    duration: "90 - 150 mins",
    description: "Seamless hair extension installation, blending natural density and length with top-tier professional technique.",
    popular: false
  },
  {
    id: "acrylics-nail-extension",
    name: "Acrylics nail extension",
    category: "Nails & Care",
    priceAED: 170,
    duration: "75 mins",
    description: "Durable, sculpted acrylic extensions with your choice of length, shape (coffin, almond, square), and design.",
    popular: true
  },
  {
    id: "african-and-continental-hair",
    name: "African and continental hair",
    category: "Hair & Braids",
    priceAED: 150,
    duration: "90 mins",
    description: "Specialized care for textured, afro, relaxed, and multicultural hair textures by experienced, gentle stylists.",
    popular: true
  },
  {
    id: "body-massage",
    name: "Body massage",
    category: "Spa & Massage",
    priceAED: 160,
    duration: "60 mins",
    description: "Deeply therapeutic full-body relaxation massage to soothe tension, relieve stress, and revitalize circulation.",
    popular: true
  },
  {
    id: "crochet",
    name: "Crochet",
    category: "Hair & Braids",
    priceAED: 160,
    duration: "90 - 120 mins",
    description: "Flawless crochet braids and curls installation on protective cornrow base for lightweight, voluminous glam.",
    popular: false
  },
  {
    id: "eyebrow-coloring",
    name: "Eyebrow coloring",
    category: "Waxing & Threading",
    priceAED: 40,
    duration: "20 mins",
    description: "Custom tinting to define and darken light brows, creating a fuller, sharper and natural look.",
    popular: false
  },
  {
    id: "facials",
    name: "Facials",
    category: "Spa & Massage",
    priceAED: 130,
    duration: "50 mins",
    description: "Deep cleansing, gentle steam extraction, customized hydrating mask, and lymphatic facial massage for radiant glow.",
    popular: true
  },
  {
    id: "gel-nail-extension",
    name: "Gel nail extension",
    category: "Nails & Care",
    priceAED: 150,
    duration: "70 mins",
    description: "Lightweight, crystal-clear UV builder gel nail extensions providing natural flexibility and mirror shine.",
    popular: true
  },
  {
    id: "ghana-lines",
    name: "Ghana Lines",
    category: "Hair & Braids",
    priceAED: 140,
    duration: "90 - 150 mins",
    description: "Traditional feed-in Ghana cornrows laid flat and sleek with crisp partings. Consistent, reliable, and neat.",
    popular: true
  },
  {
    id: "hair-coloring",
    name: "Hair coloring",
    category: "Hair & Braids",
    priceAED: 160,
    duration: "75 mins",
    description: "Vibrant rich hues, root touch-ups, highlights, or all-over tones enriched with nourishing conditioning agents.",
    popular: false
  },
  {
    id: "head-massage",
    name: "Head massage",
    category: "Spa & Massage",
    priceAED: 65,
    duration: "30 mins",
    description: "Invigorating scalp acupressure and warm botanical oil massage to relieve headaches and stimulate hair follicles.",
    popular: true
  },
  {
    id: "keratin",
    name: "Keratin",
    category: "Hair & Braids",
    priceAED: 260,
    duration: "120 - 180 mins",
    description: "Intense smoothing keratin treatment eliminating frizz, infusing moisture, and sealing incredible silky gloss.",
    popular: true
  },
  {
    id: "rebounding",
    name: "Rebounding",
    category: "Hair & Braids",
    priceAED: 290,
    duration: "150 - 210 mins",
    description: "Permanent thermal hair straightening treatment delivering bone-straight, sleek, pin-flat results with silky softness.",
    popular: false
  },
  {
    id: "twisting",
    name: "Twisting",
    category: "Hair & Braids",
    priceAED: 150,
    duration: "90 - 150 mins",
    description: "Senegalese twists, passion twists, or Marley twists done with gentle tension to safeguard your hairline.",
    popular: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "lycia-padey",
    name: "Lycia Padey",
    rating: 5,
    timeAgo: "Verified Review · a year ago",
    review: "It's already been a few months since I discovered this salon and I've never been disappointed with my hairstyles. The staff are very pleasant and patient (even though I am very picky about my hair haha). They'll do everything to make you feel comfortable. I don't plan to change any time soon. I 100% recommend !",
    service: "Braids",
    isMain: true
  },
  {
    id: "amina-k",
    name: "Amina K.",
    rating: 5,
    timeAgo: "Verified Client · 2 months ago",
    review: "Consistently reliable hair styling. The Ghana lines and twist styles last for weeks without tension. The stylists take their time and genuinely care about natural hair health.",
    service: "Ghana Lines & Twisting"
  },
  {
    id: "fatima-r",
    name: "Fatima R.",
    rating: 5,
    timeAgo: "Verified Client · 3 months ago",
    review: "Got acrylic nail extensions and pedicure before my birthday celebration. Extremely neat cuticles and gorgeous finish. The team is so pleasant and accommodating.",
    service: "Acrylics Nail Extension & Pedicure"
  },
  {
    id: "chidinma-o",
    name: "Chidinma O.",
    rating: 5,
    timeAgo: "Verified Client · 5 months ago",
    review: "Finding a salon in Deira near Union Metro that handles authentic African and continental hair this effortlessly is a breath of fresh air. Clean suite, easy WhatsApp booking, and cash payments.",
    service: "African & Continental Hair"
  }
];

export const GALLERY_ITEMS = [
  {
    title: "Signature Braids & Ghana Lines",
    category: "Hair & Braids",
    image: "/src/assets/images/salon_braids_ghana_lines_1792901713057.jpg",
    alt: "Intricate African braids and Ghana lines hair styling at Silky Divas"
  },
  {
    title: "Acrylics & Gel Extensions",
    category: "Nails & Care",
    image: "/src/assets/images/salon_acrylic_nails_1792901713957.jpg",
    alt: "Sculpted acrylic nails with delicate gold and lavender accents"
  },
  {
    title: "Hydrating Facial & Head Massage",
    category: "Spa & Massage",
    image: "/src/assets/images/salon_facial_massage_1792901714522.jpg",
    alt: "Relaxing aesthetic facial and head massage therapy session"
  },
  {
    title: "Silky Rebounding & Hair Therapy",
    category: "Hair & Styling",
    image: "/src/assets/images/salon_hair_styling_silky_1792901714317.jpg",
    alt: "Silky smooth rebounded hair with brilliant shine and volume"
  },
  {
    title: "Luxury Salon Atmosphere",
    category: "Signature Experience",
    image: "/src/assets/images/hero_luxury_beauty_1792901712647.jpg",
    alt: "Silky Divas Beauty Salon royal purple luxury interior and expert stylist work"
  },
  {
    title: "Official Salon Identity",
    category: "Deira Al Rigga Dubai",
    image: "/assets/aistudio/IMG_20261025_093435_700_2d1d1ac9.png",
    alt: "Silky Divas Beauty Salon brand mark and emblem in royal purple"
  }
];

export const FEATURED_CARDS = [
  {
    title: "Braids & Protective Styling",
    subtitle: "Ghana Lines · Box Braids · Twists · Crochet",
    image: "/src/assets/images/salon_braids_ghana_lines_1792901713057.jpg",
    priceFrom: "From AED 130",
    serviceIds: ["braids", "ghana-lines", "twisting", "crochet"]
  },
  {
    title: "Luxury Nails & Extensions",
    subtitle: "Acrylics · UV Gel · Classic Pedicure · Manicure",
    image: "/src/assets/images/salon_acrylic_nails_1792901713957.jpg",
    priceFrom: "From AED 50",
    serviceIds: ["acrylics-nail-extension", "gel-nail-extension", "pedicure", "manicure"]
  },
  {
    title: "Rebounding, Keratin & Color",
    subtitle: "Thermal Straightening · Silky Keratin · Blowouts",
    image: "/src/assets/images/salon_hair_styling_silky_1792901714317.jpg",
    priceFrom: "From AED 85",
    serviceIds: ["keratin", "rebounding", "hair-coloring", "hairstyling"]
  },
  {
    title: "Spa Facials & Massages",
    subtitle: "Glow Facial · Head Acupressure · Body Massage",
    image: "/src/assets/images/salon_facial_massage_1792901714522.jpg",
    priceFrom: "From AED 60",
    serviceIds: ["facials", "body-massage", "head-massage"]
  }
];
