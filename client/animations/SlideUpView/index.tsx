import React, { FC, ReactNode } from 'react';
import { View } from "moti";

interface SlideUpViewProps {
    children: ReactNode;
}

export const SlideUpView: FC<SlideUpViewProps> = ({ children }) => {
    return (
        <View
            from={{
                translateY: 300,
                opacity: 0,
                scale: 0.9,
            }}
            animate={{
                translateY: 0,
                opacity: 1,
                scale: 1,
            }}
            exit={{
                translateY: 300,
                opacity: 0,
                scale: 0.9,
            }}
            exitTransition={{
                type: 'timing',
                duration: 400,
            }}
        >
            {children}
        </View>
    );
}
