import { useContext, useEffect, useState } from "react";
import { Link } from "expo-router";
import { Hours } from "@/constants";
import { MedConnectContext } from "@/context";
import { useFetch } from "@/hooks/useFetch";
import { CenteredView } from "@/components/containers/CenteredView";
import { Calendar } from "@/components/atoms/Calendary";
import { ThemedText } from "@/components/atoms/ThemedText";
import { Dropdown } from "@/components/atoms/Dropdown";
import { TopBar } from "@/components/molecules/TopBar";

export default function CalendaryScreen() {
    const { user, setUser } = useContext(MedConnectContext);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);
    const [selectedDates, setSelectedDates] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const { data: appointments, isLoading, errorMessage } = useFetch({ serviceMethod: 'getAvailableAppointmentsByIdDoctor', initialData: [] })
    let uniqueDates = [];

    useEffect(() => {
        if (appointments) {
            uniqueDates = appointments?.map(appointment => appointment.date)
                .filter((date, index, self) => self.indexOf(date) === index);

            const markedDates = uniqueDates.reduce((acc, date) => {
                acc[date] = { selected: true, marked: true, selectedColor: date === selectedDate ? 'orange' : 'green' };
                return acc;
            }, {});
            setSelectedDates(markedDates)
        }
    }, [appointments, selectedDate])

    useEffect(() => {
        const timeDropdown = appointments
            .filter(item => item.date === selectedDate)
            .map(select => {
                const timeId: number = select.timeId;
                const fruit = Hours[timeId] || 'Unknown';
                return { label: fruit, value: timeId };
            });
        setItems(timeDropdown)
    }, [selectedDate])

    return (
        <>
            <TopBar title="Agendá tu turno" backArrow />
            <CenteredView>
                <ThemedText>Elija dia y hora del turno</ThemedText>
                <Calendar
                    onDayPress={day => {
                        setSelectedDate(day.dateString);
                    }}
                    markedDates={selectedDates}
                />
                <Dropdown
                    placeholder="Seleccione horario"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    disabled={selectedDate === ''}
                />
                <Link href="/motive" onPress={() => {
                    setUser({
                        ...user,
                        appointment: {
                            ...user.appointment,
                            date: selectedDate,
                            time: Hours[value]
                        }
                    })
                }}>
                    <ThemedText>Confimar</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}