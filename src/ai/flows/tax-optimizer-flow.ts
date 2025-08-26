'use server';
/**
 * @fileOverview A flow for finding the optimal payroll timing to minimize taxes.
 *
 * - optimizeTaxes - A function that handles the tax optimization analysis.
 * - TaxOptimizerInput - The input type for the optimizeTaxes function.
 * - TaxOptimizerOutput - The return type for the optimizeTaxes function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const TaxOptimizerInputSchema = z.object({
  payPeriodEndDate: z.string().describe('The end date of the pay period, in YYYY-MM-DD format.'),
  grossPayroll: z.coerce.number().min(1, 'Gross payroll must be greater than 0.'),
  state: z.string().min(2, 'State is required.'),
});
export type TaxOptimizerInput = z.infer<typeof TaxOptimizerInputSchema>;

export const TaxOptimizerOutputSchema = z.object({
  recommendation: z.string().describe('The AI-generated recommendation for the optimal time to run payroll.'),
});
export type TaxOptimizerOutput = z.infer<typeof TaxOptimizerOutputSchema>;

export async function optimizeTaxes(
  input: TaxOptimizerInput
): Promise<TaxOptimizerOutput> {
  return taxOptimizerFlow(input);
}

const prompt = ai.definePrompt({
    name: 'taxOptimizerPrompt',
    input: { schema: TaxOptimizerInputSchema },
    output: { schema: TaxOptimizerOutputSchema },
    prompt: `You are an expert payroll tax accountant. Your goal is to recommend the optimal date to run payroll to minimize the immediate tax burden for a company.

    Analyze the following payroll data:
    - Pay Period End Date: {{{payPeriodEndDate}}}
    - Total Gross Payroll: {{{grossPayroll}}}
    - State: {{{state}}}

    Based on this information, provide a concise, actionable recommendation. Consider factors like federal and state tax deposit schedules. For example, running payroll on a specific date might align better with quarterly tax deposit deadlines, improving cash flow.

    Start your recommendation with a clear suggestion, followed by a brief explanation.
    Example: "Running payroll on the 28th of the month could potentially reduce tax burden by 2.3% due to optimal alignment with quarterly tax deposit schedules."
    `,
});


const taxOptimizerFlow = ai.defineFlow(
  {
    name: 'taxOptimizerFlow',
    inputSchema: TaxOptimizerInputSchema,
    outputSchema: TaxOptimizerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
