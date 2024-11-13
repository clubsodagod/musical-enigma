'use client'

import { createContext, useContext,} from "react";
import { ScreenContextType, ScrollContextType } from "../_library/types/context";
import ScreenContext from "./building-blocks/ScreenContext";
import ScrollContext from "./building-blocks/ScrollContext";

type AppContextType = {
    screen:ScreenContextType,
    scroll:ScrollContextType,
}

const AppContext = createContext<AppContextType | undefined>(undefined);
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useScreenContext must be used within a useScreenProvider');
    }
    return context;
};


const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
    const screen = ScreenContext();

    const scroll = ScrollContext();

    return (
        <AppContext.Provider value={{ screen, scroll }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider