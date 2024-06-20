import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './src/constant'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import WeatherSearch from './src/components/weatherSearch'
import WeatherInfo from './src/components/weatherInfo'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [status, setStatus] = useState('')
  const [inputValue, setInputValue] = useState('')

  const renderComponent = () => {
    if (!inputValue) return null;
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />
      case 'success':
        return <WeatherInfo weatherData={weatherData} />
      case 'error':
        return (
          <Text>
            Something went wrong. Please try again with a correct city name.
          </Text>
        )
      default:
        return null
    }
  }

  const searchWeather = (location) => {
    if (!location) return;
    setStatus('loading')
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data
        data.visibility /= 1000
        data.visibility = data.visibility.toFixed(2)
        data.main.temp -= 273.15
        data.main.temp = data.main.temp.toFixed(2)
        setWeatherData(data)
        setStatus('success')
      })
      .catch((error) => {
        setStatus('error')
      })
  }

  const updateInputValue = (value) => {
    setInputValue(value)
    if (!value) setStatus('')
  }

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} updateInputValue={updateInputValue} />
      <View style={{ marginTop: 20 }}>
        {renderComponent()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 25,
  },
})

export default App
