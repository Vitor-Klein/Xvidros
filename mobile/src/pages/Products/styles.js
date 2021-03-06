import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
       flex: 1,
       paddingHorizontal: 24,
       paddingTop: Constants.statusBarHeight + 20,  
       backgroundColor: '#363636'   
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#D3D3D3',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },

    productList: {
        marginTop: 32,
    },

    product: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#4F4F4F',
        marginBottom: 16,
    },

    productProperty:{
        fontSize: 14,
        color: '#D3D3D3',
        fontWeight: 'bold',
    },

    productValue:{
       marginTop: 8,
       fontSize: 15, 
       marginBottom: 24,
       color: '#C0C0C0',
    },  

    detailButton: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
})