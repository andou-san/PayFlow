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
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Clock } from 'lucide-react';
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { contactUs, ContactUsInputSchema } from '@/ai/flows/contact-us-flow';

const formSchema = ContactUsInputSchema;

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      employees: undefined,
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await contactUs(values);
    console.log(result);
    toast({
      title: 'Demo Request Sent!',
      description: result.message,
    });
    form.reset();
  }

  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Have Questions? <br/>We’re Here to Help.</h1>
                <p className="text-lg text-muted-foreground">Fill out the form to request a personalized demo, or use the contact information below to reach our support team.</p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <div>
                            <h3 className="font-semibold">Support Email</h3>
                            <a href="mailto:support@payflow.com" className="text-muted-foreground hover:text-primary">support@payflow.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Clock className="h-6 w-6 text-primary" />
                        <div>
                            <h3 className="font-semibold">Chat Support</h3>
                            <p className="text-muted-foreground">Available Mon–Fri, 9AM–6PM ET</p>
                        </div>
                    </div>
                </div>
              </div>
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-8 border rounded-lg shadow-md bg-secondary/30">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} />
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
                            <Input placeholder="john@acme.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="employees"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Employees</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your payroll needs..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">Request a Demo</Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
