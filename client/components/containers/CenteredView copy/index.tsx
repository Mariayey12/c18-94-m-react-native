
import { FC, ReactNode } from "react";
import { StyledView } from "./styles";

interface CenteredViewProps {
    children?: ReactNode
}

export const CenteredView: FC<CenteredViewProps> = ({ children }) => {
    return (
        <StyledView>
            {children}
        </StyledView>
    )
}