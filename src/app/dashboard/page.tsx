import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Link from 'next/link';
import { format, addMonths, setDate, differenceInDays } from 'date-fns';

const quickActions = [
    { label: "Run Payroll", href: "#", variant: "default" },
    { label: "Add Employee", href: "/dashboard/employees/add", variant: "outline" },
    { label: "View Reports", href: "/dashboard/reports", variant: "outline" },
    { label: "Update Taxes", href: "/dashboard/update-taxes", variant: "outline" }
];

export default function DashboardPage() {
    const today = new Date();
    const nextPayrollDate = setDate(addMonths(today, 1), 15);
    const daysUntilNextPayroll = differenceInDays(nextPayrollDate, today);
    const nextPayrollFormatted = format(nextPayrollDate, "MMM dd, yyyy");
    const payPeriodStart = format(setDate(nextPayrollDate, 1), "MMM d");
    const payPeriodEnd = format(nextPayrollDate, "MMM dd");


    const kpiData = [
        { title: "Next Payroll", value: nextPayrollFormatted, icon: Clock, change: `in ${daysUntilNextPayroll} days` },
        { title: "Total Payroll Cost", value: "$42,120.50", icon: DollarSign, change: "+5.2% last month" },
        { title: "Active Employees", value: "52", icon: Users, change: "+2 this month" },
        { title: "Last Payroll Status", value: "Paid Successfully", icon: CheckCircle, change: "on Dec 1, 2023" }
    ];


    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Dashboard Overview</h1>
                <p className="text-muted-foreground">Welcome back! Here's a snapshot of your payroll.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {kpiData.map(kpi => (
                    <Card key={kpi.title} className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                            <kpi.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{kpi.value}</div>
                            <p className="text-xs text-muted-foreground">{kpi.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Payroll</CardTitle>
                        <CardDescription>
                            Your next payroll for the period of {payPeriodStart} - {payPeriodEnd} is scheduled in {daysUntilNextPayroll} days.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Pay Date</span>
                                <span>{nextPayrollFormatted}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Total Estimated Cost</span>
                                <span>~$42,500.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Employees</span>
                                <span>52</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Run Payroll</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>
                            Get to what you need, faster.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        {quickActions.map(action => (
                            <Button key={action.label} asChild variant={action.variant as any} className="transition-transform duration-300 hover:scale-105">
                                <Link href={action.href}>{action.label}</Link>
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
