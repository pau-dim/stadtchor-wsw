import Image from "next/image";
import CustomYoutubePlayer from "../components/youtubeplayer/CustomYoutubePlayer"
import Card from "../components/cards/card";

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
        <div className="flex grid-cols-2 gap-2">
          <Card src="/images/Chorleiter Rainer Wetzorke.jpeg"
            title="Unsere Probenzeiten"
            text="Proben jeden Xxxxxx um xxxxxx im xxxxxxxxxxxx"
            link="" />
          <Card src="/images/Chorleiter Rainer Wetzorke.jpeg"
            title="Nächster Auftritt"
            text="teststete"
            link="" />
        </div>

        <h4>Einblick in ein Konzert</h4>
        <CustomYoutubePlayer videoId="eGB99WHRguw" />

      </div>
    </>
  );
}