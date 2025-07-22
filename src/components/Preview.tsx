"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PreviewProps {
  previewData: Record<string, unknown>;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const formatValue = (value: unknown) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  return value;
};

export const Preview: React.FC<PreviewProps> = ({ previewData, open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Preview Specification</DialogTitle>
          <DialogDescription>Here is a summary of your selected configuration:</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 mt-4">
          {Object.entries(previewData).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-b pb-2"
            >
              <span className="font-medium text-sm text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <span className="text-sm text-gray-800 mt-1 sm:mt-0 sm:text-right break-words max-w-md">
                {formatValue(value) as React.ReactNode}
              </span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};