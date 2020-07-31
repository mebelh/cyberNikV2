import React, { useState } from "react";
import Module from "./Module";

export default function ModuleGroupe({ num, onInfAdd }) {
    const arr = [];

    const [modules, setModules] = useState([]);

    const onModuleChange = (module, id) => {
        const newModules = [...modules];
        newModules[id] = module;
        setModules(newModules);
        onInfAdd("modules", modules);
    };

    for (let i = 0; i < num; i++) {
        arr.push(<Module onModuleChange={onModuleChange} num={i} key={i} />);
    }

    return arr;
}
