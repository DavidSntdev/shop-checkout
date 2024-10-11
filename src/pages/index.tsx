import Header from "@/components/header";
import DefaultLayout from "@/layouts/default";
import Body from "@/components/body";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="relative w-full h-full flex flex-col items-center py-10 px-0 sm:px-10 bg-no-repeat bg-top bg-[#F3F4F6] gap-10"
        style={{ backgroundImage: `url('/images/background-image.png')` }}
      >
        <Header />
        <Body />
      </section>
    </DefaultLayout>
  );
}
