
const noEnviroment = "/environment/noEnvironment.mp4";
const actualPlant = "/environment/actualPlant.mp4";
const standardEnvironment = "/environment/standardEnvironment.mp4";
const multiple = "/environment/multiple.mp4";
const solid = "/visualisation/Machine_Solid.mp4";
const hd = "/visualisation/HD_Machine.mp4";
const fourk = "/visualisation/4K_LOD.mp4";
const three = "/cube/3M.png";
const five = "/cube/5M.png";
const ten = "/cube/10M.png";
const more = "/cube/more.png";
const visualisationOnly = "/interaction/visualizationOnly.mp4";
const userNavigation = "/interaction/userNavigation.mp4";
const handInteraction = "/interaction/handInteraction.mp4";
const spwan = "/interaction/spawn.mp4";
const operatorAnim = "/operator/operatorAnim.mp4";
const partical = "/operator/partical.mp4";

const options = {
  experienceType: {
    title: "Select experience type",
    options: ["Area", "Equipment"],
    description: "",
    isVideo: true,
    videos: [standardEnvironment, fourk],
  },
  equipmentSize: {
    title: "Size of area or equipment",
    options: [
      "Small - Under 3*3*3 Meters",
      "Medium - Under 5*5*5 Meters",
      "Large - Under 10*10*10 Meters",
      "Very Large - More than 10*10*10 Meters", // Capitalized for consistency
    ],
    images: [three, five, ten, more],
    description: "",
  },
  equipmentCount: {
    title: "Equipment Count",
    options: ["1", "1 to 5", "More than 5"],
    isVideo: true,
    videos: [fourk, noEnviroment, standardEnvironment],
    description: "Number of equipment units to be included in VR environment",
  },
  partsCount: {
    title: "Approximate total unique parts to be included in experience",
    options: [
      "Under 25 Parts",
      "Under 50 Parts",
      "Under 75 Parts",
      "Above 75 Parts",
    ],
    description: "",
  },
  visualisationQuality: {
    title: "Level of Details", // Capitalized "Details"
    options: [
      `Low:\n• Level of details less\n• Small texture size\n• Ideal for standalone mobile build (e.g., Quest 3, Quest 3s)`,
      `Medium:\n• 600K Poly counts\n• Medium texture size\n• Ideal for quality on standalone mobile platforms like (e.g., Quest 3, Quest 3s and Standard PC)`,
      `High:\n• High Poly geometry\n• Large texture size\n•Heavy- use only on High-end PC Build (e.g., Computer with Nvidia RTX graphic Card + Latest CPU)`,
      
    ],
    isVideo: true,
    videos: [solid, hd, fourk],
    description: "",
  },
  environment: {
    title: "Environmental Scenes",
    options: [
      "No Environment",
      "Standard Industrial Environment from Prebuilt Assets",
      "Actual Plant Environment: 1–2 Scenes", // Fixed colon spacing and pluralized "Scene"
      "Multiple Custom Environments: 1–10 Scenes", // Improved wording
    ],
    isVideo: true,
    videos: [noEnviroment, standardEnvironment, actualPlant, multiple],
    description: "Multiple custom environments ranging from 1 to 10 scenes.", // Removed repeated sentence
  },
  particalAnimation: {
    title: "Particle Animation (like heat, oil, water, gas flow)", // Typo: "Partical" → "Particle"
    options: ["Yes", "No"],
    isVideo: true,
    videos: [partical, ""],
    description: "",
  },
  characterAnimation: {
    title: "Character / Operator Animation", // Added space around slash for clarity
    options: ["Yes", "No"],
    isVideo: true,
    videos: [operatorAnim, ""],
    description: "",
  },
  interactionType: {
    title: "Interaction Type",
    options: ["Visualization Only", "Hand Interaction"],
    isVideo: true, // Spelling: "Visualisation" → "Visualization"
    videos: [visualisationOnly, handInteraction],
    description: "",
  },
  userNavigation: {
    title: "User Navigation in Experience",
    options: ["Fixed and Predefined Spawn Points", "Free Roam"],
    isVideo: true, // Spelling: "Visualisation" → "Visualization"
    videos: [spwan, userNavigation],
    description: "",
  },
  totalSteps: {
    title: "Total Number of Steps in Training Module",
    options: ["Under 15", "15–20", "20–40", "Above 40"],
    description: "",
  },
  modulesCovered: {
    title: "Modules to be Included",
    multiSelect: true,
    options: ["Introduction", "Safety SOPs", "Training", "Assessment"], // Removed extra space
    images: ["", "", "", ""],
    description: "",
  },
  voiceOver: {
    title: "Voice Over",
    multiSelect: true,
    options: ["None", "English", "Hindi", "Other1", "Other2"],
    description: "",
  },
  userAuthentication: {
    title: "User Authentication",
    options: ["Yes", "No"],
    description: "",
  },
  deployment: {
    title: "Deployment",
    options: ["Standalone VR Headset", "PC VR"],
    images: ["", ""],
    description: "",
  },
  progressSavingMechanism: {
    title: "Progress Saving Mechanism",
    options: ["Yes", "No"],
    description: "",
  },

  dashboard: {
    title: "Reporting Dashboard",
    options: ["Yes", "No"],
    description: "",
  },
  onsiteTraning: {
    title: "Onsite Training and Deployment",
    options: [
      "None, Remote support and deployment only",
      "Up to 3 Days",
      "3 to 5 Days",
      "More than 5 Days",
    ], // Typo: "Traning" → "Training", improved phrasing
    description: "",
  },
  trainingComplitionCertificate: {
    title: "User Training Completion Certificate Generation", // Typo: "Complition" → "Completion"
    options: ["Yes", "No"],
    description: "",
  },
  travelAndStat: {
    title: "Travel, Local Stay, Lodging & Boarding for Training and Deployment", // Improved wording
    options: ["Provided by customer", "Not provided by customer"],
    description: "",
  },
  thirdpartyIntegration: {
    title:
      "Any Integration with 3rd Party Applications (e.g., IoT, Maintenance DB, SCRUM, etc.)", // Capitalized, clarified examples
    options: ["Yes", "No"],
    description: "",
  },
  hardware: {
    title: "Hardware to be Provided", // Fixed grammar
    multiSelect: true,
    options: ["None", "Meta Quest 3", "Meta Quest 3s", "CPU + GPU Unit"],
    description: "",
  },
  dataHosting: {
    title: "Reporting dashboard hosting",
    options: ["Innovate cloud", "Customer cloud", "On customer premise"], // Removed extra space
    description: "",
  },
  support: {
    title: "Post Deployemnt Support",
    options: ["None", "Remote Support", "Onsite Support"], // Capitalization
    description: "",
  },
};

