import React, { useState } from 'react';
import { Modalize } from 'react-native-modalize';
import { TimeLineView, ModalView, Line, Circle, CircleView, LineView, TextTimeLine } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '../Text';

interface ModalFluxoProps {
  modalizeRef: React.RefObject<Modalize>;
  fluxoData: FluxoDataProps;
}
type FluxoDataProps = [
  string,
  {
  Data: string,
  Detalhes: string,
  Fluxo: string,
  Maquina: string,
  Operador: string,
  Processo: string,
}]

export default function ModalFluxo({ modalizeRef, fluxoData }: ModalFluxoProps) {
  const [showInfoIndex, setShowInfoIndex] = useState<string | null>(null);

  const fluxo = fluxoData != undefined && Object.entries(fluxoData) as FluxoDataProps[];

  function handleInfoFluxo(index: string) {
    setShowInfoIndex(prevIndex => (prevIndex === index ? null : index));
  }

  return (
    <Modalize
      adjustToContentHeight
      ref={modalizeRef}
      handlePosition="inside"
      handleStyle={{ backgroundColor: '#e1e1e1', width: 70 }}
      modalStyle={{ backgroundColor: '#333', padding: 20}}
      HeaderComponent={(
        <TouchableOpacity
          onPress={() => modalizeRef.current?.close()}
          style={{right: 10, top: -30, position: 'absolute', backgroundColor: '#f00', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20}}>
          <Text weight={600}>Fechar</Text>
        </TouchableOpacity>
      )}
    >

      <ModalView>

        <ScrollView style={{maxHeight: 700, width: 700}}
          contentContainerStyle={{alignItems: 'center', padding: 30, width: 700}}>
          <TimeLineView>
            {fluxo && fluxo.map(([index, item]) => (
              <CircleView key={item.Processo}>

                <LineView>
                  <Circle
                    color={item.Data.length > 1 ? '#0000' : '#222'}
                    size={item.Data.length > 1 ? 20 : 20}>
                    {item.Data.length > 1 ?
                      <Image
                        style={{flex: 1, width: '100%'}}
                        source={require('../../assets/images/ok.png')}
                      />
                      :
                      <Image
                        style={{flex: 1, width: '100%'}}
                        source={require('../../assets/images/black-circle-emoji.png')}
                      />
                    }
                  </Circle>
                  <Line />
                </LineView>

                <ScrollView contentContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  maxWidth: 250,
                  alignItems: 'center',
                }}>
                  <TouchableOpacity
                    style={{ minWidth: 150, justifyContent: 'center', width: '100%'}}
                    onPress={() => handleInfoFluxo(index)}
                  >

                    {showInfoIndex != index &&
                        <TextTimeLine
                          color={item.Fluxo === 'Não' ? '#fff000' : '#fff'}
                          size={14}>
                          {item.Processo}

                        </TextTimeLine>
                    }
                    {
                      showInfoIndex === index && (
                        <TextTimeLine
                          size={12}
                          color={item.Fluxo === 'Não' ? '#fff000' : '#fff'}
                        >
                        OPERADOR:
                          <Text style={{ fontSize: 12 }}> {item.Operador}</Text>
                          {'\n'}
                          {'\n'}
                        DETALHES:
                          {'\n'}
                          <Text style={{ fontSize: 12 }}>{item.Detalhes.split('|').join('\n' + '\n')}</Text>
                          {'\n'}
                        </TextTimeLine>
                      )
                    }
                    {
                      showInfoIndex != index &&
                      <>
                        {item.Data.length > 0 &&
                          <Text color={'#fff9'} size={12}>
                            {item.Data}
                          </Text>
                        }
                        {item.Maquina.length > 0 &&
                          <Text color={'#fff9'} size={12}>
                            Máquina: {item.Maquina}
                          </Text>
                        }

                        <Ionicons
                          name='information-circle-outline'
                          color={'#fff'}
                          size={18}
                          style={{right: 0, position: 'absolute'}}
                        />
                      </>
                    }

                  </TouchableOpacity>
                </ScrollView>


              </CircleView>
            ))}
          </TimeLineView>
        </ScrollView>
        {fluxo === false &&
          <Text size={20} weight={600} style={{marginBottom: 50}}>
            Nenhum Fluxo encontrado
          </Text>
        }
      </ModalView>
    </Modalize>
  );
}

