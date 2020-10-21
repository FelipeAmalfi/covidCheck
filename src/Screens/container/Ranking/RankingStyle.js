import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        fontSize: 16,
        fontWeight: '600',
        width: 150,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    }
});
