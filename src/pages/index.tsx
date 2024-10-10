import { IoClose } from "react-icons/io5";

import Header from "@/components/header";
import DefaultLayout from "@/layouts/default";
import Produto from "@/components/checkout/produto";

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
            <Produto
              cor="Golden"
              icone={IoClose}
              img="/images/Gold.png"
              nome="iPhone 12 Pro"
              preco="$999.00"
              quantidade="x 1"
            />
            <Produto
              cor="Golden"
              icone={IoClose}
              img="/images/iMacFront1.png"
              nome="iPhone 12 Pro"
              preco="$999.00"
              quantidade="x 1"
            />
            <Produto
              cor="Golden"
              icone={IoClose}
              img="/images/Gold.png"
              nome="iPhone 12 Pro"
              preco="$999.00"
              quantidade="x 1"
            />

            <hr className="border-[#0000001a]" />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
