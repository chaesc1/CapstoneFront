import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Dimensions,ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


const {width:SCREEN_WIDTH,height:SCREEN_HEIGHT} = Dimensions.get("window");

const API_KEY = "7eea0e8feac7746503501abda8d04ccc";//원래같으면 서버에 둬야해

import { Fontisto } from '@expo/vector-icons'; 
const icons = {
  "Thunderstorm": "lightning",
  "Drizzle": "rains",
  "Rain": "rain",
  "Snow" : "snowflake",
  "Atmosphere": "cloudy-gusts",
  "Clear" : "day-sunny",
  "Clouds": "cloudy",
};

export default function App() {
  const [city,setCity] = useState("Loading...");
  const [days,setDays] = useState([]);
  const [ok,setOk] = useState(true);
  
  const ask = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    // console.log(permission)`
    if(!granted){
      setOk(false);
    } 
    const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync(
      {latitude,longitude},
      {useGoogleMaps:false }
      );
      setCity(location[0].city);
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
        );
      const json = await response.json();
      setDays(json.daily);
  };
  useEffect(()=>{
    ask();
  },[])
  return (
        <View style={styles.container}>
          <StatusBar style='auto'></StatusBar>
          <View style={styles.city}>
            <Text style={styles.cityName}>{city}</Text>
          </View>
          <ScrollView 
            pagingEnabled
            horizontal 
            showsHorizontalScrollIndicator = {false}
            contentContainerStyle={styles.weather}>
           {days.length === 0 ? (
            <View style={{...styles.day,alignItems:"center"}}>
              <ActivityIndicator color="white" size="large" style={{marginTop:10}}></ActivityIndicator>
            </View>
           ) : (
            days.map((day,index) =>
            <View key={index} style={styles.day}>
              <Text style={styles.date}>{new Date(day.dt * 1000).toString().substring(0, 10)}</Text>
              <View style={{
                flexDirection:"row", 
                alignItems:"center",
                width:"78%",
                justifyContent:'space-between'
                }}>
                <Text style={styles.temperature}>{parseFloat(day.temp.day).toFixed(1)}</Text>
                <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
              </View>
              <Text></Text>
              <Text style={styles.description}>{day.weather[0].main}</Text> 
              <Text style={styles.tinyText}>{day.weather[0].description}</Text> 
            </View>
            )
           )}
          </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"coral",
  },
  city:{
    flex : 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName:{
    fontSize:58,
    fontWeight:"500",
    color:"white"
  },
  weather:{

  },
  day:{
    alignItems:"flex-start",
    width:SCREEN_WIDTH,
    paddingHorizontal: 20
  },
  temperature:{
    margin:-10,
    fontSize:80,
    fontWeight:"600",
    color:"white"
  },
  description:{
    marginTop:-10,
    fontSize:30,
    color:"white",
    fontWeight:500
  },
  tinyText:{
    fontSize:20,
    color:"white"
  },
  date:{
    fontSize:20,
    color:"white"
  }
});
 