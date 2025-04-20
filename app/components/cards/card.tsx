import Link from "next/link";

interface CardProps {
    src: string;
}

const Card = ({ src }: CardProps) => {
    return (
        <div className="group overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl bg-green-300">
            <Link href="/ueber/vereinsgeschichte">
                <figure>
                    <img src={src} alt="Chorleiter Rainer Wetzorke" />
                </figure>
                <div className="article-body">
                    <h2 className="text-xl font-semibold group-hover:text-[#28666e] transition-colors duration-300">Vereinsgeschichte</h2>
                    <p>
                        Etwas über die Geschichte des Stadtchors dafdsgjsd asdgfsdf asd f sdf af a df ad f dsa  adfs asd fa
                    </p>
                    <a className="flex items-center text-blue-700 focus:outline-dotted focus:outline-1 focus:outline-[#28666e]">
                        Read more
                        <div className="ml-2 w-6 h-6 opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="current"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </a>
                </div>
            </Link >
        </div >
    );
}
export default Card;