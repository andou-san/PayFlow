'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { updateTaxes, UpdateTaxesInputSchema } from '@/ai/flows/update-taxes-flow';

const formSchema = UpdateTaxesInputSchema;

export default function UpdateTaxesPage() {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      federalAllowances: 0,
      state: "California",
      stateAllowances: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await updateTaxes(values);
    toast({
      title: 'Tax Information Updated',
      description: result.message,
    });
    router.push('/dashboard');
  }

  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-3xl font-bold font-headline">Update Tax Withholding</h1>
        <p className="text-muted-foreground">Adjust your federal and state tax withholding settings.</p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
            <CardTitle>Withholding Settings</CardTitle>
            <CardDescription>Changes will apply to the next payroll run.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="filingStatus"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Federal Filing Status</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a filing status" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="single">Single</SelectItem>
                                    <SelectItem value="married_filing_jointly">Married filing jointly</SelectItem>
                                    <SelectItem value="married_filing_separately">Married filing separately</SelectItem>
                                    <SelectItem value="head_of_household">Head of Household</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="federalAllowances"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Federal Allowances</FormLabel>
                            <FormControl>
                            <Input type="number" placeholder="0" {...field} />
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
                            <Input placeholder="e.g. California" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="stateAllowances"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>State Allowances</FormLabel>
                            <FormControl>
                            <Input type="number" placeholder="0" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                <div className="flex justify-end gap-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
                    <Button type="submit">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                    </Button>
                </div>
                </form>
            </Form>
        </CardContent>
      </Card>
    </div>
  );
}
