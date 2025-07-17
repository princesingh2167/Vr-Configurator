import cube from "@/assets/equipment-size/cube.jpg";

const options = {
  environment: {
    title: "Environment",
    options: [
      "No Environment",
      "Standard Industrial Environment from prebuilt assets",
      "Actual Plant Environment : 1 -2 Scene",
      "Multiple Custom Environment : 1 - 10 Scene",
    ],
    images: [
      "",
      "https://jsw.innovatelabs.co.in/assets/workATHeight.jpg",
      "https://jsw.innovatelabs.co.in/assets/hydrogenHandling.jpg",
      "https://jsw.innovatelabs.co.in/assets/hotlineWashing.jpg",
    ],
    description:
      "Multiple Custom Environment : 1 - 10 Scene Multiple Custom Environment : 1 - 10 Scene",
  },
  equipmentCount: {
    title: "No. of Equipment to be Included in VR Environment",
    options: ["1", "1 to 5", "More than 5"],
    description: "",
  },
  equipmentSize: {
    title: "Equipment Size",
    options: [
      "Small - Under 3X3X5 Meter",
      "Medium - Under 5*5*5 Meters",
      "Large - Under 10*10*10 Meters",
      "Very large more than 10*10*10 meters",
    ],
    images: [cube.src, cube.src, cube.src, cube.src],
    description: "",
  },
  partsCount: {
    title: "Approximate Unique Parts in Machine/Equipment",
    options: [
      "Under 20 Parts",
      "Under 30 Parts",
      "Under 60 Parts",
      "60-200 Parts",
    ],
    description: "",
  },
  userNavigation: {
    title: "User Navigation in Experience",
    options: [
      "Fixed and predefined Spawn points",
      "Free roam and/or Fixed spawn points",
    ],
    description: "",
  },
  userType: {
    title: "User Type",
    options: ["Single User", "Multi User"],
    description: "",
  },
  safetySops: {
    title: "Safety SOPs",
    options: ["Yes", "No"],
    description: "",
  },
  introductionModule: {
    title: "Introduction Module",
    options: ["Yes", "No"],
    description: "",
  },
  stepsInTrainingModule: {
    title: "Number of Steps in Training Module",
    options: ["Under 15", "15-20", "20-40", "Above 40"],
    description: "",
  },
  assesmentModule: {
    title: "Assessment Module",
    options: ["Yes", "No"],
    description: "",
  },
  visualisationQuality: {
    title: "Visualisation Quality",
    options: [
      "Standard ( Plain Color Model )",
      "HD Quality Texture",
      "Full HD Texture Quality Texture",
      "4k Texture Quality Texture ( Only Supported by PC VR )",
    ],
    images: ["", "", "", ""],
    description: "",
  },
  voiceOver: {
    title: "Voice Over",
    multiSelect:true,
    options: [
      "Any one language - English or Hindi",
      "English and Hindi",
      "Regional language",
    ],
    description: "",
  },
  audioEnvironment: {
    title: "Audio Environment",
    options: [
      "No Environment Audio",
      "Standard Industrial Audio",
      "Actual Plant Environment Audio",
      "Actual Plant Environment Audio with Spatial Audio Effects ( Like machine sounds )",
    ],
    images: ["", "", "", ""],
    description: "",
  },
  dataHosting: {
    title: "Data Hosting",
    options: [
      "Innovate Cloud",
      "Innovate Cloud/ Hindalco Cloud",
      "Innovate Cloud/ On Prem/ Hindalco Cloud",
    ],
    description: "",
  },
  deployment: {
    title: "Deployment",
    options: ["Standalone VR Headset", "Standalone VR Headset/ GPU PC"],
    images: ["", ""],
    description: "",
  },
  userAuthentication: {
    title: "User Authentication",
    options: ["Yes", "No"],
    description: "",
  },
  modulesCovered: {
    title: "Modules Covered",
    options: [
      "Introduction or Training",
      "Introduction or Training & Assessment",
      "Introduction + Training + Assessment",
      "Introduction + Training + Assessment + Additional Modules",
    ],
    images: ["", "", "", ""],
    description: "",
  },
  progressSavingMechanism: {
    title: "Progress Saving Mechanism",
    options: ["Yes", "No"],
    description: "",
  },
  animation: {
    title: "Animation",
    options: ["Yes", "No"],
    description: "",
  },
  branding: {
    title: "Branding in VR Experience",
    options: [
      "No Branding",
      "Logo Placements",
      "Brand Theme like color schemes, fonts, UI elements",
    ],
    images: ["", "", ""],
    description: "",
  },
  onsiteTraning: {
    title: "Onsite Training for Deployment",
    options: ["1", "1 to 5", "More than 5"],
    description: "",
  },
  userReporting: {
    title: "User Reporting",
    options: ["Yes", "No"],
    description: "",
  },
  trainingComplitionCertificate: {
    title: "User Training completion certification (PDF format)",
    options: ["Yes", "No"],
    description: "",
  },
  particalAnimation: {
    title: "Partical Animation ( like heat, oil, water, gas flow)",
    options: ["Yes", "No"],
    description: "",
  },
  characterAnimation: {
    title: "Character/Operator Animation",
    options: ["Yes", "No"],
    description: "",
  },
  accommodation: {
    title: "Accommodation",
    options: ["Hindalco Scope"],
    description: "",
  },
  travelAndStat: {
    title: "Travel, local stay, loading boarding provided by Hindalco",
    options: ["Yes", "No"],
    description: "",
  },
  hardware: {
    title: "Hardware ( VR Headset)",
    options: ["Yes", "No"],
    description: "",
  },
  pc: {
    title: "PC Requirement (provide specs in our sheet)",
    options: ["Yes", "No"],
    description: "",
  },
  amc: {
    title: "AMC",
    options: ["Yes", "No"],
    description: "",
  },
  interactions: {
    title: "User Interactions",
    options: ["View Only", "User Interaction"],
    description: "",
  },
  thirdpartyIntegration: {
    title:
      "Any integration with 3rd party application such as Iot, Maintenance database, SCRUM etc",
    options: ["Yes", "No"],
    description: "",
  },
  support: {
    title: "Support Type",
    options: ["Online", "Onsite"],
    description: "",
  },
  texturesAndMaterials: {
    title: "Texture and Materials",
    options: [
      "Basic colors and flat textures",
      "Standard UV mapping with textures",
      "PBR Multiple texture maps",
    ],
    images: ["", "", ""],
    description: "",
  },
  lighting: {
    title: "Lighting Type",
    options: [
      "Static lighting baked into scene",
      "Static and Dynamic lighting",
      "Real time dynamic lighting with shadows and reflections",
    ],
    images: ["", "", ""],
    description: "",
  },
  materials: {
    title: "Materials",
    options: [
      "None or simple materials",
      "Basic reflections",
      "Realistic shaders glass, transparency, metal effects",
    ],
    images: ["", "", ""],
    description: "",
  },
};

export default options;
