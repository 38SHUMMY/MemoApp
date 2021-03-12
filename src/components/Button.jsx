import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';

export default function Button(props) {
  const { lavel, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttoncCntainer} onPress={onPress}>
      <Text style={styles.buttonLavel}>{lavel}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  lavel: string.isRequired,
  onPress: func,
};
Button.defaultProps = {
  onPress: null,
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
