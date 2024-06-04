import { View } from "moti";
import styled from "styled-components";
import { Colors, Styles } from "@/constants/Styles";

export const StyledView = styled(View)`
    border-radius: ${Styles.borderRadius.lg} ${Styles.borderRadius.lg} 0 0;
    border: solid ${Colors.light.gray} 3px;
    background-color: ${Colors.light.background};
    width: 100%;
    height: 420px;
    padding: 24px;
    z-index: 99;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
`;