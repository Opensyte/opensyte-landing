import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Layers,
  Navigation,
  Users,
  Database,
  Settings,
  BarChart3,
  FileText,
  Calendar,
  Bell,
  Check,
} from "lucide-react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="from-background via-muted/20 to-background bg-gradient-to-b py-20 md:py-32"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful Features for Modern Business
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Everything you need to streamline your operations and boost
            productivity in one integrated platform.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <FeatureCard className="group">
            <CardHeader className="pb-6">
              <CardHeading
                icon={Layers}
                title="All-in-one platform"
                description="Access all essential business tools in one seamless system, eliminating the need for multiple apps."
              />
            </CardHeader>

            <div className="relative mb-6 border-t border-dashed sm:mb-0">
              <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"></div>
              <div className="aspect-76/59 p-6">
                <AllInOnePlatformUI />
              </div>
              <div className="from-card pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t to-transparent"></div>
            </div>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Navigation}
                title="Easy and quick navigation"
                description="Switch effortlessly between features with a clean, intuitive sidebar designed for speedy workflows."
              />
            </CardHeader>

            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,var(--color-background)_100%)]"></div>
                <div className="aspect-76/59 rounded-lg border p-4">
                  <NavigationUI />
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard className="group lg:col-span-2">
            <div className="flex flex-col gap-6 px-11 py-7 lg:flex-row lg:items-start lg:gap-8">
              <div className="flex-1">
                <div className="space-y-4">
                  {/* Feature Badge */}
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Users className="size-4" />
                    Customizable user roles
                  </span>

                  {/* Main Heading */}
                  <div className="space-y-3">
                    <h3 className="text-foreground text-[1.75rem] leading-tight font-semibold tracking-tight md:text-[2rem]">
                      Create tailored user permissions to ensure the right
                      access for every team member.
                    </h3>
                    <p className="text-muted-foreground max-w-xl text-[13px] leading-relaxed md:text-sm">
                      Manage your team efficiently with role-based access
                      control, ensuring security and proper workflow management
                      across all departments.
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-1 gap-3 pt-2">
                    {[
                      { label: "Role-based permissions", color: "bg-primary" },
                      { label: "Security compliance", color: "bg-accent" },
                      { label: "Team hierarchy", color: "bg-secondary" },
                      { label: "Custom workflows", color: "bg-primary/60" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="border-border/40 bg-muted/20 flex items-center gap-3 rounded-lg border px-3 py-2.5"
                      >
                        <span
                          className={cn(
                            "h-2 w-2 shrink-0 rounded-full",
                            item.color,
                          )}
                        />
                        <span className="text-muted-foreground/90 text-sm font-medium">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-1">
                <div className="bg-card/90 relative flex-1 overflow-hidden rounded-xl border p-4 shadow-md backdrop-blur-sm">
                  <div className="from-secondary/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-transparent"></div>
                  <div className="relative">
                    <UserRolesUI />
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn("group relative rounded-none shadow-zinc-950/5", className)}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -top-px -left-px block size-2 border-t-2 border-l-2"></span>
    <span className="border-primary absolute -top-px -right-px block size-2 border-t-2 border-r-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -right-px -bottom-px block size-2 border-r-2 border-b-2"></span>
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-muted-foreground flex items-center gap-2">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
);

// All-in-One Platform UI Component
const AllInOnePlatformUI = () => (
  <div className="grid h-full grid-cols-2 gap-3">
    <div className="from-primary/10 to-primary/20 rounded-lg border bg-gradient-to-br p-4">
      <div className="mb-3 flex items-center gap-2">
        <Database className="text-primary h-4 w-4" />
        <span className="text-sm font-medium">CRM</span>
      </div>
      <div className="space-y-2">
        <div className="bg-primary/30 h-2 w-3/4 rounded"></div>
        <div className="bg-primary/30 h-2 w-1/2 rounded"></div>
      </div>
    </div>

    <div className="from-muted to-muted/50 rounded-lg border bg-gradient-to-br p-4">
      <div className="mb-3 flex items-center gap-2">
        <Users className="text-foreground h-4 w-4" />
        <span className="text-sm font-medium">HR</span>
      </div>
      <div className="space-y-2">
        <div className="bg-muted-foreground/30 h-2 w-full rounded"></div>
        <div className="bg-muted-foreground/30 h-2 w-2/3 rounded"></div>
      </div>
    </div>

    <div className="from-accent to-accent/50 rounded-lg border bg-gradient-to-br p-4">
      <div className="mb-3 flex items-center gap-2">
        <BarChart3 className="text-accent-foreground h-4 w-4" />
        <span className="text-sm font-medium">Finance</span>
      </div>
      <div className="space-y-2">
        <div className="bg-accent-foreground/30 h-2 w-3/4 rounded"></div>
        <div className="bg-accent-foreground/30 h-2 w-1/2 rounded"></div>
      </div>
    </div>

    <div className="from-secondary to-secondary/50 rounded-lg border bg-gradient-to-br p-4">
      <div className="mb-3 flex items-center gap-2">
        <FileText className="text-secondary-foreground h-4 w-4" />
        <span className="text-sm font-medium">Project Management</span>
      </div>
      <div className="space-y-2">
        <div className="bg-secondary-foreground/30 h-2 w-4/5 rounded"></div>
        <div className="bg-secondary-foreground/30 h-2 w-3/5 rounded"></div>
      </div>
    </div>
  </div>
);

// Navigation UI Component
const NavigationUI = () => (
  <div className="bg-background/90 flex h-full overflow-hidden rounded-xl border shadow-xl backdrop-blur-lg">
    {/* Enhanced Sidebar with Glass Effect */}
    <div className="border-border/60 from-muted/60 via-muted/40 to-muted/60 flex w-16 flex-col items-center gap-3 border-r bg-gradient-to-b py-4 backdrop-blur-md">
      {/* Active item with glow effect */}
      <div className="group bg-primary relative flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="bg-primary absolute inset-0 rounded-xl opacity-30 blur-lg transition-opacity group-hover:opacity-50"></div>
        <div className="from-primary/80 to-primary absolute inset-0 rounded-xl bg-gradient-to-br shadow-inner"></div>
        <div className="bg-primary-foreground relative h-4 w-4 rounded-sm shadow-sm"></div>
        <div className="bg-primary absolute top-1/2 -right-1 h-2 w-0.5 -translate-y-1/2 rounded-full shadow-sm"></div>
      </div>

      {/* Interactive inactive items */}
      <div className="group bg-muted/80 hover:bg-muted flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl transition-all duration-200 hover:shadow-md">
        <div className="bg-muted-foreground/60 group-hover:bg-muted-foreground/80 h-4 w-4 rounded-sm shadow-sm transition-colors"></div>
      </div>

      <div className="group bg-muted/80 hover:bg-muted flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl transition-all duration-200 hover:shadow-md">
        <div className="bg-muted-foreground/60 group-hover:bg-muted-foreground/80 h-4 w-4 rounded-sm shadow-sm transition-colors"></div>
      </div>

      <div className="group bg-muted/80 hover:bg-muted flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl transition-all duration-200 hover:shadow-md">
        <div className="bg-muted-foreground/60 group-hover:bg-muted-foreground/80 h-4 w-4 rounded-sm shadow-sm transition-colors"></div>
      </div>
    </div>

    {/* Enhanced Main Content */}
    <div className="from-background/60 via-background/80 to-background/90 flex-1 bg-gradient-to-br p-5 backdrop-blur-sm">
      {/* Professional Header with Status Indicators */}
      <div className="border-border/40 mb-5 border-b pb-4">
        <div className="flex items-center justify-between">
          <div className="from-foreground/90 to-foreground/70 h-6 w-32 rounded-lg bg-gradient-to-r shadow-sm"></div>
          <div className="flex items-center gap-2">
            <div className="bg-primary h-2 w-2 animate-pulse rounded-full shadow-sm"></div>
            <div className="bg-accent/60 h-2 w-2 rounded-full shadow-sm"></div>
            <div className="bg-muted h-2 w-2 rounded-full shadow-sm"></div>
          </div>
        </div>
        <div className="bg-muted-foreground/60 mt-2 h-3 w-24 rounded-md"></div>
      </div>

      {/* Modern Content Cards with Backdrop Blur */}
      <div className="space-y-3">
        <div className="group border-border/50 bg-card/90 h-12 w-full rounded-xl border p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div className="from-primary/50 to-primary/30 h-3 w-20 rounded-full bg-gradient-to-r shadow-sm"></div>
            <div className="flex items-center gap-2">
              <div className="bg-primary/40 h-2 w-2 rounded-full"></div>
              <div className="bg-muted/60 h-2 w-8 rounded"></div>
            </div>
          </div>
        </div>

        <div className="group border-border/50 bg-card/90 h-12 w-full rounded-xl border p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div className="from-accent/50 to-accent/30 h-3 w-24 rounded-full bg-gradient-to-r shadow-sm"></div>
            <div className="flex items-center gap-2">
              <div className="bg-accent/40 h-2 w-2 rounded-full"></div>
              <div className="bg-muted/60 h-2 w-6 rounded"></div>
            </div>
          </div>
        </div>

        <div className="border-border/40 bg-card/80 h-10 w-full rounded-xl border p-3 shadow-sm backdrop-blur-sm">
          <div className="from-muted/60 via-muted/40 to-muted/60 h-3 w-full rounded-full bg-gradient-to-r shadow-sm"></div>
        </div>
      </div>
    </div>
  </div>
);

// Redesigned User Roles UI Component (Permission Matrix)
const UserRolesUI = () => {
  const roles = [
    { key: "admin", label: "Admin", color: "primary" },
    { key: "manager", label: "Manager", color: "secondary" },
    { key: "user", label: "User", color: "accent" },
  ];

  const permissions = [
    {
      icon: Settings,
      label: "System Settings",
      access: { admin: true, manager: true, user: false },
    },
    {
      icon: Users,
      label: "User Management",
      access: { admin: true, manager: false, user: false },
    },
    {
      icon: FileText,
      label: "Project Docs",
      access: { admin: true, manager: true, user: true },
    },
    {
      icon: BarChart3,
      label: "Analytics",
      access: { admin: true, manager: true, user: false },
    },
    {
      icon: Calendar,
      label: "Scheduling",
      access: { admin: true, manager: true, user: true },
    },
    {
      icon: Bell,
      label: "Notifications",
      access: { admin: true, manager: true, user: true },
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold">Role Permissions</h4>
          <p className="text-muted-foreground text-xs">Visual access matrix</p>
        </div>
        <div className="flex gap-2">
          {roles.map((r) => (
            <span
              key={r.key}
              className={cn(
                "rounded-full border px-2 py-1 text-xs font-medium",
                r.color === "primary" &&
                  "border-primary/30 bg-primary/10 text-primary",
                r.color === "secondary" &&
                  "border-secondary/30 bg-secondary/10 text-secondary",
                r.color === "accent" &&
                  "border-accent/30 bg-accent/10 text-accent",
              )}
            >
              {r.label}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <div className="bg-muted/40 text-muted-foreground grid grid-cols-[1fr_repeat(3,70px)] items-stretch text-xs font-medium tracking-wide uppercase">
          <div className="px-3 py-2">Capability</div>
          {roles.map((r) => (
            <div
              key={r.key}
              className="flex items-center justify-center border-l px-2 py-2"
            >
              {r.label}
            </div>
          ))}
        </div>
        <div className="divide-y">
          {permissions.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className={cn(
                  "grid grid-cols-[1fr_repeat(3,70px)] items-center",
                  "bg-background/60 backdrop-blur-sm",
                  i % 2 === 1 && "bg-muted/20",
                )}
              >
                <div className="flex items-center gap-2 px-3 py-3 text-sm">
                  <span className="text-muted-foreground flex h-6 w-6 items-center justify-center rounded-md border">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span>{p.label}</span>
                </div>
                {roles.map((r) => (
                  <div
                    key={r.key}
                    className="flex items-center justify-center border-l px-2 py-3"
                  >
                    {p.access[r.key as keyof typeof p.access] ? (
                      <span
                        className={cn(
                          "flex h-5 w-5 items-center justify-center rounded-sm border text-[10px] font-semibold",
                          r.color === "primary" &&
                            "border-primary/40 bg-primary/15 text-primary",
                          r.color === "secondary" &&
                            "border-secondary/40 bg-secondary/15 text-secondary",
                          r.color === "accent" &&
                            "border-accent/40 bg-accent/15 text-accent",
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                    ) : (
                      <span className="text-muted-foreground/40 text-xs">
                        —
                      </span>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-muted/30 text-muted-foreground flex items-center gap-3 rounded-md border px-3 py-2 text-xs">
        <div className="flex items-center gap-1">
          <span className="border-primary/40 bg-primary/20 h-3 w-3 rounded-sm border"></span>
          <span>Full</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="border-secondary/40 bg-secondary/20 h-3 w-3 rounded-sm border"></span>
          <span>Managed</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="border-accent/40 bg-accent/20 h-3 w-3 rounded-sm border"></span>
          <span>Basic</span>
        </div>
        <span className="ml-auto italic opacity-80">Illustrative matrix</span>
      </div>
    </div>
  );
};
