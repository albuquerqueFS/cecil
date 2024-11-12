import { useInvestments } from "@api/investment";
import { useEffect } from "react";

const InvestmentsTable = () => {
  const { data, isLoading } = useInvestments();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div></div>;
};

export default InvestmentsTable;
