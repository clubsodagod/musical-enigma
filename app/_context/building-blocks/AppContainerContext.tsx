import { useAnimationControls } from 'motion/react';
import React, { useState } from 'react';

const AppContainerContext = () => {

    const [currentSection, setCurrentSection] = useState<string|undefined>();

    const scrollRef = React.useRef<HTMLDivElement>(null);


    const controls = useAnimationControls();


    return {
        currentSection, setCurrentSection,
        scrollRef, controls
    }
}

export default AppContainerContext