import { IoClose } from "react-icons/io5";
import { Image } from "@nextui-org/image";

import Text from "@/components/shared/text";

interface ProdutosProps {
  img: string;
  nome: string;
  cor: string;
  preco: string;
  quantidade: string;
}
export default function Produto(props: ProdutosProps) {
  return (
    <div className="flex gap-7">
      <div className="w-1/5 bg-[#ffffff] border-1 border-[#00000033] rounded-xl items-center h-24 flex justify-center">
        <Image alt={props.nome} radius="none" src={props.img} />
      </div>
      <div className="w-4/5 flex flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <Text font="semibold" text={props.nome} />
            <Text cor="text-[#6C727F]" font="semibold" text={props.cor} />
          </div>
          <Text font="semibold" text={props.preco} />
        </div>
        <div className="flex justify-between items-center">
          <Text cor="text-[#6C727F]" font="semibold" text={props.quantidade} />
          <Text cor="text-[#6C727F]" font="semibold" text={IoClose} />
        </div>
      </div>
    </div>
  );
}
