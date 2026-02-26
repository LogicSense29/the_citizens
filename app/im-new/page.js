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
    <main className='    w-full'>
      <div className='w-full bg-[#0a0d11] pt-[180px] min-h-screen'>
        {/* Conviction Section */}
        <div className='container w-full h-auto py-8 sm:py-12 pb-8 px-4'>
          <h2 className='text-accent text-2xl sm:text-4xl font-bold text-center'>
            What we Believe
          </h2>
          <p className='text-white text-base sm:text-2xl max-w-3xl mx-auto text-center mt-4 sm:mt-6'>
            While our approach remains contemporary, our beliefs stand the test
            of time. Our methods may grow, but these core beliefs will forever
            remain the foundation of LifePoints.
          </p>
          <Accordion
            type='single'
            collapsible
            className='w-full mt-3'
            defaultValue='item-1'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className=' text-2xl'>
                The Bible
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
The Bible is the inspired Word of God, the product of holy men of old who spoke and wrote as they were moved by the Holy Spirit. We accept the new covenant, as recorded in the New Testament, as our infallible guide in matters pertaining to conduct and doctrine (2 Tim. 3:16; 1 Thess. 2:13; 2 Peter 1:21).
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className=' text-2xl'>
               The External Life and the New Birth
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
Man’s first step toward salvation is godly sorrow that worketh repentance. The New Birth is necessary to all men, and when experienced, produces eternal life (2 Cor. 7:10; John 3:3–5; 1 John 5:12).
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className=' text-2xl'>
                Jesus will Return 
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
Following the Tribulation, He shall return to earth as King of kings, and Lord of lords, and together with His saints, who shall be kings and priests, He shall reign a thousand years (Rev. 5:10; 20:6).
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger className=' text-2xl'>
                Baptism in the Holy Spirit
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
                  The Baptism in the Holy Spirit and fire is a gift from God as promised by the Lord Jesus Christ to all believers in this dispensation and is received subsequent to the New Birth. This experience is accompanied by the initial evidence of speaking in other tongues as the Holy Spirit Himself gives utterance (Matt. 3:11; John 14:16-17; Acts 1:8; Acts 2:38-39; Acts 19:1-7; Acts 2:1-4).
                </p>
              </AccordionContent>
            </AccordionItem>
               <AccordionItem value='item-5'>
                     <AccordionTrigger className=' text-2xl'>
                       Water Baptism
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                       Baptism in water is by immersion, is a direct commandment of our Lord, and is for believers only. The ordinance is a symbol of the Christian’s identification with Christ in His death, burial, and resurrection (Matt. 28:19; Rom. 6:4; Col. 2:12; Acts 8:36-39). The following recommendation regarding the water baptismal formula is adopted; to wit: “On the confession of your faith in the Lord Jesus Christ, the Son of God, and by His authority, I baptize you in the Name of the Father, and of the Son, and of the Holy Spirit. Amen.”
                       </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-6'>
                     <AccordionTrigger className=' text-2xl'>
                       The Godhead
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                         Our God is One, but manifested in three Persons—the Father, the Son, and the Holy Spirit, being coequal (Deut. 6:4; Phil. 2:6). God the Father is greater than all; the Sender of the Word (Logos) and the Begetter (John 14:28; John 16:28; John 1:14). The Son is the Word flesh-covered, the One Begotten, and has existed with the Father from the beginning (John 1:1; John 1:18; John 1:14). The Holy Spirit proceeds forth from both the Father and the Son and is eternal (John 14:16; John 15:26).
                       </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-7'>
                     <AccordionTrigger className=' text-2xl'>
                       Man, His Fall, and Redemption
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                        Man is a created being, made in the likeness and image of God. But through Adam’s transgression and fall, sin came into the world. The Bible says “all have sinned, and come short of the glory of God,” and “There is none righteous, no, not one” (Rom. 3:10; 3:23). Jesus Christ, the Son of God, was manifested to undo the works of the devil, and He gave His life and shed His blood to redeem and restore mankind back to God (Rom. 5:14; 1 John 3:8). Salvation is the gift of God to mankind, separate from works and the Law, and is made operative by grace through faith in Jesus Christ, producing works acceptable to God (Eph. 2:8-10).
                     </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-8'>
                     <AccordionTrigger className=' text-2xl'>
                       Resurrection of the Just
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                        The angels said to Jesus’ disciples, “This same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.” His coming is imminent. When He comes, “The dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air” (Acts 1:11; 1 Thess. 4:16-17).
                        </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-9'>
                     <AccordionTrigger className=' text-2xl'>
                       The Second Coming of Jesus
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                        The angels said to Jesus’ disciples, “This same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.” His coming is imminent. When He comes, “The dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air” (Acts 1:11; 1 Thess. 4:16-17).
                        </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-10'>
                     <AccordionTrigger className=' text-2xl'>
                 Hell and Eternal Retribution
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                    The one who physically dies in his sins without accepting Christ is hopelessly and eternally lost in the lake of fire and, therefore, has no further opportunity of hearing the Gospel or repenting. The lake of fire is literal. The terms “eternal” and “everlasting,” used in describing the duration of the punishment of the damned in the lake of fire, carry the same thought and meaning of endless existence as used in denoting the duration of joy and ecstasy of saints in the Presence of God (Heb. 9:27; Rev. 19:20).
                        </p>
                     </AccordionContent>
                   </AccordionItem>
                    <AccordionItem value='item-11'>
                     <AccordionTrigger className=' text-2xl'>
                Sanctification
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                  The Bible teaches that without holiness no man can see the Lord. We believe in the Doctrine of Sanctification as a definite, yet progressive work of grace, commencing at the time of regeneration and continuing until the consummation of salvation at Christ’s return (Heb. 12:14; 1 Thess. 5:23; 2 Peter 3:18; 2 Cor. 3:18; Phil. 3:12–14; 1 Cor. 1:30).
                        </p>
                     </AccordionContent>
                   </AccordionItem>
                    <AccordionItem value='item-12'>
                     <AccordionTrigger className=' text-2xl'>
                Divine Healing
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
              Healing is for the physical ills of the human body and is brought about by the power of God through the prayer of faith, and by the laying on of hands. It is provided for in the atonement of Christ, and is the privilege of every member of the Church today (James 5:14-15; Mark 16:18; Isa. 53:4-5; Matt. 8:17; 1 Peter 2:24).
                        </p>
                     </AccordionContent>
                   </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* Salvation Prayer Section */}
      <div className='w-full text-black'>
        <div className='container text-center w-full h-auto py-8 sm:py-12 mb-8 px-4'>
          <h1 className='text-black text-4xl font-bold'>Salvation Prayer</h1>
          <p className='font-semibold'>
            Have you ever made Jesus the Lord and Savior of your life?
          </p>
          <p className='font-semibold'>
            If not, pray this prayer and start a new life in Christ.
          </p>{" "}
          <div className='border border-[#006CFF] border-t-0 p-4'>
            <div className='flex justify-center items-center gap-12 mb-4'>
              <div className='flex-1 border-b border-[#006CFF] mt-2 max-w-[550px]'></div>
              <span className='font-semibold'>Dear God,</span>
              <div className='flex-1 border-b border-[#006CFF] mt-2 max-w-[550px]'></div>
            </div>
            <div className=''>
              <p className=' font-semibold'>
                I come to You in the Name of Jesus. I admit that I am not right
                with You, and I want to be right with You. I ask You to forgive
                me of all my sins. The Bible says if I confess with my mouth
                that “Jesus is Lord”, and believe in my heart that God raised
                Him from the dead, I will be saved (Rom. 10:9). I believe with
                my heart and I confess with my mouth that Jesus is the Lord and
                Savior of my life. Thank You for saving me!
              </p>
              <p className=' font-semibold mb-4'>
                In Jesus’ Name, I pray. Amen.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Faq Section  */}
      <div className=' bg-[#0a0d11] pb-8'>
        <div className='container w-full h-auto py-8 sm:py-12 px-4 flex-col gap-12 items-center justify-center min-h-screen'>
          <div className=' flex-1'>
            <h2 className='text-white text-start text-6xl sm:text-4xl font-bold'>
              FAQs
            </h2>
            <p className='text-white text-base sm:text-2xl max-w-xl text-start mt-4 sm:mt-6'>
              Everything you ned to know about The Citizen's Place Church
            </p>
            <div className='mt-6 max-w-xl flex flex-wrap justify-between'>
              {/* item  */}
              <div className='flex gap-6 mb-4'>
                <div className=''>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant='outline' className='w-full'>
                          Location
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Somewhere on the map</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className=''>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant='outline' className='w-full'>
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
              <div className='flex gap-6 mb-4'>
                <div className=''>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant='outline' className='w-full'>
                          Water Baptism
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className=''>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant='outline' className='w-full'>
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
              <div className='flex gap-12 mb-4'>
                <div className=''>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant='outline' className='w-full'>
                          Members
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className=''>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant='outline' className='w-full'>
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
              <div className='flex gap-12'>
                <div className=''>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant='outline' className='w-full'>
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
            type='single'
            collapsible
            className='w-full mt-3 flex-1'
            defaultValue='item-1'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className=' text-2xl'>
                What Should I Wear?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
                 We want you to wear whatever makes you feel comfortable. You’ll see some people dressed in their nicest clothes, while others are supporting their team. We don’t care what you wear when you come, we just want to meet you!
                </p>
                {/* <p className=' text-[1rem]'>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p> */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className=' text-2xl'>
                What About Parking? 
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
Free street parking is available on Sundays. Also, we share the parking lot behind the building with Zips Dry Cleaners. The parking lot can be accessed via an alley behind the building that connects Albemarle and Yuma Streets.
                </p>
                {/* <p className=' text-[1rem]'>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p> */}
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem value='item-3'>
              <AccordionTrigger className=' text-2xl'>
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p> */}
                {/* <p className=' text-[1rem]'>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p> */}
              {/* </AccordionContent>
            </AccordionItem> */}
            {/* The rest */}
            {/* <AccordionItem value='item-4'>
              <AccordionTrigger className=' text-2xl'>
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=' text-[1rem]'>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
              <AccordionTrigger className=' text-2xl'>
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=' text-[1rem]'>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className=' text-2xl'>
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=' text-[1rem]'>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className=' text-2xl'>
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=' text-[1rem]'>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className=' text-2xl'>
                Do we believe in Trinity?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p className=' text-[1rem]'>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p className=' text-[1rem]'>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default ImNewPageContent;
