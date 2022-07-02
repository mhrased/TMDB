import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: 'lightblue',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});

interface buttonInterfaces {
  buttonText?: string;
  handleAction: () => void;
}

const CustomButton = ({buttonText, handleAction}: buttonInterfaces) => {
  return (
    <TouchableOpacity onPress={handleAction} style={styles.container}>
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
