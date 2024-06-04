import { FC } from "react"
import { Image } from 'react-native'
import { BigButton } from "@/components/atoms/BigButton"
import { ThemedText } from "@/components/atoms/ThemedText"
import { StyledView } from "./styles"
import { BottomButton } from "@/components/containers/BottomButton"

interface AppointmentConfirmationModalProps {
    isVisible: boolean;
    onClose: () => void
}

export const AppointmentConfirmationModal: FC<AppointmentConfirmationModalProps> = ({ isVisible, onClose }) => {
    return isVisible ?
        <StyledView
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
            <ThemedText type="headboard">Turno confirmado</ThemedText>
            <Image
                source={require('../../../assets/images/check.png')}
                style={{ width: 80, height: 80 }}
            />
            <ThemedText type="header-subtitle">Paciente:</ThemedText>
            <ThemedText type="header-subtitle">DNI:</ThemedText>
            <ThemedText type="header-subtitle">Especialista:</ThemedText>
            <ThemedText type="header-subtitle">Fecha:</ThemedText>
            <ThemedText type="header-subtitle">Hora:</ThemedText>
            <BottomButton>
                <BigButton text="Volver al Inicio" onPress={onClose} />
            </BottomButton>
        </StyledView>
        : null
}