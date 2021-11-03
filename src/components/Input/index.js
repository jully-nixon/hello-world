import React from 'react';
import { CustomInput } from './styles';

export const Input = ({ handlerInput, text, ...rest }) => {
    return (
        <CustomInput onChangeText={handlerInput} value={text} {...rest}
            placeholder="Digite aqui..."></CustomInput>
    )
}