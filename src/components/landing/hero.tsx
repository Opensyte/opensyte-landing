/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import {
  Users,
  DollarSign,
  FolderKanban,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { HeroHeader } from "@/components/header";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section id="about">
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <div className="absolute inset-x-0 top-56 -z-20 hidden h-96 w-full bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 opacity-20 lg:top-32 dark:block" />
            </AnimatedGroup>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-6 max-w-4xl text-3xl text-balance sm:mt-8 sm:text-4xl md:text-5xl lg:mt-16 xl:text-6xl"
                >
                  Manage your business 100x easier
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-6 max-w-2xl px-4 text-sm text-balance sm:mt-8 sm:px-0 sm:text-base md:text-lg"
                >
                  Manage your business with one platform that keeps tools
                  connected and lets you switch features quickly.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-8 flex flex-col items-center justify-center px-4 sm:mt-12 sm:px-0"
                >
                  <Link
                    href="https://app.opensyte.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="group rounded-xl px-8 py-6 text-base shadow-lg sm:text-lg"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <p className="text-muted-foreground mt-4 text-center text-xs sm:text-sm">
                    Try Opensyte Beta - Now Available
                  </p>
                </AnimatedGroup>
              </div>
            </div>

            {/* Features Tabs Section */}
            <div className="mx-auto mt-12 max-w-7xl px-4 sm:mt-16 sm:px-6">
              <Tabs defaultValue="crm" className="w-full">
                <div className="overflow-x-auto">
                  <TabsList className="bg-muted/50 mx-auto flex h-10 w-fit min-w-max rounded-lg border p-0.5 shadow-sm backdrop-blur-sm sm:h-12 sm:rounded-xl sm:p-1">
                    <TabsTrigger
                      value="crm"
                      className="data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-background/50 flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 data-[state=active]:shadow-sm sm:gap-2.5 sm:rounded-lg sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>CRM</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="finance"
                      className="data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-background/50 flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 data-[state=active]:shadow-sm sm:gap-2.5 sm:rounded-lg sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      <DollarSign className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Finance</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="project"
                      className="data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-background/50 flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 data-[state=active]:shadow-sm sm:gap-2.5 sm:rounded-lg sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      <FolderKanban className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Projects</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="hr"
                      className="data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-background/50 flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 data-[state=active]:shadow-sm sm:gap-2.5 sm:rounded-lg sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      <UserCheck className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>HR</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="crm" className="mt-3 sm:mt-4">
                  <div className="ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-xl border p-2 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 sm:rounded-2xl sm:p-4 dark:inset-shadow-white/20">
                    <div className="flex items-center justify-center rounded-xl sm:rounded-2xl">
                      <img
                        src="/crm.png"
                        alt="CRM Dashboard Preview"
                        width={1200}
                        height={800}
                        className="h-auto max-w-full rounded-xl object-contain sm:rounded-2xl"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="finance" className="mt-3 sm:mt-4">
                  <div className="ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-xl border p-2 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 sm:rounded-2xl sm:p-4 dark:inset-shadow-white/20">
                    <div className="flex items-center justify-center rounded-xl sm:rounded-2xl">
                      <img
                        src="/finance.png"
                        alt="Finance Dashboard Preview"
                        width={1200}
                        height={800}
                        className="h-auto max-w-full rounded-xl object-contain sm:rounded-2xl"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="project" className="mt-3 sm:mt-4">
                  <div className="ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-xl border p-2 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 sm:rounded-2xl sm:p-4 dark:inset-shadow-white/20">
                    <div className="flex items-center justify-center rounded-xl sm:rounded-2xl">
                      <img
                        src="/projects.png"
                        alt="Project Management Preview"
                        width={1200}
                        height={800}
                        className="h-auto max-w-full rounded-xl object-contain sm:rounded-2xl"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="hr" className="mt-3 sm:mt-4">
                  <div className="ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-xl border p-2 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 sm:rounded-2xl sm:p-4 dark:inset-shadow-white/20">
                    <div className="flex items-center justify-center rounded-xl sm:rounded-2xl">
                      <img
                        src="/hr.png"
                        alt="HR Dashboard Preview"
                        width={1200}
                        height={800}
                        className="h-auto max-w-full rounded-xl object-contain sm:rounded-2xl"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
