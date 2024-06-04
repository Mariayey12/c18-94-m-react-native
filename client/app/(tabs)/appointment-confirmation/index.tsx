import { useContext, useState } from "react";
import { AnimatePresence } from "moti";
import { router } from "expo-router";
import { MedConnectContext } from "@/context";
import { CenteredView } from "@/components/containers/CenteredView";
import { Info } from "@/components/containers/Info";
import { BottomButton } from "@/components/containers/BottomButton";
import { ThemedText } from "@/components/atoms/ThemedText";
import { BigButton } from "@/components/atoms/BigButton";
import { Spacer } from "@/components/atoms/Spacer";
import { TopBar } from "@/components/molecules/TopBar";
import { AppointmentConfirmationModal } from "@/components/organisms/AppointmentConfirmationModal";

export default function AppointmentConfirmationScreen() {
    const { user } = useContext(MedConnectContext);
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <TopBar title="Confirmá tu turno" backArrow />
            <CenteredView>
                <Info widthParam="298px" heightParam="292px" color="#EEF5F9">
                    <ThemedText>Paciente: {user?.name}</ThemedText>
                    <ThemedText>DNI: {user?.dni}</ThemedText>
                    <Spacer height={30} />
                    <ThemedText>Especialista: ESPECIALISTA</ThemedText>
                    <ThemedText>Fecha: {user?.appointment?.date}</ThemedText>
                    <ThemedText>Hora: {user?.appointment?.time}</ThemedText>
                    <ThemedText>Motivo de consulta: {user?.appointment?.motive}</ThemedText>
                </Info>
                <Spacer height={50} />
                <Info widthParam="298px" heightParam="82px" color="#F0872E" padding="15px">
                    <ThemedText type="long-paragraph">*Asegurese de contar con la presencia de cámara y micrófono a la hora de la cita médica. El medico se pondrá en contacto con usted.</ThemedText>
                </Info>
            </CenteredView>
            <BottomButton>
                <BigButton text="Confirmar" onPress={() => setOpenModal(true)} />
                <Spacer height={30} />
            </BottomButton>
            <AnimatePresence>
                <AppointmentConfirmationModal isVisible={openModal} onClose={() => {
                    setOpenModal(false);
                    router.push('/')
                }} />
            </AnimatePresence>
        </>
    )
}