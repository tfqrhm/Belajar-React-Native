import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from "../types/navigation"
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

const HomeScreen = ({navigation, route}:ScreenProps) => {
  
  const handleGoNetInfo = () => navigation.navigate('NetinfoScreen')

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title='Net Info' onPress={handleGoNetInfo}></Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: 12
  }
})