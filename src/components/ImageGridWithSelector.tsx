"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MultiSelect } from "@/components/MultiSelect";

type CarouselItem = {
  src: string | StaticImageData;
  value: string;
};

interface ImageGridWithSelectorProps {
  images: CarouselItem[];
  title?: string;
  description?: string;
  onSelect?: (selected: CarouselItem | CarouselItem[]) => void;
  selectedValue?: string | string[];
  multiSelect: boolean;
  isVideo?: boolean;
  showMediaOnYesOnly?: boolean; // NEW PROP
}

const ImageGridWithSelector: React.FC<ImageGridWithSelectorProps> = ({
  images,
  title,
  description,
  onSelect,
  selectedValue,
  multiSelect,
  isVideo = false,
  showMediaOnYesOnly = false,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Removed multiSelected state as it's not used elsewhere
  const hasImages = images.some((img) => img.src); // check if any image has a src

  // Determine if this is a Yes/No option
  const isYesNo =
    images.length === 2 &&
    images[0].value === "Yes" &&
    images[1].value === "No";

  useEffect(() => {
    if (multiSelect) {
      // No need to set state, just rely on selectedValue
    } else {
      const index = images.findIndex((img) => img.value === selectedValue);
      if (index >= 0) {
        setSelectedIndex(index);
      }
    }
  }, [selectedValue, images, multiSelect]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onSelect?.(images[index]);
  };

  const handleMultiSelect = (selected: string[]) => {
    if (onSelect) {
      // Find the CarouselItem objects for the selected values
      const selectedItems = images.filter((img) =>
        selected.includes(img.value)
      );
      onSelect(selectedItems);
    }
  };

  return (
    <div className="w-full p-6">
      <div className="w-full max-w-screen-xl mx-auto space-y-4">
        <div className="flex gap-4 items-baseline">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          <Tooltip>
            <TooltipTrigger asChild>
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="relative top-[0.1em]"
              />
            </TooltipTrigger>
            <TooltipContent>
              {description && <p>{description}</p>}
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* LEFT: Images/Video Display for Yes/No options */}
          {showMediaOnYesOnly &&
            isYesNo &&
            images[0].src &&
            images[0].src !== "" && (
              <div className="w-full md:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="rounded-xl overflow-hidden border">
                    {isVideo ? (
                      <video
                        src={
                          typeof images[0].src === "string" ? images[0].src : ""
                        }
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          width: "100%",
                          height: "12rem",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    ) : (
                      <Image
                        src={images[0].src}
                        alt={images[0].value}
                        loading="lazy"
                        width={400}
                        height={300}
                        className="w-full h-40 object-cover"
                      />
                    )}
                  </Card>
                </div>
              </div>
            )}

          {/* LEFT: Images Grid (default, not for Yes/No with showMediaOnYesOnly) */}
          {!showMediaOnYesOnly && hasImages && (
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((img, idx) => (
                  <Card
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className={cn(
                      "cursor-pointer rounded-xl overflow-hidden transition-all border",
                      selectedIndex === idx
                        ? "!border-blue-700"
                        : "hover:border-gray-400"
                    )}
                  >
                    {img.src ? (
                      isVideo ? (
                        <video
                          src={typeof img.src === "string" ? img.src : ""}
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{
                            width: "100%",
                            height: "12rem",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                      ) : (
                        <Image
                          src={img.src}
                          alt={img.value}
                          loading="lazy"
                          width={400}
                          height={300}
                          className="w-full h-40 object-cover"
                        />
                      )
                    ) : (
                      <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                    <div className="p-3 text-sm md:text-lg font-medium ">
                      {img.value.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* RIGHT: Selector Area */}
          <div
            className={cn(
              "space-y-4",
              (hasImages && !showMediaOnYesOnly) ||
                (showMediaOnYesOnly && isYesNo)
                ? "w-full md:w-1/3"
                : "w-full"
            )}
          >
            {multiSelect ? (
              <MultiSelect
                options={images.map((img) => img.value)}
                placeholder={title || "Select options"}
                onChange={handleMultiSelect}
              />
            ) : (
              images.map((img, idx) => (
                <Card
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={cn(
                    "cursor-pointer rounded-xl p-4 border transition-all",
                    selectedIndex === idx
                      ? "!border-blue-700"
                      : "hover:border-gray-400"
                  )}
                >
                  <p className="font-medium text-sm">
                    {img.value.includes(":")
                      ? img.value.split(":")[0].trim()
                      : img.value}
                  </p>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGridWithSelector;