export default options;

// const options = {
//   experienceType: {
//     title: "Select experience type",
//     options: ["Area", "Equipment"],
//     description: "",
//   },
//   equipmentSize: {
//     title: "Size of area or equipment",
//     options: [
//       "Small - Under 3*3*5 Meter",
//       "Medium - Under 5*5*5 Meters",
//       "Large - Under 10*10*10 Meters",
//       "Very large more than 10*10*10 meters",
//     ],
//     images: [cube.src, cube.src, cube.src, cube.src],
//     description: "",
//   },
//   equipmentCount: {
//     title: "Equipment count",
//     options: ["1", "1 to 5", "More than 5"],
//     description: "No. of Equipment to be Included in VR Environment",
//   },

//   partsCount: {
//     title: "Approximate total unique parts to be included in experience",
//     options: [
//       "Under 20 Parts",
//       "Under 30 Parts",
//       "Under 60 Parts",
//       "60-200 Parts",
//     ],
//     description: "",
//   },

//   visualisationQuality: {
//     title: "Level of details",
//     options: [
//       "Standard ( Plain Color Model )",
//       // "HD Quality Texture",
//       "Full HD Texture Quality Texture",
//       "4k Texture Quality Texture ( Only Supported by PC VR )",
//     ],
//     isVideo: true,
//     videos: [solid, solid, fourk],
//     description: "",
//   },

//   environment: {
//     title: "Environmental scene",
//     options: [
//       "No Environment",
//       "Standard Industrial Environment from prebuilt assets",
//       "Actual Plant Environment : 1 -2 Scene",
//       "Multiple Custom Environment : 1 - 10 Scene",
//     ],
//     isVideo: true,
//     videos: [noEnviroment, noEnviroment, actualPlant, noEnviroment],
//     description:
//       "Multiple Custom Environment : 1 - 10 Scene Multiple Custom Environment : 1 - 10 Scene ",
//   },

//   userNavigation: {
//     title: "User Navigation in Experience",
//     options: [
//       "Fixed and predefined Spawn points",
//       "Free roam and/or Fixed spawn points",
//     ],
//     description: "",
//   },
//   totalSteps: {
//     title: "Total number of steps in training module",
//     options: ["Under 15", "15-20", "20-40", "Above 40"],
//     description: "",
//   },

//   modulesCovered: {
//     title: "Modules to be included",
//     multiSelect: true,
//     options: ["Introduction", "Safety SOPs", "Training ", "Assessment"],
//     images: ["", "", "", ""],
//     description: "",
//   },

//   voiceOver: {
//     title: "Voice Over",
//     multiSelect: true,
//     options: ["None", "English", "Hindi", "Other"],
//     description: "",
//   },

//   userAuthentication: {
//     title: "User Authentication",
//     options: ["Yes", "No"],
//     description: "",
//   },

//   deployment: {
//     title: "Deployment",
//     options: ["Standalone VR Headset", "PC VR"],
//     images: ["", ""],
//     description: "",
//   },
//   progressSavingMechanism: {
//     title: "Progress Saving Mechanism",
//     options: ["Yes", "No"],
//     description: "",
//   },

