"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Code2, Cpu, Star, Users } from "lucide-react";

interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  icon: React.ReactNode;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "الحسيني جابر",
    role: "خبير التصميم الإنشائي",
    company: "شركة الحسيني جابر للاستيل ستركشر",
    avatar:
      "https://api.dicebear.com/7.x/personas/svg?seed=hossam&mouth=smile,laugh&eyes=happy&hair=short&hairColor=000000&facialHair=beard&facialHairColor=000000",
    content:
      "الإضافة دي غيرت حياتي المهنية! بقدر أحول شوب دروينج من التيكلا لريڤيت في دقائق. هقدمها في كل كورساتي على اليوتيوب!",
    icon: <Building2 className="h-8 w-8 text-primary" />,
  },
  {
    id: 2,
    name: "هشام طارق",
    role: "مؤسس أكاديمية بناء",
    company: "أكاديمية بناء",
    avatar:
      "https://api.dicebear.com/7.x/personas/svg?seed=hisham&mouth=smile,laugh&eyes=happy&hair=short&hairColor=000000&facialHair=mustache&facialHairColor=000000",
    content:
      "هذه الإضافة هتكون متطلب أساسي لطلاب الأكاديمية. أي مهندس حديث لازم يتقنها!",
    icon: <Code2 className="h-8 w-8 text-primary" />,
  },
  {
    id: 3,
    name: "مصطفى البدري",
    role: "خبير التصميم الإنشائي",
    company: "مصطفى البدري للاستشارات الهندسية",
    avatar:
      "https://api.dicebear.com/7.x/personas/svg?seed=mostafa&mouth=smile,laugh&eyes=happy&hair=short&hairColor=000000&facialHair=beard&facialHairColor=000000",
    content:
      "في كورساتي على اليوتيوب، بقيت أشرح الإضافة دي كجزء أساسي. الفري لانسرز بيوفر 50% من وقت المشروع!",
    icon: <Cpu className="h-8 w-8 text-primary" />,
  },
  {
    id: 4,
    name: "كريم عادل",
    role: "مهندس تصميم أول",
    company: "Al Habtoor Group - Dubai",
    avatar:
      "https://api.dicebear.com/7.x/personas/svg?seed=kareem&mouth=smile,laugh&eyes=happy&hair=short&hairColor=000000&facialHair=goatee&facialHairColor=000000",
    content:
      "في دبي حيث معايير الجودة العالية، هذه الإضافة أصبحت معيارنا الذهبي! كل الفريق بيستخدمها daily!",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    id: 5,
    name: "ياسر الليثي",
    role: "خبير الخرسانة المسلحة",
    company: "قناة ياسر الليثي التعليمية",
    avatar:
      "https://api.dicebear.com/7.x/personas/svg?seed=yasser&mouth=smile,laugh&eyes=happy&hair=short&hairColor=000000&facialHair=beard&facialHairColor=000000",
    content:
      "هخصص حلقة كاملة في كورسي لشرح الإضافة دي. كل مهندس خرسانة لازم يتعلمها!",
    icon: <Building2 className="h-8 w-8 text-primary" />,
  },
  {
    id: 6,
    name: "عبدالله مصطفى",
    role: "مهندس مدني",
    company: "سيفيل أكاديمي",
    avatar:
      "https://api.dicebear.com/7.x/personas/svg?seed=abdullah&mouth=smile,laugh&eyes=happy&hair=short&hairColor=000000&facialHair=mustache&facialHairColor=000000",
    content:
      "في أكاديميتنا، بنعلم الطلاب الإضافة دي من اليوم الأول. أي حد في BIM المفروض يتقنها!",
    icon: <Code2 className="h-8 w-8 text-primary" />,
  },
  {
    id: 7,
    name: "عادل طارق",
    role: "خبير تنفيذ مواقع",
    company: "شركة البواني للمقاولات",
    avatar:
      "https://api.dicebear.com/7.x/personas/svg?seed=adel&mouth=smile,laugh&eyes=happy&hair=short&hairColor=000000&facialHair=beard&facialHairColor=000000",
    content:
      "في أكبر مشاريعنا، الإضافة دي بقت حلقة الوصل بين المكتب والموقع. كل الفنيين عندنا اتدربوا عليها!",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
];

const TestimonialsSection = ({
  customTestimonials = testimonials,
}: {
  customTestimonials?: TestimonialProps[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % customTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [customTestimonials.length]);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const cards = sectionRef.current.querySelectorAll(".testimonial-card");
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;

      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        // Different parallax speeds for different cards
        const speed = 0.05 + index * 0.01;
        const yOffset = (scrollPosition - sectionTop) * speed;

        if (
          sectionTop < window.innerHeight &&
          sectionTop > -sectionRef.current!.offsetHeight
        ) {
          cardElement.style.transform = `translateY(${yOffset}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how professionals across the industry are transforming their
            workflows with our Revit plugin
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mb-16 max-w-4xl mx-auto">
          <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="flex-shrink-0">
                  <Avatar className="h-20 w-20 border-2 border-primary/20">
                    <AvatarImage
                      src={customTestimonials[activeIndex].avatar}
                      alt={customTestimonials[activeIndex].name}
                    />
                    <AvatarFallback>
                      {customTestimonials[activeIndex].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg italic">
                    "{customTestimonials[activeIndex].content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">
                      {customTestimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {customTestimonials[activeIndex].role},{" "}
                      {customTestimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial grid with parallax effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customTestimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`testimonial-card border-primary/10 hover:border-primary/30 transition-all duration-500 ${index === activeIndex ? "opacity-50" : "opacity-100"}`}
              onClick={() => setActiveIndex(index)}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">{testimonial.icon}</div>
                <blockquote className="text-sm mb-4 flex-grow">
                  "{testimonial.content.substring(0, 100)}..."
                </blockquote>
                <div className="flex items-center gap-3 mt-auto">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Join hundreds of professionals who have transformed their Revit
            workflow
          </p>
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Try It Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
