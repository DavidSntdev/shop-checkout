import Text from "@/components/shared/text";

interface TotalTextProps {
  cor?: string;
  nome: string;
  preco: string;
}

export default function TotalText(props: TotalTextProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Text cor={props.cor} font="semibold" text={props.nome} />
        <Text cor={props.cor} font="semibold" text={props.preco} />
      </div>
    </div>
  );
}
