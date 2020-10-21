import React from 'react'
import { Text, Header, Body } from 'native-base'
import { styles } from './HeaderStyle'


export const HeaderMain = ({ title }) => {
    return (
        <Header style={styles.header}>
            <Body>
                <Text style={styles.headerTitle}>{title}</Text>
            </Body>
        </Header>
    )
}