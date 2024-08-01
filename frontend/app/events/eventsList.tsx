import React from 'react';
import { useState } from 'react';
import { Text, View, SafeAreaView, Button, } from "react-native";
import EventList from "@/components/EventList";

export default function Index() {

  return (
    <SafeAreaView>
        <EventList></EventList>
    </SafeAreaView>
  );
}


