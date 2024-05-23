// import { useContext } from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
// import { MedConnectContext } from "@/context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function SpecialtyScreen() {
    // const { user } = useContext(MedConnectContext);

    return (
        <ThemedView style={styles.container}>
            <Link href="/doctors" style={styles.link}>
                <ThemedText type="link">(Selecciona una especialidad)</ThemedText>
            </Link>
        </ThemedView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    }
});