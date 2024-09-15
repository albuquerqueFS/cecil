import { Action } from "src/@types/summary";

export const actionCards: Action[] = [
  {
    title: "Adicionar Entrada",
    icon: "💰",
    successMessage: "Nova entrada adicionado!",
    footer: (
      <p className="text-sm">
        Ultima entrada{" "}
        <span className="font-bold text-green-500">R$1200,00</span>
      </p>
    ),
  },
  {
    title: "Adicionar Gasto",
    icon: "💸",
    successMessage: "Novo gasto adicionado!",
    footer: (
      <p className="text-sm">
        Ultimo gasto <span className="font-bold text-red-500">R$500,00</span>
      </p>
    ),
  },
  {
    title: "Adicionar item recorrente",
    icon: "🔄",
    successMessage: "...",
    footer: null,
  },
];
