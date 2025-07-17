"use client";

import { useState } from "react";
import ImageCarouselWithSelector from "@/components/ImageCarouselWithSelector";
import { Button } from "@/components/ui/button";
import options from "@/lib/options"; // your updated options object (exported as shown earlier)

const VrCalculator = () => {
  // Initialize form state with the first value of each option
  const initialFormState = Object.fromEntries(
    Object.entries(options).map(([key, config]) => [key, config.options[0].value])
  );

  const [form, setForm] = useState<Record<string, string>>(initialFormState);

  const handleSelect = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Submission:", Object.keys(form));
  };

  return (
    <div className="space-y-10 p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center">
            VR Calculator
          </h1>
      {Object.entries(options).map(([key, config]) => (
        <ImageCarouselWithSelector
          key={key}
          title={config.title}
          images={config.options}
          onSelect={(selected) => handleSelect(key, selected.value)}
        />
      ))}

      <div className="flex justify-end pt-6">
        <Button onClick={handleSubmit} className="px-6 py-3 text-lg">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default VrCalculator;
