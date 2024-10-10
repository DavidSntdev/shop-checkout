
import Produto from "./produtos/produto";
import Cupom from "./total/cupom";
import TotalText from "./total/totalText";

import { siteConfig } from "@/config/site";

export default function Checkout() {
  return (
    <div className="flex flex-col bg-[#E6E7EB] gap-5 py-10 px-7">
      {Object.entries(siteConfig.produtos).map(([key, produto]) => (
        <Produto
          key={key}
          cor={produto.cor}
          img={produto.img}
          nome={produto.nome}
          preco={produto.preco}
          quantidade={produto.quantidade}
        />
      ))}
      <hr className="border-[#0000001a]" />
      <div className="flex flex-col gap-4">
        <Cupom />
        <div className="flex flex-col gap-1">
          <TotalText
            cor="text-[#6C727F]"
            nome={siteConfig.total.subtotal}
            preco={siteConfig.total.precos.subtotal}
          />
          <TotalText
            cor="text-[#6C727F]"
            nome={siteConfig.total.tax}
            preco={siteConfig.total.precos.tax}
          />
          <TotalText
            nome={siteConfig.total.total}
            preco={siteConfig.total.precos.total}
          />
        </div>
      </div>
    </div>
  );
}
