"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface MultiSelectProps {
  options: string[];
  placeholder?: string;
  onChange?: (selected: string[]) => void;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder = "Select options",
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggleOption = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    setSelected(newSelected);
    onChange?.(newSelected);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <div className="flex gap-2 flex-wrap text-left">
            {selected.length === 0 ? (
              <span className="text-muted-foreground">{placeholder}</span>
            ) : (
              selected.map((val) => (
                <Badge key={val} variant="secondary">
                  {val}
                </Badge>
              ))
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" max-w-[90vw] !md:max-w-[600px] !lg:max-w-[900px] max-h-60 overflow-y-auto p-2 space-y-1">
        {options.map((option) => (
          <div
            key={option}
            className={cn(
              "flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-accent",
              selected.includes(option) && "bg-accent"
            )}
            onClick={() => toggleOption(option)}
          >
            <span className="text-sm">{option}</span>
            {selected.includes(option) && (
              <Check className="w-4 h-4 text-blue-700" />
            )}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
