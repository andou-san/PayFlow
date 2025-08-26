'use server';
/**
 * @fileOverview A flow for adding a new employee.
 *
 * - addEmployee - A function that handles adding a new employee.
 * - AddEmployeeInput - The input type for the addEmployee function.
 * - AddEmployeeOutput - The return type for the addEmployee function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const AddEmployeeInputSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  position: z.string().min(2, 'Position must be at least 2 characters.'),
  payRate: z.string().min(1, 'Pay rate is required.'), // This can be parsed into salary or hourlyRate
  ssnLast4: z.string().length(4, 'SSN last 4 digits must be 4 characters.'),
  accountLast4: z.string().length(4, 'Account last 4 digits must be 4 characters.'),
  routingLast4: z.string().length(4, 'Routing last 4 digits must be 4 characters.'),
});
export type AddEmployeeInput = z.infer<typeof AddEmployeeInputSchema>;

export const AddEmployeeOutputSchema = z.object({
  success: z.boolean(),
  employeeId: z.string().optional(),
  message: z.string(),
});
export type AddEmployeeOutput = z.infer<typeof AddEmployeeOutputSchema>;

export async function addEmployee(input: AddEmployeeInput): Promise<AddEmployeeOutput> {
  return addEmployeeFlow(input);
}

const addEmployeeFlow = ai.defineFlow(
  {
    name: 'addEmployeeFlow',
    inputSchema: AddEmployeeInputSchema,
    outputSchema: AddEmployeeOutputSchema,
  },
  async (input) => {
    console.log('Processing new employee:', input);

    // In a real application, you would save this to a database
    // according to the defined schema.
    const employeeId = `EMP${Math.floor(1000 + Math.random() * 9000)}`;
    
    const payRateNum = parseFloat(input.payRate.replace(/[^0-9.]+/g,""));
    const isHourly = input.payRate.includes('/hr');

    const newEmployeeRecord = {
        name: input.name,
        email: input.email,
        position: input.position,
        salary: isHourly ? undefined : payRateNum,
        hourlyRate: isHourly ? payRateNum : undefined,
        taxInfo: {
            ssnLast4: input.ssnLast4,
            // taxWithholding would be collected in a separate, more secure step
        }, 
        bankInfo: { // This should be encrypted
            accountLast4: input.accountLast4,
            routingLast4: input.routingLast4,
        },
        role: 'employee', // default role
        status: 'active',
        createdAt: new Date().toISOString(),
    }
    console.log("Simulating write to DB for new employee: ", newEmployeeRecord);


    return {
      success: true,
      employeeId: employeeId,
      message: `Employee ${input.name} added successfully.`,
    };
  }
);
