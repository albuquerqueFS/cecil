import { toast } from "sonner";
import QuickActionCard from "./components/quick-action-card";
import { actionCards } from "./const";
import {
  QuickSummaryCard,
  StatsSummary,
} from "./components/quick-summary-card";

const lastEntries = [
  { value: "R$500,00", description: "2/2 Salário" },
  { value: "R$700,00", description: "Retorno Impos..." },
  { value: "R$900,00", description: "1/2 Salário" },
  { value: "R$1200,00", description: "BCG Salário" },
];

const lastExpenses = [
  { value: "R$500,00", description: "Fatura Nubank" },
  { value: "R$1900,00", description: "Aluguel" },
  { value: "R$900,00", description: "1/2 Salário" },
  { value: "R$1200,00", description: "BCG Salário" },
];

const SummaryPage = () => {
  return (
    <div className="w-full">
      <div className="flex items-start justify-start mt-8 mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-left ">
          Visão Resumida
        </h1>

        <div className="ml-6 text-green-500">
          <span className="text-2xl">R$</span>
          <span className="text-3xl">2.000,00+</span>
        </div>
      </div>

      <div className="grid w-full grid-cols-3 gap-4 pt-4">
        <QuickSummaryCard
          title="Ultimas entradas"
          values={lastEntries}
          color="green-500"
        />
        <QuickSummaryCard
          title="Ultimos gastos"
          values={lastExpenses}
          color="red-500"
        />
        <StatsSummary />
      </div>

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

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-left">
        Seus Investimentos
      </h1>
      <div className="mt-4">
        <div className="flex flex-col items-start">
          <p className="ml-1 text-xs font-light whitespace-nowrap">
            Criptomoedas
          </p>
          <ul>
            <li>
              <span className="font-bold">SUI</span> - <span>R$12402,42</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
