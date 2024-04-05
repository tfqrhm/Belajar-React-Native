import React from "react";
import { View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { 
  NavigationContainer, 
  useNavigation 
} from '@react-navigation/native';
import { RootStackParamList } from "../types/navigation";

// screens
import HomeScreen from "../screens/home";
import NetinfoScreen from "../screens/netinfo";

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  const navigation = useNavigation();

  return(
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen 
        options={({navigation})=>({
          title: 'Home',
        })}
        name="HomeScreen" component={HomeScreen}
      />
      <Stack.Screen 
        options={({navigation})=>({
          title: 'Net Info',
        })}
        name="NetinfoScreen" component={NetinfoScreen}
      />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}