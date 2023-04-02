import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const InicioScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Inicio</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})