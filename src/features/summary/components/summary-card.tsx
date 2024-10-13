import { CardContent, CardHeader, CardTitle } from "@components/ui";
import { FC } from "react";
import { cn } from "../../../lib/utils";

interface Props {
  title: React.ReactNode;
  value: React.ReactNode;
}

const SummaryCard: FC<Props & Partial<HTMLDivElement>> = ({
  title,
  value,
  className,
}) => {
  return (
    <div className={cn("p-6 overflow-y-hidden", className)}>
      <CardHeader className="p-0">
        <CardTitle className="text-sm font-medium tracking-tight text-left">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 py-4">{value}</CardContent>
    </div>
  );
};

export default SummaryCard;
