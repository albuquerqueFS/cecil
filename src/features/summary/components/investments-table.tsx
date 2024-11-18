import { useInvestments } from "@api/investment";
import { Skeleton } from "@components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { useEffect } from "react";

const InvestmentsTable = () => {
  const { data, isLoading } = useInvestments();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Table>
      <TableCaption>Seus investimentos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Investimentos</TableHead>
          <TableHead>Mercado</TableHead>
          <TableHead>Balanço</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((investment) => (
            <TableRow key={investment.id}>
              <TableCell className="text-left">{investment.name}</TableCell>
              <TableCell className="text-left">{investment.types}</TableCell>
              <TableCell className="text-left">{investment.value}</TableCell>
            </TableRow>
          ))}
        {isLoading && (
          <TableRow>
            <TableCell className="text-left">
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </TableCell>
            <TableCell className="text-left">
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </TableCell>
            <TableCell className="text-left">
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default InvestmentsTable;
