import React, { useRef, useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import _ from 'lodash'
import { HeaderMain } from '../../components/Common/Header/Header'
import { styles } from './RankingStyle'
import { InfoCard } from '../../components/Generic/InfoCard/InfoCard'
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/Generic/FilterButton/FilterButton'
import { GlobalContext } from '../../../store/GlobalContext'


const FILTER_TYPE = {
    CONFIRMED: 1,
    RECOVERED: 2,
    DEATHS: 3

}

const Ranking = () => {
    const countriesContext = useContext(GlobalContext)
    const [filteredCountries, setFilteredCountries] = useState([])
    const [filterSelected, setFilter] = useState(FILTER_TYPE.CONFIRMED)
    const listRef = useRef();

    function selectFilter(el) {
        return _(countriesContext.info.Countries)
            .sortBy(element => element[el])
            .reverse()
            .value()
    }

    function handleFilter(filter) {
        switch (filter) {
            case FILTER_TYPE.CONFIRMED:
                setFilteredCountries(selectFilter('TotalConfirmed'))
                break;
            case FILTER_TYPE.RECOVERED:
                setFilteredCountries(selectFilter('TotalRecovered'))
                break;
            case FILTER_TYPE.DEATHS:
                setFilteredCountries(selectFilter('TotalDeaths'))
                break;
        }
    }

    useEffect(() => {
        if (filteredCountries.length > 0)
            listRef.current.scrollToIndex({ animated: true, index: 0 })
    }, [filteredCountries])



    useEffect(() => {
        handleFilter(filterSelected)
    }, [countriesContext, filterSelected])




    const renderItem = ({ item, index }) => {
        return (
            <InfoCard
                country={`${index + 1}° - ${item.Country}`}
                confirmed={item.TotalConfirmed}
                deaths={item.TotalDeaths}
                recovered={item.TotalRecovered}
            />
        )
    }

    return (
        <View style={styles.container}>
            <HeaderMain title='Ranking mundial covid 19' />
            <View style={styles.filterContainer}>
                <Button color={'#1e88e5'}
                    selected={filterSelected === FILTER_TYPE.CONFIRMED}
                    text={'Confirmados'}
                    icon={'ambulance'}
                    click={() => setFilter(FILTER_TYPE.CONFIRMED)} />
                <Button color={'#00c853'}
                    selected={filterSelected === FILTER_TYPE.RECOVERED}
                    text={'Recuperados'}
                    icon={'check'}
                    click={() => setFilter(FILTER_TYPE.RECOVERED)} />
                <Button color={'#c62828'}
                    selected={filterSelected === FILTER_TYPE.DEATHS}
                    text={'Mortes'}
                    icon={'skull-crossbones'}
                    click={() => setFilter(FILTER_TYPE.DEATHS)} />
            </View>
            <FlatList
                data={filteredCountries}
                ref={listRef}
                renderItem={(item, index) => renderItem(item, index)}
                keyExtractor={item => item.slug}
            />
        </View>
    )
}


export default Ranking;