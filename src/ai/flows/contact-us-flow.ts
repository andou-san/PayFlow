'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - contactUs - A function that handles the contact form submission.
 * - ContactUsInput - The input type for the contactUs function.
 * - ContactUsOutput - The return type for the contactUs function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const ContactUsInputSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  company: z.string().min(2, 'Company name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  employees: z.coerce.number().min(1, 'Please enter the number of employees.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});
export type ContactUsInput = z.infer<typeof ContactUsInputSchema>;

export const ContactUsOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type ContactUsOutput = z.infer<typeof ContactUsOutputSchema>;

export async function contactUs(input: ContactUsInput): Promise<ContactUsOutput> {
  return contactUsFlow(input);
}

const contactUsFlow = ai.defineFlow(
  {
    name: 'contactUsFlow',
    inputSchema: ContactUsInputSchema,
    outputSchema: ContactUsOutputSchema,
  },
  async (input) => {
    console.log('Processing contact form submission:', input);

    // In a real application, you would save this to a CRM or send an email.
    // For now, we'll just simulate a success response.
    return {
      success: true,
      message: 'Thank you for your interest. We will be in touch shortly.',
    };
  }
);
