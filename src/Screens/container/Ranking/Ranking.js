import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { HeaderMain } from '../../components/Common/Header/Header'
import { styles } from './RankingStyle'
import { InfoCard } from '../../components/Generic/InfoCard/InfoCard'
import { FlatList } from 'react-native-gesture-handler';
import Axios from 'axios'


const Ranking = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        Axios.get('https://api.covid19api.com/summary')
            .then(({ data }) => {
                if (data) {
                    setCountries(data.Countries)
                }
            })
    }, [])

    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <InfoCard
                country={item.Country}
                confirmed={item.TotalConfirmed}
                deaths={item.TotalDeaths}
                recovered={item.TotalRecovered}
            />
        )
    }

    return (
        <View>
            <HeaderMain title='Ranking mundial covid 19' />
            <FlatList
                data={countries}
                renderItem={item => renderItem(item)}
                keyExtractor={item => item.slug}

            />
        </View>
    )
}


export default Ranking;