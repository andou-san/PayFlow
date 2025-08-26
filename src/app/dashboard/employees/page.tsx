
'use client';

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { PlusCircle, MoreHorizontal, Archive, ArchiveRestore } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast";
  

const initialEmployees = [
  { id: "EMP001", name: "Alice Johnson", email: "alice@example.com", role: "Developer", status: "Active", payRate: "$60/hr" },
  { id: "EMP002", name: "Bob Williams", email: "bob@example.com", role: "Designer", status: "Active", payRate: "$55/hr" },
  { id: "EMP003", name: "Charlie Brown", email: "charlie@example.com", role: "Manager", status: "Active", payRate: "$80,000/yr" },
  { id: "EMP004", name: "Diana Prince", email: "diana@example.com", role: "QA Engineer", status: "On Leave", payRate: "$50/hr" },
  { id: "EMP005", name: "Ethan Hunt", email: "ethan@example.com", role: "Developer", status: "Active", payRate: "$65/hr" },
];

type Employee = typeof initialEmployees[0];

export default function EmployeesPage() {
  const { toast } = useToast();
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [archivedEmployees, setArchivedEmployees] = useState<Employee[]>([]);

  const handleArchive = (employeeToArchive: Employee) => {
    setEmployees(employees.filter(emp => emp.id !== employeeToArchive.id));
    setArchivedEmployees([...archivedEmployees, { ...employeeToArchive, status: 'Archived' }]);
    toast({
      title: 'Employee Archived',
      description: `${employeeToArchive.name} has been archived.`,
    });
  };

  const handleRestore = (employeeToRestore: Employee) => {
    setArchivedEmployees(archivedEmployees.filter(emp => emp.id !== employeeToRestore.id));
    setEmployees([...employees, { ...employeeToRestore, status: 'Active' }]);
     toast({
      title: 'Employee Restored',
      description: `${employeeToRestore.name} has been restored to the active list.`,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Employee Records</h1>
          <p className="text-muted-foreground">Manage your team's information and pay details.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/employees/add">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Employee
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Active Employees</CardTitle>
            <CardDescription>
                These are the current employees in your payroll system.
            </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Pay Rate</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <div className="font-medium">{employee.name}</div>
                    <div className="text-sm text-muted-foreground">{employee.email}</div>
                  </TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>
                    <Badge variant={employee.status === "Active" ? "default" : "secondary"} className={employee.status === "Active" ? "bg-green-500/20 text-green-700 hover:bg-green-500/30" : ""}>
                      {employee.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{employee.payRate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/employees/edit">Edit</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/employees/payslips">View Payslips</Link>
                            </DropdownMenuItem>
                             <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-destructive">
                                        Archive
                                    </DropdownMenuItem>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                    This action cannot be undone. This will archive the employee record
                                    and they will no longer appear in active lists.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleArchive(employee)}>Archive</AlertDialogAction>
                                </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

    {archivedEmployees.length > 0 && (
        <Card>
            <CardHeader>
                <CardTitle>Archived Employees</CardTitle>
                <CardDescription>
                    These employees are no longer active and will not be included in payroll.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Employee</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>
                            <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {archivedEmployees.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>
                                    <div className="font-medium">{employee.name}</div>
                                    <div className="text-sm text-muted-foreground">{employee.email}</div>
                                </TableCell>
                                <TableCell>{employee.role}</TableCell>
                                <TableCell>
                                    <Badge variant="secondary">{employee.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                     <Button variant="outline" size="sm" onClick={() => handleRestore(employee)}>
                                        <ArchiveRestore className="mr-2 h-4 w-4" />
                                        Restore
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )}
    </div>
  );
}
