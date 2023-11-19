import { StyleSheet, TouchableOpacity, Text, Touchable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const CB1 = ({onPress1, enabled}) => {
    const name1 = enabled ? 'bookmark' : 'bookmark-o';
    return (
        <TouchableOpacity onPress={onPress1} style={{ padding: 10, backgroundColor: '#fff' }}>
            <FontAwesome name={name1} size={36} color="salmon" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
});