import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { styles } from './FilterButtonStyles'

const FilterButton = ({ color, selected, text, icon, click }) => {
    return (
        <TouchableOpacity style={styles({ color, selected }).button} onPress={click}>
            <Icon name={icon} color={selected ? '#ffffff' : color} size={18} />
            <Text style={styles({ color, selected }).text}>{text}</Text>
        </TouchableOpacity>
    )
}





export default FilterButton