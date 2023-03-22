import {StyleSheet, View, Text} from "react-native";

function Practice(props: any) {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>{props.practice.title}</Text>
                <Text>{props.practice.startingTempo} - {props.practice.endingTempo}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.description}>{props.practice.description}</Text>
                <Text style={styles.status}>{props.practice.status}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginVertical: 6,
        padding: 8,
        borderRadius: 10
    },
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2
    },
    title: {
        fontSize: 18
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    description: {
        fontSize: 12
    },
    status: {
        color: "green"
    }
})

export default Practice;
