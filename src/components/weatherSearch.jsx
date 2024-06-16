import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import CustomTextInput from './customTextInput'

const WeatherSearch = () => {
  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Search" onPress={() => {}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
})

export default WeatherSearch