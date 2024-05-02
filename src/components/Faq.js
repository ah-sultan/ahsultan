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
      className="accordion wow fadeInUp delay-0-4s"
      id="faq-accordion"
      defaultActiveKey={`faqAccordion_${1}`}
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
                {data.question}
              </AccordionHeader>
              <AccordionBody className="accordion-body">
                <p>{data.answer}</p>
              </AccordionBody>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};
export default Faq;
