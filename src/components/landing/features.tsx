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
      className="from-background via-muted/20 to-background bg-gradient-to-b py-12 sm:py-16 md:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl lg:text-4xl">
            Powerful Features for Modern Business
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl px-4 text-base sm:px-0 sm:text-lg">
            Everything you need to streamline your operations and boost
            productivity in one integrated platform.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <FeatureCard className="group">
            <CardHeader className="pb-6">
              <CardHeading
                icon={Layers}
                title="All-in-one platform"
                description="Access all essential business tools in one seamless system, eliminating the need for multiple apps."
              />
            </CardHeader>

            <div className="relative mb-4 border-t border-dashed sm:mb-6">
              <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"></div>
              <div className="aspect-[4/3] p-4 sm:aspect-76/59 sm:p-6">
                <AllInOnePlatformUI />
              </div>
              <div className="from-card pointer-events-none absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t to-transparent sm:h-24"></div>
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

            <CardContent className="px-4 sm:px-6">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute -inset-4 [background:radial-gradient(50%_50%_at_75%_50%,transparent,var(--color-background)_100%)] sm:-inset-6"></div>
                <div className="aspect-[4/3] rounded-lg border p-3 sm:aspect-76/59 sm:p-4">
                  <NavigationUI />
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard className="group lg:col-span-2">
            <div className="flex flex-col gap-4 px-4 py-4 sm:gap-6 sm:px-6 sm:py-6 lg:flex-row lg:items-start lg:gap-8 lg:px-11 lg:py-7">
              <div className="flex-1">
                <div className="space-y-3 sm:space-y-4">
                  {/* Feature Badge */}
                  <span className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
                    <Users className="size-4" />
                    Customizable user roles
                  </span>

                  {/* Main Heading */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-foreground text-xl leading-tight font-semibold tracking-tight sm:text-[1.75rem] lg:text-[2rem]">
                      Create tailored user permissions to ensure the right
                      access for every team member.
                    </h3>
                    <p className="text-muted-foreground max-w-xl text-xs leading-relaxed sm:text-[13px] lg:text-sm">
                      Manage your team efficiently with role-based access
                      control, ensuring security and proper workflow management
                      across all departments.
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1">
                    {[
                      { label: "Role-based permissions", color: "bg-primary" },
                      { label: "Security compliance", color: "bg-accent" },
                      { label: "Team hierarchy", color: "bg-secondary" },
                      { label: "Custom workflows", color: "bg-primary/60" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="border-border/40 bg-muted/20 flex items-center gap-2 rounded-lg border px-2 py-2 sm:gap-3 sm:px-3 sm:py-2.5"
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 shrink-0 rounded-full sm:h-2 sm:w-2",
                            item.color,
                          )}
                        />
                        <span className="text-muted-foreground/90 text-xs font-medium sm:text-sm">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-1 lg:mt-0">
                <div className="bg-card/90 relative flex-1 overflow-hidden rounded-xl border p-3 shadow-md backdrop-blur-sm sm:p-4">
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
  <div className="p-4 sm:p-6">
    <span className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-6 text-xl leading-tight font-semibold sm:mt-8 sm:text-2xl">
      {description}
    </p>
  </div>
);

// All-in-One Platform UI Component
const AllInOnePlatformUI = () => (
  <div className="grid h-full grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
    <div className="from-primary/10 to-primary/20 rounded-md border bg-gradient-to-br p-2 sm:rounded-lg sm:p-3 md:p-4">
      <div className="mb-1.5 flex items-center gap-1 sm:mb-2 sm:gap-1.5 md:mb-3 md:gap-2">
        <Database className="text-primary h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
        <span className="text-[10px] font-medium sm:text-xs md:text-sm">
          CRM
        </span>
      </div>
      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
        <div className="bg-primary/30 h-1 w-3/4 rounded sm:h-1.5 md:h-2"></div>
        <div className="bg-primary/30 h-1 w-1/2 rounded sm:h-1.5 md:h-2"></div>
      </div>
    </div>

    <div className="from-muted to-muted/50 rounded-md border bg-gradient-to-br p-2 sm:rounded-lg sm:p-3 md:p-4">
      <div className="mb-1.5 flex items-center gap-1 sm:mb-2 sm:gap-1.5 md:mb-3 md:gap-2">
        <Users className="text-foreground h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
        <span className="text-[10px] font-medium sm:text-xs md:text-sm">
          HR
        </span>
      </div>
      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
        <div className="bg-muted-foreground/30 h-1 w-full rounded sm:h-1.5 md:h-2"></div>
        <div className="bg-muted-foreground/30 h-1 w-2/3 rounded sm:h-1.5 md:h-2"></div>
      </div>
    </div>

    <div className="from-accent to-accent/50 rounded-md border bg-gradient-to-br p-2 sm:rounded-lg sm:p-3 md:p-4">
      <div className="mb-1.5 flex items-center gap-1 sm:mb-2 sm:gap-1.5 md:mb-3 md:gap-2">
        <BarChart3 className="text-accent-foreground h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
        <span className="text-[10px] font-medium sm:text-xs md:text-sm">
          Finance
        </span>
      </div>
      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
        <div className="bg-accent-foreground/30 h-1 w-3/4 rounded sm:h-1.5 md:h-2"></div>
        <div className="bg-accent-foreground/30 h-1 w-1/2 rounded sm:h-1.5 md:h-2"></div>
      </div>
    </div>

    <div className="from-secondary to-secondary/50 rounded-md border bg-gradient-to-br p-2 sm:rounded-lg sm:p-3 md:p-4">
      <div className="mb-1.5 flex items-center gap-1 sm:mb-2 sm:gap-1.5 md:mb-3 md:gap-2">
        <FileText className="text-secondary-foreground h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
        <span className="truncate text-[10px] font-medium sm:text-xs md:text-sm">
          Projects
        </span>
      </div>
      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
        <div className="bg-secondary-foreground/30 h-1 w-4/5 rounded sm:h-1.5 md:h-2"></div>
        <div className="bg-secondary-foreground/30 h-1 w-3/5 rounded sm:h-1.5 md:h-2"></div>
      </div>
    </div>
  </div>
);

// Navigation UI Component
const NavigationUI = () => (
  <div className="bg-background/90 flex h-full overflow-hidden rounded-lg border shadow-xl backdrop-blur-lg sm:rounded-xl">
    {/* Enhanced Sidebar with Glass Effect */}
    <div className="border-border/60 from-muted/60 via-muted/40 to-muted/60 flex w-12 flex-col items-center gap-2 border-r bg-gradient-to-b py-3 backdrop-blur-md sm:w-16 sm:gap-3 sm:py-4">
      {/* Active item with glow effect */}
      <div className="group bg-primary relative flex h-8 w-8 items-center justify-center rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl sm:h-11 sm:w-11 sm:rounded-xl">
        <div className="bg-primary absolute inset-0 rounded-lg opacity-30 blur-lg transition-opacity group-hover:opacity-50 sm:rounded-xl"></div>
        <div className="from-primary/80 to-primary absolute inset-0 rounded-lg bg-gradient-to-br shadow-inner sm:rounded-xl"></div>
        <div className="bg-primary-foreground relative h-3 w-3 rounded-sm shadow-sm sm:h-4 sm:w-4"></div>
        <div className="bg-primary absolute top-1/2 -right-0.5 h-1.5 w-0.5 -translate-y-1/2 rounded-full shadow-sm sm:-right-1 sm:h-2"></div>
      </div>

      {/* Interactive inactive items */}
      <div className="group bg-muted/80 hover:bg-muted flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-all duration-200 hover:shadow-md sm:h-11 sm:w-11 sm:rounded-xl">
        <div className="bg-muted-foreground/60 group-hover:bg-muted-foreground/80 h-3 w-3 rounded-sm shadow-sm transition-colors sm:h-4 sm:w-4"></div>
      </div>

      <div className="group bg-muted/80 hover:bg-muted flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-all duration-200 hover:shadow-md sm:h-11 sm:w-11 sm:rounded-xl">
        <div className="bg-muted-foreground/60 group-hover:bg-muted-foreground/80 h-3 w-3 rounded-sm shadow-sm transition-colors sm:h-4 sm:w-4"></div>
      </div>

      <div className="group bg-muted/80 hover:bg-muted flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-all duration-200 hover:shadow-md sm:h-11 sm:w-11 sm:rounded-xl">
        <div className="bg-muted-foreground/60 group-hover:bg-muted-foreground/80 h-3 w-3 rounded-sm shadow-sm transition-colors sm:h-4 sm:w-4"></div>
      </div>
    </div>

    {/* Enhanced Main Content */}
    <div className="from-background/60 via-background/80 to-background/90 flex-1 bg-gradient-to-br p-3 backdrop-blur-sm sm:p-5">
      {/* Professional Header with Status Indicators */}
      <div className="border-border/40 mb-3 border-b pb-3 sm:mb-5 sm:pb-4">
        <div className="flex items-center justify-between">
          <div className="from-foreground/90 to-foreground/70 h-4 w-24 rounded-md bg-gradient-to-r shadow-sm sm:h-6 sm:w-32 sm:rounded-lg"></div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full shadow-sm sm:h-2 sm:w-2"></div>
            <div className="bg-accent/60 h-1.5 w-1.5 rounded-full shadow-sm sm:h-2 sm:w-2"></div>
            <div className="bg-muted h-1.5 w-1.5 rounded-full shadow-sm sm:h-2 sm:w-2"></div>
          </div>
        </div>
        <div className="bg-muted-foreground/60 mt-1.5 h-2 w-16 rounded-sm sm:mt-2 sm:h-3 sm:w-24 sm:rounded-md"></div>
      </div>

      {/* Modern Content Cards with Backdrop Blur */}
      <div className="space-y-2 sm:space-y-3">
        <div className="group border-border/50 bg-card/90 h-8 w-full rounded-lg border p-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg sm:h-12 sm:rounded-xl sm:p-4">
          <div className="flex items-center justify-between">
            <div className="from-primary/50 to-primary/30 h-2 w-16 rounded-full bg-gradient-to-r shadow-sm sm:h-3 sm:w-20"></div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="bg-primary/40 h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2"></div>
              <div className="bg-muted/60 h-1.5 w-6 rounded sm:h-2 sm:w-8"></div>
            </div>
          </div>
        </div>

        <div className="group border-border/50 bg-card/90 h-8 w-full rounded-lg border p-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg sm:h-12 sm:rounded-xl sm:p-4">
          <div className="flex items-center justify-between">
            <div className="from-accent/50 to-accent/30 h-2 w-18 rounded-full bg-gradient-to-r shadow-sm sm:h-3 sm:w-24"></div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="bg-accent/40 h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2"></div>
              <div className="bg-muted/60 h-1.5 w-4 rounded sm:h-2 sm:w-6"></div>
            </div>
          </div>
        </div>

        <div className="border-border/40 bg-card/80 h-6 w-full rounded-lg border p-2 shadow-sm backdrop-blur-sm sm:h-10 sm:rounded-xl sm:p-3">
          <div className="from-muted/60 via-muted/40 to-muted/60 h-2 w-full rounded-full bg-gradient-to-r shadow-sm sm:h-3"></div>
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
      shortLabel: "System",
      access: { admin: true, manager: true, user: false },
    },
    {
      icon: Users,
      label: "User Management",
      shortLabel: "Users",
      access: { admin: true, manager: false, user: false },
    },
    {
      icon: FileText,
      label: "Project Docs",
      shortLabel: "Docs",
      access: { admin: true, manager: true, user: true },
    },
    {
      icon: BarChart3,
      label: "Analytics",
      shortLabel: "Analytics",
      access: { admin: true, manager: true, user: false },
    },
    {
      icon: Calendar,
      label: "Scheduling",
      shortLabel: "Schedule",
      access: { admin: true, manager: true, user: true },
    },
    {
      icon: Bell,
      label: "Notifications",
      shortLabel: "Alerts",
      access: { admin: true, manager: true, user: true },
    },
  ];

  return (
    <div className="space-y-3 sm:space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-xs font-semibold sm:text-sm">Role Permissions</h4>
          <p className="text-muted-foreground text-[10px] sm:text-xs">
            Visual access matrix
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {roles.map((r) => (
            <span
              key={r.key}
              className={cn(
                "rounded-full border px-2 py-0.5 text-[10px] font-medium sm:py-1 sm:text-xs",
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

      <div className="overflow-hidden rounded-md border sm:rounded-lg">
        <div className="bg-muted/40 text-muted-foreground grid grid-cols-[1fr_repeat(3,50px)] items-stretch text-[10px] font-medium tracking-wide uppercase sm:grid-cols-[1fr_repeat(3,70px)] sm:text-xs">
          <div className="px-2 py-1.5 sm:px-3 sm:py-2">Capability</div>
          {roles.map((r) => (
            <div
              key={r.key}
              className="flex items-center justify-center border-l px-1 py-1.5 sm:px-2 sm:py-2"
            >
              <span className="hidden sm:inline">{r.label}</span>
              <span className="sm:hidden">{r.label.charAt(0)}</span>
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
                  "grid grid-cols-[1fr_repeat(3,50px)] items-center sm:grid-cols-[1fr_repeat(3,70px)]",
                  "bg-background/60 backdrop-blur-sm",
                  i % 2 === 1 && "bg-muted/20",
                )}
              >
                <div className="flex items-center gap-1.5 px-2 py-2 text-xs sm:gap-2 sm:px-3 sm:py-3 sm:text-sm">
                  <span className="text-muted-foreground flex h-4 w-4 items-center justify-center rounded border sm:h-6 sm:w-6">
                    <Icon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                  </span>
                  <span className="sm:hidden">{p.shortLabel}</span>
                  <span className="hidden sm:inline">{p.label}</span>
                </div>
                {roles.map((r) => (
                  <div
                    key={r.key}
                    className="flex items-center justify-center border-l px-1 py-2 sm:px-2 sm:py-3"
                  >
                    {p.access[r.key as keyof typeof p.access] ? (
                      <span
                        className={cn(
                          "flex h-4 w-4 items-center justify-center rounded-sm border text-[10px] font-semibold sm:h-5 sm:w-5",
                          r.color === "primary" &&
                            "border-primary/40 bg-primary/15 text-primary",
                          r.color === "secondary" &&
                            "border-secondary/40 bg-secondary/15 text-secondary",
                          r.color === "accent" &&
                            "border-accent/40 bg-accent/15 text-accent",
                        )}
                      >
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      </span>
                    ) : (
                      <span className="text-muted-foreground/40 text-[10px] sm:text-xs">
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
      <div className="bg-muted/30 text-muted-foreground flex flex-wrap items-center gap-2 rounded-md border px-2 py-1.5 text-[10px] sm:gap-3 sm:px-3 sm:py-2 sm:text-xs">
        <div className="flex items-center gap-1">
          <span className="border-primary/40 bg-primary/20 h-2.5 w-2.5 rounded-sm border sm:h-3 sm:w-3"></span>
          <span>Full</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="border-secondary/40 bg-secondary/20 h-2.5 w-2.5 rounded-sm border sm:h-3 sm:w-3"></span>
          <span>Managed</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="border-accent/40 bg-accent/20 h-2.5 w-2.5 rounded-sm border sm:h-3 sm:w-3"></span>
          <span>Basic</span>
        </div>
        <span className="ml-auto hidden italic opacity-80 sm:inline">
          Illustrative matrix
        </span>
      </div>
    </div>
  );
};
