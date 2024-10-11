import Header from "@/components/header";
import DefaultLayout from "@/layouts/default";
import Checkout from "@/components/checkout/checkout";
import Formulario from "@/components/formulario/formulario";

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
          <Formulario />
        </div>
      </section>
    </DefaultLayout>
  );
}
