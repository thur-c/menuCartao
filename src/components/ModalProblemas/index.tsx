import { ScrollView, Image, View, TouchableOpacity, Alert } from 'react-native';
import { Text } from '../Text';
import { ButtonPhoto, ButtonProblem, ButtonSubmit, ButtonTakePhoto, CameraView, CardContainer, MainContainer, ReportView } from './styles';
import { Modalize } from 'react-native-modalize';
import { useEffect, useRef, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Camera, FlashMode } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Icons from '@expo/vector-icons';
import LoaderScreen from '../LoaderScreen';

interface ModalProblemasProps{
  modalizeRef: React.RefObject<Modalize>
  longPress: boolean;
}
export default function ModalProblemas({modalizeRef, longPress}: ModalProblemasProps){
  const [pressed, setPressed] = useState(false);
  const [showCam, setShowCam] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const cameraRef = useRef<Camera>(null);
  const [imageUri, setImageUri] = useState('');
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('#0009');
  const [flash, setFlash] = useState<FlashMode>(FlashMode.off);



  const takePicture = async () => {
    if (cameraRef.current) {
      setLoading(true);
      await cameraRef.current
        ?.takePictureAsync({
          quality: 0,
        })
        .then((photoData) => {

          setImageUri(photoData.uri);

        }).catch((error) => Alert.alert('Erro!', 'Ocorreu um erro ao tentar tirar a foto: ' + error.message))
        .then(() => {
          setShowCam(false);
          setLoading(false);

        });
    }
  };

  useEffect(() => {
    if (longPress) {
      setPressed(true);
    }else{
      setPressed(false);
    }
  }, [longPress]);

  function handlePressPicture() {
    if (pressed) {
      showImagePicker();
    }
  }

  function handlePressCamera() {
    setShowCam(true);
    setShowImage(false);

  }

  async function showImagePicker() {
    setShowCam(false);
    setShowImage(true);
    const permissionResultGallery = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if ( permissionResultGallery.granted === false) {
      alert('A permissão para acessar a galeria é necessária!');
      return;
    }

    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    };

    const pickerResult = await ImagePicker.launchImageLibraryAsync(options);

    if (pickerResult.canceled === true) {
      return;
    }
    setImageUri(pickerResult.assets[0].uri);
  }

  return(
    <>



      <Modalize
        adjustToContentHeight
        ref={modalizeRef}
        handlePosition="inside"
        handleStyle={{ backgroundColor: '#e1e1e1', width: 70 }}
        modalStyle={{ backgroundColor: '#333', padding: 20}}
        HeaderComponent={(
          <TouchableOpacity
            onPress={() => {
              modalizeRef.current?.close();
            }}
            style={{right: 10, top: -30, position: 'absolute', backgroundColor: '#f00', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20}}>
            <Text weight={600}>Fechar</Text>
          </TouchableOpacity>
        )}>

        <LoaderScreen
          isModaVisible={loading}
        />

        <MainContainer>
          {pressed === true &&
          <ReportView>
            {!showCam && imageUri.length > 0 && (
              <CameraView>

                <TouchableOpacity onPress={() => {
                  setShowCam(false);
                  setImageUri('');
                }} style={{position: 'absolute', zIndex: 999, top: 15, right: 15, backgroundColor: '#000', borderRadius: 100}}>
                  <Icons.AntDesign name='closecircle' color={'#fff'} size={26} />
                </TouchableOpacity>

                <Image source={{ uri: imageUri }} style={{width: 350, height: 350 ,objectFit: 'fill'}} />

              </CameraView>
            )}


            { showCam && !showImage &&
              <CameraView>

                <TouchableOpacity onPress={() => {
                  setShowCam(false);
                  setImageUri('');
                }} style={{position: 'absolute', zIndex: 999, top: 15, right: 15, backgroundColor: '#000', borderRadius: 100}}>
                  <Icons.AntDesign name='closecircle' color={'#fff'} size={26} />
                </TouchableOpacity>

                <Camera
                  style={{width: 350, height: 350, alignItems: 'center', justifyContent: 'flex-end'}}
                  autoFocus={false}
                  ref={cameraRef}
                  useCamera2Api={false}
                  flashMode={flash}
                >
                  <ButtonTakePhoto onPress={takePicture}>
                    <Icons.FontAwesome5 name="camera" size={22} color="white" />
                  </ButtonTakePhoto>

                  <View style={{position: 'absolute', zIndex: 9999, bottom: 0, right: 10}}>
                    <ButtonTakePhoto onPress={() => setFlash(flash === FlashMode.off ? FlashMode.torch : FlashMode.off)}>
                      <Icons.Ionicons name="flashlight-outline" size={24} color="white" />
                    </ButtonTakePhoto>
                  </View>

                </Camera>

              </CameraView>
            }
            <Text  style={{marginTop: 10}} weight={600}>APONTAR UM PROBLEMA:</Text>
            <View style={{marginTop: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, maxWidth: 200}}>


              <ButtonPhoto onPress={() => handlePressCamera()}>
                <FontAwesome5 name="camera" size={22} color="black" />
              </ButtonPhoto>

              <ButtonPhoto onPress={() => handlePressPicture()}>
                <Icons.MaterialIcons name="add-photo-alternate" size={24} color="black" />
              </ButtonPhoto>


            </View>
            <ScrollView style={{maxHeight: 250}}>

              <View style={{
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                flexDirection: 'row',
                gap: 10,
              }}>

                <>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>
                  <ButtonProblem
                    color={color}
                    onPress={() => {
                      setColor(color === '#0009' ? '#d00' : '#0009');
                    }}>
                    <Text style={{textAlign: 'center'}} weight={600}>Fora de cor</Text>
                  </ButtonProblem>


                </>

              </View>

            </ScrollView>
            <ButtonSubmit>
              <Text style={{textAlign: 'center'}} weight={600}>Enviar</Text>
            </ButtonSubmit>
          </ReportView>
          }
          { pressed == false &&
          <ScrollView
            style={{maxHeight: 700}}
            contentContainerStyle={{
              alignItems: 'center',
              padding: 30,
              width: '100%',
              gap: 20,
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}>

            <CardContainer>
              <Text weight={700}>
                DATA:
                <Text>11/11/2011</Text>
              </Text>
              <Text
                weight={700}>
            SETOR:
                <Text> Prepação</Text>
              </Text>
              <Text weight={700}>
            PEÇA:
                <Text> Banho</Text>
              </Text>
              <Text weight={700}>
            DESCRIÇÃO:
                <Text> Fio puxado</Text>
              </Text>
            </CardContainer>



          </ScrollView>
          }

        </MainContainer>

      </Modalize>

    </>

  );
}
