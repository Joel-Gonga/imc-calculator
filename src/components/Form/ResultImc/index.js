import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

const ResultImc = ({ resultImc, messageResultImc }) => {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + resultImc
        })
    }

    return (
        <View style={styles.content}>
            <View style={styles.boxShare}>
                <Text style={styles.resultmsg}>{messageResultImc} </Text>
                <Text style={styles.result}>{resultImc}</Text>
                <TouchableOpacity style={styles.shared} onPress={() => onShare()}>
                    <Text style={styles.sharedText}>Partilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}


export default ResultImc;