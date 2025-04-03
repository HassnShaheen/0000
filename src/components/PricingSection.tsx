"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, HelpCircle, Zap } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  billingPeriod: string;
  features: Array<{
    text: string;
    included: boolean;
    tooltip?: string;
  }>;
  highlighted?: boolean;
  badge?: string;
  buttonText: string;
}

const PricingSection = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      description: "Perfect for individual architects and small projects",
      price: "$99",
      billingPeriod: "one-time payment",
      features: [
        { text: "Basic CAD to Revit conversion", included: true },
        { text: "Single user license", included: true },
        { text: "Standard support", included: true },
        { text: "1 year of updates", included: true },
        { text: "Basic mapping rules", included: true },
        {
          text: "Batch processing (up to 5 files)",
          included: false,
          tooltip: "Limited to 5 files per batch",
        },
        { text: "Advanced property mapping", included: false },
        { text: "Custom mapping rules", included: false },
        { text: "Priority support", included: false },
      ],
      buttonText: "Buy Now",
    },
    {
      name: "Professional",
      description: "Ideal for professional architects and design firms",
      price: "$249",
      billingPeriod: "one-time payment",
      features: [
        { text: "Advanced CAD to Revit conversion", included: true },
        { text: "Up to 5 user licenses", included: true },
        { text: "Priority support", included: true },
        { text: "2 years of updates", included: true },
        { text: "Advanced mapping rules", included: true },
        { text: "Batch processing (unlimited)", included: true },
        { text: "Advanced property mapping", included: true },
        { text: "Custom mapping rules", included: true },
        { text: "API access", included: false },
      ],
      highlighted: true,
      badge: "Most Popular",
      buttonText: "Buy Now",
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements",
      price: "$599",
      billingPeriod: "one-time payment",
      features: [
        { text: "Premium CAD to Revit conversion", included: true },
        { text: "Unlimited user licenses", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Lifetime updates", included: true },
        { text: "Custom mapping rules", included: true },
        { text: "Batch processing (unlimited)", included: true },
        { text: "Advanced property mapping", included: true },
        { text: "Custom mapping rules", included: true },
        { text: "API access", included: true },
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
      id="pricing"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Decorative elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70" />
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that's right for you and start transforming your CAD
            files to Revit today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col ${tier.highlighted ? "border-primary shadow-lg relative overflow-hidden" : ""}`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 right-0 -mt-2 -mr-2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Zap className="h-3.5 w-3.5 mr-1" />
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">
                      {tier.billingPeriod}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <span className="h-5 w-5 block border-2 border-muted-foreground/30 rounded-full" />
                          )}
                        </div>
                        <span
                          className={
                            feature.included ? "" : "text-muted-foreground"
                          }
                        >
                          {feature.text}
                          {feature.tooltip && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="h-4 w-4 inline-block ml-1 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{feature.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${tier.highlighted ? "lightning-border" : ""}`}
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    {tier.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-muted/50 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-4">
              We offer custom enterprise solutions for organizations with
              specific requirements. Contact our sales team to discuss your
              needs and get a personalized quote.
            </p>
            <Button variant="outline">Contact Sales</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
