
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Calculator, CalculatorInput } from 'react-native-calculator'


const HomeScreen = () => {
  const [value, setValues] = useState();
  const navigation = useNavigation();
  return (
    <View style={{ width:'100%',height:'100%' }}>
      <View style={{ height: '20%', justifyContent: 'center' }}>
        <Text style={{ alignSelf: 'center' }}>
          {value}
        </Text>
      </View>
      <View style={{width:'100%',height:'80%'}}>
        <Calculator style={{ width: '100%', color: '#000', height: '100%' }}
        value="0"
        displayTextAlign='center'
          displayColor={'#000'}
          fontSize={15}
          onTextChange={(e) => { console.log('log', e); setValues(e); }}
          onAccept={(e) => { console.log(e, 'accept'); }}
          onCalc={(e) => { console.log(e, 'calc'); navigation.navigate('second', { result: e }) }} />
      </View>
    </View>
  )
}


export default HomeScreen;
