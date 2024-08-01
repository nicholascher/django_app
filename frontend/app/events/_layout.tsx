import { Stack } from 'expo-router';

export default function EventsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="eventsList"
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen 
      name="eventsPage" 
      options={{ 
        headerShown:false
      }} />

    </Stack>
  );
}