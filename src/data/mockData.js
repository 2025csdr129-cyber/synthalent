// Synthalent Mock Data Store

export const INITIAL_CREATORS = [
  {
    id: "creator-1",
    name: "Elena Vance",
    handle: "@elenavance_ai",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    roleTitle: "Cinematic AI Director & VFX Artist",
    location: "Berlin / Remote",
    rating: 4.98,
    reviewsCount: 42,
    ratePerHour: "$110/hr",
    startingRate: "$950 / reel",
    turnaround: "48-72 hrs",
    verifiedBadges: ["AI Workflow Verified", "Commercial Safe", "Top 1% Talent"],
    specializations: ["AI Filmmaking", "Cinematic Teasers", "Luxury Brand Films"],
    contentType: "Cinematic Film",
    tools: ["Runway Gen-3", "Midjourney v6", "DaVinci Resolve", "Premiere", "Magnific AI"],
    bio: "Ex-commercial cinematographer merging generative video diffusion with high-end color science. Specializing in anamorphic-look luxury, automotive, and conceptual cinematic narratives.",
    pipeline: [
      { step: "1. Prompt & Direction", desc: "Midjourney v6.1 custom LoRA style anchoring + prompt typography" },
      { step: "2. Motion Synthesis", desc: "Runway Gen-3 Alpha camera motions (jib, crane, pan) with precise seed control" },
      { step: "3. Spatial Upscaling", desc: "Magnific AI 4K latent detail recovery without artifacting" },
      { step: "4. Color & Sound", desc: "DaVinci Resolve ACES color pipeline, custom Foley & ElevenLabs narration" }
    ],
    sampleClients: ["Balenciaga Spec", "Porsche Neo-Concept", "Vogue Arabia Feature"],
    featuredReel: {
      title: "Oasis of Chromium",
      aspectRatio: "16:9",
      duration: "0:38",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      type: "Cinematic Film",
      tags: ["Anamorphic", "Sci-Fi", "Luxury Fashion"]
    },
    portfolioItems: [
      {
        id: "p-1",
        title: "Oasis of Chromium",
        type: "Cinematic Film",
        aspectRatio: "16:9",
        duration: "0:38",
        views: "18.4K",
        likes: "2.3K",
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Cinematic 35mm film shot of liquid mercury drapery flowing in wind across sand dunes at golden hour, anamorphic lens flare, Kodak Vision3 500T",
        toolsUsed: ["Runway Gen-3", "Midjourney v6", "DaVinci Resolve"],
        workflowNote: "Dual-prompt camera control in Gen-3 with custom optical flow tracking in After Effects."
      },
      {
        id: "p-2",
        title: "Aethelgard: The Chrono Watch",
        type: "Cinematic Film",
        aspectRatio: "16:9",
        duration: "0:28",
        views: "12.1K",
        likes: "1.8K",
        thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Macro exploded view of watch gears floating in gravitational suspension, micro-reflections, obsidian background, photorealistic 8k",
        toolsUsed: ["Midjourney v6", "ComfyUI", "Premiere"],
        workflowNote: "Frame-by-frame depth map conditioning using ComfyUI DepthAnything v2."
      },
      {
        id: "p-3",
        title: "Cybernetic Botanicals",
        type: "Social Reel",
        aspectRatio: "9:16",
        duration: "0:15",
        views: "34.2K",
        likes: "4.9K",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Bioluminescent glass flowers blooming with fiber-optic veins, neon mist, macro slow motion vertical 9:16",
        toolsUsed: ["Runway Gen-3", "Luma Dream Machine", "After Effects"],
        workflowNote: "Keyframe interpolation for seamless 15s Instagram Reel loop."
      }
    ]
  },
  {
    id: "creator-2",
    name: "Marcus Chen",
    handle: "@marcuschen_3d",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    roleTitle: "3D Motion Designer & Social Reel Specialist",
    location: "Tokyo / Remote",
    rating: 4.95,
    reviewsCount: 58,
    ratePerHour: "$95/hr",
    startingRate: "$650 / reel",
    turnaround: "24-48 hrs",
    verifiedBadges: ["AI Workflow Verified", "Commercial Safe", "Fast Deliveries"],
    specializations: ["Social Reels", "Motion Graphics", "3D Product Renders"],
    contentType: "Social Reel",
    tools: ["Blender", "Runway Gen-3", "After Effects", "ComfyUI", "Premiere"],
    bio: "Pioneering hybrid 3D + Generative AI motion workflows. I turn rough brand concepts into hyper-converting 9:16 TikTok and Instagram reels with punchy sound design and visual hooks.",
    pipeline: [
      { step: "1. 3D Blocking & Camera", desc: "Blender geometric pass for exact camera angles & brand asset positioning" },
      { step: "2. Neural Style Transfer", desc: "ComfyUI ControlNet OpenPose & Tile for photorealistic material replacement" },
      { step: "3. Dynamic Physics", desc: "Runway Gen-3 particle fluid simulation extensions" },
      { step: "4. Viral Hook Edit", desc: "After Effects typographic kinetic overlays + trending sound syncing" }
    ],
    sampleClients: ["Nike Spec Concept", "Ritual Matcha", "Kinto Japan"],
    featuredReel: {
      title: "Zenith Sneaker Morph",
      aspectRatio: "9:16",
      duration: "0:18",
      thumbnail: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
      type: "Social Reel",
      tags: ["Viral Hook", "Streetwear", "9:16 Vertical"]
    },
    portfolioItems: [
      {
        id: "p-4",
        title: "Zenith Sneaker Morph",
        type: "Social Reel",
        aspectRatio: "9:16",
        duration: "0:18",
        views: "92.5K",
        likes: "11.2K",
        thumbnail: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Futuristic zero-gravity sneaker materializing from liquid titanium drops onto neon runway, snappy camera whip zoom",
        toolsUsed: ["Blender", "Runway Gen-3", "After Effects"],
        workflowNote: "Blender camera export into Runway camera trajectory controls."
      },
      {
        id: "p-5",
        title: "Ceremonial Matcha Pour",
        type: "Social Reel",
        aspectRatio: "9:16",
        duration: "0:14",
        views: "48.1K",
        likes: "5.7K",
        thumbnail: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Velvety emerald matcha whisking in artisan ceramic bowl, macro froth physics, natural morning sunlight",
        toolsUsed: ["Midjourney v6", "Luma Dream Machine", "Premiere"],
        workflowNote: "High-contrast lighting pass with sound design mixed at -14 LUFS."
      },
      {
        id: "p-6",
        title: "Holographic Energy Drink",
        type: "Social Reel",
        aspectRatio: "9:16",
        duration: "0:20",
        views: "61.3K",
        likes: "7.4K",
        thumbnail: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Frosty condensation can bursting through glacial ice shards, electric citrus vapor trails, 9:16",
        toolsUsed: ["ComfyUI", "Runway Gen-3", "After Effects"],
        workflowNote: "Dual LoRA setup trained on custom can 3D renders."
      }
    ]
  },
  {
    id: "creator-3",
    name: "Sofia Al-Mansoor",
    handle: "@sofia.mansoor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    roleTitle: "Generative Art Director & Brand Identity Designer",
    location: "Milan / London",
    rating: 5.0,
    reviewsCount: 36,
    ratePerHour: "$130/hr",
    startingRate: "$1,200 / package",
    turnaround: "3-5 days",
    verifiedBadges: ["AI Workflow Verified", "Commercial Safe", "Top 1% Talent"],
    specializations: ["Brand Identity", "Graphic Design", "3D Product Renders"],
    contentType: "Graphic Design",
    tools: ["Midjourney v6", "ComfyUI", "Adobe Illustrator", "Photoshop", "Magnific AI"],
    bio: "Milan fashion-week background turned AI brand world builder. I craft complete visual identities, editorial key art, and generative product packaging compliant with global IP rights.",
    pipeline: [
      { step: "1. Brand Moodboard", desc: "Bespoke style guides & palette quantization in Illustrator" },
      { step: "2. Custom Flux/SD LoRA", desc: "Private training on client vector logos & verified brand guidelines" },
      { step: "3. Hi-Res Generation", desc: "Midjourney v6 raw mode + ComfyUI high-res fix" },
      { step: "4. Vectorization & Print Prep", desc: "C2PA signed credentials + print-ready 300DPI vector deliverables" }
    ],
    sampleClients: ["Acqua di Parma Concept", "Aura Skincare", "Onyx Editorial"],
    featuredReel: {
      title: "Solstice Botanical Identity",
      aspectRatio: "1:1",
      duration: "Static",
      thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
      type: "Graphic Design",
      tags: ["Brand Identity", "Luxury Packaging", "1:1 Square"]
    },
    portfolioItems: [
      {
        id: "p-7",
        title: "Solstice Botanical Identity",
        type: "Graphic Design",
        aspectRatio: "1:1",
        duration: "Editorial",
        views: "15.8K",
        likes: "2.9K",
        thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Minimalist apothecary bottle with embossed gold foil typography, soft terracotta textured background, dappled sunlight",
        toolsUsed: ["Midjourney v6", "Photoshop", "Illustrator"],
        workflowNote: "Full packaging suite with die-cut lines and vector typography lockups."
      },
      {
        id: "p-8",
        title: "Neo-Classical Campaign Art",
        type: "Graphic Design",
        aspectRatio: "4:5",
        duration: "Print Suite",
        views: "22.0K",
        likes: "3.5K",
        thumbnail: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Marble renaissance sculpture wearing futuristic augmented optical eyewear, hyper-refined marble grain",
        toolsUsed: ["ComfyUI", "Magnific AI", "Photoshop"],
        workflowNote: "Commercial license cleared with signed dataset provenance."
      }
    ]
  },
  {
    id: "creator-4",
    name: "Kai Tanaka",
    handle: "@tanaka_synth",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    roleTitle: "Anime & Generative Motion Animator",
    location: "Kyoto / Remote",
    rating: 4.92,
    reviewsCount: 29,
    ratePerHour: "$85/hr",
    startingRate: "$750 / reel",
    turnaround: "48 hrs",
    verifiedBadges: ["AI Workflow Verified", "Commercial Safe"],
    specializations: ["Animation", "Motion Graphics", "AI Filmmaking"],
    contentType: "Animation",
    tools: ["ComfyUI", "After Effects", "Runway Gen-3", "Blender", "ElevenLabs"],
    bio: "Blending classic Japanese anime cell aesthetics with cutting-edge frame-consistent diffusion models. Creating captivating animated brand narratives and viral character loops.",
    pipeline: [
      { step: "1. Character Turnarounds", desc: "Consistent IP character sheets generated via IP-Adapter in ComfyUI" },
      { step: "2. AnimateDiff Flow", desc: "Motion module animation with precise temporal coherence" },
      { step: "3. Lineart & Shading", desc: "Ebsynth & After Effects cel-shading cleanup pass" },
      { step: "4. Soundscape & OST", desc: "Japanese lo-fi sound design & synthetic vocal drops" }
    ],
    sampleClients: ["Crunchyroll Spec", "Matcha Boy Cafe", "Neon Tokyo Records"],
    featuredReel: {
      title: "Ramen Runner: Shinjuku 2088",
      aspectRatio: "16:9",
      duration: "0:25",
      thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80",
      type: "Animation",
      tags: ["Anime Cel", "Sci-Fi", "16:9 Widescreen"]
    },
    portfolioItems: [
      {
        id: "p-9",
        title: "Ramen Runner: Shinjuku 2088",
        type: "Animation",
        aspectRatio: "16:9",
        duration: "0:25",
        views: "44.1K",
        likes: "6.2K",
        thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Makoto Shinkai style rain drenched neon alleyway, delivery droid gliding on hoverboard, steam rising from ramen stall",
        toolsUsed: ["ComfyUI", "After Effects", "Blender"],
        workflowNote: "Frame-consistent temporal modules with zero character flicker."
      },
      {
        id: "p-10",
        title: "Spirit of the Bamboo Grove",
        type: "Animation",
        aspectRatio: "9:16",
        duration: "0:16",
        views: "29.7K",
        likes: "4.1K",
        thumbnail: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Ghibli inspired golden fox leaping through glowing jade bamboo stalks, hand-painted watercolor textures",
        toolsUsed: ["Runway Gen-3", "ComfyUI", "Premiere"],
        workflowNote: "Watercolor LoRA with custom frame interpolation."
      }
    ]
  },
  {
    id: "creator-5",
    name: "Chloe Dupont",
    handle: "@chloedupont_creative",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    roleTitle: "Viral UGC & Social Reel Strategist",
    location: "Paris / New York",
    rating: 4.96,
    reviewsCount: 51,
    ratePerHour: "$105/hr",
    startingRate: "$550 / reel",
    turnaround: "24 hrs",
    verifiedBadges: ["AI Workflow Verified", "Fast Deliveries", "Top 1% Talent"],
    specializations: ["Social Reels", "Brand Identity", "AI Filmmaking"],
    contentType: "Social Reel",
    tools: ["Runway Gen-3", "Premiere", "After Effects", "Midjourney v6", "ElevenLabs"],
    bio: "Combining high-fashion storytelling with algorithmic TikTok hooks. 25M+ organic impressions generated for direct-to-consumer lifestyle, beauty, and coffee brands.",
    pipeline: [
      { step: "1. 3-Second Hook Design", desc: "Algorithmic visual pattern-interrupt scripting" },
      { step: "2. Generative Scene Prep", desc: "Midjourney v6 ultra-realistic photostyle scenes" },
      { step: "3. Hyper-real Motion", desc: "Runway Gen-3 speed ramp motion with organic human gestures" },
      { step: "4. Dynamic Subtitles", desc: "Auto-caption kinetic typography + voiceover sync" }
    ],
    sampleClients: ["L'Occitane Spec", "Café Kitsuné Fan Edit", "Glow Recipe Spec"],
    featuredReel: {
      title: "French Press in the Clouds",
      aspectRatio: "9:16",
      duration: "0:12",
      thumbnail: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
      type: "Social Reel",
      tags: ["Lifestyle Hook", "9:16 Reel", "Fast Delivery"]
    },
    portfolioItems: [
      {
        id: "p-11",
        title: "French Press in the Clouds",
        type: "Social Reel",
        aspectRatio: "9:16",
        duration: "0:12",
        views: "115.0K",
        likes: "18.3K",
        thumbnail: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Artisan glass coffee press with amber espresso swirling while hovering above fluffy sunset cumulus clouds, high aesthetic",
        toolsUsed: ["Runway Gen-3", "Premiere", "ElevenLabs"],
        workflowNote: "High retention 3s opening hook with ASMR sound mastering."
      }
    ]
  },
  {
    id: "creator-6",
    name: "Mateo Rossi",
    handle: "@mateo_vfx",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    roleTitle: "Generative VFX & 3D Product Specialist",
    location: "Barcelona / Remote",
    rating: 4.89,
    reviewsCount: 22,
    ratePerHour: "$120/hr",
    startingRate: "$1,100 / project",
    turnaround: "3-4 days",
    verifiedBadges: ["AI Workflow Verified", "Commercial Safe"],
    specializations: ["3D Product Renders", "Motion Graphics", "Cinematic Teasers"],
    contentType: "Cinematic Film",
    tools: ["Cinema 4D", "Blender", "Runway Gen-3", "After Effects", "Midjourney v6"],
    bio: "Automotive and tech accessories specialist. I combine exact CAD model rendering with generative photorealistic environments and liquid physics.",
    pipeline: [
      { step: "1. CAD Ingestion", desc: "Client STEP/OBJ files cleaned & uv mapped in Cinema 4D" },
      { step: "2. Environmental Diffusion", desc: "Generative HDR dome & atmospheric physics in ComfyUI" },
      { step: "3. Hybrid Compositing", desc: "Multipass EXR compositing with generative particle passes" }
    ],
    sampleClients: ["Audio-Technica Spec", "Polestar Spec", "Rimowa Concept"],
    featuredReel: {
      title: "Obsidian Audio Over-Ear",
      aspectRatio: "16:9",
      duration: "0:30",
      thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      type: "Cinematic Film",
      tags: ["Tech Hardware", "3D CAD", "16:9"]
    },
    portfolioItems: [
      {
        id: "p-12",
        title: "Obsidian Audio Over-Ear",
        type: "Cinematic Film",
        aspectRatio: "16:9",
        duration: "0:30",
        views: "27.3K",
        likes: "3.8K",
        thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
        promptSummary: "Exploded wireless headphone chassis in acoustic isolation chamber, magnetic driver vibration waves visualised in luminescent smoke",
        toolsUsed: ["Cinema 4D", "Runway Gen-3", "After Effects"],
        workflowNote: "Exact product geometry preserved with AI environmental lighting."
      }
    ]
  }
];

