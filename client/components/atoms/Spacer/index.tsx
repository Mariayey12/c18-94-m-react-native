import { FC } from 'react';
import { View, ViewStyle } from 'react-native';

interface SpacerProps {
    height?: number;
    width?: number;
    style?: ViewStyle;
}

export const Spacer: FC<SpacerProps> = ({ height = 0, width = 0, style }) => {
    return <View style={{ height, width, ...style }} />;
};