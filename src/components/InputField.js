import { StyleSheet, Text, View,TextInput } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { spacing } from "../theme";


export const InputField = ({name,value,onInput,placeholder,customStyle,...props}) => {
    const {colors}=useTheme()
    const handlechange = (value)=>{
        console.log('Data',value)
    }
  return (
    <TextInput
        style={[
            styles.input,
            {
                borderColor:colors.border,
            },
            customStyle
        ]}
        placeholder={placeholder}
        value={value}
        name={name}
        onChangeText={(e)=>onInput(e)}
        {...props}
    />
  );
};

const styles = StyleSheet.create({
    input: {
        height: 45,
        marginVertical:5,
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        fontSize:spacing.s
      },
});
