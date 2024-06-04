
import { FC, ReactNode } from "react";
import { StyledView } from "./styles";

interface InfoProps {
    children?: ReactNode;
    color?: string;
    padding?: string;
    widthParam?: string;
    heightParam?: string;
}

export const Info: FC<InfoProps> = ({ heightParam, widthParam, children, color, padding }) => {
    return (
        <StyledView widthParam={widthParam} heightParam={heightParam} color={color} padding={padding}>
            {children}
        </StyledView>
    )
}