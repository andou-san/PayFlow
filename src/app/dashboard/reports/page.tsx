'use client';

import { Bar, BarChart, Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const payrollCostData = [
  { month: 'Jan', cost: 41000 },
  { month: 'Feb', cost: 41500 },
  { month: 'Mar', cost: 42000 },
  { month: 'Apr', cost: 42200 },
  { month: 'May', cost: 42800 },
  { month: 'Jun', cost: 43500 },
];

const taxLiabilityData = [
    { quarter: "Q1", federal: 12000, state: 4000 },
    { quarter: "Q2", federal: 12500, state: 4200 },
    { quarter: "Q3", federal: 13000, state: 4400 },
    { quarter: "Q4", federal: 13200, state: 4500 },
]

const chartConfig = {
  cost: {
    label: "Payroll Cost",
    color: "hsl(var(--primary))",
  },
  federal: {
    label: "Federal Taxes",
    color: "hsl(var(--chart-1))",
  },
  state: {
    label: "State Taxes",
    color: "hsl(var(--chart-2))",
  },
};

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Real-Time Reporting</h1>
        <p className="text-muted-foreground">Get instant insights into your payroll and labor expenses.</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Payroll Costs Over Time</CardTitle>
            <CardDescription>Showing total payroll expenses for the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <LineChart data={payrollCostData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis strokeWidth={1} tickFormatter={(value) => `$${value / 1000}k`} tickLine={false} axisLine={false} />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <Line type="monotone" dataKey="cost" stroke="var(--color-cost)" strokeWidth={2} dot={true} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-1">
        <Card>
            <CardHeader>
                <CardTitle>Tax Liabilities by Quarter</CardTitle>
                <CardDescription>Breakdown of federal and state tax liabilities.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <BarChart data={taxLiabilityData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="quarter" tickLine={false} axisLine={false} />
                        <YAxis tickFormatter={(value) => `$${value / 1000}k`} tickLine={false} axisLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="federal" fill="var(--color-federal)" radius={4} />
                        <Bar dataKey="state" fill="var(--color-state)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
