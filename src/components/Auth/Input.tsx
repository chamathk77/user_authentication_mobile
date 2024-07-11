import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../constants/styles';
import { useEffect, useState } from 'react';

function Input({ label, keyboardType, secure, onUpdateValue, value, isInvalid }: any) {

    const [input, setInput] = useState('');

    useEffect(() => {
      onUpdateValue(input)
    }, [input])


    function onchangeText(value: string) {
    
        console.log(value)
        setInput(value)
    }


    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
                {label}
            </Text>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                // autoCapitalize={false}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onchangeText}
                value={input}
            />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: 'white',
        marginBottom: 4,
    },
    labelInvalid: {
        color: Colors.error500,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        fontSize: 16,
    },
    inputInvalid: {
        backgroundColor: Colors.error100,
    },
});