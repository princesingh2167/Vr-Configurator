'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MultiSelectProps {
  options: string[];
  placeholder?: string;
  onChange?: (selected: string[]) => void;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder = 'Select options',
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    const updated = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    setSelected(updated);
    onChange?.(updated);
  };

  const clearAll = () => {
    setSelected([]);
    onChange?.([]);
  };

  return (
    <div className="w-full space-y-4 border p-6 rounded-lg bg-white">
      {/* Header: Selected Info / Clear All */}
      <div className="flex justify-between items-center">
        {selected.length === 0 ? (
          <span className="text-muted-foreground text-sm">{placeholder}</span>
        ) : (
          <div className="flex flex-wrap gap-2">
            {selected.map((val) => (
              <Badge key={val} variant="secondary" className="px-2 py-1 text-sm">
                {val}
              </Badge>
            ))}
          </div>
        )}

        {selected.length > 0 && (
          <button
            onClick={clearAll}
            className="text-xs text-red-500 hover:text-red-700 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Tab-style Multi-select Buttons */}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className={cn(
                'px-4 py-2 text-sm rounded-full border transition-all duration-150',
                isSelected
                  ? 'bg-blue-600 text-white border-transparent shadow hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};
