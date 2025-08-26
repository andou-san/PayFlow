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
import { PlusCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { addEmployee, AddEmployeeInputSchema } from '@/ai/flows/add-employee-flow';

const formSchema = AddEmployeeInputSchema;

export default function AddEmployeePage() {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      position: '',
      payRate: '',
      ssnLast4: '',
      accountLast4: '',
      routingLast4: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await addEmployee(values);
    console.log(result);
    toast({
      title: 'Employee Added',
      description: `${values.name} has been successfully added to the system.`,
    });
    router.push('/dashboard/employees');
  }

  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-3xl font-bold font-headline">Add New Employee</h1>
        <p className="text-muted-foreground">Fill in the details below to add a new team member.</p>
      </div>

      <Card className="max-w-2xl">
        <CardContent className="p-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                        <Input placeholder="Alice Johnson" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                        <Input placeholder="alice@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Position / Job Title</FormLabel>
                        <FormControl>
                        <Input placeholder="Software Engineer" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                control={form.control}
                name="payRate"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Pay Rate</FormLabel>
                    <FormControl>
                        <Input placeholder="$60/hr or $80,000/yr" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <div className="grid md:grid-cols-3 gap-6">
                    <FormField
                        control={form.control}
                        name="ssnLast4"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>SSN (Last 4)</FormLabel>
                            <FormControl>
                                <Input placeholder="1234" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="accountLast4"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Account # (Last 4)</FormLabel>
                            <FormControl>
                                <Input placeholder="5678" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="routingLast4"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Routing # (Last 4)</FormLabel>
                            <FormControl>
                                <Input placeholder="9012" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>
                <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
                    <Button type="submit">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Employee
                    </Button>
                </div>
                </form>
            </Form>
        </CardContent>
      </Card>
    </div>
  );
}
