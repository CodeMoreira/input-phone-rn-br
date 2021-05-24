import React, {useMemo, useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import CountryPicker, {
  DARK_THEME,
  DEFAULT_THEME,
  getCallingCode,
} from 'react-native-country-picker-modal';
import {
  CountryCode,
  Country,
} from 'react-native-country-picker-modal/lib/types';

interface Props {
  value: string;
  onChangeText: ((text: string) => void) | undefined;
  containerStyle?: object;
  cellFormat?: boolean;
  telephoneFormat?: boolean;
  placeHolder?: string;
  autoFocus?: boolean;
  withDarkTheme?: boolean;
  phoneFullFormat?: string | undefined;
  setPhoneFormated?: Function | any;
  inputMaxLength?: number | undefined;
  containerButtonStyle?: object | undefined;
}

const PhoneInputRn: React.FC<Props> = ({
  value,
  onChangeText,
  containerStyle,
  cellFormat,
  telephoneFormat,
  placeHolder,
  autoFocus,
  withDarkTheme,
  setPhoneFormated,
  inputMaxLength,
  containerButtonStyle,
}) => {
  const [countryCode, setCountryCode] = useState<CountryCode>('BR');
  const [withCountryNameButton] = useState<boolean>(false);
  const [withFlag] = useState<boolean>(true);
  const [withFilter] = useState<boolean>(true);
  const [withAlphaFilter] = useState<boolean>(false);
  const [withCallingCode] = useState<boolean>(false);
  const [withCallingCodeButton] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const [defaultMaxLength, setDefaultMaxLength] = useState<number>(11);
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
  };

  const PhoneFormarter = (phone: string | undefined) => {
    return phone
      ?.replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})/, '$1');
  };

  const NormalPhoneFormarter = (phone: string) => {
    return phone?.replace(/\D/g, '');
  };

  const telephoneFormater = (phone: string) => {
    return phone
      ?.replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})/, '$1');
  };

  const PhoneFullFormat = async (phone: string) => {
    const code = await getCallingCode(countryCode);
    return setPhoneFormated(`+${code} ${phone}`);
  };
  PhoneFullFormat(value);

  const parsePhone = useMemo(() => {
    if (telephoneFormat) {
      setDefaultMaxLength(14);
      return telephoneFormater(value);
    }
    if (cellFormat) {
      setDefaultMaxLength(15);
      return PhoneFormarter(value);
    }
    setDefaultMaxLength(11);
    return NormalPhoneFormarter(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const closeModal = () => {
    setVisible(false);
  };

  const openModal = () => {
    setVisible(true);
  };

  return (
    <View
      style={
        withDarkTheme
          ? [styles.containerDark, containerStyle]
          : [styles.container, containerStyle]
      }
    >
      <TouchableOpacity>
        <CountryPicker
          {...{
            countryCode,
            withFilter,
            withFlag,
            withCountryNameButton,
            withAlphaFilter,
            withCallingCode,
            withCallingCodeButton,
            onSelect,
            visible,
          }}
          containerButtonStyle={
            withDarkTheme
              ? [styles.ButtonStyleDark, containerButtonStyle]
              : [styles.ButtonStyle, containerButtonStyle]
          }
          theme={withDarkTheme ? DARK_THEME : DEFAULT_THEME}
          onClose={() => closeModal()}
          onOpen={() => openModal()}
        />
      </TouchableOpacity>
      <TextInput
        style={withDarkTheme ? styles.textInputDark : styles.textInput}
        value={parsePhone}
        onChangeText={onChangeText}
        placeholderTextColor={withDarkTheme ? '#f5f5f5' : '#333'}
        keyboardAppearance={withDarkTheme ? 'dark' : 'default'}
        placeholder={placeHolder ? placeHolder : 'Insert phone'}
        keyboardType="number-pad"
        autoFocus={autoFocus}
        maxLength={inputMaxLength ? inputMaxLength : defaultMaxLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#f5f5f5',
    borderWidth: 4,
    borderColor: '#333',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  textInput: {
    fontSize: 20,
    paddingEnd: 40,
    paddingStart: 10,
    borderRadius: 10,
    color: '#333',
    backgroundColor: '#f5f5f5',
  },
  ButtonStyle: {
    height: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderEndColor: '#333',
    borderEndWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  containerDark: {
    height: 50,
    backgroundColor: '#333',
    borderWidth: 4,
    borderColor: '#333',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  textInputDark: {
    fontSize: 20,
    paddingEnd: 40,
    paddingStart: 10,
    borderRadius: 10,
    color: '#f5f5f5',
    backgroundColor: '#333',
  },
  ButtonStyleDark: {
    height: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderEndColor: '#f5f5f5',
    borderEndWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
});

export default PhoneInputRn;
