'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { SlidersHorizontal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { optimizeTaxes, TaxOptimizerInputSchema } from '@/ai/flows/tax-optimizer-flow';

const formSchema = TaxOptimizerInputSchema;

export default function TaxOptimizerPage() {
    const [result, setResult] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            payPeriodEndDate: new Date().toISOString().split('T')[0],
            grossPayroll: undefined,
            state: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        setResult(null);
        const response = await optimizeTaxes(values);
        setResult(response.recommendation);
        setIsLoading(false);
    }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Tax Optimization Tool</h1>
        <p className="text-muted-foreground">Find the optimal timing for running payroll to minimize taxes for a pay period.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardHeader>
                        <CardTitle>Payroll Details</CardTitle>
                        <CardDescription>Enter details for the upcoming pay period.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="payPeriodEndDate"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Pay Period End Date</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="grossPayroll"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Total Gross Payroll</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="50000" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                    <Input placeholder="California" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Analyzing...' : <>
                            <SlidersHorizontal className="mr-2 h-4 w-4" />
                            Analyze Optimal Timing
                        </> }
                    </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
        
        <div className="flex items-center justify-center">
            {isLoading ? (
                 <div className="text-center text-muted-foreground">
                    <p>Analyzing payroll data with AI...</p>
                </div>
            ) : result ? (
                <Alert className="bg-primary/5 border-primary/20">
                    <SlidersHorizontal className="h-4 w-4 text-primary" />
                    <AlertTitle className="font-bold text-primary">Optimal Timing Found</AlertTitle>
                    <AlertDescription>
                       {result}
                    </AlertDescription>
                </Alert>
            ) : (
                <div className="text-center text-muted-foreground">
                    <p>Enter your payroll details to see tax optimization suggestions.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
