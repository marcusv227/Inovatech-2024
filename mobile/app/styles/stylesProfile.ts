
import { StyleSheet, } from 'react-native';

export const styles = StyleSheet.create({
    container: {    
        flex: 1,
        
    },
    header: {   
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#60a5fa'
    },
    avatar:{
        marginBottom:30,
        alignItems: 'center',
    },

    profileContainer: {
        padding:24,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
      },
      userName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
      },
      card: {
        padding: 24,
        alignItems: 'center',
      },
      infoCard: {
        marginHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        width: '100%',
      },
      infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:10,
        paddingVertical: 15,
      },
     
      cartTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#60a5fa'
      },
      infoText: {
        fontSize: 16,
        fontWeight: 'regular',
        
      },
      divider: {
        marginVertical: 3,
      },
      menu: {
        top: 100, 
        backgroundColor:'#fafafa'
      },
      Intro : {
        alignItems:'center',
        borderWidth:3,
        borderColor:'#60a5fa',
        borderRadius: 5
      },
      image: {
        
        width: 300,
        height: 100,
        borderWidth:2,
        borderBlockColor: '#60a5fa'
      },
      
      
    
})