"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsFour() {
  const faqItems = [
    {
      id: "item-1",
      question: "What is Opensyte?",
      answer:
        "Opensyte is an open-source, all-in-one business management platform designed to simplify managing small businesses and startups by consolidating CRM, project management, finance, HR, and more into one easy-to-use system.",
    },
    {
      id: "item-2",
      question: "Who is Opensyte for?",
      answer:
        "Opensyte is built specifically for small businesses and startups looking for a powerful yet simple tool to manage business operations without the complexity of traditional platforms.",
    },
    {
      id: "item-3",
      question: "What features does Opensyte currently have?",
      answer:
        "Opensyte already supports contact and lead management, sales pipeline tracking, task management with Gantt and Kanban views, invoicing, payroll, employee databases, and customizable user roles among others. More features are planned and actively developed.",
    },
    {
      id: "item-4",
      question: "Why should I join the waitlist?",
      answer:
        "Joining the waitlist ensures you get early access to Opensyte, updates on new features, and exclusive opportunities to shape the platform's development based on your feedback.",
    },
    {
      id: "item-5",
      question: "Is Opensyte free to use?",
      answer:
        "Opensyte is an open-source project, making it free to use. It can be self-hosted or deployed through supported providers. There will also be a hosted version available for those who prefer a managed solution.",
    },
    {
      id: "item-6",
      question: "How will I be notified when Opensyte is available?",
      answer:
        "Waitlist members will receive email notifications with instructions on how to access the platform and updates on feature releases.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
