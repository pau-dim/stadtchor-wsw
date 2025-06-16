import Link from "next/link";

interface CardProps {
    src: string;
    title: string;
    text: string;
    link: string;

}

const Card = ({ src, title, text, link }: CardProps) => {
    return (
        <div className="group overflow-hidden shadow-md transition-shadow hover:shadow-xl bg-indigo-50">
            <Link href={link} className="block h-full">
                <figure className="aspect-video overflow-hidden">
                    <img src={src} alt={title} className="object-cover w-full h-full rounded-t-lg" />
                </figure>
                <div className="article-body px-4 py-4 text-left space-y-3">
                    <h2 className="text-xl font-semibold transition-colors duration-300">{title}</h2>
                    <p className="text-gray-700">{text}</p>
                    <div className="flex items-center text-custom-red-dark focus:outline-dotted focus:outline-1 focus:outline-[#28666e] hover:underline cursor-pointer pt-2">
                        Read more
                        <span className="ml-2 w-6 h-6 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
export default Card;