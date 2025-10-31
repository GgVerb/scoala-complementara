import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Building, Heart } from "lucide-react";
import { Link } from "wouter";

export default function AudienceSection() {
  const audiences = [
    {
      title: "Elevi curioși",
      description: "Pentru tinerii care vor să învețe altfel și să-și dezvolte abilitățile practice de viață",
      icon: GraduationCap,
      link: "/pentru-elevi",
      linkText: "Află mai multe",
      gradient: "from-primary to-secondary",
      internal: true
    },
    {
      title: "Părinți implicați",
      description: "Pentru părinții care doresc o educație complementară pentru copiii lor",
      icon: Users,
      link: "/pentru-adulti",
      linkText: "Explorează opțiunile",
      gradient: "from-accent to-orange-500",
      internal: true
    },
    {
      title: "Instituții deschise",
      description: "Școli, ONG-uri și organizații care vor să implementeze educația experiențială",
      icon: Building,
      link: "/pentru-institutii",
      linkText: "Colaborează cu noi",
      gradient: "from-secondary to-green-400",
      internal: true
    },
    {
      title: "Mentori voluntari",
      description: "Pentru cei care doresc să împărtășească din experiența lor tinerilor curioși.",
      icon: Heart,
      link: "/pentru-mentori",
      linkText: "Devino mentor",
      gradient: "from-accent to-red-400",
      internal: true
    }
  ];

  return (
    <section id="pentru-cine" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-bold text-5xl mb-6">
            <span className="gradient-text">Pentru cine</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Acum, în 2025, <Link href="/articol/voluntarii" className="text-primary hover:text-secondary transition-colors underline">suntem o mână de oameni</Link>, dar așteptăm să ni se alăture:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="cursor-pointer">
              {audience.internal ? (
                <Link href={audience.link} className="block">
                  <Card className="card-premium text-center h-full group">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <audience.icon className="text-white text-2xl h-9 w-9" />
                      </div>
                      <h3 className="font-semibold text-2xl text-primary group-hover:text-accent transition-colors mb-4">
                        {audience.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {audience.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <a href={audience.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="card-premium text-center h-full group">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <audience.icon className="text-white text-2xl h-9 w-9" />
                      </div>
                      <h3 className="font-semibold text-2xl text-primary group-hover:text-accent transition-colors mb-4">
                        {audience.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {audience.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
