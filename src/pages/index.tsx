import Header from "@/components/header";
import DefaultLayout from "@/layouts/default";
import Checkout from "@/components/checkout/checkout";
import Text from "@/components/shared/text";
import { siteConfig } from "@/config/site";
import TextSmall from "@/components/shared/textSmall";
import { Button } from "@nextui-org/button";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="relative w-full h-full flex flex-col items-center p-10 bg-no-repeat bg-top bg-[#F3F4F6] gap-10"
        style={{ backgroundImage: `url('/images/background-image.png')` }}
      >
        <Header />
        <div className="z-10 w-full h-full flex flex-col rounded-2xl bg-[#FFFFFF] overflow-hidden">
          <Checkout />
          <div className="flex flex-col gap-7 py-7 px-7">
            <Text text={siteConfig.formulario.titulo} font="semibold" />
            <div className="flex flex-col gap-2">
              <label htmlFor="name">
                <Text
                  text={siteConfig.formulario.text.input1.label}
                  cor="text-[#6C727F]"
                  font="semibold"
                />
                <input
                  type="text"
                  className="h-12 w-full border-1 border-[#00000033] rounded-lg"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">
                <Text
                  text={siteConfig.formulario.text.input1.label}
                  cor="text-[#6C727F]"
                  font="semibold"
                />
                <input
                  type="text"
                  className="h-12 w-full border-1 border-[#00000033] rounded-lg"
                />
              </label>
            </div>
            <div className="flex justify-between">
              <label htmlFor="name">
                <Text
                  text={siteConfig.formulario.text.input1.label}
                  cor="text-[#6C727F]"
                  font="semibold"
                />
                <input
                  type="text"
                  className="h-12 w-full border-1 border-[#00000033] rounded-lg"
                />
              </label>
              <label htmlFor="name">
                <Text
                  text={siteConfig.formulario.text.input1.label}
                  cor="text-[#6C727F]"
                  font="semibold"
                />
                <input
                  type="text"
                  className="h-12 w-full border-1 border-[#00000033] rounded-lg"
                />
              </label>
            </div>
            <Button
              className="h-full font-semibold h-14 text-[#F3F4F6] bg-[#1D1D1F]"
              radius="sm"
            >
              {siteConfig.total.cupom.botaoText}
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
