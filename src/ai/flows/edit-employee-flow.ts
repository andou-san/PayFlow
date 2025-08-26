'use server';
/**
 * @fileOverview A flow for editing an existing employee.
 *
 * - editEmployee - A function that handles editing an employee.
 * - EditEmployeeInput - The input type for the editEmployee function.
 * - EditEmployeeOutput - The return type for the editEmployee function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const EditEmployeeInputSchema = z.object({
  id: z.string().describe("The ID of the employee being edited."),
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  position: z.string().min(2, 'Position must be at least 2 characters.'),
  payRate: z.string().min(1, 'Pay rate is required.'),
  ssnLast4: z.string().length(4, 'SSN last 4 digits must be 4 characters.'),
  accountLast4: z.string().length(4, 'Account last 4 digits must be 4 characters.'),
  routingLast4: z.string().length(4, 'Routing last 4 digits must be 4 characters.'),
});
export type EditEmployeeInput = z.infer<typeof EditEmployeeInputSchema>;

export const EditEmployeeOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type EditEmployeeOutput = z.infer<typeof EditEmployeeOutputSchema>;

export async function editEmployee(input: EditEmployeeInput): Promise<EditEmployeeOutput> {
  return editEmployeeFlow(input);
}

const editEmployeeFlow = ai.defineFlow(
  {
    name: 'editEmployeeFlow',
    inputSchema: EditEmployeeInputSchema,
    outputSchema: EditEmployeeOutputSchema,
  },
  async (input) => {
    console.log('Processing employee update:', input);

    const payRateNum = parseFloat(input.payRate.replace(/[^0-9.]+/g,""));
    const isHourly = input.payRate.includes('/hr');

    const updatedEmployeeData = {
        name: input.name,
        email: input.email,
        position: input.position,
        salary: isHourly ? undefined : payRateNum,
        hourlyRate: isHourly ? payRateNum : undefined,
        taxInfo: {
            ssnLast4: input.ssnLast4,
        }, 
        bankInfo: { // This should be encrypted
            accountLast4: input.accountLast4,
            routingLast4: input.routingLast4,
        },
    }

    // In a real application, you would update the employee in a database.
    console.log(`Simulating DB update for employee ${input.id} with data:`, updatedEmployeeData);


    return {
      success: true,
      message: `Employee ${input.name}'s information has been successfully updated.`,
    };
  }
);
