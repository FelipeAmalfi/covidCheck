import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { styles, dynamicStyles } from './HomeStyle'
import { Text, Icon, Card, CardItem } from 'native-base'
import { HeaderMain } from '../../components/Common/Header/Header'
import Axios from 'axios';
import moment from 'moment'
import 'moment/locale/pt-br'




const Home = () => {
    const [global, setGlobal] = useState(null)
    const [lastUpdate, setLastUpdate] = useState(null)
    const coviDescription = 'A COVID-19 é uma doença causada pelo coronavírus, denominado SARS-CoV-2, que apresenta um espectro clínico variando de infecções assintomáticas a quadros graves. De acordo com a Organização Mundial de Saúde, a maioria (cerca de 80%) dos pacientes com COVID-19 podem ser assintomáticos ou oligossintomáticos (poucos sintomas), e aproximadamente 20% dos casos detectados requer atendimento hospitalar por apresentarem dificuldade respiratória, dos quais aproximadamente 5% podem necessitar de suporte ventilatório.'

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
                        {lastUpdate && <Text style={styles.footerText}>Ultima atualização:<Text style={styles.footerLink}>{moment(lastUpdate).fromNow()}</Text></Text>}
                    </CardItem>
                </Card>
            </View>
        )

    }

    return (
        <>
            <View style={styles.container}>
                <HeaderMain title='Estatísticas mundiais covid 19' />

                {global &&
                    <View>
                        <View style={[styles.cardContainer, { marginBottom: 16 }]}>
                            <Card>
                                <CardItem>
                                    <Text style={styles.title}>O que é o covid 19?</Text>
                                </CardItem>
                                <CardItem style={styles.card}>
                                    <View>
                                        <Text style={styles.footerText}>{coviDescription}</Text>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>

                        <SectionInfo
                            icon={'ambulance'}
                            name={'Total de casos confirmados'}
                            total={global.TotalConfirmed}
                            recent={{ recentMessage: 'Casos recentes de covid: ', recentValue: global.NewConfirmed }}
                            color={'#1e88e5'}
                        />
                        <SectionInfo
                            icon={'skull-crossbones'}
                            name={'Total de mortes'}
                            total={global.TotalDeaths}
                            recent={{ recentMessage: 'Mortes recentes por covid: ', recentValue: global.NewDeaths }}
                            color={'#c62828'}
                        />
                        <SectionInfo
                            icon={'check'}
                            name={'Total de pessoas recuperadas'}
                            total={global.TotalRecovered}
                            recent={{ recentMessage: 'Pessoas recuperadas recentemente: ', recentValue: global.NewRecovered }}
                            color={'#00c853'}
                        />
                    </View>
                }
            </View>
        </>
    )
}


export default Home;