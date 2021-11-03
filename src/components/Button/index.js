import React from 'react';
import { CustomButton } from './styles';

export const Button = ({ handlerButton, title, ...rest }) => {
    return (
        <CustomButton onPress={handlerButton} title={title} {...rest}></CustomButton>
    )

}