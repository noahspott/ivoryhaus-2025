"use client";

import { Roboto } from "next/font/google";
import { Menu, Synth } from "./components/";
import { BackgroundVideo } from "@/src/components/Home";
import { SynthStoreProvider } from "@/src/providers/synth-store-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  return (
    <main
      className={`${roboto.className} relative bg-gradient-to-b from-primary-900 to-[#49569f]`}
    >
      <BackgroundVideo />
      <div className="relative flex xl:flex-row z-10 flex-col">
        <SynthStoreProvider>
          <Menu className="xl:sticky xl:top-0 col-span-2 shadow-md flex-2/12" />
          <Synth className="flex-10/12 shadow-xl" />
        </SynthStoreProvider>
      </div>
    </main>
  );
}
