import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const tester = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texter}>Hello Ketan!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems:'center',
  justifyContent: 'center'
},
texter: {
  fontSize:30,
  fontWeight: 'bold',
  borderColor: 'yellow', borderWidth: 4, padding: 20, color: 'black',
}
})

export default tester
