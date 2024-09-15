import { toast } from "sonner";
import QuickActionCard from "./components/quick-action-card";
import { actionCards } from "./const";
import SummaryCard from "./components/summary-card";

const Separator = () => (
  <div className="h-full min-w-[2px] py-8 -mt-4 mx-6 bg-slate-200"></div>
);

const LastEntries = () => (
  <div className="relative flex flex-col items-start justify-start gap-2 h-fit">
    <div className="absolute top-0 left-0 w-full h-[70px] bg-gradient-to-t from-white from-[3%] to-transparent"></div>
    <p className="ml-1 -mt-6 text-xs font-light whitespace-nowrap">
      Ultimas entradas
    </p>
    <ul className="flex flex-col items-start justify-start flex-nowrap">
      <li className="text-sm whitespace-nowrap">
        <span className="mr-2 text-green-600">R$500,00</span> 2/2 Salário
      </li>
      <li className="text-sm whitespace-nowrap">
        <span className="mr-2 text-green-600">R$700,00</span> Retorno Impos...
      </li>
      <li className="text-sm">
        <span className="mr-2 text-green-600">R$900,00</span> 1/2 Salário
      </li>
      <li className="text-sm">
        <span className="mr-2 text-green-600">R$1200,00</span> BCG Salário
      </li>
    </ul>
  </div>
);

const LastExpenses = () => (
  <div className="relative flex flex-col items-start justify-start gap-2 h-fit">
    <div className="absolute top-0 left-0 w-full h-[70px] bg-gradient-to-t from-white from-[3%] to-transparent"></div>
    <p className="ml-1 -mt-6 text-xs font-light whitespace-nowrap">
      Ultimos gastos
    </p>
    <ul className="flex flex-col items-start justify-start">
      <li className="text-sm whitespace-nowrap">
        <span className="mr-2 text-red-600">R$500,00</span> Fatura Nubank
      </li>
      <li className="text-sm whitespace-nowrap">
        <span className="mr-2 text-red-600">R$1900,00</span> Aluguel
      </li>
      <li className="text-sm whitespace-nowrap">
        <span className="mr-2 text-red-600">R$900,00</span> 1/2 Salário
      </li>
      <li className="text-sm whitespace-nowrap">
        <span className="mr-2 text-red-600">R$1200,00</span> BCG Salário
      </li>
    </ul>
  </div>
);

const StatsSummary = () => (
  <div className="relative flex flex-col items-start justify-start gap-2 pr-4">
    <p className="ml-1 -mt-6 text-xs font-light whitespace-nowrap">Este mês</p>
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

const SummaryPage = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="grid grid-cols-3 gap-2 flex-nowrap">
        {actionCards.map((action, index) => (
          <QuickActionCard
            key={index}
            action={action}
            onAdd={(value: number) => {
              toast.success(action.successMessage + ", R$" + value.toFixed(2));
            }}
          />
        ))}
      </div>
      <h1 className="my-6 text-3xl font-bold tracking-tight text-left">
        Visão Resumida
      </h1>
      <div className="grid grid-cols-3 gap-2 flex-nowrap">
        <SummaryCard
          title={<h1>Receitas</h1>}
          value={
            <div className="flex justify-start flex-nowrap h-[30px]">
              <span className="flex items-start text-green-500">
                <span className="text-2xl">R$</span>
                <span className="text-3xl">2.000,00+</span>
              </span>
              <Separator />
              <LastEntries />
              <Separator />
              <LastExpenses />
              <Separator />
              <StatsSummary />
            </div>
          }
          className="col-span-3"
        />
      </div>
    </div>
  );
};

export default SummaryPage;