export const INITIAL_BRIEFS = [
  {
    id: "brief-101",
    brandName: "Komorebi Matcha Co.",
    brandLogo: "🍵",
    title: "Vibrant 9:16 Ceremonial Matcha Social Reel Campaign",
    objective: "Create 3 high-energy, aesthetically mesmerizing vertical reels showing our organic ceremonial matcha whisking process and iced oat cloud latte recipe for Instagram & TikTok paid media.",
    contentType: "Social Reel",
    aspectRatio: "9:16",
    licensingTier: "Standard Commercial",
    licensingDescription: "12-month paid social media ad rights worldwide + perpetual organic post rights.",
    budget: "$2,800",
    deadline: "Oct 28, 2026",
    deliverablesCount: 3,
    status: "Accepting Pitches",
    requiredTools: ["Runway Gen-3", "Premiere", "After Effects"],
    safetyTier: "Commercial Safe (No Trademark Artifacts)",
    pitchesCount: 6,
    tags: ["9:16 Vertical", "Beverage", "Viral Hook", "Organic Food"],
    aestheticDirection: "Wabi-sabi minimalist kitchen, natural warm morning sunlight, macro liquid swirls, ASMR sound layering",
    promptSeed: "Top-down aesthetic matcha whisking, velvety emerald foam rising, slow motion milk pour forming clouds, 9:16 vertical 4k"
  },
  {
    id: "brief-102",
    brandName: "Veloce Motors",
    brandLogo: "⚡",
    title: "Cyberpunk Electric Supercar Cinematic Teaser",
    objective: "Produce an anamorphic 16:9 cinematic reveal teaser for our concept electric hypercar driving through a rainy neon metropolis. High-impact soundscape and photorealistic aerodynamics.",
    contentType: "Cinematic Film",
    aspectRatio: "16:9",
    licensingTier: "Exclusive Buyout",
    licensingDescription: "Perpetual worldwide exclusive rights across web, broadcast, and digital out-of-home (DOOH).",
    budget: "$7,500",
    deadline: "Nov 15, 2026",
    deliverablesCount: 1,
    status: "Accepting Pitches",
    requiredTools: ["Midjourney v6", "Runway Gen-3", "DaVinci Resolve", "Blender"],
    safetyTier: "Enterprise C2PA Verified",
    pitchesCount: 11,
    tags: ["16:9 Widescreen", "Automotive", "Cinematic", "Sci-Fi"],
    aestheticDirection: "Anamorphic bokeh, rain reflections on carbon fiber, blade runner lighting, titanium sparks",
    promptSeed: "Aerodynamic matte carbon fiber supercar cruising neon reflection wet asphalt, speed blur, anamorphic 2.39:1"
  },
  {
    id: "brief-103",
    brandName: "Aura Biotics",
    brandLogo: "🌿",
    title: "3D Animated Microbiome Capsule Explainer Sequence",
    objective: "Produce a clean, luminous 3D animation explaining our dual-release probiotic beadlet technology. Needs to feel scientific yet ethereal and welcoming, not clinical.",
    contentType: "Animation",
    aspectRatio: "1:1",
    licensingTier: "Standard Commercial",
    licensingDescription: "Digital ads and landing page video player rights for North America and EU.",
    budget: "$4,200",
    deadline: "Nov 04, 2026",
    deliverablesCount: 2,
    status: "Reviewing Shortlist",
    requiredTools: ["Blender", "ComfyUI", "After Effects"],
    safetyTier: "Commercial Safe",
    pitchesCount: 8,
    tags: ["1:1 Square", "Healthcare", "3D Explainer", "Luminous"],
    aestheticDirection: "Translucent glass capsule in water bath, micro golden beads dispersing, soft studio depth of field",
    promptSeed: "Transparent capsule with suspended golden lipid spheres slowly dissolving in crystal clear aqua medium"
  },
  {
    id: "brief-104",
    brandName: "SOLO Footwear",
    brandLogo: "👟",
    title: "Hyper-Real Sneaker Material Morphing Short",
    objective: "A 15-second high-tempo visual hook where our flagship trail runner morphs dynamically through volcanic rock, mossy earth, and waterproof membranes.",
    contentType: "Social Reel",
    aspectRatio: "9:16",
    licensingTier: "Standard Commercial",
    licensingDescription: "Paid Instagram/TikTok/YouTube Shorts campaign rights.",
    budget: "$3,100",
    deadline: "Oct 24, 2026",
    deliverablesCount: 1,
    status: "Accepting Pitches",
    requiredTools: ["Blender", "Runway Gen-3", "After Effects"],
    safetyTier: "Commercial Safe",
    pitchesCount: 4,
    tags: ["9:16 Vertical", "Streetwear", "Morphing", "TikTok Hook"],
    aestheticDirection: "Rugged outdoors meet hyper-modern CGI. Kinetic camera whip zooms, heavy bass audio cues",
    promptSeed: "Trail runner shoe outsole morphing seamlessly from volcanic basalt to vibrant alpine moss"
  }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "New Brief Match Available",
    message: "Komorebi Matcha published a new brief matching your tags: 'Vibrant 9:16 Ceremonial Matcha'.",
    time: "10m ago",
    read: false,
    type: "brief"
  },
  {
    id: "notif-2",
    title: "Workflow Verification Confirmed",
    message: "Your ComfyUI + Runway Gen-3 pipeline was awarded the 'Commercial Safe' badge.",
    time: "2h ago",
    read: false,
    type: "verification"
  },
  {
    id: "notif-3",
    title: "Milestone Payment Escrow Funded",
    message: "Acme Brand deposited $2,800 in escrow for Brief #101. You may begin production.",
    time: "Yesterday",
    read: true,
    type: "payment"
  }
];

