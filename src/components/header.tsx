import Titulo from "./shared/titulo";
import TextSmall from "./shared/textSmall";

import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <div className="z-10 text-white flex gap-3 items-center">
      <Titulo>
        <h1>{siteConfig.header.text}</h1>
      </Titulo>
      <TextSmall
        className="bg-[#95AAD0] py-1 px-3 rounded-full"
        text={siteConfig.header.items}
      />
    </div>
  );
}
