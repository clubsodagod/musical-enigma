import { useAnimationControls, Variants } from 'motion/react';
import React, { useState } from 'react';

const AppContainerContext = () => {

    const [gradientVariants, setGradientVariants] = useState<Variants|undefined>();

    const scrollRef = React.useRef<HTMLDivElement>(null);


    const controls = useAnimationControls();


    return {
        gradientVariants, setGradientVariants,
        scrollRef, controls
    }
}

export default AppContainerContext