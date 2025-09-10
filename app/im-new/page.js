"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

function ImNewPageContent() {
  return (
    <main className="    w-full">
      <div className="w-full bg-[#0a0d11] pt-[180px] min-h-screen">
        {/* Conviction Section */}
        <div className="container w-full h-auto py-8 sm:py-12 pb-8 px-4">
          <h2 className="text-accent text-2xl sm:text-4xl font-bold text-center">
            Our Convictions
          </h2>
          <p className="text-white text-base sm:text-2xl max-w-3xl mx-auto text-center mt-4 sm:mt-6">
            While our approach remains contemporary, our beliefs stand the test
            of time. Our methods may grow, but these core beliefs will forever
            remain the foundation of LifePoints.
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
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
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
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-2xl">
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className=" text-[1rem]">
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=" text-[1rem]">
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* Salvation Prayer Section */}
      <div className="w-full text-black">
        <div className="container text-center w-full h-auto py-8 sm:py-12 mb-8 px-4">
          <h1 className="text-black text-4xl font-bold">Salvation Prayer</h1>
          <p className="font-semibold">
            Have you ever made Jesus the Lord and Savior of your life?
          </p>
          <p className="font-semibold">
            If not, pray this prayer and start a new life in Christ.
          </p>{" "}
          <div className="border border-[#006CFF] border-t-0 p-4">
            <div className="flex justify-center items-center gap-12 mb-4">
              <div className="flex-1 border-b border-[#006CFF] mt-2 max-w-[550px]"></div>
              <span className="font-semibold">Dear God,</span>
              <div className="flex-1 border-b border-[#006CFF] mt-2 max-w-[550px]"></div>
            </div>
            <div className="">
              <p className=" font-semibold">
                I come to You in the Name of Jesus. I admit that I am not right
                with You, and I want to be right with You. I ask You to forgive
                me of all my sins. The Bible says if I confess with my mouth
                that “Jesus is Lord”, and believe in my heart that God raised
                Him from the dead, I will be saved (Rom. 10:9). I believe with
                my heart and I confess with my mouth that Jesus is the Lord and
                Savior of my life. Thank You for saving me!
              </p>
              <p className=" font-semibold mb-4">
                In Jesus’ Name, I pray. Amen.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Faq Section  */}
      <div className=" bg-[#0a0d11] pb-8">
        <div className="container w-full h-auto py-8 sm:py-12 px-4 flex gap-12 items-center justify-center min-h-screen">
          <div className=" flex-1">
            <h2 className="text-white text-start text-6xl sm:text-4xl font-bold">
              FAQs
            </h2>
            <p className="text-white text-base sm:text-2xl max-w-xl text-start mt-4 sm:mt-6">
              Everything you ned to know about The Citizen's Place Church
            </p>
            <div className="mt-6 max-w-[450px] ">
              {/* item  */}
              <div className="flex gap-12 mb-4">
                <div className="flex-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Location
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Somewhere on the map</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex-1">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Holy Communion
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              {/* item  */}
              <div className="flex gap-12 mb-4">
                <div className="flex-1">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Water Baptism
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Dress Code
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              {/* item  */}
              <div className="flex gap-12 mb-4">
                <div className="flex-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Members
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex-1">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Songs & Music
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              {/* item  */}
              <div className="flex items-center justify-center gap-12">
                <div className="">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Baby Dedication
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full mt-3 flex-1"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-2xl">
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className=" text-[1rem]">
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
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
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-2xl">
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className=" text-[1rem]">
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=" text-[1rem]">
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className=" text-2xl">
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className=" text-[1rem]">
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=" text-[1rem]">
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className=" text-2xl">
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className=" text-[1rem]">
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=" text-[1rem]">
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-2xl">
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className=" text-[1rem]">
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=" text-[1rem]">
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-2xl">
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className=" text-[1rem]">
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=" text-[1rem]">
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-2xl">
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className=" text-[1rem]">
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=" text-[1rem]">
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default ImNewPageContent;
