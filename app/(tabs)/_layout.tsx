import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle:{
          fontFamily:'mon-sb'
        }
      }}>
      <Tabs.Screen name='explore'
        options={{
          tabBarLabel:'Explore',
          headerTitleAlign: 'center',
          tabBarIcon:({color,size})=> <FontAwesome5 name="search" color={color} size={size}/>,
        }} />
      <Tabs.Screen name='wishlists'
        options={{
          tabBarLabel:'Wishlists',
          headerTitleAlign: 'center',
          tabBarIcon:({color,size})=> <FontAwesome5 name="heart" color={color} size={size}/>,
        }} />
        <Tabs.Screen name='trips'
        options={{
          tabBarLabel:'Trips',
          headerTitleAlign: 'center',
          tabBarIcon:({color,size})=> <FontAwesome5 name="airbnb"  color={color} size={size} />,
        }} />
      <Tabs.Screen name='inbox'
        options={{
          tabBarLabel:'Inbox',
          headerTitleAlign: 'center',
          tabBarIcon:({color,size})=> <MaterialIcons name="message"  color={color} size={size}  />,
        }} />
        <Tabs.Screen name='profile'
        options={{
          tabBarLabel:'Profile',
          headerTitleAlign: 'center',
          tabBarIcon:({color,size})=> <Ionicons name="person-circle" color={color} size={size} />,
        }} />
    </Tabs>
  );
}
