import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { lavel } = props;
  return (
    <View style={styles.buttoncCntainer}>
      <Text style={styles.buttonLavel}>{lavel}</Text>
    </View>
  );
}

Button.propTypes = {
  lavel: string.isRequired,
};

const styles = StyleSheet.create({
  buttoncCntainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLavel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
});
