import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import PhoneInputRn from 'input-phone-rn-br';

const App = () => {
  const [value, setValue] = useState<string>('');
  const [phoneFormated, setPhoneFormated] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Phone Input React Native</Text>
      <PhoneInputRn
        value={value}
        onChangeText={(text) => setValue(text)}
        setPhoneFormated={setPhoneFormated}
        cellFormat
      />
      <Text style={{fontSize: 20}}>Phone Formated: {phoneFormated}</Text>
      <Text style={{fontSize: 20}}>Phone Value: {value}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default App;
