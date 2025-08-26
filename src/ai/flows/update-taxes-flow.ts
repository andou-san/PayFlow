'use server';
/**
 * @fileOverview A flow for updating tax withholding information.
 *
 * - updateTaxes - A function that handles updating tax settings.
 * - UpdateTaxesInput - The input type for the updateTaxes function.
 * - UpdateTaxesOutput - The return type for the updateTaxes function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const UpdateTaxesInputSchema = z.object({
  filingStatus: z.string({
    required_error: 'Please select a filing status.',
  }),
  federalAllowances: z.coerce
    .number()
    .min(0, 'Allowances must be a positive number.'),
  state: z.string().min(2, 'State is required.'),
  stateAllowances: z.coerce
    .number()
    .min(0, 'Allowances must be a positive number.'),
  // In a real app, you'd also have an employeeId to know who to update
  // employeeId: z.string(),
});
export type UpdateTaxesInput = z.infer<typeof UpdateTaxesInputSchema>;

export const UpdateTaxesOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type UpdateTaxesOutput = z.infer<typeof UpdateTaxesOutputSchema>;

export async function updateTaxes(
  input: UpdateTaxesInput
): Promise<UpdateTaxesOutput> {
  return updateTaxesFlow(input);
}

const updateTaxesFlow = ai.defineFlow(
  {
    name: 'updateTaxesFlow',
    inputSchema: UpdateTaxesInputSchema,
    outputSchema: UpdateTaxesOutputSchema,
  },
  async (input) => {
    // In a real application, you would find the employee record and
    // update their taxInfo based on the input.
    const taxWithholdingData = {
        filingStatus: input.filingStatus,
        federalAllowances: input.federalAllowances,
        state: input.state,
        stateAllowances: input.stateAllowances,
    };
    
    console.log('Simulating update to employee tax withholding data:', taxWithholdingData);

    return {
      success: true,
      message: `Your tax settings have been successfully updated.`,
    };
  }
);
