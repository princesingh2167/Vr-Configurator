"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormData {
  environment?: string;
  equipmentCount?: string;
  equipmentSize?: string;
  partsCount?: string;
  userType?: string;
  safetySOPs?: string;
  introductionModule?: string;
  stepsInTrainingModule?: string;
  assesmentRequired?: string;
  onsiteTrainingDays?: string;
  userNavigation?: string;
  animationsRequired?: string;
  visualisationQuality?: string;
  voiceOver?: string;
  audioEnvironment?: string;
  dataHosting?: string;
  userAuthenticaton?: string;
  progressSavingMechanism?: string;
  deployment?: string;
  modulesCovered?: string;
  branding?: string;
  interactions?: string;
  onsiteTrainingForDeployeement?: string;
  userReporting?: string;
  pdfCert?: string;
  particalAnimation?: string;
  animationRequired?: string;
  accommodation?: string;
  isPerks?: string;
  hardwareRequired?: string;
  pcRequirement?: string;
  amc?: string;
  anyThirdParty?: string;
  support?: string;
  lighting?: string;
  materials?: string;
  textures?: string;
}

const options = {
  environment: [
    "No Environment",
    "Standard Industrial Environment from prebuilt assets",
    "Actual Plant Environment : 1 -2 Scene",
    "Multiple Custom Environment : 1 - 10 Scene",
  ],
  equipmentCount: ["1", "1 to 5", "More than 5"],
  equipmentSize: [
    "Small - Under 3X3X5 Meter",
    "Medium - Under 5*5*5 Meters",
    "Large - Under 10*10*10 Meters",
    "Very large more than 10*10*10 meters",
  ],
  partsCount: [
    "Under 20 Parts",
    "Under 30 Parts",
    "Under 60 Parts",
    "60-200 Parts",
  ],
  userNavigation: [
    "Fixed and predefined Spawn points",
    "Free roam and/or Fixed spawn points",
  ],
  userType: ["Single User", "Multi User"],
  yesNo: ["Yes", "No"],
  stepsInTrainingModule: ["Under 15", "15-20", "20-40", "Above 40"],
  visualisationQuality: [
    "Standard ( Plain Color Model )",
    "HD Quality Texture",
    "Full HD Texture Quality Texture",
    "4k Texture Quality Texture ( Only Supported by PC VR )",
  ],
  voiceOver: [
    "Any one language - English or Hindi",
    "English and Hindi",
    "Regional language",
  ],
  audioEnvironment: [
    "No Environment Audio",
    "Standard Industrial Audio",
    "Actual Plant Environment Audio",
    "Actual Plant Environment Audio with Spatial Audio Effects ( Like machine sounds )",
  ],
  dataHosting: [
    "Innovate Cloud",
    "Innovate Cloud/ Hindalco Cloud",
    "Innovate Cloud/ On Prem/ Hindalco Cloud",
  ],
  deployment: ["Standalone VR Headset", "Standalone VR Headset/ GPU PC"],
  modulesCovered: [
    "Introduction or Training",
    "Introduction or Training & Assessment",
    "Introduction + Training + Assessment",
    "Introduction + Training + Assessment + Additional Modules",
  ],
  branding: [
    "No Branding",
    "Logo Placements",
    "Brand Theme like color schemes, fonts, UI elements",
  ],
  interactions: ["View Only", "User Interaction"],
  support: ["Online", "Onsite"],
  lighting: [
    "Static lighting baked into scene",
    "Static and Dynamic lighting",
    "Real time dynamic lighting with shadows and reflections",
  ],
  materials: [
    "None or simple materials",
    "Basic reflections",
    "Realistic shaders glass, transparency, metal effects",
  ],
  textures: [
    "Basic colors and flat textures",
    "Standard UV mapping with textures",
    "PBR Multiple texture maps",
  ],
  accommodation: ["Hindalco Scope"],
};

