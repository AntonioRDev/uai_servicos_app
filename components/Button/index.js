import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function Button({ onPress, style, children}) {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            {children}
        </TouchableOpacity>
    )
}
