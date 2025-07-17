"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselItem = {
  src: string | StaticImageData;
  value: string;
};

interface ImageCarouselWithSelectorProps {
  images: CarouselItem[];
  title?: string;
  onSelect?: (selected: CarouselItem) => void;
}

const ImageCarouselWithSelector: React.FC<ImageCarouselWithSelectorProps> = ({
  images,
  title,
  onSelect,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = images[selectedIndex];
  const hasImages = images.some((img) => img.src);

  const handlePrev = () => {
    const newIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    onSelect?.(images[newIndex]);
  };

  const handleNext = () => {
    const newIndex =
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    onSelect?.(images[newIndex]);
  };

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onSelect?.(images[index]);
  };

  return (
    <div className="w-full flex justify-center p-6">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row gap-10 items-start justify-center">
        {/* Conditionally render carousel only if there are images with src */}
        {hasImages && (
          <div className="relative w-full md:w-2/3 max-w-xl mx-auto">
            {selected?.src ? (
              <Image
                src={selected.src}
                alt={selected.value}
                width={600}
                height={500}
                className="rounded-xl w-full h-auto object-cover shadow-md"
              />
            ) : (
              <div className="w-full h-[500px] bg-white rounded-xl shadow-md flex items-center justify-center">
                <p className="text-gray-500">No Image</p>
              </div>
            )}

            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Selector Area */}
        <div
          className={cn(
            "w-full space-y-4",
            hasImages ? "md:w-1/3" : "md:w-full"
          )}
        >
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          {images.map((img, idx) => (
            <Card
              key={idx}
              onClick={() => handleSelect(idx)}
              className={cn(
                "cursor-pointer rounded-xl p-5 border transition-all",
                selectedIndex === idx
                  ? "!border-blue-700 shadow-lg"
                  : "hover:border-gray-400"
              )}
            >
              <p className="font-medium text-sm">{img.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselWithSelector;
