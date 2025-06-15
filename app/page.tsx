import Image from "next/image";
import CustomYoutubePlayer from "../components/youtubeplayer/CustomYoutubePlayer"
import Auftritte from "./auftritte/page";
import UeberUns from "./ueber/page";
import Kontakt from "./kontakt/page";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="h-[500px] relative w-screen left-0 left-1/2 right-1/2 -mx-[50vw]">
        <Image
          src={"/images/Chorauftritt_schmal.jpg"}
          alt="Picture of the author"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className=""
        />
      </div>

      <div className="text-center">
        <h1 className="mx-auto text-center">Stadtchor Weißwasser</h1>

        <div className="align-center mx-auto">

          <CustomYoutubePlayer videoId="eGB99WHRguw" />
          <Auftritte />
          <UeberUns />
          <Kontakt />
        </div>

      </div>
    </>
  );
}