"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play, Zap, X } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        videoRef.current &&
        !videoRef.current.contains(event.target as Node)
      ) {
        setShowVideo(false);
      }
    };

    if (showVideo) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showVideo]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute top-1/4 left-1/4 w-1 h-40 bg-accent/80 rotate-45 animate-lightning blur-sm" />
        <div className="absolute top-1/3 right-1/3 w-1 h-60 bg-accent/80 -rotate-45 animate-lightning blur-sm" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-40 bg-accent/80 rotate-45 animate-lightning blur-sm" />
        <div className="absolute top-1/2 left-1/2 w-2 h-80 bg-orange-500/60 rotate-12 animate-lightning blur-md" />
        <div className="absolute top-2/3 right-1/2 w-2 h-60 bg-yellow-500/60 -rotate-12 animate-lightning blur-md" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-40 bg-red-500/60 rotate-45 animate-lightning blur-md" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-2">
              <Zap className="h-4 w-4 mr-2 animate-pulse" />
              <span>Convert CAD files to Revit in one click</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight gradient-text text-left">
              Convert CAD files to Revit
              <span className="block">with one click</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-[600px] text-left">
              Our plugin uses advanced AI to convert CAD files into native Revit
              elements while preserving geometry and properties, saving you
              hours of manual work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                size="lg"
                className="group lightning-border bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/HassnShaheen/YourRepo/releases/download/v1.0.0/PluginUpdate.rar")
                }
              >
                Download Now
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group"
                onClick={() => setShowVideo(true)}
              >
                Watch Demo
                <span className="ml-2 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play className="h-3 w-3" />
                </span>
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4">
              <span>
                Trusted by over 10,000+ architects and civil engineers
              </span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                    alt={`User ${i}`}
                    className="w-8 h-8 rounded-full border-2 border-background"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: scrollY * -0.1 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur-xl opacity-50 animate-pulse-slow"></div>
              <div className="relative bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
                <div className="p-1">
                  <img
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
                    alt="CAD to Revit Conversion"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">
                        Before: CAD Drawing
                      </div>
                      <div className="text-xs text-muted-foreground">
                        2D Lines & Arcs
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        After: Revit Model
                      </div>
                      <div className="text-xs text-muted-foreground">
                        3D BIM Elements
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-muted rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute top-6 right-6 px-3 py-1.5 bg-primary/90 text-primary-foreground rounded-md text-sm font-medium animate-float shadow-lg">
                  <span className="flex items-center">
                    <Zap className="h-3.5 w-3.5 ml-1.5" />
                    Smart Conversion
                  </span>
                </div>
                <div
                  className="absolute -top-6 -left-6 w-20 h-20 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border animate-float"
                  style={{ animationDelay: "0.8s" }}
                >
                  <img
                    src="https://seeklogo.com/images/A/autodesk-revit-logo-C3F5E6D48D-seeklogo.com.png"
                    alt="Revit Logo"
                    className="w-12 h-auto"
                  />
                </div>
                <div
                  className="absolute top-1/2 right-1/2 w-16 h-16 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border animate-float"
                  style={{ animationDelay: "1.2s" }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/AutoCAD_Logo.svg/1200px-AutoCAD_Logo.svg.png"
                    alt="AutoCAD Logo"
                    className="w-10 h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div
            ref={videoRef}
            className="relative w-full max-w-4xl bg-background rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/20 hover:bg-background/40"
                onClick={() => setShowVideo(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WtLZa3-qZPM?si=BlGgMBZoKJn7Pa6h&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
