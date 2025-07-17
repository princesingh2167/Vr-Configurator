"use client";

import { useState } from "react";
import ImageGridWithSelector from "@/components/ImageGridWithSelector";
import { Button } from "@/components/ui/button";
import options from "@/lib/data"; // assumes your full config object is here

// Add a type for config with optional multiSelect
interface OptionConfig {
  title: string;
  options: string[];
  images?: string[];
  description?: string;
  multiSelect?: boolean;
}

const VrCal = () => {
  // Default to the first option per category
  const initialFormState = Object.fromEntries(
    Object.entries(options).map(([key, config]) => [
      key,
      // If multiSelect, default to array, else string
      (config as OptionConfig).multiSelect ? [config.options?.[0] ?? ""] : config.options?.[0] ?? "",
    ])
  );

  const [form, setForm] = useState<Record<string, string | string[]>>(initialFormState);

  const handleSelect = (key: string, selected: unknown) => {
    if (Array.isArray(selected)) {
      // Multi-select: selected is CarouselItem[]
      setForm((prev) => ({ ...prev, [key]: selected.map((item) => (item as { value: string }).value) }));
    } else if (selected && typeof selected === 'object' && 'value' in selected) {
      // Single-select: selected is CarouselItem
      setForm((prev) => ({ ...prev, [key]: (selected as { value: string }).value }));
    }
  };

  const handleSubmit = () => {
    console.log("Form Submission:", form);
    // TODO: Post to server or export as needed
  };

  return (
    <div className="space-y-10 p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center">VR Calculator</h1>

      {Object.entries(options).map(([key, config]) => {
        const optionImages = config.options.map((value, i) => ({
          value,
          src: 'images' in config ? config.images?.[i] ?? "" : "",
        }));

        return (
          <ImageGridWithSelector
            key={key}
            title={config.title}
            description={config?.description}
            images={optionImages}
            onSelect={(selected) => handleSelect(key, selected)}
            selectedValue={form[key]}
            multiSelect={Boolean((config as OptionConfig).multiSelect)}
          />
        );
      })}

      <div className="flex justify-end pt-6">
        <Button onClick={handleSubmit} className="px-6 py-3 text-lg">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default VrCal;
