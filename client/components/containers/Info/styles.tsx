import styled from "styled-components";
import { ThemedView } from "../ThemedView";

interface StyledViewProps {
    color?: string;
    padding?: string;
    widthParam?: string;
    heightParam?: string;
}

export const StyledView = styled(ThemedView) <StyledViewProps>`
    border-radius: 17px;
    background-color: ${(props) => props.color || 'transparent'};
    width: ${(props) => props.widthParam || 'auto'};
    height: ${(props) => props.heightParam || 'auto'};
    padding: ${(props) => props.padding || '24px'};
  `;