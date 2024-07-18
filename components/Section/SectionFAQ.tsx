"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimation from "react-animate-on-scroll";

const SectionFAQ = () => {
  return (
    <section
      id="faq"
      className="flex flex-col p-8 md:p-16 space-y-2 bg-primary-color"
    >
      <div className="m-3">
        <h1 className="font-bold text-3xl md:text-4xl text-black text-center m-3">
          FAQ
        </h1>
        <p className="text-md text-white text-center">
          Questions frequement posées.
        </p>
      </div>
      <div className="md:mx-[25%] mx-[20px] overflow-clip">
        <ScrollAnimation animateIn="fadeIn" delay={300}>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="item-1">
              <AccordionTrigger> Qui sommes-nous?</AccordionTrigger>
              <AccordionContent>
              Nous sommes AutoPro, votre partenaire automobile de confiance. Nous nous engageons à offrir une expérience d'achat transparente et sans tracas, que ce soit pour une voiture neuve ou d'occasion.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quel est notre engagement envers nos clients?</AccordionTrigger>
              <AccordionContent>
              Nous nous engageons à offrir une expérience d {"'"}achat transparente et sans tracas à nos clients, que ce soit pour une voiture neuve ou d'occasion.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
              Qu est-ce que la transparence dans le processus d achat d une voiture?
              </AccordionTrigger>
              <AccordionContent>
              La transparence signifie que nous fournirons aux clients toutes les informations nécessaires sur le véhicule, notamment son historique, son état et son prix, pour qu'ils puissent prendre une décision éclairée.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Comment assurons-nous une expérience sans tracas?</AccordionTrigger>
              <AccordionContent>
              Nous visons à simplifier le processus d'achat de voiture en minimisant les formalités, en fournissant des informations claires et concises, et en offrant un processus d'achat fluide.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
              Quels types de véhicules proposons-nous? 
              </AccordionTrigger>
              <AccordionContent>
              Nous proposons à la fois des voitures neuves et des voitures d occasion, pour que les clients puissent choisir celle qui convient le mieux à leurs besoins et à leur budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
              Puis-je faire confiance à AutoPro?
              </AccordionTrigger>
              <AccordionContent>
                 Oui, nous priorisons la construction de la confiance avec nos clients en étant ouvert, honnête et transparent dans toutes les transactions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
              Que se passe-t-il si j ai des questions ou des préoccupations pendant le processus d achat?
              </AccordionTrigger>
              <AccordionContent>
              Notre personnel amical et compétent est disponible pour répondre à toutes vos questions ou préoccupations, pour vous assurer de vous sentir confiant et à l'aise tout au long du processus.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SectionFAQ;
