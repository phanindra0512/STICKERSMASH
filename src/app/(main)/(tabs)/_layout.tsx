import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {},
      })}
    >
      <Tabs.Screen
        name='home/index'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon:({color, size})=>(
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='profile/index'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon:({color, size})=>(
            <FontAwesome5 name="user-alt" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
