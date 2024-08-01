import React from "react";
import { View, FlatList, RefreshControl } from "react-native"
import { DUMMY_DATA } from "@/data/DummyData";
import EventItem from "./EventItem";
import { useRouter } from "expo-router";

interface EventItemProps {
    id: number;
    title: string;
    description: string;
}

const EventList = () => {
    const router = useRouter()

    const handlePress = (id: string, title: string, description: string) => {
        router.push({
            pathname: '/events/eventsPage',
            params: { id, title, description}
        });
    };

    const renderItem = ({ item }: { item: EventItemProps }) => {
        return <EventItem id={item.id.toString()} title={item.title} description={item.description} onPress={handlePress}/>;
    };
      
    return (
        <View>
            <FlatList
                data={DUMMY_DATA}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => console.log("Refreshed!")}
                    />
                }
            />
        </View>
    )
}

export default EventList