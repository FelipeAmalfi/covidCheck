import React, { useEffect, useState, useContext, useMemo, useCallback } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text, Icon, Card, CardItem, Spinner } from 'native-base'
import moment from 'moment'
import 'moment/locale/pt-br'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { fetchSummary } from '../../../Service/mainService'
import { GlobalContext } from '../../../store/GlobalContext'
import { HeaderMain } from '../../components/Common/Header/Header'
import { SectionInfo } from './SectionInfo'
import { styles, dynamicStyles } from './HomeStyle'



const coviDescription = 'A COVID-19 é uma doença causada pelo coronavírus, denominado SARS-CoV-2, que apresenta um espectro clínico variando de infecções assintomáticas a quadros graves. De acordo com a Organização Mundial de Saúde, a maioria (cerca de 80%) dos pacientes com COVID-19 podem ser assintomáticos ou oligossintomáticos (poucos sintomas), e aproximadamente 20% dos casos detectados requer atendimento hospitalar por apresentarem dificuldade respiratória, dos quais aproximadamente 5% podem necessitar de suporte ventilatório.'


const Home = () => {
    const globalInfo = useContext(GlobalContext)
    const [loading, setLoading] = useState(true)
    const { Global: global, Date: lastUpdate, error } = globalInfo.info


    const fetchData = useCallback(() => {
        setLoading(true)
        fetchSummary()
            .then(({ data }) => {
                if (data) {
                    globalInfo.setInfo({ ...data, error: false })

                } else {
                    globalInfo.setInfo({ error: true })
                }
                setLoading(false)
            })
    }, [])

    useEffect(() => fetchData(true), [fetchData])


    const ErrorMessage = () => {
        return (
            <View style={styles.errorView}>
                <Icon type='FontAwesome5' name={'sad-tear'} style={styles.errorIcon} />
                <Text style={styles.errorText}>Infelizmente houve um erro no meio do caminho e não conseguimos buscar os dados</Text>
                <TouchableOpacity onPress={() => fetchData()}>
                    <Text style={styles.reloadText}>Recarregar</Text>
                </TouchableOpacity>
            </View>)
    }

    return (
        <>
            <View style={styles.container}>
                <HeaderMain title='Estatísticas mundiais covid 19' />

                {(error && !loading) && <ErrorMessage />}

                {loading &&
                    <View style={styles.spinnerView}>
                        <Spinner size={'large'} color='#7159c1' />
                    </View>
                }

                {(global && !error && !loading) &&
                    <ScrollView>
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
                            lastUpdate={lastUpdate}
                        />
                        <SectionInfo
                            icon={'skull-crossbones'}
                            name={'Total de mortes'}
                            total={global.TotalDeaths}
                            recent={{ recentMessage: 'Mortes recentes por covid: ', recentValue: global.NewDeaths }}
                            color={'#c62828'}
                            lastUpdate={lastUpdate}

                        />
                        <SectionInfo
                            icon={'check'}
                            name={'Total de pessoas recuperadas'}
                            total={global.TotalRecovered}
                            recent={{ recentMessage: 'Pessoas recuperadas recentemente: ', recentValue: global.NewRecovered }}
                            color={'#00c853'}
                            lastUpdate={lastUpdate}
                        />
                    </ScrollView>
                }
            </View>
        </>
    )
}


export default Home;