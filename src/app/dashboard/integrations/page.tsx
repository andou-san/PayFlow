import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Puzzle } from "lucide-react";

const integrations = [
    { name: "Google Workspace", description: "Sync employee directory for easy onboarding.", logo: "https://placehold.co/48x48.png", hint: "google logo", connected: true },
    { name: "QuickBooks", description: "Automatically sync payroll data with your books.", logo: "https://placehold.co/48x48.png", hint: "quickbooks logo", connected: true },
    { name: "Slack", description: "Get payroll reminders and notifications in Slack.", logo: "https://placehold.co/48x48.png", hint: "slack logo", connected: false },
    { name: "Xero", description: "Sync payroll expenses and journal entries.", logo: "https://placehold.co/48x48.png", hint: "xero logo", connected: false },
    { name: "TSheets", description: "Import employee hours for accurate payroll runs.", logo: "https://placehold.co/48x48.png", hint: "time tracking logo", connected: false },
    { name: "Asana", description: "Streamline project and payroll management.", logo: "https://placehold.co/48x48.png", hint: "asana logo", connected: false },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Integrations</h1>
        <p className="text-muted-foreground">Connect PayFlow to your favorite tools to streamline your workflow.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {integrations.map((integration) => (
          <Card key={integration.name} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <Image src={integration.logo} alt={integration.name} width={48} height={48} data-ai-hint={integration.hint} className="rounded-md" />
                        <div>
                            <CardTitle>{integration.name}</CardTitle>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{integration.description}</CardDescription>
            </CardContent>
            <CardContent>
              <Button className="w-full" variant={integration.connected ? "secondary" : "default"}>
                {integration.connected ? "Manage" : "Connect"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
