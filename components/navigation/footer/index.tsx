import Link from "next/link";
import Button from "../navbar/Button";

const Footer = () => {
    return (
        <footer className="md:w-full bg-gradient-to-b from-custom-indigo to-indigo-100 py-12 mt-10 text-lg">
            <div className="flex justify-center flex-col md:flex-row md:justify-items-stretch md:justify-between text-indigo-900 w-fit md:w-full mx-auto md:px-20">
                {/* Left: Social Media */}
                <div className="">
                    <div className="flex flex-col justify-between self-stretch h-full w-fit">
                        <Link href="/impressum" className="hover:text-custom-red-dark underline transition-colors mb-6 md:mb-0">
                            Impressum
                        </Link>

                        <div>
                            <span className="font-bold text-custom-red-dark text-xl block">Folge uns</span>
                            <ul className="flex underline space-x-6 mb-6 md:mb-0">
                                <li>
                                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
                                        className=" hover:text-custom-red-dark transition-colors">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
                                        className=" hover:text-custom-red-dark transition-colors">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"
                                        className=" hover:text-custom-red-dark transition-colors">
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Info */}
                <div className="space-y-3 h-full w-fit">
                    <div>
                        <span className="font-bold text-custom-red-dark text-xl block">Telefon:</span>
                        <span className="font-light block text-xl">03576 123456</span>
                    </div>
                    <div>
                        <span className="font-bold text-custom-red-dark text-xl block">E-Mail:</span>{" "}
                        <a href="mailto:stadtchor.wsw@use.startmail.com" className="underline hover:text-custom-red-dark transition-colors">
                            stadtchor.wsw@use.startmail.com
                        </a>
                    </div>
                    <div>
                        <span className="font-bold text-custom-red-dark text-xl block">Adresse:</span> <span className="font-light">Sorauer Platz 2, 02943 Weißwasser</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;