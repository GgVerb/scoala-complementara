import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/page-transition";

export default function BlogSection() {
  const featuredArticles = [
    {
      id: "evolutia-calatoria-timp",
      date: "26 septembrie 2025",
      title: "Evoluția: O Călătorie de 4.6 Kilometri",
      summary: "O perspectivă fascinantă asupra timpului profund prin analogii creative care transformă miliardele de ani în distanțe măsurabile."
    },
    {
      id: "ghidul-educatie-inovatoare",
      date: "17 iunie 2025",
      title: "Ghidul pentru o Educație Inovatoare",
      summary: "Explorați un univers de soluții educaționale alternative, de la învățarea în natură și metode experiențiale, la parenting conștient și modele școlare democratice."
    },
    {
      id: "educatie-experientiala",
      date: "15 iunie 2025",
      title: "Educație experiențială",
      summary: "Principiile și metodele educației experiențiale și contribuțiile marilor educatori în acest domeniu."
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-8">
            <BookOpen className="text-white text-3xl h-10 w-10" />
          </div>
          <h2 className="font-bold text-5xl mb-6">
            <span className="gradient-text">Articole și info utile</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Descoperiți articole și resurse valoroase despre educația alternativă, 
            dezvoltarea copiilor și metodele educaționale inovatoare
          </p>
        </div>

        {/* Featured Articles */}
        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArticles.map((article) => (
              <StaggerItem key={article.id}>
                <ScaleOnHover>
                  <Link href={`/articol/${article.id}`}>
                    <Card className="group card-premium h-full overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300">
                      <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <CardContent className="p-8">
                          <motion.div 
                            className="flex items-center text-sm text-muted-foreground mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Calendar className="h-4 w-4 mr-2" />
                            {article.date}
                          </motion.div>
                          <motion.h3 
                            className="text-2xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {article.title}
                          </motion.h3>
                          <motion.p 
                            className="text-foreground line-clamp-3 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {article.summary}
                          </motion.p>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* View All Articles Button */}
        <div className="text-center">
          <Link href="/articole#articole-top">
            <Button size="lg" className="bg-primary hover:bg-accent text-white px-10 py-6 text-lg font-semibold rounded-xl hover:shadow-xl transition-all transform hover:scale-105 shadow-lg">
              <BookOpen className="h-6 w-6 mr-3" />
              Vezi toate articolele
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}