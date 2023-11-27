import { ScrollView, Image, Modal } from 'react-native';
import { Text } from '../Text';
import { CardContainer, MainContainer, ReportButton } from './styles';
import { Modalize } from 'react-native-modalize';
interface ModalProblemasProps{
  modalizeRef: React.RefObject<Modalize>
}
export default function ModalProblemas({modalizeRef}: ModalProblemasProps){
  return(
    <Modalize
      adjustToContentHeight
      ref={modalizeRef}
      handlePosition="inside"
      handleStyle={{ backgroundColor: '#e1e1e1', width: 70 }}
      modalStyle={{ backgroundColor: '#333', padding: 20}}

    >
      <MainContainer>

        <ReportButton>
          <Image
            source={require('../../assets/images/box-important.png')}
            style={{width: 60, height: 60}}
          />
        </ReportButton>

        <ScrollView
          style={{maxHeight: 700, width: 700}}
          contentContainerStyle={{alignItems: 'center', padding: 30, width: '100%', gap: 20}}>

          <CardContainer>

            <Text
              weight={700}>
            SETOR:
              <Text> Prepação</Text>
            </Text>

            <Text weight={700}>
            DATA:
              <Text> 11/11/2011</Text>
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
            SETOR:
              <Text> Prepação</Text>
            </Text>
            <Text weight={700}>
            DATA:
              <Text> 11/11/2011</Text>
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
            SETOR:
              <Text> Prepação</Text>
            </Text>
            <Text weight={700}>
            DATA:
              <Text> 11/11/2011</Text>
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
            SETOR:
              <Text> Prepação</Text>
            </Text>
            <Text weight={700}>
            DATA:
              <Text> 11/11/2011</Text>
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
            SETOR:
              <Text> Prepação</Text>
            </Text>
            <Text weight={700}>
            DATA:
              <Text> 11/11/2011</Text>
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
            SETOR:
              <Text> Prepação</Text>
            </Text>
            <Text weight={700}>
            DATA:
              <Text> 11/11/2011</Text>
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

      </MainContainer>
    </Modalize>
  );
}
