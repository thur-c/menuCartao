import { TouchableOpacity } from 'react-native';
import { Text } from '../../components/Text';
import { MainButton, MainContainer } from './styles';
import ModalCodigo from '../../components/ModalCodigo';
import {useContext, useState} from 'react';
import ModalScan from '../../components/ModalScan';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/RootStackParamList';
import ModalCracha from '../../components/ModalCracha';
import { LoginContext } from '../../context/loginContext';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({navigation, route}: HomeProps){
  const {user} = useContext(LoginContext);
  const [showScreen, setShowScreen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(0);

  function handleOpenCodigoModal(){
    setIsModalVisible(1);
  }

  function handleOpenScanModal(){
    setIsModalVisible(2);
    setShowScreen(true);
    setIsModalVisible(0);
  }

  function handleCloseModal(){
    setIsModalVisible(0);
    setShowScreen(false);
  }

  return(
    <>
      {user === '' &&
        <ModalCracha />
      }

      {showScreen && (

        <ModalScan
          route={route}
          navigation={navigation}
          isModalVisible={isModalVisible === 2}
          onClose={handleCloseModal}
        />

      )}
      {!showScreen && (
        <MainContainer>

          <ModalCodigo
            route={route}
            navigation={navigation}
            onClose={handleCloseModal}
            isModalVisible={isModalVisible === 1}
          />

          <MainButton onPress={() => handleOpenScanModal()}>
            <Text
              weight={600}
              color={'#172554'}
            >
              LER CÓDIGO DE BARRAS
            </Text>
          </MainButton>



          <TouchableOpacity onPress={() => handleOpenCodigoModal()}>
            <Text
              style={{letterSpacing: 0.5}}
              weight={600}
              size={12}
            >
            INSERIR O CÓDIGO MANUALMENTE
            </Text>
          </TouchableOpacity>


        </MainContainer>
      )}

    </>

  );
}
