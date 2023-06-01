import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    formContent: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
        padding: 20,
        justifyContent: "space-around",
        alignItems: "center"
    },
    form: {
        paddingTop: 40,
        width: "100%",
        height: "100%",
        marginTop: 0
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "bold"
    },
    input: {
        marginTop: 10,
        width: "90%",
        height: 40,
        marginLeft: 15,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
        padding: 10
    },
    buttonCalculator: {
        marginTop: 20,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff0043",
        borderRadius: 25,
        width: "90%",
        height: 50,
    },
    btnText: {
        color: "#fff",
        fontWeight: "bold"
    },
    errorMsg: {
        paddingLeft: 20,
        fontSize: 10,
        color: "red"
    },
    exhibitionImc: {
        width: "100%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        padding: 4
    },

    listImc: {
        marginTop: 20
    },
    resultImcItem: {
        fontSize: 18,
        color: "red",
        height: 50,
        width: "100%",
        alignItems: "center",
        padding: 4
    }

});

export default styles;