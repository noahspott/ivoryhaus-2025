import Image from "next/image";
import logo from "../../public/images/ivoryhaus-logo.png";
import { BackgroundVideo } from "@/components/Home";
import {
  FaSpotify,
  FaYoutube,
  FaApple,
  FaAmazon,
  FaBandcamp,
} from "react-icons/fa6";

const streamingLinks = [
  {
    icon: FaBandcamp,
    href: "https://ivoryhaus.bandcamp.com/",
    ariaLabel: "Listen to ivoryHAUS on Bandcamp",
  },
  {
    icon: FaSpotify,
    href: "https://open.spotify.com/artist/4RPZ6dqa0oJOuaSCEqDmP8?si=SHczDfwTQQSOOPZeg1bh5g",
    ariaLabel: "Listen to ivoryHAUS on Spotify",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/ivoryhaus",
    ariaLabel: "Listen to ivoryHAUS on YouTube",
  },
  {
    icon: FaApple,
    href: "https://music.apple.com/us/artist/ivoryhaus/1413935413",
    ariaLabel: "Listen to ivoryHAUS on Apple Music",
  },
  {
    icon: FaAmazon,
    href: "https://music.amazon.com/artists/B07FPP8GZ2/ivoryhaus",
    ariaLabel: "Listen to ivoryHAUS on Amazon Music",
  },
];

export default function Home() {
  return (
    <main className="relative w-full p-[5%] h-screen bg-gradient-to-br from-white to-gray-200 dark:from-gray-800  dark:to-gray-950">
      <BackgroundVideo />
      <div className="gap-8 relative h-full w-full flex flex-col justify-center items-center border-2 dark:border-white border-black px-8">
        <div className="z-10 relative mx-auto max-w-3xl">
          <Image
            src={logo}
            alt="ivoryhaus logo"
            className="not-dark:invert-100 opacity-70 "
          />
        </div>
        <ul className="flex gap-2 xs:gap-4 lg:gap-8 items-center transition-all duration-300">
          {streamingLinks.map((link) => {
            return (
              <li key={link.href}>
                <a href={link.href} aria-label={link.ariaLabel}>
                  <link.icon className="transition-all duration-300 size-8 xs:size-10 sm:size-12 md:size-14 dark:text-white hover:opacity-90 opacity-70" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
