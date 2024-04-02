import React, { useState } from 'react';
import { Modalize } from 'react-native-modalize';
import { TimeLineView, ModalView, Line, Circle, CircleView, LineView, TextTimeLine } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { fluxo } from '../mock';
import { Image, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '../Text';

interface ModalFluxoProps {
  modalizeRef: React.RefObject<Modalize>;
}

export default function ModalFluxo({ modalizeRef }: ModalFluxoProps) {
  const [info, setInfo] = useState('');
  const [show, setShowInfo] = useState(false);

  function selectedStatus(dataFim: string){
    if (dataFim == '31/10/2023') {
      return 'em_processo';
    }
    else if (dataFim != '') {
      return 'finalizado';
    }
    else{
      return 'nao_iniciado';
    }
  }


  function handleInfoFluxo(name: string){
    setShowInfo(true);
  }

  return (
    <Modalize
      adjustToContentHeight
      ref={modalizeRef}
      handlePosition="inside"
      handleStyle={{ backgroundColor: '#e1e1e1', width: 70 }}
      modalStyle={{ backgroundColor: '#333', padding: 20}}
    >

      <ModalView>

        <ScrollView style={{maxHeight: 700, width: 700}}
          contentContainerStyle={{alignItems: 'center', padding: 30, width: 700}}>
          <TimeLineView>
            {fluxo.map((item) => (
              <CircleView key={item.nome}>

                <LineView>


                  <Circle size={selectedStatus(item.info.dataFim)} color={selectedStatus(item.info.dataFim)}>
                    {selectedStatus(item.info.dataFim) == 'finalizado' &&
                    <Image
                      style={{flex: 1, width: '100%'}}
                      source={require('../../assets/images/ok.png')}
                    />
                    }
                    {selectedStatus(item.info.dataFim) == 'em_processo' &&
                    <Image
                      style={{height: 20, width: 20}}
                      source={require('../../assets/images/tecido.png')}
                    />
                    }
                  </Circle>

                  <Line color={selectedStatus(item.info.dataFim)}/>

                </LineView>

                <TouchableOpacity
                  style={{height: 75, minWidth: 150,  alignItems: 'flex-start', justifyContent: 'center'}}
                  onPress={() => handleInfoFluxo(item.nome)}
                  disabled={selectedStatus(item.info.dataFim) == 'finalizado' ? false : true}
                >

                  <View style={{flexDirection: 'row', gap: 10, alignItems: 'center', }}>

                    <TextTimeLine
                      size={selectedStatus(item.info.dataFim)}
                      color={selectedStatus(item.info.dataFim)}
                    >

                      {item.nome}


                    </TextTimeLine>

                    {
                      selectedStatus(item.info.dataFim) == 'finalizado' &&
                        <Ionicons
                          name='information-circle-outline'
                          color={'#fff'}
                          size={18}
                        />

                    }
                  </View>

                  <Text color={'#fff5'} size={12}>
                    Inicio: 01/01/2024 10:00
                    {'\n'}
                    Fim: 02/01/2024 05:00
                  </Text>

                </TouchableOpacity>
              </CircleView>
            ))}
          </TimeLineView>
        </ScrollView>
      </ModalView>
    </Modalize>
  );
}
