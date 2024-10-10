import { IoClose } from "react-icons/io5";

import Header from "@/components/header";
import DefaultLayout from "@/layouts/default";
import Produto from "@/components/checkout/produto";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="relative w-full h-full flex flex-col items-center p-10 bg-no-repeat bg-top bg-[#F3F4F6] gap-10"
        style={{ backgroundImage: `url('/images/background-image.png')` }}
      >
        <Header />
        <div className="z-10 w-full h-full flex flex-col rounded-2xl bg-[#FFFFFF] overflow-hidden">
          <div className="flex flex-col bg-[#E6E7EB] gap-5 py-5 px-7">
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
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
