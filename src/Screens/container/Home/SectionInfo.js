
import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Card, CardItem } from 'native-base'
import moment from 'moment'
import 'moment/locale/pt-br'
import { styles, dynamicStyles } from './HomeStyle'

export const SectionInfo = ({ icon, name, total, recent, color, lastUpdate }) => {
    return (
        <View style={styles.cardContainer}>
            <Card >
                <CardItem>
                    <Icon type='FontAwesome5' name={icon} style={styles.icon} />
                    <Text style={styles.title}>{name}</Text>
                </CardItem>
                <CardItem style={styles.card}>
                    <View>
                        <Text style={dynamicStyles({ color: color }).text}>{total}</Text>
                        <Text style={styles.title}>{recent.recentMessage}<Text style={styles.subtext}>{recent.recentValue}</Text></Text>
                    </View>
                </CardItem>
                <CardItem>
                    {lastUpdate && <Text style={styles.footerText}>Ultima atualização:<Text style={styles.footerLink}>{moment(lastUpdate).fromNow()}</Text></Text>}
                </CardItem>
            </Card>
        </View>
    )

}