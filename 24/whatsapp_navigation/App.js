import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from './screens/Chats';
import { NavigationContainer } from '@react-navigation/native';
import Calls from './screens/Calls';
import Communities from './screens/Communities';
import Updates from './screens/Updates';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

function TabNavigation() {

  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Chats') {
          iconName = focused ? 'chatbox-ellipses-outline' : 'chatbox-ellipses'
        } else if (route.name === 'Calls') {
          iconName = focused ? 'call-outline' : 'call'
        } else if (route.name === 'Communities') {
          iconName = focused ? 'people-outline' : 'people-sharp'
        } else if (route.name === 'Updates') {
          iconName = focused ? 'arrow-down-circle-outline' : 'arrow-down-circle'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      // tabBarStyle:{flexDirection:'column'},
      tabBarStyle: { backgroundColor: 'black',width:300},
      tabBarLabelStyle:{color:'white'},
      tabBarLabelPosition:'below-icon'
      


    })}>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Communities" component={Communities} />
      <Tab.Screen name="Updates" component={Updates} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer >
      <View style={styles.container}>
        <TabNavigation />
        {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
