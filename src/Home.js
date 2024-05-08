import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Styles from './Style';

const Home = () => {

    const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={{
            uri: 'https://gameblog.in/wp-content/uploads/2023/12/TicTacToe_OG-logo.jpg',
          }}
          resizeMode="stretch"
          className="flex-1 justify-end items-center ">
          <TouchableOpacity className="bg-transparent justify-center items-center p-5 rounded-xl bg-cyan-700 mb-28 " 
               style={Styles.Shadow} 
               onPress={()=>navigation.navigate('Logic')}>
              <Text className="text-white text-2xl font-bold">Start Game</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default Home;

