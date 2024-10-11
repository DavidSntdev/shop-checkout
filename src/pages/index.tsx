import { Button } from "@nextui-org/button";

import Header from "@/components/header";
import DefaultLayout from "@/layouts/default";
import Checkout from "@/components/checkout/checkout";
import Text from "@/components/shared/text";
import { siteConfig } from "@/config/site";
import Inputs from "@/components/formulario/inputs";
import InputCountry from "@/components/formulario/inputCountry";
import InputNumber from "@/components/formulario/inputNumber";

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
          <div className="flex flex-col gap-7 py-7 pb-0 px-7">
            <Text font="semibold" text={siteConfig.formulario.titulo} />
            {Object.entries(siteConfig.formulario.text).map(([key, input]) => (
              <Inputs key={key} input={input.inputText} label={input.label} />
            ))}
            <div className="flex justify-between gap-5">
              <InputCountry />
              <InputNumber />
            </div>
            <Button
              className="font-semibold h-14 text-[#F3F4F6] bg-[#1D1D1F]"
              radius="sm"
            >
              {siteConfig.formulario.botao}
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
