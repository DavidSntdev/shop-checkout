import { Image } from "@nextui-org/image";
import { IoClose } from "react-icons/io5";

import Header from "@/components/header";
import DefaultLayout from "@/layouts/default";
import Text from "@/components/shared/text";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="relative w-full h-full flex flex-col items-center p-10 bg-no-repeat bg-top bg-[#F3F4F6] gap-10"
        style={{ backgroundImage: `url('/images/background-image.png')` }}
      >
        <Header />
        <div className="z-10 w-full h-full flex flex-col rounded-2xl bg-[#FFFFFF] overflow-hidden">
          <div className="flex flex-col bg-[#E6E7EB] gap-5 p-5">
            <div className="flex gap-4">
              <div className="w-3/12 bg-[#ffffff] border-1 border-[#00000033] rounded-xl p-3 flex justify-center">
                <Image alt="gold" radius="none" src="/images/Gold.png" />
              </div>
              <div className="w-9/12 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <Text font="semibold" text="iPhone 12 Pro" />
                    <Text
                      className="text-[#898E99]"
                      font="semibold"
                      text="Golden"
                    />
                  </div>
                  <Text font="semibold" text="$999.00" />
                </div>
                <div className="flex justify-between items-center">
                  <Text className="text-[#898E99]" font="semibold" text="x 1" />
                  <Text
                    className="text-[#898E99]"
                    font="semibold"
                    text={IoClose}
                  />
                </div>
              </div>
            </div>
            <hr className="border-[#0000001a]" />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
