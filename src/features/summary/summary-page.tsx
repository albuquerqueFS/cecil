import { toast } from "sonner";
import QuickActionCard from "./components/quick-action-card";
import {
  QuickSummaryCard,
  StatsSummary,
} from "./components/quick-summary-card";
import InvestmentsTable from "./components/investments-table";
import { useCreateMovement } from "@api/movements";
import { MovementTypes } from "src/lib/enums";

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
  const { mutateAsync } = useCreateMovement();
  return (
    <div className="w-full">
      <div className="flex items-start justify-start mt-2 mb-2">
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
        <QuickActionCard
          labelPlaceholder="Venda do carro"
          valuePlaceholder="20.000,00"
          action={{
            title: "Adicionar entrada",
            icon: "💰",
          }}
          onAdd={({ name, value }) => {
            mutateAsync({
              name,
              value,
              type: MovementTypes.INCOME,
              category: "VENDA",
              is_recurrent: false,
            });
            toast.success("Nova entrada adicionada! R$" + value.toFixed(2));
          }}
        />
        <QuickActionCard
          labelPlaceholder="Cabelereiro"
          valuePlaceholder="30,00"
          action={{
            title: "Adicionar Gasto",
            icon: "💸",
            footer: (
              <p className="text-sm">
                Ultima entrada{" "}
                <span className="font-bold text-green-500">R$1200,00</span>
              </p>
            ),
          }}
          onAdd={(value: number) => {
            toast.success("Novo gasto adicionado! R$" + value.toFixed(2));
          }}
        />
        <QuickActionCard
          labelPlaceholder="Salário"
          valuePlaceholder="5.000,00"
          action={{
            title: "Adicionar item recorrente",
            icon: "🔄",
            footer: (
              <p className="text-sm">
                Ultimo gasto{" "}
                <span className="font-bold text-red-500">R$500,00</span>
              </p>
            ),
          }}
          onAdd={(value: number) => {
            toast.success(
              "Novo gasto recorrente adicionado, R$" + value.toFixed(2)
            );
          }}
        />
      </div>

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-left">
        Seus Investimentos
      </h1>
      <div className="grid grid-cols-2">
        <InvestmentsTable />
      </div>
    </div>
  );
};

export default SummaryPage;
