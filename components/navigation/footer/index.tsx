import Link from "next/link";
import Button from "../navbar/Button";

const Footer = () => {
    return (
        <footer className="w-full bg-custom-indigo py-8 mt-10 text-xl">
            <div className="container md:mx-auto px-4 flex flex-col md:flex-row justify-between items-center items-start">
                {/* Left: Social Media */}
                <div className="mb-6 md:mb-0">
                    <div className="mb-6">
                        <Link href="/impressum" className="font-bold">Impressum</Link>
                    </div>
                    <h3 className="font-bold mb-2">Folge uns</h3>
                    <ul className="flex space-x-4 mb-6">
                        <li>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                YouTube
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right: Contact Info */}
                <div className="">
                    <div className="mb-1">
                        <span className="font-bold">Telefon:</span> 03576 123456
                    </div>
                    <div className="mb-1">
                        <span className="font-bold">E-Mail:</span> <a href="mailto:stadtchor.wsw@use.startmail.com" className="underline">stadtchor.wsw@use.startmail.com</a>
                    </div>
                    <div>
                        <span className="font-bold">Adresse:</span> Sorauer Platz 2, 02943 Weißwasser
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;