export default function Calculator() {
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Handle form submission here
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            VR Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Environment */}
              <div className="space-y-2">
                <Label htmlFor="environment">Environment</Label>
                <Select
                  onValueChange={(val) => handleChange("environment", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Environment" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.environment.map((env, idx) => (
                      <SelectItem key={idx} value={env}>
                        {env}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Number of Equipment */}
              <div className="space-y-2">
                <Label htmlFor="equipmentCount">
                  No. of equipement to be included in VR environment
                </Label>
                <Select
                  onValueChange={(val) => handleChange("equipmentCount", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Count" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.equipmentCount.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Equipment Size */}
              <div className="space-y-2">
                <Label htmlFor="equipmentSize">Equipment Size</Label>
                <Select
                  onValueChange={(val) => handleChange("equipmentSize", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.equipmentSize.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Unique Parts Count */}
              <div className="space-y-2">
                <Label htmlFor="partsCount">
                  Approximate Unique Parts in Machine/ Equipment
                </Label>
                <Select
                  onValueChange={(val) => handleChange("partsCount", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Parts Count" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.partsCount.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* User Navigation */}
              <div className="space-y-2">
                <Label htmlFor="userNavigation">
                  User Navigation in Experience
                </Label>
                <Select
                  onValueChange={(val) => handleChange("userNavigation", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Navigation Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.userNavigation.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* User Navigation */}
              <div className="space-y-2">
                <Label htmlFor="userNavigation">Single/ Multiple User</Label>
                <Select onValueChange={(val) => handleChange("userType", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select User Types" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.userType.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Safety SOPs */}
              <div className="space-y-2">
                <Label htmlFor="safetySOPs">Safety SOPs</Label>
                <Select
                  onValueChange={(val) => handleChange("safetySOPs", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Introduction module  */}
              <div className="space-y-2">
                <Label htmlFor="safetySOPs">Introduction Module </Label>
                <Select
                  onValueChange={(val) =>
                    handleChange("introductionModule", val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Number of steps in Training module  */}
              <div className="space-y-2">
                <Label htmlFor="safetySOPs">
                  Number of steps in Training Module{" "}
                </Label>
                <Select
                  onValueChange={(val) =>
                    handleChange("stepsInTrainingModule", val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Number of Steps" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.stepsInTrainingModule.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Assessment module required  */}
              <div className="space-y-2">
                <Label htmlFor="safetySOPs">Assessment module required </Label>
                <Select
                  onValueChange={(val) =>
                    handleChange("assesmentRequired", val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Number of Onsite Training Days */}
              <div className="space-y-2">
                <Label htmlFor="onsiteTrainingDays">
                  Number of Onsite Training Days
                </Label>
                <Input
                  type="number"
                  placeholder="Enter number of days"
                  className="w-full"
                  onChange={(e) =>
                    handleChange("onsiteTrainingDays", e.target.value)
                  }
                />
              </div>

              {/* Texture Quality */}
              <div className="space-y-2">
                <Label htmlFor="textureQuality">Visualisation Quality </Label>
                <Select
                  onValueChange={(val) =>
                    handleChange("visualisationQuality", val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Quality" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.visualisationQuality.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Voice Over */}
              <div className="space-y-2">
                <Label htmlFor="voiceOver">Voice Over</Label>
                <Select onValueChange={(val) => handleChange("voiceOver", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.voiceOver.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Audio Environment */}
              <div className="space-y-2">
                <Label htmlFor="audioEnvironment">Audio Environment</Label>
                <Select
                  onValueChange={(val) => handleChange("audioEnvironment", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Audio Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.audioEnvironment.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Data Hosting */}
              <div className="space-y-2">
                <Label htmlFor="dataHosting">Data Hosting</Label>
                <Select
                  onValueChange={(val) => handleChange("dataHosting", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Hosting Option" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.dataHosting.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Deployment */}
              <div className="space-y-2">
                <Label htmlFor="deployment">Deployment</Label>
                <Select
                  onValueChange={(val) => handleChange("deployment", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Deployment Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.deployment.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* User authentication  */}
              <div className="space-y-2">
                <Label htmlFor="userAuthenticaton">User authentication </Label>
                <Select
                  onValueChange={(val) =>
                    handleChange("userAuthenticaton", val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Modules Covered */}
              <div className="space-y-2">
                <Label htmlFor="modulesCovered">Modules Covered</Label>
                <Select
                  onValueChange={(val) => handleChange("modulesCovered", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Modules" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.modulesCovered.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Progress Saving Mechanism  */}
              <div className="space-y-2">
                <Label htmlFor="progressSavingMechanism">
                  Progress Saving Mechanism{" "}
                </Label>
                <Select
                  onValueChange={(val) =>
                    handleChange("progressSavingMechanism", val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Animations Required */}
              <div className="space-y-2">
                <Label htmlFor="animationsRequired">Animations Required</Label>
                <Select
                  onValueChange={(val) =>
                    handleChange("animationsRequired", val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Branding in VR Experience */}
              <div className="space-y-2">
                <Label htmlFor="branding">Branding in VR Experience</Label>
                <Select onValueChange={(val) => handleChange("branding", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Branding Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.branding.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Onsite training for deployment  */}
              <div className="space-y-2">
                <Label htmlFor="equipmentCount">
                  Onsite training for deployment
                </Label>
                <Select
                  onValueChange={(val) =>
                    handleChange("onsiteTrainingForDeployeement", val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Count" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.equipmentCount.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* User Reporting*/}
              <div className="space-y-2">
                <Label htmlFor="userReporting">User Reporting</Label>
                <Select
                  onValueChange={(val) => handleChange("userReporting", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/*User training completion certification (PDF format)*/}
              <div className="space-y-2">
                <Label htmlFor="pdfCert">
                  User training completion certification (PDF format)
                </Label>
                <Select onValueChange={(val) => handleChange("pdfCert", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* *Partical Animation Required ( like heat, oil , water, gas flow ) */}
              <div className="space-y-2">
                <Label htmlFor="particalAnimation">
                  Partical Animation Required ( like heat, oil , water, gas flow
                  )
                </Label>
                <Select
                  onValueChange={(val) =>
                    handleChange("particalAnimation", val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Character/ Operator Animation Required */}
              <div className="space-y-2">
                <Label htmlFor="animationRequired">
                  Character/ Operator Animation Required
                </Label>
                <Select
                  onValueChange={(val) =>
                    handleChange("animationRequired", val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Accommodation*/}
              <div className="space-y-2">
                <Label htmlFor="accommodation">Accommodation</Label>
                <Select
                  onValueChange={(val) => handleChange("accommodation", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Accommodation" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.accommodation.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Travel, local stay, lodging boarding provided by Hindalco */}
              <div className="space-y-2">
                <Label htmlFor="isPerks">
                  Travel, local stay, lodging boarding provided by Hindalco
                </Label>
                <Select onValueChange={(val) => handleChange("isPerks", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Hardware Require ( VR Headset ) */}
              <div className="space-y-2">
                <Label htmlFor="hardwareRequired">
                  Hardware Require ( VR Headset )
                </Label>
                <Select
                  onValueChange={(val) => handleChange("hardwareRequired", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* PC requirement (provide specs in our sheet) */}
              <div className="space-y-2">
                <Label htmlFor="pcrequirement">
                  PC requirement (provide specs in our sheet)
                </Label>
                <Select
                  onValueChange={(val) => handleChange("pcRequirement", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* AMC*/}
              <div className="space-y-2">
                <Label htmlFor="amc">AMC</Label>
                <Select onValueChange={(val) => handleChange("amc", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Interactions */}
              <div className="space-y-2">
                <Label htmlFor="interactions"> User Interactions</Label>
                <Select
                  onValueChange={(val) => handleChange("interactions", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Interaction Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.interactions.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Any integration required with any third party application such as IoT, Maintenance database, SCRUM etc*/}
              <div className="space-y-2">
                <Label htmlFor="anyThirdParty">
                  Any integration required with any third party application such
                  as IoT, Maintenance database, SCRUM etc
                </Label>
                <Select
                  onValueChange={(val) => handleChange("anyThirdParty", val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes / No" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.yesNo.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Support */}
              <div className="space-y-5">
                <Label htmlFor="support">Support</Label>
                <Select onValueChange={(val) => handleChange("support", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Support Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.support.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Textures and Materials */}
              <div className="space-y-2">
                <Label htmlFor="textures">Textures and Materials</Label>
                <Select onValueChange={(val) => handleChange("textures", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Texture Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.textures.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Lighting */}
              <div className="space-y-2">
                <Label htmlFor="lighting">Lighting</Label>
                <Select onValueChange={(val) => handleChange("lighting", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Lighting Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.lighting.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Materials */}
              <div className="space-y-2">
                <Label htmlFor="materials">Materials</Label>
                <Select onValueChange={(val) => handleChange("materials", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Material Quality" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.materials.map((val, idx) => (
                      <SelectItem key={idx} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button type="submit" className="w-full md:w-auto px-8 py-2">
                Submit Configuration
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
