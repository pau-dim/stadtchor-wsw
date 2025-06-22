import React from "react";
import { stadtGeschichte } from '@/data/text_geschichte_wsw';
import { DosisGesundheit } from "@/data/dosis_gesundheit";

const Vereinsgeschichte = () => {
    return (

        <>
            <h1>Vereinsgeschichte</h1>

            <h4>Stadtgeschichte Weißwasser O./L.</h4>
            <div className="text-justify">
                {stadtGeschichte}
            </div>
            <h4>Eine Dosis für meine Gesundheit</h4>
            <div className="text-justify">
                {DosisGesundheit}
            </div>
        </>
    )
};

export default Vereinsgeschichte;