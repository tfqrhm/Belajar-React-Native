import React from "react"
import { View, Text, StyleSheet } from "react-native"
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { addEventListener } from "@react-native-community/netinfo"

import { RootStackParamList } from "../types/navigation"
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'NetinfoScreen'>

type netinfo = {
  type: string;
  isConnected: boolean | null;
}
const NetinfoScreen = ({navigation, route}:ScreenProps) => {

  const [netinfo, setNetinfo] = React.useState<netinfo>({
    type: '',
    isConnected: false
  })

  React.useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setNetinfo({
        type: state.type,
        isConnected: state.isConnected
      })
    });

    return () => {
      unsubscribe();
    };
  }, [])

  // ubah warna indikator ketika status koneksi berubah
  const indicatorStyle = React.useMemo(() => [
    styles.indicator, {
      backgroundColor: netinfo.isConnected ? 'green' : 'red'
    }
  ], [netinfo.isConnected])

  return (
    <View style={styles.container}>
      <Text>Tipe koneksi: {netinfo.type}</Text>

      <View style={indicatorStyle}>
        <Text style={{color: 'white'}}>{netinfo.isConnected ? 'Online' : 'Offline'}</Text>
      </View>
    </View>
  )
}

export default NetinfoScreen

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center'
  },
  indicator: {
    height: 200,
    width: 200,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16
  },
})