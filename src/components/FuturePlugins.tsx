"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Lightbulb, Zap, Rocket, Puzzle } from "lucide-react";

interface FuturePluginProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "coming-soon" | "in-development" | "planned";
  estimatedRelease?: string;
}

const FuturePlugins = () => {
  const futurePlugins: FuturePluginProps[] = [
    {
      title: "Revit Family Generator",
      description:
        "AI-powered tool to automatically generate Revit families from sketches or descriptions",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      status: "in-development",
      estimatedRelease: "Q3 2025",
    },
    {
      title: "BIM Clash Detector Pro",
      description:
        "Advanced clash detection with automatic resolution suggestions and reporting",
      icon: <Zap className="h-8 w-8 text-primary" />,
      status: "coming-soon",
      estimatedRelease: "Q4 2025",
    },
    {
      title: "Revit Cloud Collaboration",
      description:
        "Real-time collaboration tools for Revit with chat, annotations, and version control",
      icon: <Rocket className="h-8 w-8 text-primary" />,
      status: "planned",
      estimatedRelease: "Q1 2026",
    },
    {
      title: "Structural Analysis Integration",
      description:
        "Direct integration with structural analysis software for seamless workflow",
      icon: <Puzzle className="h-8 w-8 text-primary" />,
      status: "planned",
      estimatedRelease: "Q2 2026",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "coming-soon":
        return (
          <Badge className="bg-amber-500 text-white">
            <Clock className="h-3 w-3 mr-1" /> Coming Soon
          </Badge>
        );
      case "in-development":
        return (
          <Badge className="bg-green-500 text-white">
            <Zap className="h-3 w-3 mr-1" /> In Development
          </Badge>
        );
      case "planned":
        return (
          <Badge className="bg-blue-500 text-white">
            <Lightbulb className="h-3 w-3 mr-1" /> Planned
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
      id="future-plugins"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 gradient-text inline-block">
            Future Plugins & Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exciting new features and plugins coming to our Revit ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {futurePlugins.map((plugin, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {plugin.icon}
                    </div>
                    {getStatusBadge(plugin.status)}
                  </div>
                  <CardTitle className="mt-4">{plugin.title}</CardTitle>
                  <CardDescription>{plugin.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Estimated Release:</span>{" "}
                      {plugin.estimatedRelease}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Learn more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button className="lightning-border">
            <Sparkles className="mr-2 h-4 w-4" />
            Subscribe for Updates
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturePlugins;
