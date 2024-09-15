import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Input } from "components/ui/input";
import { FC, useState } from "react";
import { Action } from "src/@types/summary";

interface Props {
  action: Action;
  onAdd: (value: number) => void;
}

const QuickActionCard: FC<Props> = ({
  onAdd,
  action: { title, icon, footer },
}) => {
  const [value, setValue] = useState<string>("0");
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between font-medium tracking-tight">
            {title} <span className="text-2xl">{icon}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <Input
            placeholder="R$100,00"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            className="absolute top-0 right-0 h-8 mt-[2px] mr-[26px]"
            onClick={() => onAdd(parseFloat(value))}
          >
            Adicionar
          </Button>
        </CardContent>
      </Card>
      <div className="flex mt-2 ml-2">{footer}</div>
    </div>
  );
};

export default QuickActionCard;
