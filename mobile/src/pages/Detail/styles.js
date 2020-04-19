import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop:Constants.statusBarHeight + 20,
        backgroundColor: '#363636'   
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    product: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#4F4F4F',
        marginBottom: 16,
        marginTop: 48,
    },

    productProperty:{
        fontSize: 14,
        color: '#D3D3D3',
        fontWeight: 'bold',
        marginTop: 24,
    },

    productValue:{
       marginTop: 10,
       fontSize: 15, 
       color: '#C0C0C0',
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#4F4F4F',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#D3D3D3',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#C0C0C0',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',      
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#4F4F4F',
        fontSize: 15,
        fontWeight: 'bold',
    },
})