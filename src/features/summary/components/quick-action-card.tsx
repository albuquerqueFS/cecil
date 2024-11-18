import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { FC, useState } from "react";
import { Action } from "src/@types/summary";

interface Props {
  action: Action;
  labelPlaceholder: string;
  valuePlaceholder: string;
  onAdd: (values: { name: string; value: number }) => void;
}

const QuickActionCard: FC<Props> = ({
  onAdd,
  labelPlaceholder,
  valuePlaceholder,
  action: { title, icon },
}) => {
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between font-medium tracking-tight">
            {title} <span className="text-2xl">{icon}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative flex flex-nowrap gap-1">
          <Input
            placeholder={labelPlaceholder}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder={valuePlaceholder}
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            className="absolute top-0 right-0 h-8 mt-[2px] mr-[20px]"
            onClick={() =>
              onAdd({
                name,
                value: Number(value),
              })
            }
          >
            {">"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActionCard;
