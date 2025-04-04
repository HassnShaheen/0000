"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Check,
  Download,
  HelpCircle,
  Info,
  Laptop,
  Server,
  Shield,
  X,
} from "lucide-react";

const DownloadSection = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState("requirements");

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
  };

  const installationSteps = [
    {
      title: "Close Revit from Task Manager 🛑",
      description:
        "Ensure all Revit instances are fully closed from Task Manager before proceeding.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    },
    {
      title: "Run the installer ⚙️",
      description:
        "Double-click the .exe installer file and follow the setup instructions to install the plugin.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      title: "Open Revit and find 'CAD 2 Revit' tab 🧩",
      description:
        "Launch Revit. You will see a new tab added named 'CAD 2 Revit' with plugin tools inside.",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80",
    },
    {
      title: "Activate the Plugin 🔐",
      description:
        "All buttons will be disabled except the 'Activation' button. Click it to get your activation code and send it to us via WhatsApp, LinkedIn, Facebook, or YouTube comments.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    },
    {
      title: "Wait for Activation & Kindly Share ❤️",
      description:
        "Once we receive your code, we’ll send back your activation key shortly. Meanwhile, please consider sharing our plugin posts on LinkedIn, Facebook & YouTube to support our work. It really helps! 🙏",
      image:
        "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=600&q=80",
    },
  ];

  return (
    <section id="download" className="w-full py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-fade-in">
            Download & Installation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl animate-slide-in">
            Get started with our powerful CAD-to-Revit conversion plugin in
            minutes. Simple installation, automatic updates, and seamless
            integration with your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="col-span-1 lg:col-span-1 shadow-lg border-0">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Download Now</CardTitle>
              <CardDescription>
                Beta Version: <strong>1.0.0.3</strong>{" "}
                <span className="mx-2">•</span> Released: 05/04/2025
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Server className="h-5 w-5 text-slate-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    116 MB
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800 animate-pulse"
                >
                  Beta Version
                </Badge>
              </div>

              {isDownloading && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {downloadProgress}%
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {Math.round((downloadProgress / 100) * 116)} MB / 116 MB
                    </span>
                  </div>
                  <Progress
                    value={downloadProgress}
                    className="h-2 animate-pulse"
                  />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <a
                href="https://github.com/HassnShaheen/YourRepo/releases/download/v1.0.0/El3atawla.Setup.exe"
                download
                className="w-full"
              >
                <Button className="w-full" size="lg" onClick={handleDownload}>
                  <span className="flex items-center">
                    Download <Download className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
