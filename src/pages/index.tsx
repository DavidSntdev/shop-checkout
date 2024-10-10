import Header from "@/components/header";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="relative w-full h-60 flex flex-col items-center p-10 bg-cover bg-center bg-[#F3F4F6]"
        style={{ backgroundImage: `url('/images/background-image.png')` }}
      >
        <Header />
        <div className="w-full h-full flex justify-center items-center">

        </div>
      </section>
    </DefaultLayout>
  );
}
