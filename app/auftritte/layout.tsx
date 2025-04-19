import RootLayout from "../layout";


export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="md:w-[750px] md:px-auto mx-auto">
            {children}
        </div>


    );
}