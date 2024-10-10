import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";

export default function Cupom() {
  return (
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
  );
}
