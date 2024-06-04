import { useRouter } from "expo-router";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { BigButton } from "@/components/atoms/BigButton";
import { useContext, useState } from "react";
import { BottomButton } from "@/components/containers/BottomButton";
import { TextArea } from "@/components/atoms/TextArea";
import { MedConnectContext } from "@/context";
import { Spacer } from "@/components/atoms/Spacer";

export default function MotiveScreen() {
    const router = useRouter();
    const [text, setText] = useState('');
    const { user, setUser } = useContext(MedConnectContext);

    const updateMotive = () => {
        setUser({
            ...user,
            appointment: {
                ...user.appointment,
                motive: text
            }
        })
        router.push('/appointment-confirmation')
    }

    return (
        <>
            <TopBar title="Agendá tu turno" backArrow />
            <CenteredView>
                <ThemedText type="header-subtitle" style={{ marginBottom: 26 }}>Explicanos tu motivo de consulta</ThemedText>
                <TextArea
                    onChangeText={setText}
                    text={text}
                    placeholder="Inserta una breve descripción..."
                />
            </CenteredView>
            <BottomButton>
                <BigButton text="Continuar" onPress={updateMotive} />
                <Spacer height={30} />
            </BottomButton>
        </>
    )
}