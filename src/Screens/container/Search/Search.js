import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native'
import {
    View,
} from 'react-native';
import { Text } from 'native-base'
import Autocomplete from 'react-native-autocomplete-input'
import { HeaderMain } from '../../components/Common/Header/Header'
import Axios from 'axios'
import { styles } from './SearchStyle'
import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {
    const [countries, setCountries] = useState([])
    const [countryNames, setCountryNames] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [query, setQuery] = useState('')
    useEffect(() => {
        Axios.get('https://api.covid19api.com/summary')
            .then(({ data }) => {
                if (data) {
                    let countryName = [];
                    setCountries(data.Countries)
                    data.Countries.forEach(element => {
                        countryName.push(element.Country)

                    });
                    setCountries(data.Countries)
                    setCountryNames(countryName)
                }
            })
    }, [])


    function filterValue(text) {
        if (text) {
            setFilteredCountries(countryNames.filter(element => element.toLowerCase().includes(text.toLowerCase())))
        } else {
            setFilteredCountries([])
        }
    }
    return (
        <View>
            <HeaderMain title='Busca por país' />
            <View style={styles.autocompleteContainer}>
                <Autocomplete
                    data={filteredCountries}
                    defaultValue={query}
                    placeholder={' Busque pelo país'}
                    onChangeText={text => filterValue(text)}
                    renderItem={({ item, i }) => (
                        <TouchableOpacity onPress={() => setQuery(text)}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}


export default Home;