export const VERIFICATION_STANDARDS = [
  {
    id: "v-1",
    title: "Opt-In Training & IP Safety",
    description: "All generative models used by verified creators are vetted against copyrighted trademark data. Synthetic outputs are safe for commercial broadcast and paid ads.",
    status: "Strict Standard",
    badge: "Commercial Safe"
  },
  {
    id: "v-2",
    title: "Human-In-The-Loop Production Gate",
    description: "No direct uncurated single-prompt dumps. Every delivery must pass through human editing, post-compositing, color grading, and audio mastering.",
    status: "Audited Pipeline",
    badge: "AI Workflow Verified"
  },
  {
    id: "v-3",
    title: "C2PA Provenance & Content Credentials",
    description: "Deliverables include cryptographic provenance tags documenting author identity, tools used, and synthesis techniques for corporate compliance.",
    status: "Cryptographic Hash",
    badge: "C2PA Signed"
  },
  {
    id: "v-4",
    title: "Escrow Protection & Milestone Release",
    description: "Client funds are locked safely in escrow and released only upon client approval of milestone revisions, guaranteeing prompt delivery and fair creator compensation.",
    status: "100% Protected",
    badge: "Escrow Guaranteed"
  }
];

export const AI_BRIEF_PRESETS = [
  {
    label: "Matcha Beverage Reel",
    prompt: "Need a vibrant 9:16 product reel for an organic ceremonial matcha brand highlighting froth and cold milk pour",
    structured: {
      title: "Vibrant Ceremonial Matcha 9:16 Social Reel Campaign",
      objective: "Produce an energetic, sensorially immersive 9:16 vertical video showing artisanal matcha whisking and milk swirling, optimized for TikTok & Instagram reels conversion.",
      contentType: "Social Reel",
      aspectRatio: "9:16",
      licensingTier: "Standard Commercial",
      budget: "$2,600",
      deadlineDays: 7,
      deliverables: 2,
      aesthetic: "Wabi-sabi minimalist kitchen, natural warm morning sunlight, macro froth physics, ASMR sound layering",
      suggestedTools: ["Runway Gen-3", "Premiere", "After Effects", "Midjourney v6"],
      pipelineSpec: "1. Midjourney aesthetic keyframes -> 2. Runway Gen-3 camera zooms -> 3. After Effects speed ramp + kinetic subtitle typography"
    }
  },
  {
    label: "Cyberpunk EV Film",
    prompt: "Cyberpunk luxury electric vehicle launch film 16:9 with hyper-realistic particle physics and cinematic soundscapes",
    structured: {
      title: "Apex Horizon: Electric Hypercar Cinematic Reveal",
      objective: "Create an anamorphic 16:9 widescreen trailer showing the vehicle accelerating through neon-soaked Tokyo rain with holographic telemetry and deep engine hum.",
      contentType: "Cinematic Film",
      aspectRatio: "16:9",
      licensingTier: "Exclusive Buyout",
      budget: "$8,500",
      deadlineDays: 14,
      deliverables: 1,
      aesthetic: "Moody anamorphic 2.39:1, cobalt blue and warm amber neon reflections, titanium water spray, Hans Zimmer style braam sound design",
      suggestedTools: ["Runway Gen-3", "Midjourney v6", "DaVinci Resolve", "Blender"],
      pipelineSpec: "1. 3D Chassis camera tracking in Blender -> 2. Neural atmospheric rendering via ComfyUI -> 3. 4K Magnific AI upscale -> 4. DaVinci Resolve color grading"
    }
  },
  {
    label: "3D Sneaker Morph",
    prompt: "Futuristic 3D animated footwear morphing sequence for TikTok with viral audio cues",
    structured: {
      title: "Zero-Gravity Footwear Material Morph 9:16 Reel",
      objective: "Deliver a high-velocity 15-second product sequence showcasing the sneaker morphing from liquid chrome into rugged outdoor rubber, synced with trending beat drops.",
      contentType: "Social Reel",
      aspectRatio: "9:16",
      licensingTier: "Standard Commercial",
      budget: "$3,200",
      deadlineDays: 5,
      deliverables: 1,
      aesthetic: "Hyper-clean studio void, liquid metal droplets, explosive camera whip transitions, snappy text callouts",
      suggestedTools: ["Blender", "Runway Gen-3", "After Effects", "ComfyUI"],
      pipelineSpec: "1. CAD/3D model morph in Blender -> 2. Video-to-video diffusion refinement -> 3. Sound effect placement at -14 LUFS"
    }
  },
  {
    label: "Luxury Fashion Identity",
    prompt: "High-end generative fashion editorial campaign for Autumn 2026 with bespoke print typography and square product packaging",
    structured: {
      title: "Atelier Solstice: Autumn 2026 Generative Brand Suite",
      objective: "Develop a cohesive 1:1 and 4:5 luxury visual identity featuring avant-garde textile draping, editorial lookbook key art, and print-ready packaging renders.",
      contentType: "Graphic Design",
      aspectRatio: "1:1",
      licensingTier: "Exclusive Buyout",
      budget: "$4,800",
      deadlineDays: 10,
      deliverables: 4,
      aesthetic: "Warm Italian terracotta, raw linen textures, directional dappled sunlight, refined serif typography, high-fashion editorial",
      suggestedTools: ["Midjourney v6", "ComfyUI", "Adobe Illustrator", "Photoshop"],
      pipelineSpec: "1. Style exploration with custom LoRA -> 2. Hi-res tile upscaling to 300 DPI -> 3. Typography lockup & C2PA credentials generation"
    }
  }
];
