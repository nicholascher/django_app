import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native"
import { DUMMY_DATA } from "@/data/DummyData";
import EventItem from "./EventItem";
import { useRouter } from "expo-router";
import { useIsFocused } from '@react-navigation/native';


interface EventItemProps {
    id: number;
    name: string;
    description: string;
    date : Date;
}

const EventList = () => {

    const isFocused = useIsFocused();
    const [data, setData] = useState()

    const fetchData = useCallback( async () => {
        const response = await fetch('http://0.0.0.0:8000/api/event/')
        const data = await response.json()
        setData(data)

    }, [])

    useEffect(() => {
        if (isFocused) {
            fetchData()
        }
    }, [isFocused])

    const router = useRouter()

    const handlePress = (id: string, name: string, description: string, date: string) => {
        router.push({
            pathname: '/events/eventsPage',
            params: { id, name, description, date}
        });
    };

    const renderItem = ({ item }: { item: EventItemProps }) => {
        let currentDate = new Date(item.date).toDateString()
        return <EventItem id={item.id.toString()} 
                        name={item.name} 
                        description={item.description} 
                        date={currentDate} 
                        onPress={handlePress}/>;
    };
      
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => fetchData()}
                    />
                }
            />
        </View>
    )
}

export default EventList