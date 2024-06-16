import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const WeatherInfo = () => {
  return (
    <View style={styles.marginTop20}>
      <Text style={styles.text}>The weather of Jakarta</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>15 C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{ uri: 'https://openweathermap.org/img/w/04d.png' }}
          style={styles.weatherIcon}
        />
        <Text style={[styles.text, styles.bold]}>Clouds</Text>
      </View>
      <Text style={styles.text}>overcast clouds</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>10 km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>10 m/s</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 80,
    textAlign: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
})

export default WeatherInfo