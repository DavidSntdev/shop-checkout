import Header from "@/components/header";
import DefaultLayout from "@/layouts/default";
import Produto from "@/components/checkout/produto";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import Text from "@/components/shared/text";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="relative w-full h-full flex flex-col items-center p-10 bg-no-repeat bg-top bg-[#F3F4F6] gap-10"
        style={{ backgroundImage: `url('/images/background-image.png')` }}
      >
        <Header />
        <div className="z-10 w-full h-full flex flex-col rounded-2xl bg-[#FFFFFF] overflow-hidden">
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
              <div className="flex gap-2 w-full">
                <input
                  className="p-3 rounded-lg border-[#00000033] border-1 w-4/5"
                  placeholder={siteConfig.total.cupom.inputText}
                  type="text"
                />
                <Button
                  className="h-full font-semibold text-[#F3F4F6] bg-[#1D1D1F]"
                  radius="sm"
                >
                  {siteConfig.total.cupom.botaoText}
                </Button>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <Text
                    className="text-[#6C727F]"
                    font="semibold"
                    text={siteConfig.total.subtotal}
                  />
                  <Text
                    className="text-[#6C727F]"
                    font="semibold"
                    text={siteConfig.total.precos.subtotal}
                  />
                </div>
                <div className="flex justify-between">
                  <Text
                    className="text-[#6C727F]"
                    font="semibold"
                    text={siteConfig.total.tax}
                  />
                  <Text
                    className="text-[#6C727F]"
                    font="semibold"
                    text={siteConfig.total.precos.tax}
                  />
                </div>
                <div className="flex justify-between">
                  <Text font="semibold" text={siteConfig.total.total} />
                  <Text font="semibold" text={siteConfig.total.precos.total} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
