import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';

import { styles, dynamicStyles } from './HomeStyle'
import { Text, Icon, Header, Card, CardItem, Body } from 'native-base'
import Axios from 'axios';
import moment from 'moment'
import 'moment/locale/pt-br'




const Home = () => {
    const [global, setGlobal] = useState(null)
    const [lastUpdate, setLastUpdate] = useState(null)

    useEffect(() => {
        Axios.get('https://api.covid19api.com/summary')
            .then(({ data }) => {
                if (data) {
                    setGlobal(data.Global)
                    setLastUpdate(data.Date)
                }
            })
    }, [])


    const SectionInfo = ({ icon, name, total, recent, color }) => {
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
                        {lastUpdate && <Text style={styles.footerText}>Ultima atualização:<Text style={styles.footerLink}>{moment("2020-10-20T02:46:59Z").fromNow()}</Text></Text>}
                    </CardItem>


                </Card>
            </View>
        )

    }

    return (
        <View style={styles.container}>
            <Header>
                <Text>Dados Gerais</Text>
            </Header>
            {/* {lastUpdate && <Text>Ultima atualização: {moment("2020-10-20T02:46:59Z").fromNow()}</Text>} */}
            {global &&
                <View>
                    <SectionInfo
                        icon={'ambulance'}
                        name={'Total de Casos Confirmados'}
                        total={global.TotalConfirmed}
                        recent={{ recentMessage: 'Casos recentes de covid: ', recentValue: global.NewConfirmed }}
                        color={'#1e88e5'}
                    />
                    <SectionInfo
                        icon={'skull-crossbones'}
                        name={'Total de Mortes'}
                        total={global.TotalDeaths}
                        recent={{ recentMessage: 'Mortes recentes por covid: ', recentValue: global.NewDeaths }}
                        color={'#c62828'}
                    />
                    <SectionInfo
                        icon={'check'}
                        name={'Total de Pessoas Recuperadas'}
                        total={global.TotalRecovered}
                        recent={{ recentMessage: 'Pessoas recuperadas recentemente: ', recentValue: global.NewRecovered }}
                        color={'#00c853'}
                    />
                </View>
            }
        </View>
    )
}


export default Home;