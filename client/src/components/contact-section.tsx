import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        
        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="max-w-2xl w-full">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
              <CardContent className="p-8">
                <h3 className="font-semibold text-2xl mb-6 text-primary">Informații de contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-primary mb-1">Email</h4>
                      <p className="text-gray-700">
                        <a href="mailto:ggverb@gmail.com" className="hover:text-blue-600 transition-colors">
                          ggverb@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-primary mb-1">Locația</h4>
                      <p className="text-gray-700">
                        <a 
                          href="https://maps.app.goo.gl/3TW4GbNK4y2znCAG9" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          Drobeta Turnu Severin<br />
                          Matei Vasilescu 23a<br />
                          220155 România
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-primary mb-1">Telefon</h4>
                      <p className="text-gray-700">
                        <a href="tel:+40721879347" className="hover:text-accent transition-colors">
                          +40 721 879 347
                        </a>
                        <span className="text-sm text-green-600 ml-2 flex items-center mt-1">
                          <FaWhatsapp className="mr-1" />
                          WhatsApp
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
