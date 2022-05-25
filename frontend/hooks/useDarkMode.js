import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [darkmode, setDarkMode] = useLocalStorage("darkMode", initialValue);

    return [darkmode, setDarkMode];

};

export default useDarkMode;