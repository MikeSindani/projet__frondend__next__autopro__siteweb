"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SectionFAQ = () => {
  return (
    <section className="flex flex-col p-8 md:p-16 bg-primary-color">
      <div className="m-3">
      <h1 className="font-bold text-2xl md:text-3xl text-black text-center m-3">
        FAQ
      </h1>
      <p className="text-md text-white text-center">
        Questions frequement posees.
      </p>
      </div>
      <div className="md:mx-[25%] mx-[20px] overflow-clip">
        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem value="item-1">
            <AccordionTrigger>Qui sommmes nous ?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Que faisons nous ?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Comment acheter nos voitures ?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Quie faire en cas de panne ?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Puisse-je teste avant d acheter ?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default SectionFAQ;
