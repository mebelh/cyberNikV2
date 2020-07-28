import React, { useState } from "react";
import "./style.scss";
import Module_Groupe from "./Module_Groupe/ModuleGroupe";
export default function AddModules() {
    const [modulesNumber, setModulesNumber] = useState(1);

    // const arr = Module(modulesNumber)

    return (
        <div className="AddModules">
            <label>
                <span>Количество модулей: </span>
                <input
                    type="text"
                    value={modulesNumber}
                    onChange={(n) => setModulesNumber(n.target.value)}
                />
            </label>
            {Module_Groupe(modulesNumber)}
        </div>
    );
}
