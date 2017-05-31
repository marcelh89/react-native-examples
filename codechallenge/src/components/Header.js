import React from 'react';
import { View, TextInput } from 'react-native';
import Button from './Button';

const Header = () => {
  const { headerStyle } = styles;
  return (
    <View style={headerStyle}>
      <Button>back</Button>
      <TextInput
      style={{ flex: 0.75, alignSelf: 'center', height: 40, borderColor: 'gray',
      borderWidth: 1 }}
      />
    </View>
  );
};

const styles = {
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  }
};

export default Header;
