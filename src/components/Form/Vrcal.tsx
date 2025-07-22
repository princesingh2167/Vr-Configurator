"use client";

import { useState } from "react";
import ImageGridWithSelector from "@/components/ImageGridWithSelector";
import { Button } from "@/components/ui/button";
import options from "@/lib/data"; // assumes your full config object is here
import { Preview } from "../Preview";
import Submit from "../Submit";

// Type for config with optional multiSelect
interface OptionConfig {
  title: string;
  options: string[];
  images?: string[];
  videos?: string[];
  description?: string;
  isVideo?: boolean;
  multiSelect?: boolean;
}

const VrCal = () => {
  // Initialize form state
  const initialFormState = Object.fromEntries(
    Object.entries(options).map(([key, config]) => [
      key,
      (config as OptionConfig).multiSelect
        ? [config.options?.[0] ?? ""]
        : config.options?.[0] ?? "",
    ])
  );

  const [form, setForm] =
    useState<Record<string, string | string[]>>(initialFormState);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [submitOpen, setSubmitOpen] = useState(false);

  const handleSelect = (key: string, selected: unknown) => {
    if (Array.isArray(selected)) {
      setForm((prev) => ({
        ...prev,
        [key]: selected.map((item) => (item as { value: string }).value),
      }));
    } else if (
      selected &&
      typeof selected === "object" &&
      "value" in selected
    ) {
      setForm((prev) => ({
        ...prev,
        [key]: (selected as { value: string }).value,
      }));
    }
  };

  const handleSubmit = () => {
    console.log("Form Submission:", form);
    setSubmitOpen(true);
    // TODO: POST to server or handle save
  };

  return (
    <div className="space-y-10 p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center">
        VR Project Configurator
      </h1>

      <div className="border border-slate-200 rounded-xl p-4">
        {Object.entries(options).map(([key, config]) => {
          const isVideo = "isVideo" in config && config.isVideo;
          const optionMedia = config.options.map((value, i) => ({
            value,
            src: isVideo
              ? config.videos?.[i] ?? ""
              : "images" in config
              ? config.images?.[i] ?? ""
              : "",
          }));
          // Determine if this is a Yes/No option with media
          const isYesNoWithMedia =
            config.options.length === 2 &&
            config.options[0] === "Yes" &&
            config.options[1] === "No" &&
            ((isVideo &&
              config.videos &&
              config.videos[0] &&
              config.videos[0] !== "") ||
              ("images" in config &&
                config.images &&
                config.images[0] &&
                config.images[0] !== ""));

          return (
            <ImageGridWithSelector
              key={key}
              title={config.title}
              description={config?.description}
              images={optionMedia}
              onSelect={(selected) => handleSelect(key, selected)}
              selectedValue={form[key]}
              multiSelect={Boolean((config as OptionConfig).multiSelect)}
              isVideo={isVideo}
              showMediaOnYesOnly={!!isYesNoWithMedia}
            />
          );
        })}
        <div className="flex justify-end pt-6 gap-4">
          <Button
            onClick={() => setPreviewOpen(true)} // ✅ This line was missing
            className="px-6 py-3 text-lg cursor-pointer"
          >
            Preview
          </Button>
          <Button
            onClick={handleSubmit}
            className="px-6 py-3 text-lg cursor-pointer"
          >
            Submit
          </Button>
        </div>
      </div>

      {/* Preview Modal */}
      <Preview previewData={form} open={previewOpen} setOpen={setPreviewOpen} />
      <Submit open={submitOpen} setOpen={setSubmitOpen} />
    </div>
  );
};

export default VrCal;
