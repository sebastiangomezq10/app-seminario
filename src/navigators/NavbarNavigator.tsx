import React from "react";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Onboarding1 } from "../screens/Onboarding1";
import { Onboarding2 } from "../screens/Onboarding2";
import { Onboarding3 } from "../screens/Onboarding3";
import { Home } from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import CourseListScreen from "../screens/CourseList";
import ProfileScreen from "../screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "../screens/AppStack";
export type ObjectScreens = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Home: undefined;
};

const rootStack = createNativeStackNavigator<ObjectScreens>();

const Tab = createBottomTabNavigator();

export const NavbarNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          //   tabBarShowLabel: false,
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "purple",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: () => <Ionicons name={"person"} size={20} />,
            tabBarBadge: 2,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
