import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {accordionlist} from '@/constants/index';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  
const Accordionsection = () => {
  return (
    <section className='my-[150px] w-[90%] max-w-[1300px] mx-auto'>
      <div className='flex  items-center '>
        <h1 className='text-5xl font-semibold mb-10'>Your questions, answered</h1>
        <Accordion type='single' collapsible className='w-full'>
          {accordionlist.map((element,index) => (
            <AccordionItem key={element.index} value={String(element.index)}>
              <AccordionTrigger className='text-xl underline-none'>{element.title}</AccordionTrigger>
              <AccordionContent  className='text-lg text-gray-500'>{element.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div>
      <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/" className='underline text-black text-base font-semibold'>Airbnb</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/components" className='underline text-black text-base font-semibold'>Stays</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage className='text-base'>India</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
                </Breadcrumb>
        </div>      
      </div>
    </section>
  );
};

export default Accordionsection;
