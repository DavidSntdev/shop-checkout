import { Button } from "@nextui-org/button";

import Text from "../shared/text";

import Inputs from "./inputs/inputs";
import InputCountry from "./inputs/inputCountry";
import InputNumber from "./inputs/inputNumber";

import { siteConfig } from "@/config/site";

export default function Formulario() {
  return (
    <div className="flex flex-col lg:w-1/2 gap-7 py-7 pb-0 px-7">
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
  );
}
