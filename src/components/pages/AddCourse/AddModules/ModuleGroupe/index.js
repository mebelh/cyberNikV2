import React, { useState } from "react";
import Module from "./Module";

export default function ModuleGroupe({ num = 1, onInfAdd }) {
    const arr = [];

    const [modules, setModules] = useState([]);

    const onModuleChange = (module, id) => {
        const newModules = [...modules];
        newModules[id] = module;
        setModules(newModules);
        onInfAdd("modules", modules);
    };

    num = +num ? num : 1;

    for (let i = 0; i < num; i++) {
        arr.push(<Module onModuleChange={onModuleChange} num={i} key={i} />);
    }

    return arr;
}
