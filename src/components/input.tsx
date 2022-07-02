import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'lightgray',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 4,
    paddingHorizontal: 5,
  },
});

interface inputInterface {
  title: string;
  placeholder: string;
  changeValue: (text: string) => void;
  isSecure?: boolean;
}

const InputContainer = ({
  title,
  changeValue,
  isSecure,
  placeholder,
}: inputInterface) => {
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={title}
        placeholder={placeholder}
        onChangeText={text => changeValue(text)}
        secureTextEntry={isSecure || false}
      />
    </View>
  );
};

export default InputContainer;
