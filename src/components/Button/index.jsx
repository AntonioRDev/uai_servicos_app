import React from 'react'
import { RectButton } from 'react-native-gesture-handler';

export default function Button({ onPress, style, children}) {
    return (
        <RectButton onPress={onPress} style={style}>
            {children}
        </RectButton>
    )
}
