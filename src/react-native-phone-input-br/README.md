<div align="center">
  <img src="./assets/exemplo1.png" height="400" title="Anurag Garg"   alt="Anurag Garg" style="box-shadow: 0 20px 30px 3px rgba(9, 9, 16, 0.2);">

  <img src="./assets/exemplo2.png" height="400" title="Anurag Garg"   alt="Anurag Garg" style="box-shadow: 0 20px 30px 3px rgba(9, 9, 16, 0.2);">
</div>
<br>
<h1 align="center">Phone Input React Native
</h1>

# Como usar?

## instalação
```shell
$ npm install input-phone-rn-br
```
## Importando a biblioteca
```ts
import PhoneInputRn from "input-phone-rn-br"
```
## Exemplo de uso
```tsx
import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import PhoneInputRn from "input-phone-rn-br";

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
        withDarkTheme={false}
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
```

<br>

## Props
- `value`: boolean
- `onChangeText`: (text: string) => void
- `autoFocus?`: boolean
- `placeHolder?`: string
- `inputMaxLenth?`: number
- `cellFormat?`: boolean
- `telephoneFormat?`: boolean
- `phoneFullFormat?`: string
- `setPhoneFormated?`: (text: string) => void
- `withDarkTheme?`: boolean
- `containerStyle?`: `StyleProp<ViewStyle>`
- `containerButtonStyle?`: `StyleProp<ViewStyle>`
 
<br>

## Agradecimentos
- [React-native-country-picker-modal
](https://github.com/xcarpentier/react-native-country-picker-modal) é uma biblioteca de "country select" exlucisiva para react native que possibilitou a criação dessa lib;

- [React Native Phone Number Input](https://github.com/garganurag893/react-native-phone-number-input) é uma biblioteca semelhante que inspirou esse projeto ser criado.

<h5 align="center">Made with ❤️ by developer for developers</h6>