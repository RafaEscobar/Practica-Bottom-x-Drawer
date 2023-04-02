import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

  
export const DosScreen = ({ navigation, route }:any) => {
    return (
        <View style={styles.container}>
            <Text>Segunda pantalla</Text>
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }
})
