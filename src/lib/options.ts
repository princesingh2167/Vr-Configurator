// import cube from "@/assets/equipment-size/cube.jpg";

// const options = {
//   environment: {
//     title: "Environment",
//     options: [
//       { value: "No Environment", src: "" },
//       {
//         value: "Standard Industrial Environment from prebuilt assets",
//         src: "https://jsw.innovatelabs.co.in/assets/workATHeight.jpg",
//       },
//       {
//         value: "Actual Plant Environment : 1 -2 Scene",
//         src: "https://jsw.innovatelabs.co.in/assets/hydrogenHandling.jpg",
//       },
//       {
//         value: "Multiple Custom Environment : 1 - 10 Scene",
//         src: "https://jsw.innovatelabs.co.in/assets/hotlineWashing.jpg",
//       },
//     ],
//   },
 
//   equipmentCount: {
//     title: "No. of Equipment to be Included in VR Environment",
//     options: [
//       { value: "1", src: "" },
//       { value: "1 to 5", src: "" },
//       { value: "More than 5", src: "" },
//     ],
//   },
//   equipmentSize: {
//     title: "Equipment Size",
//     options: [
//       { value: "Small - Under 3X3X5 Meter", src: cube.src },
//       { value: "Medium - Under 5*5*5 Meters", src: cube.src },
//       { value: "Large - Under 10*10*10 Meters", src: cube.src },
//       { value: "Very large more than 10*10*10 meters", src: cube.src },
//     ],
//   },
//   partsCount: {
//     title: "Approximate Unique Parts in Machine/Equipment",
//     options: [
//       { value: "Under 20 Parts", src: "" },
//       { value: "Under 30 Parts", src: "" },
//       { value: "Under 60 Parts", src: "" },
//       { value: "60-200 Parts", src: "" },
//     ],
//   },
//   userNavigation: {
//     title: "User Navigation in Experience",
//     options: [
//       { value: "Fixed and predefined Spawn points", src: "" },
//       { value: "Free roam and/or Fixed spawn points", src: "" },
//     ],
//   },
//   userType: {
//     title: "User Type",
//     options: [
//       { value: "Single User", src: "" },
//       { value: "Multi User", src: "" },
//     ],
//   },
//   safetySops: {
//     title: "Safety SOPs",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   introductionModule: {
//     title: "Safety SOPs",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   stepsInTrainingModule: {
//     title: "Number of Steps in Training Module",
//     options: [
//       { value: "Under 15", src: "" },
//       { value: "15-20", src: "" },
//       { value: "20-40", src: "" },
//       { value: "Above 40", src: "" },
//     ],
//   },
//   assesmentModule: {
//     title: "Assesment Module",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   visualisationQuality: {
//     title: "Visualisation Quality",
//     options: [
//       { value: "Standard ( Plain Color Model )", src: "" },
//       { value: "HD Quality Texture", src: "" },
//       { value: "Full HD Texture Quality Texture", src: "" },
//       {
//         value: "4k Texture Quality Texture ( Only Supported by PC VR )",
//         src: "",
//       },
//     ],
//   },
//   voiceOver: {
//     title: "Voice Over",
//     options: [
//       { value: "Any one language - English or Hindi", src: "" },
//       { value: "English and Hindi", src: "" },
//       { value: "Regional language", src: "" },
//     ],
//   },
//   audioEnvironment: {
//     title: "Audio Environment",
//     options: [
//       { value: "No Environment Audio", src: "" },
//       { value: "Standard Industrial Audio", src: "" },
//       { value: "Actual Plant Environment Audio", src: "" },
//       {
//         value:
//           "Actual Plant Environment Audio with Spatial Audio Effects ( Like machine sounds )",
//         src: "",
//       },
//     ],
//   },
//   dataHosting: {
//     title: "Data Hosting",
//     options: [
//       { value: "Innovate Cloud", src: "" },
//       { value: "Innovate Cloud/ Hindalco Cloud", src: "" },
//       { value: "Innovate Cloud/ On Prem/ Hindalco Cloud", src: "" },
//     ],
//   },
//   deployment: {
//     title: "Deployment",
//     options: [
//       { value: "Standalone VR Headset", src: "" },
//       { value: "Standalone VR Headset/ GPU PC", src: "" },
//     ],
//   },
//   userAuthentication: {
//     title: "User Authentication",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   modulesCovered: {
//     title: "Modules Covered",
//     options: [
//       { value: "Introduction or Training", src: "" },
//       { value: "Introduction or Training & Assessment", src: "" },
//       { value: "Introduction + Training + Assessment", src: "" },
//       {
//         value: "Introduction + Training + Assessment + Additional Modules",
//         src: "",
//       },
//     ],
//   },
//   progressSavingMechanism: {
//     title: "Progress Saving Mechanism",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   animation: {
//     title: "Animation",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   branding: {
//     title: "Branding in VR Experience",
//     options: [
//       { value: "No Branding", src: "" },
//       { value: "Logo Placements", src: "" },
//       { value: "Brand Theme like color schemes, fonts, UI elements", src: "" },
//     ],
//   },
//   onsiteTraning: {
//     title: "Onsite Training for Deployment",
//     options: [
//       { value: "1", src: "" },
//       { value: "1 to 5", src: "" },
//       { value: "More than 5", src: "" },
//     ],
//   },
//   userReporting: {
//     title: "User Reporting",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   trainingComplitionCertificate: {
//     title: "User Training completion certification (PDF format)",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   particalAnimation: {
//     title: "Partical Animation ( like heat, oil, water, gas flow)",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   characterAnimation: {
//     title: "Character/Operator Animation",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   accommodation: {
//     title: "Accommodation",
//     options: [{ value: "Hindalco Scope", src: "" }],
//   },
//   travelAndStat: {
//     title: "Travel, local stay, loading boarding provided by Hindalco",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   hardware: {
//     title: "Hardware ( VR Headset)",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   pc: {
//     title: "PC Requirement (provide specs in our sheet)",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },
//   amc: {
//     title: "AMC",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },

//   interactions: {
//     title: " UserInteractions",
//     options: [
//       { value: "View Only", src: "" },
//       { value: "User Interaction", src: "" },
//     ],
//   },
//   thirdpartyIntegration: {
//     title:
//       "Any integration with 3rd party application such as Iot, Maintenance database, SCRUM etc",
//     options: [
//       { value: "Yes", src: "" },
//       { value: "No", src: "" },
//     ],
//   },

//   support: {
//     title: "Support Type",
//     options: [
//       { value: "Online", src: "" },
//       { value: "Onsite", src: "" },
//     ],
//   },
//   texturesAndMaterials: {
//     title: "Texture and Materials",
//     options: [
//       { value: "Basic colors and flat textures", src: "" },
//       { value: "Standard UV mapping with textures", src: "" },
//       { value: "PBR Multiple texture maps", src: "" },
//     ],
//   },
//   lighting: {
//     title: "Lighting Type",
//     options: [
//       { value: "Static lighting baked into scene", src: "" },
//       { value: "Static and Dynamic lighting", src: "" },
//       {
//         value: "Real time dynamic lighting with shadows and reflections",
//         src: "",
//       },
//     ],
//   },
//   materials: {
//     title: "Materials",
//     options: [
//       { value: "None or simple materials", src: "" },
//       { value: "Basic reflections", src: "" },
//       {
//         value: "Realistic shaders glass, transparency, metal effects",
//         src: "",
//       },
//     ],
//   },
// };

// export default options;
