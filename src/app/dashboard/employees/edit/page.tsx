
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
import { Card, CardContent } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { editEmployee, EditEmployeeInputSchema } from '@/ai/flows/edit-employee-flow';

const formSchema = EditEmployeeInputSchema;

export default function EditEmployeePage() {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // Pre-populate with dummy data for Alice Johnson for this example
    defaultValues: {
      id: 'EMP001', // This would be dynamic in a real app
      name: 'Alice Johnson',
      email: 'alice@example.com',
      position: 'Developer',
      payRate: '$60/hr',
      ssnLast4: '1234',
      accountLast4: '5678',
      routingLast4: '9012',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await editEmployee(values);
    toast({
      title: 'Employee Updated',
      description: result.message,
    });
    router.push('/dashboard/employees');
  }

  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-3xl font-bold font-headline">Edit Employee</h1>
        <p className="text-muted-foreground">Update the details for Alice Johnson.</p>
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
