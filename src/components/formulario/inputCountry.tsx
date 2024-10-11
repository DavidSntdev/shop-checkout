import Text from "../shared/text";

import { siteConfig } from "@/config/site";

export default function InputCountry() {
  return (
    <div className="flex flex-col w-1/2 gap-2">
      <label htmlFor="country">
        <Text
          className="text-sm"
          cor="text-[#6C727F]"
          font="semibold"
          text={siteConfig.formulario.inputsLocal.input1.label}
        />
      </label>
      <select
        className="w-full h-12 rounded-lg border-1 border-[#00000033] p-3 appearance-none bg-white"
        id="country"
      >
        <option value="finland">Finland</option>
        <option value="brazil">Brazil</option>
        <option value="usa">USA</option>
      </select>
    </div>
  );
}
