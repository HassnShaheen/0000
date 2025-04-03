"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  demoUrl: string;
  demoType: "video" | "gif" | "image";
  demoThumbnail: string;
}

export default function FeatureCard({
  title = "CAD to Revit Conversion",
  description = "Automatically convert CAD files to Revit elements with precise geometry and properties preservation.",
  icon = <ArrowRight className="h-6 w-6" />,
  demoUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  demoType = "image",
  demoThumbnail = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=60",
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Card
      className={`w-full max-w-[350px] h-[400px] overflow-hidden transition-all duration-300 bg-card ${isHovered ? "shadow-lg scale-[1.02]" : "shadow-md"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="opacity-0 transition-opacity duration-300 hover:bg-primary/10 hover:text-primary"
            style={{ opacity: isHovered ? 0.9 : 0 }}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 relative">
        <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          <img
            src={demoThumbnail}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300"
                >
                  <Play className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>{title} Demo</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  {demoType === "video" && (
                    <video controls className="w-full rounded-md">
                      <source src={demoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {demoType === "gif" && (
                    <img
                      src={demoUrl}
                      alt={`${title} demo`}
                      className="w-full rounded-md"
                    />
                  )}
                  {demoType === "image" && (
                    <img
                      src={demoUrl}
                      alt={`${title} demo`}
                      className="w-full rounded-md"
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </AspectRatio>
      </CardContent>
      <CardFooter className="p-6 pt-4">
        <Button
          variant="outline"
          className={`w-full transition-all duration-300 ${isHovered ? "bg-primary text-primary-foreground" : ""}`}
          onClick={() => setDialogOpen(true)}
        >
          View Demo
        </Button>
      </CardFooter>
    </Card>
  );
}
