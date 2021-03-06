import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { ChallengesContext } from "./ChallengeContext";

const CountdownContext = createContext({})


interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
    timePreset: number;
    set25Minutes: () => void;
    set40Minutes: () => void;
    set50Minutes: () => void;
}
interface CountdownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData)

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext)
    const [timePreset, setTimePreset] = useState(25)
    const [time, setTime] = useState(timePreset * 60);
    const [isActive, setActive] = useState(false);
    const [hasFinished, setFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    function startCountdown() {
        setActive(true)
    }
    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setActive(false)
        setFinished(false)
        setTime(timePreset * 60)
    }
    function set40Minutes() {
        clearTimeout(countdownTimeout)
        setTime(40 * 60)
    }
    function set25Minutes() {
        clearTimeout(countdownTimeout)
        setTime(25 * 60)
    }
    function set50Minutes() {
        clearTimeout(countdownTimeout)
        setTime(50 * 60)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => { setTime(time - 1) }, 1000)
        } else if (isActive && time === 0) {
            setFinished(true);
            setActive(false);
            startNewChallenge()
        }
    }, [isActive, time])



    return (
        <CountDownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCountdown,
                timePreset,
                set25Minutes,
                set40Minutes,
                set50Minutes,
            }}>
            {children}
        </CountDownContext.Provider>
    )
}