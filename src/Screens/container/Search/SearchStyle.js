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
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 100,
        zIndex: 1
    }
});
