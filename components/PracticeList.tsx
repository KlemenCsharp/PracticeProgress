import {FlatList, StyleSheet, View} from "react-native";
import Practice from "./Practice";

const DATA = [
    {
        "id": 1,
        "title": "Funky Groove",
        "description": "A fun and upbeat funk groove",
        "beatValue": 100,
        "startingTempo": 90,
        "endingTempo": 100,
        "numberOfRepititions": 4,
        "status": "active"
    },
    {
        "id": 2,
        "title": "Soulful Ballad",
        "description": "A slow and emotional ballad",
        "beatValue": 60,
        "startingTempo": 50,
        "endingTempo": 60,
        "numberOfRepititions": 1,
        "status": "active"
    },
    {
        "id": 3,
        "title": "Latin Jazz",
        "description": "A lively jazz piece with Latin rhythms",
        "beatValue": 120,
        "startingTempo": 100,
        "endingTempo": 120,
        "numberOfRepititions": 6,
        "status": "active"
    },
    {
        "id": 4,
        "title": "Epic Orchestral",
        "description": "An epic orchestral piece with soaring melodies.",
        "beatValue": 80,
        "startingTempo": 60,
        "endingTempo": 80,
        "numberOfRepititions": 3,
        "status": "active"
    },
    {
        "id": 5,
        "title": "Electronic Dance",
        "description": "A high-energy electronic dance track",
        "beatValue": 140,
        "startingTempo": 120,
        "endingTempo": 140,
        "numberOfRepititions": 8,
        "status": "inactive"
    },
    {
        "id": 6,
        "title": "Electronic Dance",
        "description": "A high-energy electronic dance track",
        "beatValue": 140,
        "startingTempo": 120,
        "endingTempo": 140,
        "numberOfRepititions": 8,
        "status": "inactive"
    },
    {
        "id": 7,
        "title": "Electronic Dance",
        "description": "A high-energy electronic dance track",
        "beatValue": 140,
        "startingTempo": 120,
        "endingTempo": 140,
        "numberOfRepititions": 8,
        "status": "inactive"
    },
    {
        "id": 8,
        "title": "Electronic Dance",
        "description": "A high-energy electronic dance track",
        "beatValue": 140,
        "startingTempo": 120,
        "endingTempo": 140,
        "numberOfRepititions": 8,
        "status": "inactive"
    },
    {
        "id": 9,
        "title": "Electronic Dance",
        "description": "A high-energy electronic dance track",
        "beatValue": 140,
        "startingTempo": 120,
        "endingTempo": 140,
        "numberOfRepititions": 8,
        "status": "inactive"
    },
];

function PracticeList() {
    return (
        <View style={styles.container}>
            <FlatList
                alwaysBounceVertical={false}
                data={DATA}
                renderItem={(practiceData) => <Practice practice={practiceData.item} />}
                keyExtractor={practice => practice.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
       padding: 4
   }
});

export default PracticeList;
