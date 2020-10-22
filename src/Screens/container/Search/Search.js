import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native';
import { Text, Item, Input } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatList } from 'react-native-gesture-handler';
import Autocomplete from 'react-native-autocomplete-input'
import { HeaderMain } from '../../components/Common/Header/Header'
import { styles } from './SearchStyle'
import { GlobalContext } from '../../../store/GlobalContext'
import { InfoCard } from '../../components/Generic/InfoCard/InfoCard'




const Search = () => {
    const countriesContext = useContext(GlobalContext)
    const [filteredCountries, setFilteredCountries] = useState([])

    const renderItem = ({ item }) => {
        return (
            <InfoCard
                country={item.Country}
                confirmed={item.TotalConfirmed}
                deaths={item.TotalDeaths}
                recovered={item.TotalRecovered}
            />
        )
    }


    function filterValue(text) {
        if (text) {
            setFilteredCountries(countriesContext.info.Countries.filter(element => element.Country.toLowerCase().includes(text.toLowerCase())))
        } else {
            setFilteredCountries([])
        }
    }
    return (
        <View>
            <HeaderMain title='Busca por país' />
            <View >
                <View style={styles.searchBox}>
                    <Item rounded >
                        <Icon active name='search' size={20} style={styles.icon} />
                        <Input placeholder='Busque pelo país'
                            onChangeText={text => filterValue(text)} />
                    </Item>
                </View>
                <FlatList
                    data={filteredCountries}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.slug}
                />
            </View>
        </View>
    )
}


export default Search;