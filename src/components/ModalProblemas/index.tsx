import { ScrollView, Image, Modal, View } from 'react-native';
import { Text } from '../Text';
import { CardContainer, LabelReport, MainContainer, ReportButton, ReportView } from './styles';
import { Modalize } from 'react-native-modalize';
import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

interface ModalProblemasProps{
  modalizeRef: React.RefObject<Modalize>
  longPress: boolean;
}
export default function ModalProblemas({modalizeRef, longPress}: ModalProblemasProps){
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (longPress) {
      setPressed(true);
    }else{
      setPressed(false);
    }
    console.log(pressed);
  }, [longPress]);


  function handlePressedReport(press: boolean){
    press = pressed === press ? false : true;
    setPressed(press);
  }


  return(
    <Modalize
      adjustToContentHeight
      ref={modalizeRef}
      handlePosition="inside"
      handleStyle={{ backgroundColor: '#e1e1e1', width: 70 }}
      modalStyle={{ backgroundColor: '#333', padding: 20}}
    >
      <MainContainer>

        <ReportButton onPress={() => handlePressedReport(true)}>
          {pressed === false &&
            <Image
              source={require('../../assets/images/box-important.png')}
              style={{width: 60, height: 60}}
            />
          }
          {pressed === true &&
            <Image
              source={require('../../assets/images/cancel.png')}
              style={{width: 60, height: 60}}
            />
          }
        </ReportButton>

        { pressed === true &&
          <ReportView>
            <Text weight={600}>RELATAR UM PROBLEMA:</Text>
            <TextInput style={{backgroundColor: '#fff', width: 225, padding: 5, borderRadius: 5, marginTop: 5}}></TextInput>
          </ReportView>
        }

        { pressed == false &&
          <ScrollView
            style={{maxHeight: 700}}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent:'center',
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
  );
}
