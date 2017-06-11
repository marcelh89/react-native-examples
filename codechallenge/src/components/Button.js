import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {

  const { textStyle, buttonStyle } = styles;


  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    height: 40
  },
  buttonStyle: {
    flex: 0.3,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderWidth: 1,
    borderColor: '#666',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
