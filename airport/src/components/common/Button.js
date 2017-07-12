import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ btnStyle, onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, btnStyle]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonStyle: {
    flex: 0.25,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  }
};

export { Button };
