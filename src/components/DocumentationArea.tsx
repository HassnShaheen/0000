"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Book, Code, FileText, Lightbulb, Zap } from "lucide-react";

const DocumentationArea = () => {
  const [activeTab, setActiveTab] = useState("api");

  const codeExamples = {
    csharp: `// Initialize the CAD to Revit converter
using RevitCADConverter;

public Result ConvertCADToRevit(string cadFilePath)
{
    // Create a new converter instance
    var converter = new CADConverter();
    
    // Configure conversion settings
    converter.Settings.PreserveLayerProperties = true;
    converter.Settings.ConvertToFamilies = true;
    converter.Settings.ImportLinework = true;
    
    // Execute the conversion
    return converter.Convert(cadFilePath);
}`,
    python: `# Import the Revit API and CAD converter
import clr
clr.AddReference("RevitAPI")
clr.AddReference("RevitCADConverter")

from RevitCADConverter import CADConverter

# Initialize converter
converter = CADConverter()

# Configure settings
converter.Settings.PreserveLayerProperties = True
converter.Settings.ConvertToFamilies = True
converter.Settings.ImportLinework = True

# Execute conversion
result = converter.Convert(cad_file_path)`,
    json: `{
  "conversionSettings": {
    "preserveLayerProperties": true,
    "convertToFamilies": true,
    "importLinework": true,
    "mappingRules": [
      {
        "cadLayer": "WALL",
        "revitCategory": "Walls",
        "revitFamily": "Basic Wall",
        "revitType": "Generic - 8\""
      },
      {
        "cadLayer": "DOOR",
        "revitCategory": "Doors",
        "revitFamily": "Single-Flush",
        "revitType": "36\" x 84\""
      }
    ]
  }
}`,
  };

  const apiDocs = [
    {
      title: "CADConverter Class",
      description: "The main class for converting CAD files to Revit elements.",
      methods: [
        {
          name: "Convert",
          signature: "Result Convert(string filePath)",
          description: "Converts a CAD file to Revit elements.",
          parameters: [
            {
              name: "filePath",
              type: "string",
              description: "Path to the CAD file.",
            },
          ],
          returns: "Result object containing conversion information.",
        },
        {
          name: "BatchConvert",
          signature: "BatchResult BatchConvert(string[] filePaths)",
          description: "Converts multiple CAD files to Revit elements.",
          parameters: [
            {
              name: "filePaths",
              type: "string[]",
              description: "Array of paths to CAD files.",
            },
          ],
          returns:
            "BatchResult object containing conversion information for each file.",
        },
        {
          name: "LoadMappingRules",
          signature: "void LoadMappingRules(string jsonFilePath)",
          description: "Loads mapping rules from a JSON file.",
          parameters: [
            {
              name: "jsonFilePath",
              type: "string",
              description: "Path to the JSON file containing mapping rules.",
            },
          ],
          returns: "void",
        },
      ],
    },
    {
      title: "ConversionSettings Class",
      description: "Class for configuring conversion settings.",
      methods: [
        {
          name: "SetDefaultMappingRules",
          signature: "void SetDefaultMappingRules()",
          description: "Sets default mapping rules for common CAD layers.",
          parameters: [],
          returns: "void",
        },
        {
          name: "AddMappingRule",
          signature:
            "void AddMappingRule(string cadLayer, string revitCategory, string revitFamily, string revitType)",
          description: "Adds a new mapping rule for a CAD layer.",
          parameters: [
            {
              name: "cadLayer",
              type: "string",
              description: "CAD layer name.",
            },
            {
              name: "revitCategory",
              type: "string",
              description: "Revit category name.",
            },
            {
              name: "revitFamily",
              type: "string",
              description: "Revit family name.",
            },
            {
              name: "revitType",
              type: "string",
              description: "Revit type name.",
            },
          ],
          returns: "void",
        },
      ],
    },
  ];

  const tutorials = [
    {
      title: "Getting Started",
      description: "Learn how to install and set up the plugin.",
      steps: [
        "Download the plugin from the website",
        "Close all Revit instances",
        "Run the installer and follow the instructions",
        "Launch Revit and verify the plugin is installed",
        "Configure your preferences in the plugin settings",
      ],
    },
    {
      title: "Basic Conversion",
      description: "Learn how to convert a simple CAD file to Revit elements.",
      steps: [
        "Open Revit and create a new project",
        "Click on the 'CAD to Revit' button in the Add-Ins tab",
        "Select the CAD file you want to convert",
        "Choose the conversion settings",
        "Click 'Convert' and wait for the process to complete",
        "Review the converted elements in your Revit project",
      ],
    },
    {
      title: "Advanced Mapping",
      description:
        "Learn how to create custom mapping rules for complex projects.",
      steps: [
        "Open the plugin settings",
        "Navigate to the 'Mapping Rules' tab",
        "Click 'Create New Rule'",
        "Enter the CAD layer name and corresponding Revit category, family, and type",
        "Save the rule and apply it to your conversion",
        "Test the rule with a sample CAD file",
      ],
    },
  ];

  const faqs = [
    {
      question: "What CAD file formats are supported?",
      answer:
        "Our plugin supports DWG, DXF, and DGN file formats from AutoCAD and MicroStation.",
    },
    {
      question: "Can I convert multiple CAD files at once?",
      answer:
        "Yes, our plugin supports batch conversion of multiple CAD files. Simply select multiple files in the file picker or use the batch conversion feature.",
    },
    {
      question: "How accurate is the geometry conversion?",
      answer:
        "Our plugin uses advanced algorithms to ensure highly accurate geometry conversion. In most cases, the converted geometry will be identical to the original CAD geometry.",
    },
    {
      question:
        "Can I customize how CAD layers are mapped to Revit categories?",
      answer:
        "Yes, you can create custom mapping rules to define how CAD layers are mapped to Revit categories, families, and types. This gives you full control over the conversion process.",
    },
    {
      question: "Does the plugin work with all versions of Revit?",
      answer:
        "The plugin is compatible with Revit 2021 and newer versions. We regularly update the plugin to ensure compatibility with the latest Revit releases.",
    },
    {
      question: "Is there a limit to the size of CAD files I can convert?",
      answer:
        "While there is no hard limit, very large CAD files may require more processing time and memory. We recommend splitting extremely large files into smaller parts for optimal performance.",
    },
  ];

  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
      id="documentation"
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
            Documentation & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides, API documentation, and examples to help you
            get the most out of our plugin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Browse our resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button
                      variant={activeTab === "api" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("api")}
                    >
                      <Code className="mr-2 h-4 w-4" />
                      API Reference
                    </Button>
                    <Button
                      variant={activeTab === "tutorials" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("tutorials")}
                    >
                      <Book className="mr-2 h-4 w-4" />
                      Tutorials
                    </Button>
                    <Button
                      variant={activeTab === "code" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("code")}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Code Examples
                    </Button>
                    <Button
                      variant={activeTab === "faq" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("faq")}
                    >
                      <Lightbulb className="mr-2 h-4 w-4" />
                      FAQ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>
                      {activeTab === "api" && "API Reference"}
                      {activeTab === "tutorials" && "Tutorials"}
                      {activeTab === "code" && "Code Examples"}
                      {activeTab === "faq" && "Frequently Asked Questions"}
                    </CardTitle>
                    <Badge variant="outline" className="lightning-border">
                      <Zap className="h-3 w-3 mr-1" />
                      v2.4.1
                    </Badge>
                  </div>
                  <CardDescription>
                    {activeTab === "api" &&
                      "Explore our comprehensive API documentation"}
                    {activeTab === "tutorials" &&
                      "Step-by-step guides to help you get started"}
                    {activeTab === "code" &&
                      "Ready-to-use code snippets for common tasks"}
                    {activeTab === "faq" &&
                      "Answers to commonly asked questions"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {activeTab === "api" && (
                    <div className="space-y-8">
                      {apiDocs.map((api, index) => (
                        <div key={index} className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold">
                              {api.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {api.description}
                            </p>
                          </div>
                          <div className="space-y-4">
                            {api.methods.map((method, methodIndex) => (
                              <div
                                key={methodIndex}
                                className="p-4 rounded-lg border bg-card/50"
                              >
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span className="font-mono text-primary font-semibold">
                                    {method.name}
                                  </span>
                                  <Badge
                                    variant="outline"
                                    className="font-mono text-xs"
                                  >
                                    {method.signature}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {method.description}
                                </p>

                                {method.parameters.length > 0 && (
                                  <div className="mt-2">
                                    <h4 className="text-sm font-semibold mb-1">
                                      Parameters:
                                    </h4>
                                    <ul className="space-y-1">
                                      {method.parameters.map(
                                        (param, paramIndex) => (
                                          <li
                                            key={paramIndex}
                                            className="text-sm"
                                          >
                                            <span className="font-mono text-primary-foreground/70">
                                              {param.name}
                                            </span>
                                            <span className="text-muted-foreground">
                                              {" "}
                                              ({param.type}):{" "}
                                            </span>
                                            <span>{param.description}</span>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                )}

                                <div className="mt-2">
                                  <h4 className="text-sm font-semibold mb-1">
                                    Returns:
                                  </h4>
                                  <p className="text-sm">{method.returns}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          {index < apiDocs.length - 1 && <Separator />}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "tutorials" && (
                    <div className="space-y-6">
                      {tutorials.map((tutorial, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg border bg-card/50"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {tutorial.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {tutorial.description}
                          </p>
                          <div className="space-y-2">
                            {tutorial.steps.map((step, stepIndex) => (
                              <div
                                key={stepIndex}
                                className="flex items-start gap-3"
                              >
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs font-medium text-primary">
                                    {stepIndex + 1}
                                  </span>
                                </div>
                                <p>{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "code" && (
                    <div className="space-y-6">
                      <Tabs defaultValue="csharp">
                        <TabsList className="w-full justify-start">
                          <TabsTrigger value="csharp">C#</TabsTrigger>
                          <TabsTrigger value="python">Python</TabsTrigger>
                          <TabsTrigger value="json">JSON Config</TabsTrigger>
                        </TabsList>
                        <TabsContent value="csharp" className="mt-4">
                          <div className="p-4 bg-slate-950 rounded-lg overflow-x-auto">
                            <pre className="text-green-400 font-mono text-sm">
                              {codeExamples.csharp}
                            </pre>
                          </div>
                        </TabsContent>
                        <TabsContent value="python" className="mt-4">
                          <div className="p-4 bg-slate-950 rounded-lg overflow-x-auto">
                            <pre className="text-blue-400 font-mono text-sm">
                              {codeExamples.python}
                            </pre>
                          </div>
                        </TabsContent>
                        <TabsContent value="json" className="mt-4">
                          <div className="p-4 bg-slate-950 rounded-lg overflow-x-auto">
                            <pre className="text-yellow-400 font-mono text-sm">
                              {codeExamples.json}
                            </pre>
                          </div>
                        </TabsContent>
                      </Tabs>
                      <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                        <Lightbulb className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <p className="text-sm">
                          These code examples demonstrate basic usage of our
                          API. For more advanced examples, check out our GitHub
                          repository.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "faq" && (
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationArea;
