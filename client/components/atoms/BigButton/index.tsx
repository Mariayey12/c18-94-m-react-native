
import { TouchableOpacity } from "react-native";
import { StyledView } from "./styles";
import { ThemedText } from "../ThemedText";
import { FC } from "react";

type BigButtonProps = {
    text: string;
    onPress: () => void;
}

export const BigButton: FC<BigButtonProps> = ({ text, onPress }) => {
    return (
        <StyledView>
            <TouchableOpacity onPress={onPress}>
                <ThemedText type="main-button">
                    {text}
                </ThemedText>
            </TouchableOpacity>
        </StyledView>
    )
}