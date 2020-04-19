import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Image ,TouchableOpacity, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'


import styles from './styles'

import LogoImg from '../../assets/logo.png'

export default function Detail() {
    const navigation = useNavigation()
    const route = useRoute()

    const product = route.params.product
    const message = `Olá ${product.name} estou entrando em contato pois gostaria de negociar o valor referente a "${product.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.value)}`

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Comprador : ${product.title}`,
            recipients: [product.email],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${product.whatsapp}&text=${message}`)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg} />

             <TouchableOpacity onPress={navigateBack}>
                 <Feather name="arrow-left" size={28} color="#E02041" />
             </TouchableOpacity>
           </View>

           <View style={styles.product}>
           <Text style={[styles.productProperty, { marginTop: 0 }]}>LOJA:</Text>
           <Text style={styles.productValue}>{product.name} de {product.city}/{product.uf}</Text>

            <Text style={styles.productProperty}>PRODUTO:</Text>
            <Text style={styles.productValue}>{product.title}</Text>

            <Text style={styles.productProperty}>Valor:</Text>
            <Text style={styles.productValue}>
                {Intl.NumberFormat('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL' 
                }).format(product.value)}
            </Text>
           </View>

           <View style={styles.contactBox}>
               <Text style={styles.heroTitle}>Compre agóra!</Text>
               <Text style={styles.heroTitle}>Enquanto ainda pode.</Text>
               <Text style={styles.heroDescription}>Entre em contato</Text>

               <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
               </View>
           </View>
        </View>
    )
}