//   interactionType: {
//     title: "User Interaction",
//     options: ["Visualisation Only", "Hand Interaction"],
//     description: "",
//   },
//   particalAnimation: {
//     title: "Partical Animation ( like heat, oil, water, gas flow)",
//     options: ["Yes", "No"],
//     description: "",
//   },

//   characterAnimation: {
//     title: "Character/Operator Animation",
//     options: ["Yes", "No"],
//     description: "",
//   },
//   dashboard: {
//     title: "Reporting Dashboard",
//     options: ["Yes", "No"],
//     description: "",
//   },

//   onsiteTraning: {
//     title: "Onsite Training for Deployment",
//     options: [
//       "online Training",
//       "Upto 3 days",
//       "3 to 5 days",
//       "More than 5 days",
//     ],
//     description: "",
//   },
//   trainingComplitionCertificate: {
//     title: "User Training completion certification",
//     options: ["Yes", "No"],
//     description: "",
//   },
//   travelAndStat: {
//     title: "Travel, local stay, loding boarding for training and deployement",
//     options: ["Yes", "No"],
//     description: "",
//   },
//   thirdpartyIntegration: {
//     title:
//       "Any integration with 3rd party application such as Iot, Maintenance database, SCRUM etc",
//     options: ["Yes", "No"],
//     description: "",
//   },
//   hardware: {
//     title: "Hardware to be provides",
//     options: ["No", "Meta Quest 3", "Meta Quest 3s", "CPU + GPU unit"],
//     description: "",
//   },
//   dataHosting: {
//     title: "Data Hosting",
//     options: ["Innovate Cloud", " Hindalco Cloud"],
//     description: "",
//   },
//   support: {
//     title: "Support Type",
//     options: ["None", "Remote support", "Onsite support"],
//     description: "",
//   },

//   // userType: {
//   //   title: "User Type",
//   //   options: ["Single User", "Multi User"],
//   //   description: "",
//   // },
//   // safetySops: {
//   //   title: "Safety SOPs",
//   //   options: ["Yes", "No"],
//   //   description: "",
//   // },
//   // introductionModule: {
//   //   title: "Introduction Module",
//   //   options: ["Yes", "No"],
//   //   description: "",
//   // },
//   // stepsInTrainingModule: {
//   //   title: "Number of Steps in Training Module",
//   //   options: ["Under 15", "15-20", "20-40", "Above 40"],
//   //   description: "",
//   // },
//   // assesmentModule: {
//   //   title: "Assessment Module",
//   //   options: ["Yes", "No"],
//   //   description: "",
//   // },

//   // audioEnvironment: {
//   //   title: "Audio Environment",
//   //   options: [
//   //     "No Environment Audio",
//   //     "Standard Industrial Audio",
//   //     "Actual Plant Environment Audio",
//   //     "Actual Plant Environment Audio with Spatial Audio Effects ( Like machine sounds )",
//   //   ],
//   //   images: ["", "", "", ""],
//   //   description: "",
//   // },

//   // animation: {
//   //   title: "Animation",
//   //   options: ["Yes", "No"],
//   //   description: "",
//   // },
//   // branding: {
//   //   title: "Branding in VR Experience",
//   //   options: [
//   //     "No Branding",
//   //     "Logo Placements",
//   //     "Brand Theme like color schemes, fonts, UI elements",
//   //   ],
//   //   images: ["", "", ""],
//   //   description: "",
//   // },

//   // userReporting: {
//   //   title: "User Reporting",
//   //   options: ["Yes", "No"],
//   //   description: "",
//   // },

//   // accommodation: {
//   //   title: "Accommodation",
//   //   options: ["Hindalco Scope"],
//   //   description: "",
//   // },

//   // pc: {
//   //   title: "PC Requirement (provide specs in our sheet)",
//   //   options: ["Yes", "No"],
//   //   description: "",
//   // },
//   // amc: {
//   //   title: "AMC",
//   //   options: ["Yes", "No"],
//   //   description: "",
//   // },
//   // interactions: {
//   //   title: "User Interactions",
//   //   options: ["View Only", "User Interaction"],
//   //   description: "",
//   // },

//   // texturesAndMaterials: {
//   //   title: "Texture and Materials",
//   //   options: [
//   //     "Basic colors and flat textures",
//   //     "Standard UV mapping with textures",
//   //     "PBR Multiple texture maps",
//   //   ],
//   //   images: ["", "", ""],
//   //   description: "",
//   // },
//   // lighting: {
//   //   title: "Lighting Type",
//   //   options: [
//   //     "Static lighting baked into scene",
//   //     "Static and Dynamic lighting",
//   //     "Real time dynamic lighting with shadows and reflections",
//   //   ],
//   //   images: ["", "", ""],
//   //   description: "",
//   // },
//   // materials: {
//   //   title: "Materials",
//   //   options: [
//   //     "None or simple materials",
//   //     "Basic reflections",
//   //     "Realistic shaders glass, transparency, metal effects",
//   //   ],
//   //   images: ["", "", ""],
//   //   description: "",
//   // },
// };
