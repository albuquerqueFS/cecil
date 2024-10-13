interface Props {
  title: string;
  values: { value: string; description: string }[];
  color: string;
}

export const QuickSummaryCard = ({ title, values, color }: Props) => {
  return (
    <div className="relative flex flex-col items-start justify-start gap-2 px-5 h-fit">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white from-[3%] to-transparent"></div>
      <p className="ml-1 text-xs font-light whitespace-nowrap">{title}</p>
      <ul className="flex flex-col items-start justify-start flex-nowrap">
        {values.map((entry) => (
          <li className="text-sm whitespace-nowrap">
            <span className={`mr-2 text-${color}`}>{entry.value}</span>{" "}
            {entry.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const StatsSummary = () => (
  <div className="relative flex flex-col items-start justify-start gap-2 px-5 pr-4">
    <p className="ml-1 text-xs font-light whitespace-nowrap">Este mês</p>
    <ul className="flex flex-col items-start justify-start">
      <li className="text-sm whitespace-nowrap">
        <span className="text-green-600">R$9800,42</span> em entradas
      </li>
      <li className="text-sm whitespace-nowrap">
        <span className="text-red-600">R$5120,10</span> em gastos
      </li>
    </ul>
  </div>
);
