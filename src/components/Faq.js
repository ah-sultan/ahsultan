"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-bootstrap";
import FaqData from "@/Data/FaqData";

const Faq = () => {
  return (
    <Accordion
      defaultActiveKey="collapseTwo"
      className="accordion wow fadeInUp delay-0-4s"
      id="faq-accordion"
    >
    
      {Array.isArray(FaqData) &&
        FaqData.map((data, index) => {
          return (
            <AccordionItem
              className="accordion-item"
              key={index}
              eventKey={`faqAccordion_${index}`}
            >
              <AccordionHeader className="accordion-header">
                Are You Awards Winning Agency ?
              </AccordionHeader>
              <AccordionBody className="accordion-body">
                <p>
                  To take a trivial example which undertakes laborious physical
                  exercise except to obtain some advantage pleasure annoying
                  consequences
                </p>
              </AccordionBody>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};
export default Faq;
