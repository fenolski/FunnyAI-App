import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from "react"

export default function App() {

  // function sendPicture() {
  //   fetch('http://178.42.26.1:8888/')
  //     .then(res => res.json())
  //     .then(data => alert('Odebrano'))
  //   alert('Naciśnięto przycisk')
  // } 

  const [heroId, setHeroId] = React.useState(1)

    function sendPicture() {
      fetch(`https://swapi.dev/api/people/${heroId}`)
        .then(res => res.json())
        .then(data => displayAPIAnswer(JSON.stringify(data)))      
  }

  function displayAPIAnswer(apiRes) {
      alert(apiRes)
  }

  function nextHero() {
      return setHeroId(oldHero => oldHero + 1)
      }

  function prevHero(){
      return heroId > 1 && setHeroId(oldHero => oldHero - 1)
    }

  return (
    <View style={styles.container}>
      <Text>Wybierz numer bohatera </Text>
      <Text>Gwiezdnych Wojen: {heroId}</Text>
      <StatusBar style="auto" />
      <Text />
      <Button title=" + " onPress={() => nextHero()} />
      <Button title="  - " onPress={() => prevHero()} />
      <Text />
      <Button title="Ask StarWars API" onPress={() => sendPicture()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
