import Checkout from "./checkout/checkout";
import Formulario from "./formulario/formulario";

export default function Body() {
  return (
    <div className="z-10 w-full h-full flex flex-col lg:flex-row rounded-2xl bg-[#FFFFFF] overflow-hidden">
      <Checkout />
      <Formulario />
    </div>
  );
}
