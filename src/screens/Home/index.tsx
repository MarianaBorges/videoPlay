import React, {useRef, useState, useEffect} from 'react';
import { 
    Platform, 
    Alert, 
    Text,
    View, 
    FlatList, 
    TouchableOpacity 
} from 'react-native';

import { Video } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import {LinearGradient} from 'expo-linear-gradient';

import { styles } from './styles';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

import { Button } from '../../components/Button';
import { ListItem } from '../../components/ListItem';
import theme from '../../styles/theme';

export type Videos = ImageInfo;

export function Home(){
    const refVidio = useRef(null);
    const [ vidio, setVidio] = useState<string>('//');
    const [ videos, setVideos] = useState<Videos[]>([] as Videos[]);

    useEffect(()=>{
        (async () => {
            if(Platform.OS !== 'web'){
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if(status !== 'granted'){
                    Alert.alert('Opss!','Ocorreu um erro');
                }
            }
        })();
    });

    async function pickVideo(){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing:true,
            aspect: [4,3],
            quality: 1,
        });
       
        if(!result.cancelled){
            setVidio(result.uri);
            setVideos([...videos,result])
        }
    }

   return (
      <View style={styles.container}>
          <LinearGradient
            colors={[theme.colors.backgroundGradientTwo, theme.colors.backgroundGradientOne]}
            style={styles.background}
          />
          <Video
            ref={refVidio}
            style={styles.video}
            source={{uri: vidio}}
            useNativeControls
            resizeMode='contain'
          />
          <View style={styles.content }>
              <Text style={styles.title}>Meus Vídeos</Text>
            <FlatList
                data={videos}
                keyExtractor={(item)=>item.uri }
                renderItem={({item, index})=>(
                <ListItem
                    onPress={()=>setVidio(item.uri)}
                    index={index}/>
                )}
            />
          </View>
          <View style={styles.footer}>
            <Button
                onPress={pickVideo}
            />
          </View>
      </View>
 );
}