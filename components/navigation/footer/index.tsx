import { Link } from "lucide-react";

const Footer = () => {
    return (
        <>
            <div className="w-full h-20 bg-indigo-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-full">
                    <div className="md:w-[750px] mx-auto items-center h-full">

                        <ul className="flex justify-between items-center h-full">
                            <li>
                                <Link href="/" >
                                    <p>Facebook</p></Link>
                            </li>
                            <li>
                                <Link href="/auftritte">
                                    <p>Auftritte</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;