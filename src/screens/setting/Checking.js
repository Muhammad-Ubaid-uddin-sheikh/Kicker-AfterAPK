import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Animated } from 'react-native';
import { Fonts } from '../style';

const StyledInput = ({ label ,value,onChangeText}) => {
  const [text, setText] = useState('');
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: text ? -8 : 10,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [text, translateY]);

  return (
    <View style={styles.inputContainer}>
      <Animated.Text
        style={[styles.label, { transform: [{ translateY }] }]}
      >
        {label}
      </Animated.Text>
      <TextInput
        style={styles.input}
        // placeholder={label}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => Animated.timing(translateY, { toValue: -18, duration: 200, useNativeDriver: false }).start()}
        onBlur={() => Animated.timing(translateY, { toValue: text ? -14 : 10, duration: 200, useNativeDriver: false }).start()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    margin: 10,
    // maxWidth: 190,
    position: 'relative',
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 15,
    // width: 345,
    marginLeft: 5,
    marginRight: 10,
    
  },
  input: {
   
    paddingLeft: 12,
    padding: 16,
    // paddingRight: 40,
    fontSize: 14,
    lineHeight: 20,
    // width: 345,
    borderRadius: 12,
    borderWidth: 0.25,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 1,
    color: '#212121',
    fontFamily:Fonts.MEDIUM,
    backgroundColor: 'rgba(64, 134, 57, 0.05)'
  },
  label: {
    fontSize: 16,
    position: 'absolute',
    left: 8,
    padding: 8,
    marginLeft: 5,
    color: 'rgb(100, 100, 100)',
  },
});

export default StyledInput;
