import {createContext, useContext, useEffect, useState} from "react";
import {useSpecialScoresContext} from "./SpecialScoresContext";
import {useBonusContext} from "./BonusContext";

export const TotalScoreContext = ({children}) => {
    const [total, setTotal] = useState(0)
    const {specialScoresSum} = useSpecialScoresContext();
    const {bonusSum} = useBonusContext()

    useEffect(() => setTotal(bonusSum + specialScoresSum), [bonusSum, specialScoresSum])

    return (
        <Context.Provider value={{
            total
        }}>
            {children}
        </Context.Provider>
    )


}

const Context = createContext(null);

export const useTotalScoreContext = () => useContext(Context)