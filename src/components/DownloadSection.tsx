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
      name: "Free",
      description: "Try El 3atawla free for 1 month",
      price: "$0",
      billingPeriod: "for 1 month",
      features: [
        { text: "CAD to Revit conversion (basic)", included: true },
        { text: "Single user access", included: true },
        { text: "Auto-updates for 1 month", included: true },
        { text: "Community support", included: true },
        {
          text: "Social sharing renewal required",
          included: true,
          tooltip:
            "After 1 month, renew by sharing posts on LinkedIn and Facebook",
        },
        { text: "Basic mapping features", included: true },
        { text: "No customizations", included: false },
        { text: "No batch processing", included: false },
      ],
      buttonText: "Start Free Trial",
    },
    {
      name: "Pro",
      description: "Free for 3 months with social support",
      price: "$0",
      billingPeriod: "for 3 months",
      features: [
        { text: "Full CAD to Revit conversion", included: true },
        { text: "3-month auto-updates", included: true },
        { text: "Access to support group", included: true },
        {
          text: "1 free plugin customization / 3 months",
          included: true,
        },
        {
          text: "Social interaction required",
          included: true,
          tooltip:
            "Like & comment on YouTube, share the plugin on LinkedIn & Facebook, and write 2 nice posts",
        },
        { text: "Advanced mapping rules", included: true },
        { text: "Unlimited batch processing", included: true },
      ],
      highlighted: true,
      badge: "Content Creator Plan",
      buttonText: "Join Pro Plan",
    },
    {
      name: "VIP",
      description: "Exclusive annual plan with special benefits",
      price: "$50",
      billingPeriod: "per year",
      features: [
        { text: "Everything in Pro plan", included: true },
        { text: "VIP-only support group", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Lifetime auto-updates", included: true },
        {
          text: "Suggest features or plugins",
          included: true,
          tooltip:
            "We build your idea and release it as a plugin update",
        },
        { text: "Early access to beta features", included: true },
        { text: "Recognition as VIP supporter", included: true },
      ],
      buttonText: "Upgrade to VIP",
    },
  ];

  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
      id="pricing"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
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
                className={`h-full flex flex-col ${
                  tier.highlighted
                    ? "border-primary shadow-lg relative overflow-hidden"
                    : ""
                }`}
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
                  <CardTitle>
                    {tier.name === "VIP" ? (
                      <span className="text-yellow-400 animate-pulse drop-shadow-[0_0_8px_gold]">
                        VIP 🔥
                      </span>
                    ) : (
                      tier.name
                    )}
                  </CardTitle>
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
