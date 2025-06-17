
interface PersonInfoProps {
    imageUrl: string;
    name: string;
    position: string;
    description?: string;
}

const PersonInfo: React.FC<PersonInfoProps> = ({ imageUrl, name, position, description }) => (
    <div className="flex w-full max-w-2xl mx-auto bg-white shadow-md overflow-hidden mb-3">
        {/* Left column: Image */}
        <div className="w-2/5 bg-gray-100 flex items-center justify-center">
            <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
        </div>
        {/* Right column: Info */}
        <div className="w-3/5 p-6 flex flex-col justify-center bg-indigo-50/50">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <h3 className="text-md text-gray-600 mb-4">{position}</h3>
            {description && <p className="text-gray-700">{description}</p>}
        </div>
    </div>
);

export default function Kontakt() {
    return (
        <><h1 id="kontakt" className="text-center mb-1">Kontakt</h1>
            <div className="subtitle-heading">Informationen zum Stadtchor Weißwasser e.V.:</div>
            <h4>Proben immer <strong>montags von 19:00 – 20:30 Uhr</strong> <br />im <strong>Vereinspavillon Sorauer Platz 2</strong> <br />02943 Weißwasser</h4>

            <PersonInfo imageUrl="images/anonymus_user.jpg" name="Cornelia Palzer" position="Vorstandsvorsitzende" description="" />
            <PersonInfo imageUrl="images/anonymus_user.jpg" name="Lars Deke" position="Künstlerischer Leiter" description="" />

        </>
    );
}