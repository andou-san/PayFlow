'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import { useRouter } from "next/navigation";

const payslips = [
    { id: 'PS001', date: '2023-12-15', amount: '$3,200.00' },
    { id: 'PS002', date: '2023-11-30', amount: '$3,200.00' },
    { id: 'PS003', date: '2023-11-15', amount: '$3,150.00' },
    { id: 'PS004', date: '2023-10-31', amount: '$3,200.00' },
]

export default function PayslipsPage() {
    const router = useRouter();

    const generatePayslipContent = (payslip: typeof payslips[0], employeeName: string) => {
        const grossPay = parseFloat(payslip.amount.replace(/[$,]/g, ''));
        const federalTax = grossPay * 0.12;
        const stateTax = grossPay * 0.05;
        const socialSecurity = grossPay * 0.062;
        const medicare = grossPay * 0.0145;
        const totalDeductions = federalTax + stateTax + socialSecurity + medicare;
        const netPay = grossPay - totalDeductions;

        return `
    Payslip
    ================================

    Company: PayFlow Inc.
    Employee: ${employeeName}
    Pay Period End Date: ${payslip.date}

    --------------------------------
    Earnings
    --------------------------------
    Gross Pay: ${payslip.amount}

    --------------------------------
    Deductions
    --------------------------------
    Federal Tax:       $${federalTax.toFixed(2)}
    State Tax:         $${stateTax.toFixed(2)}
    Social Security:   $${socialSecurity.toFixed(2)}
    Medicare:          $${medicare.toFixed(2)}
    --------------------------------
    Total Deductions:  $${totalDeductions.toFixed(2)}

    ================================
    Net Pay:           $${netPay.toFixed(2)}
    ================================
        `;
    };

    const handleDownload = (payslip: typeof payslips[0]) => {
        const employeeName = "Alice Johnson"; // This is a static page for now
        const content = generatePayslipContent(payslip, employeeName);
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `payslip-${employeeName.replace(/\s+/g, '-')}-${payslip.date}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
      <div className="space-y-8">
         <div>
          <h1 className="text-3xl font-bold font-headline">Payslips for Alice Johnson</h1>
          <p className="text-muted-foreground">View and download historical payslips.</p>
        </div>
  
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pay Period</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payslips.map((payslip) => (
                  <TableRow key={payslip.id}>
                    <TableCell>
                      <div className="font-medium">{payslip.date}</div>
                    </TableCell>
                    <TableCell>{payslip.amount}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" onClick={() => handleDownload(payslip)}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="flex justify-start">
            <Button variant="outline" onClick={() => router.back()}>Back to Employees</Button>
        </div>
      </div>
    );
  }
