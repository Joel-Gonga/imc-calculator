import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, ScrollView, FlatList } from "react-native";
import { View, Text } from "react-native";
import ResultImc from "./ResultImc/index";
import styles from "./style";


export default function Form() {

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [message, setMessage] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    function imcCalculator() {
        let alturaFormat = altura.replace(",", ".")
        const totalImc = (peso / (alturaFormat * alturaFormat)).toFixed(2);
        setImcList((arr) => [... arr, {id: new Date().getTime(), imc: totalImc}]);
        setImc(totalImc);
    }


    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*");
        }
    }

    function validationImc() {

        if (peso != null && altura != null) {

            imcCalculator();
            setAltura(null);
            setPeso(null);
            setMessage("Seu IMC é igual a:");
            setTextButton("Calcular Novamente");
            setErrorMessage(null)

            return

        } else {

            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessage("Preencha o peso e a altura")

        }
    }

    return (
        <View style={styles.formContent}>
            {
                imc == null ?

                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input}
                    placeholder="Ex.: 1.70"
                    onChangeText={setAltura}
                    value={altura}
                    keyboardType="numeric"
                />
                <Text style={styles.errorMsg}>{errorMessage}</Text>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input}
                    placeholder="Ex.: 60.5"
                    onChangeText={setPeso}
                    value={peso}
                    keyboardType="numeric"
                />
                <Text style={styles.errorMsg}>{errorMessage}</Text>
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => { validationImc() }}>
                    <Text style={styles.btnText}>{textButton}</Text>
                </TouchableOpacity>
            </Pressable>

            :
            <View style={styles.exhibitionImc}>
            <ResultImc messageResultImc={message} resultImc={imc} />
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => { validationImc() }}>
                    <Text style={styles.btnText}>{textButton}</Text>
                </TouchableOpacity>
                

                <FlatList
                showsVerticalScrollIndicator={false}
                    style={styles.listImc}
                    data={imcList.reverse()}
                    renderItem={({item}) => {
                        return(
                            <Text style={styles.resultImcItem}>
                                <Text style={styles.textResultImc}>Resultado IMC = {item.imc}</Text>
                            </Text>
                        )
                    }}
                    keyExtractor={(item) => {
                        item.id
                    }}
                />    
                    
                
            </View>

            }

        </View>
    )

}

