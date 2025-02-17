import { useState } from "react";

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(prev => !prev);
    }

    return[isFlipped, toggleFlip];
}

export default useFlip;