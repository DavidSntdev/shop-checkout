
import Text from "@/components/shared/text";
import { siteConfig } from "@/config/site";

export default function InputNumber() {
  return (
    <div className="flex flex-col w-1/2 gap-2">
      <label htmlFor="number">
        <Text
          className="text-sm"
          cor="text-[#6C727F]"
          font="semibold"
          text={siteConfig.formulario.inputsLocal.input2.label}
        />
      </label>
      <input
        className="h-12 w-full p-3 border-1 border-[#00000033] rounded-lg"
        id="number"
        placeholder={siteConfig.formulario.inputsLocal.input2.inputText}
        type="number"
      />
    </div>
  );
}
