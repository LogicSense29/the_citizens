"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

function ImNewPageContent() {
  return (
    <main className=" pt-[180px] bg-[#0a0d11] min-h-screen w-full">
      {/* Conviction Section */}
      <div className="container w-full h-auto py-8 sm:py-12 mb-8 px-4">
        <h2 className="text-accent text-2xl sm:text-4xl font-bold text-center">
          Our Convictions
        </h2>
        <p className="text-white text-base sm:text-2xl max-w-3xl mx-auto text-center mt-4 sm:mt-6">
          While our approach remains contemporary, our beliefs stand the test of
          time. Our methods may grow, but these core beliefs will forever remain
          the foundation of LifePoints.
        </p>
        <Accordion
          type="single"
          collapsible
          className="w-full mt-3"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-2xl">
              Do we believe in Trinity?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className=" text-[1rem]">
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p className=" text-[1rem]">
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and
                experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className=" text-2xl">
              Do we believe in Trinity?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className=" text-[1rem]">
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days.
              </p>
              <p className=" text-[1rem]">
                All orders are carefully packaged and fully insured. Track your
                shipment in real-time through our dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className=" text-2xl">
              Do we believe in Trinity?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className=" text-[1rem]">
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
              <p className=" text-[1rem]">
                Our hassle-free return process includes free return shipping and
                full refunds processed within 48 hours of receiving the returned
                item.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}

export default ImNewPageContent;
