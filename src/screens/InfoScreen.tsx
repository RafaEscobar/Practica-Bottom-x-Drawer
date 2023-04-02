import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Información</Text>
    </View>  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }
})