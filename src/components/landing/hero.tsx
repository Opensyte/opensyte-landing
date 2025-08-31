/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import {
  Mail,
  SendHorizontal,
  Users,
  DollarSign,
  FolderKanban,
  UserCheck,
  Loader2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { HeroHeader } from "@/components/header";
import { api } from "@/trpc/react";
import { toast } from "sonner";

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
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const addToWaitingListMutation = api.email.addToWaitingList.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        console.log("Successfully joined the waitlist! 🎉");
        setIsSubmitted(true);
        setEmail("");
        // Show success message to user
        toast.success("Successfully joined the waitlist! 🎉");
      } else {
        console.error(data.message || "Something went wrong");
        toast.error(data.message || "Something went wrong");
      }
    },
    onError: (error) => {
      console.error("Failed to join waitlist. Please try again.", error);
      toast.error("Failed to join waitlist. Please try again.");
    },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email address");
      return;
    }
    addToWaitingListMutation.mutate({ email: email.trim() });
  };
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
            <div className="mx-auto max-w-7xl">
              <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-8 max-w-4xl text-4xl text-balance md:text-5xl lg:mt-16 xl:text-6xl"
                >
                  Manage your business 100x more easily
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-base text-balance md:text-lg"
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
                  className="mt-12 flex flex-col items-center justify-center"
                >
                  <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit}>
                      <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                        <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                        <input
                          placeholder="Your mail address"
                          className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={addToWaitingListMutation.isPending}
                          required
                        />

                        <div className="md:pr-1.5 lg:pr-0">
                          <Button
                            type="submit"
                            aria-label="submit"
                            size="sm"
                            className="rounded-[calc(var(--radius))]"
                            disabled={
                              addToWaitingListMutation.isPending || isSubmitted
                            }
                          >
                            {addToWaitingListMutation.isPending ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span className="ml-2 hidden md:block">
                                  Joining...
                                </span>
                              </>
                            ) : isSubmitted ? (
                              <>
                                <Check className="h-4 w-4" />
                                <span className="ml-2 hidden md:block">
                                  Joined!
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="hidden md:block">
                                  Join waitlist
                                </span>
                                <SendHorizontal
                                  className="relative mx-auto size-5 md:hidden"
                                  strokeWidth={2}
                                />
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </form>
                    <p className="text-muted-foreground mt-3 text-center text-sm">
                      Be the first to know when we launch.
                    </p>
                  </div>
                </AnimatedGroup>
              </div>
            </div>

            {/* Features Tabs Section */}
            <div className="mx-auto mt-16 max-w-7xl px-6">
              <Tabs defaultValue="crm" className="w-full">
                <TabsList className="bg-muted/50 mx-auto flex h-12 w-fit rounded-xl border p-1 shadow-sm backdrop-blur-sm">
                  <TabsTrigger
                    value="crm"
                    className="data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-background/50 flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 data-[state=active]:shadow-sm"
                  >
                    <Users className="h-4 w-4" />
                    <span>CRM</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="finance"
                    className="data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-background/50 flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 data-[state=active]:shadow-sm"
                  >
                    <DollarSign className="h-4 w-4" />
                    <span>Finance</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="project"
                    className="data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-background/50 flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 data-[state=active]:shadow-sm"
                  >
                    <FolderKanban className="h-4 w-4" />
                    <span>Projects</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="hr"
                    className="data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-background/50 flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 data-[state=active]:shadow-sm"
                  >
                    <UserCheck className="h-4 w-4" />
                    <span>HR</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="crm" className="mt-4">
                  <div className="ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 dark:inset-shadow-white/20">
                    <div className="flex items-center justify-center rounded-2xl">
                      <img
                        src="/crm.png"
                        alt="CRM Dashboard Preview"
                        width={1200}
                        height={800}
                        className="h-auto max-w-full rounded-2xl object-contain"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="finance" className="mt-4">
                  <div className="ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 dark:inset-shadow-white/20">
                    <div className="flex items-center justify-center rounded-2xl">
                      <img
                        src="/finance.png"
                        alt="Finance Dashboard Preview"
                        width={1200}
                        height={800}
                        className="h-auto max-w-full rounded-2xl object-contain"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="project" className="mt-4">
                  <div className="ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 dark:inset-shadow-white/20">
                    <div className="flex items-center justify-center rounded-2xl">
                      <img
                        src="/projects.png"
                        alt="Project Management Preview"
                        width={1200}
                        height={800}
                        className="h-auto max-w-full rounded-2xl object-contain"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="hr" className="mt-4">
                  <div className="ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 dark:inset-shadow-white/20">
                    <div className="flex items-center justify-center rounded-2xl">
                      <img
                        src="/hr.png"
                        alt="HR Dashboard Preview"
                        width={1200}
                        height={800}
                        className="h-auto max-w-full rounded-2xl object-contain"
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
