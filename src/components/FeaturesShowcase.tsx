"use client";

import React from "react";
import { PlayCircle } from "lucide-react";

interface PluginFeatureProps {
  title: string;
  description: React.ReactNode;
  video?: string;
  thumbnail?: string;
}

const PluginFeatures = () => {
  const features: PluginFeatureProps[] = [
    {
      title: "CAD to Revit Grids Conversion",
      description:
        "Easily convert CAD X-lines to native Revit grids with a single click.",
      video: "https://youtu.be/WtLZa3-qZPM?si=BlGgMBZoKJn7Pa6h",
      thumbnail: "https://img.youtube.com/vi/WtLZa3-qZPM/maxresdefault.jpg",
    },
    {
      title: "Grid Renaming Tool",
      description:
        "Rename all Revit grids flexibly as per your desired naming convention.",
      video: "https://youtu.be/WtLZa3-qZPM?si=BlGgMBZoKJn7Pa6h",
      thumbnail: "https://img.youtube.com/vi/WtLZa3-qZPM/maxresdefault.jpg",
    },
    {
      title: "AI-Based Level Modeling",
      description:
        "Automatically detect and model levels from CAD drawings using AI.",
      video: "https://youtu.be/p-XUUXwkJ-0?si=12bgbGN-EriM8Mc4",
      thumbnail: "https://img.youtube.com/vi/p-XUUXwkJ-0/maxresdefault.jpg",
    },
    {
      title: "Beam Modeling – 3 Flexible Methods",
      description: (
        <ul className="list-disc pl-4 text-sm">
          <li>
            Using closest text to define beam types
            <a
              href="https://youtu.be/GRBmjOEP-4Q?si=Wyu4mLPKWRMDC64_"
              target="_blank"
              className="text-blue-500 underline ml-2"
            >
              Watch
            </a>
          </li>
          <li>
            Using beam schedule tables
            <a
              href="https://youtu.be/5-I6cvuq6MA?si=zLyCBp7L9MI_pzpO"
              target="_blank"
              className="text-blue-500 underline ml-2"
            >
              Watch
            </a>
          </li>
          <li>
            Using depth only without any text or table
            <a
              href="https://youtu.be/0YIgeLE7uTo?si=-Rko3HWbQK4LUw44"
              target="_blank"
              className="text-blue-500 underline ml-2"
            >
              Watch
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: "AI-Based Foundation Modeling",
      description:
        "Model foundations directly from CAD tables without Excel – first of its kind!",
      video: "https://youtu.be/1o9JTh4xqqM?si=-p1VxKfHfF5t-HLJ",
      thumbnail: "https://img.youtube.com/vi/1o9JTh4xqqM/maxresdefault.jpg",
    },
    {
      title: "Column Modeling by Level or Height",
      description:
        "Quickly model all columns based on selected levels or custom heights.",
      video: "https://youtu.be/BA3jRZKLAjQ?si=DmMxPHwtQukADK56",
      thumbnail: "https://img.youtube.com/vi/BA3jRZKLAjQ/maxresdefault.jpg",
    },
    {
      title: "Auto Dimension for Grids and Levels",
      description:
        "Automatically generate dimensions for all grids and levels in your model.",
      video: "https://youtu.be/jOu19Zmo6sA?si=VGnheOsb8koierte",
      thumbnail: "https://img.youtube.com/vi/jOu19Zmo6sA/maxresdefault.jpg",
    },
    {
      title: "Line-Based Dimensioning Tool",
      description:
        "Create dimensions along any line crossing elements in the model.",
      video: "https://youtu.be/Xj0FUxA3N9c?si=Vy_aBDQwXJXQXQZP",
      thumbnail: "https://img.youtube.com/vi/Xj0FUxA3N9c/maxresdefault.jpg",
    },
    {
      title: "CAD Cleanup & Overlap Detection",
      description:
        "Detect and highlight overlapping lines in messy CAD drawings – choose what to delete.",
      video: "https://youtu.be/KZvVw6TuBYk?si=Vy_aBDQwXJXQXQZP",
      thumbnail: "https://img.youtube.com/vi/KZvVw6TuBYk/maxresdefault.jpg",
    },
    {
      title: "Full Auto-Update System",
      description:
        "Always stay updated with the latest plugin features and improvements.",
      video: "#download",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 bg-background text-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Explore Plugin Features</h2>
        <p className="text-muted-foreground text-lg mb-10">
          El 3atawla Plugin offers a complete CAD to Revit tab with powerful
          AI-based tools for automated modeling, cleanup, and dimensioning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6 shadow-md relative"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              {feature.title}
              {feature.video && (
                <a
                  href={feature.video}
                  target="_blank"
                  className="ml-2 text-primary hover:text-primary/80 group relative"
                >
                  <PlayCircle className="h-5 w-5 inline" />
                  {feature.thumbnail && (
                    <div className="absolute -top-32 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                      <img
                        src={feature.thumbnail}
                        alt={feature.title}
                        className="w-48 h-auto rounded-md shadow-lg border border-border"
                      />
                    </div>
                  )}
                </a>
              )}
            </h3>
            <div className="text-sm text-muted-foreground">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PluginFeatures;
