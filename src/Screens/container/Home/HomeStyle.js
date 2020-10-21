import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#A3ABBD',
        display: 'flex',
        height: '100%'

    },

    cardContainer: {
        marginLeft: 16,
        marginRight: 16

    },
    cardV: {
        borderRadius: 8
    },
    card: {
        marginTop: -12,
        marginBottom: -12
    },

    footerText: {
        fontSize: 12,

    },
    footerLink: {
        fontSize: 12,
        fontWeight: "bold"
    },

    title: {
        fontSize: 16,

    },
    subtext: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 16,
        marginRight: -8

    },

    headerAndroid: {
        backgroundColor: '#7159c1'
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    }



});

export const dynamicStyles = (props) => StyleSheet.create({

    text: {
        color: props.color,
        fontSize: 32,
        fontWeight: 'bold',
    },

});
