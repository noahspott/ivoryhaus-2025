import { Roboto } from "next/font/google";
import { Menu } from "./components/";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  return (
    <main
      className={`flex ${roboto.className} bg-gradient-to-b from-primary-900 to-[#49569f] min-h-screen`}
    >
      <Menu />
    </main>
  );
}
