import Image from "next/image";
import CustomYoutubePlayer from "./components/youtubeplayer/CustomYoutubePlayer"

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

      <div>
        <h1 className="mx-auto">Stadtchor Weißwasser</h1>
        <p>This is a content to make our page longer</p>

        <CustomYoutubePlayer videoId="eGB99WHRguw" />

      </div>
    </>
  );
}