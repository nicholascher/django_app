import React from 'react';
import { useState } from 'react';
import { Text, View, SafeAreaView, Button, } from "react-native";
import { useRouter } from 'expo-router';
import EventList from "@/components/EventList";

export default function Index() {

const router = useRouter();

  return (
    <SafeAreaView>
        <EventList></EventList>
    </SafeAreaView>
  );
}





