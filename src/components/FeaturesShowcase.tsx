"use client";

import React, { useState } from "react";
import { PlayCircle, Youtube } from "lucide-react";

const PluginFeatures = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    "Grids",
    "Levels",
    "Beams",
    "Foundations",
    "Columns",
    "Dimensions",
    "CAD Fix",
    "System",
  ];

  const features = [
    {
      title: "CAD-to-Revit Grid Converter",
      category: "Grids",
      description: "Convert CAD grids to Revit grids with a single click. Save hours of manual work.",
      videoId: "WtLZa3-qZPM",
    },
    {
      title: "Grid Renaming Tool",
      category: "Grids",
      description: "Quickly rename and reorganize your grid system with intelligent naming patterns.",
      videoId: "WtLZa3-qZPM",
    },
    {
      title: "AI-Powered Level Generator",
      category: "Levels",
      description: "Generate building levels intelligently based on your specifications.",
      videoId: "p-XUUXwkJ-0",
    },
    {
      title: "Beams Modeling Tool - Text Based",
      category: "Beams",
      description: "Model beams quickly using text-based inputs for rapid structural development.",
      videoId: "GRBmjOEP-4Q",
    },
    {
      title: "Beams Modeling Tool - Table Based",
      category: "Beams",
      description: "Create multiple beams simultaneously using a powerful table-based interface.",
      videoId: "5-I6cvuq6MA",
    },
    {
      title: "Beams Modeling Tool - Depth Only",
      category: "Beams",
      description: "Quickly model beams with depth parameters for uniform structural elements.",
      videoId: "0YIgeLE7uTo",
    },
    {
      title: "Foundation Modeling Tool - AI Based",
      category: "Foundations",
      description: "Model foundations from CAD tables directly using AI — no Excel needed.",
      videoId: "1o9JTh4xqqM",
    },
    {
      title: "Column Modeling Tool",
      category: "Columns",
      description: "Model columns based on selected level or height settings.",
      videoId: "BA3jRZKLAjQ",
    },
    {
      title: "Auto Dimension for Grids and Levels",
      category: "Dimensions",
      description: "Automatically generate dimensions for drawn grids and levels.",
      videoId: "jOu19Zmo6sA",
    },
    {
      title: "Line-Based Dimension Tool",
      category: "Dimensions",
      description: "Generate dimensions by drawing a line that intersects model elements.",
      videoId: "jOu19Zmo6sA",
    },
    {
      title: "CAD Cleanup & Overlap Fix Tool",
      category: "CAD Fix",
      description: "Detect and highlight overlapping lines in CAD drawings and clean them easily.",
      videoId: "jOu19Zmo6sA",
    },
    {
      title: "Auto Update System",
      category: "System",
      description: "Stay updated with every new release using the built-in auto update feature.",
      videoId: null,
    },
  ];

  const filteredFeatures =
    activeTab === "All"
      ? features
      : features.filter((f) => f.category === activeTab);

  const getVideoUrl = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1`;
  const getThumbnail = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const getYoutubeLink = (id: string) => `https://youtu.be/${id}`;

  return (
    <section className="py-16 px-4 md:px-12 bg-background text-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">Explore Plugin Features</h2>
        <p className="text-muted-foreground text-lg mb-6">
          El 3atawla Plugin provides smart AI-powered tools to automate your CAD to Revit workflow.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 whitespace-nowrap rounded-full border text-sm font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Video popup */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={activeVideo}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setActiveVideo(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-4 shadow-md hover:shadow-lg transition relative"
          >
            {feature.videoId && (
              <img
                src={getThumbnail(feature.videoId)}
                alt="Video thumbnail"
                onClick={() => setActiveVideo(getVideoUrl(feature.videoId!))}
                className="w-full h-40 object-cover rounded-md cursor-pointer mb-4"
              />
            )}
            <h3 className="text-lg font-semibold text-primary mb-1">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
            {feature.videoId && (
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveVideo(getVideoUrl(feature.videoId!))}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
                >
                  <PlayCircle className="w-4 h-4" /> Watch Demo
                </button>
                <a
                  href={getYoutubeLink(feature.videoId)}
                  target="_blank"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700"
                >
                  <Youtube className="w-4 h-4" /> YouTube
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PluginFeatures;
