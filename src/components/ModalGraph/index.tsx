import React, { useEffect, useState } from 'react';
import {  Image, Modal, TouchableOpacity, View } from 'react-native';
import { Text } from '../../components/Text';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  ModalContainer,
  GraphContainer,
  LineX,
  LineY,
  TextX,
  TextY,
  GridX,
  GridY,
  SmallCircle,
  BigCircle,
  Ball,
  GraphBottomContainer,
  GraphLineXBottom,
  GraphLineYBottom,
  TextLabel,
  GridXBottom,
  TextYBottom,
  GraphsView,
  TableView,
  THeader,
  Tbody,
  TRow,
  Overlay,
} from './styles';


interface ModalGraphProps{
  isModalVisible: boolean;
  onClose: () => void;
  dataColorData: DataColorProps | undefined;
}

type DataColorProps = [
  string,
  {
    Data: string,
    Tipo: string,
    DL: string,
    Da: string,
    Db:string,
    DC: string,
    DH: string,
    DE:string,
    CMC: string,
    Padrao: string,
    DataP: string,
    Texto: string,
    RgbPadrao: string,
    RgbAmostra: string
}]
export default function ModalGraph({isModalVisible, onClose, dataColorData}: ModalGraphProps){
  const [showPadrao, setShowPadrao] = useState(false);
  const table = dataColorData != undefined && Object.entries(dataColorData) as DataColorProps[];
  const colors = [
    '0, 150, 0',    // Verde
    '250, 150, 0',  // Laranja
    '200, 0, 150',  // Magenta
    '0, 200, 200',  // Ciano
    '100, 0, 0',    // Marrom
    '200, 0, 0',    // Vermelho
    '0, 0, 200',    // Azul
    '0, 50, 0',    // Verde escuro
    '0, 0, 100',    // Azul escuro
    '100, 100, 0',  // Oliva
    '100, 0, 100',  // Roxo
    '0, 100, 100',  // Azul claro
    '100, 100, 100',// Cinza
    '150, 150, 150',// Cinza claro
    '50, 50, 50',   // Cinza escuro
  ];

  function generateRandomColor(seed) {
    if (seed >= 0 && seed < colors.length) {
      return `rgb(${colors[seed]})`;
    } else {
      return null;
    }
  }

  return(
    <Modal
      animationType='fade'
      transparent
      visible={isModalVisible}
      onRequestClose={onClose}
    >

      <Overlay>

        <ModalContainer>

          <TouchableOpacity
            onPress={() => onClose()}
            style={{right: 10, top: -30, position: 'absolute', backgroundColor: '#f00', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20}}>
            <Text weight={600}>Fechar</Text>
          </TouchableOpacity>
          {table &&
            <>
              <Text size={20} weight={600} style={{textAlign: 'center'}}>DATACOLOR</Text>
              <GraphsView>
                <View style={{alignItems: 'center', marginBottom: 20}}>

                  <Text style={{marginLeft: 20}} weight={600}>+Δl</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TextYBottom>
                      <TextLabel size={14}>20</TextLabel>
                      <TextLabel size={14}>15</TextLabel>
                      <TextLabel size={14}>10</TextLabel>
                      <TextLabel size={14}>5</TextLabel>
                      <TextLabel size={14}>0,0</TextLabel>
                      <TextLabel size={14}>-5</TextLabel>
                      <TextLabel size={14}>-10</TextLabel>
                      <TextLabel size={14}>-15</TextLabel>
                      <TextLabel size={14}>-20</TextLabel>
                    </TextYBottom>

                    <GraphBottomContainer>
                      <GraphLineXBottom/>
                      <GraphLineYBottom/>
                      <GridXBottom spacingX={17}/>
                      <GridXBottom spacingX={45}/>
                      <GridXBottom spacingX={71}/>
                      <GridXBottom spacingX={99}/>
                      <GridXBottom spacingX={125}/>
                      <GridXBottom spacingX={151}/>
                      <GridXBottom spacingX={177}/>
                      <GridXBottom spacingX={203}/>
                      <GridXBottom spacingX={229}/>
                      {
                        table && table.map(([,item], index) =>
                          (
                            <Ball
                              key={index}
                              y={121 + (Number(item.DL.replace(',','.')) / 5 * (-27))}
                              x={20 }
                              color={generateRandomColor(index)}
                            />

                          )
                        )
                      }

                    </GraphBottomContainer>

                  </View>

                  <Text style={{marginLeft: 20}} weight={600}>-Δl</Text>

                </View>
                <View style={{alignItems: 'center'}}>
                  <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                    <GraphContainer>
                      <GridX spacingX={18} />
                      <GridX spacingX={54} />
                      <GridX spacingX={90} />
                      <GridX spacingX={126}/>
                      <GridX spacingX={162}/>
                      <GridX spacingX={198}/>
                      <GridX spacingX={234}/>

                      <GridY spacingY={18} />
                      <GridY spacingY={54} />
                      <GridY spacingY={90} />
                      <GridY spacingY={126}/>
                      <GridY spacingY={162}/>
                      <GridY spacingY={198}/>
                      <GridY spacingY={234}/>

                      <SmallCircle/>
                      <BigCircle/>

                      <LineY color={'#e9e902'}/>

                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <LineX color={'green'}/>
                        <LineX color={'#f00'}/>
                      </View>
                      <LineY color={'#000FFF'}/>

                      {
                        table && table.map(([,item], index) =>
                          (
                            <Ball
                              key={index}
                              y={121 + (Number(item.Db.replace(',','.')) * (-37))}
                              x={121 + (Number(item.Da.replace(',','.')) * 36)}
                              color={generateRandomColor(index)}
                            />

                          )
                        )
                      }





                    </GraphContainer>
                    <TextY>
                      <TextLabel>3</TextLabel>
                      <TextLabel>2</TextLabel>
                      <TextLabel>1</TextLabel>
                      <TextLabel size={12} weight={600}>Δa</TextLabel>
                      <TextLabel>-1</TextLabel>
                      <TextLabel>-2</TextLabel>
                      <TextLabel>-3</TextLabel>
                    </TextY>
                  </View>

                  <TextX>
                    <TextLabel>-3</TextLabel>
                    <TextLabel>-2</TextLabel>
                    <TextLabel>-1</TextLabel>
                    <TextLabel size={12} weight={600}>Δb</TextLabel>
                    <TextLabel>1</TextLabel>
                    <TextLabel>2</TextLabel>
                    <TextLabel>3</TextLabel>
                  </TextX>
                </View>
              </GraphsView>


              <ScrollView
                horizontal
                contentContainerStyle={{width: '180%', padding: 10}}
              >
                <TableView>

                  <THeader>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>STATUS</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>DATA</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>TIPO</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>DL</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>DA</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>DB</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>DC</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>DH</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>DE</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>CMC</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>PADRÃO</Text>
                    <Text weight={600} size={12} style={{textAlign: 'center', flex: 1}}>DATA</Text>
                  </THeader>

                  <ScrollView>

                    <View >
                      {table && table.map(([,item], index) => (
                        <TRow color={generateRandomColor(index)} key={index}>
                          <View style={{ flex: 1, alignItems: 'center'}}>
                            {item.Texto.split(' | ').pop() === 'Falha' ?
                              <Image
                                style={{width: 20, height: 20,borderRadius: 20,backgroundColor: '#000',}}
                                source={require('../../assets/images/cancel.png')}
                              />
                              :
                              <Image
                                style={{width: 20, height: 20,borderRadius: 20,backgroundColor: '#000',}}
                                source={require('../../assets/images/ok.png')}
                              />
                            }
                          </View>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1}}>{item.Data}</Text>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1}}>{item.Tipo}</Text>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1}}>{item.DL}</Text>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1}}>{item.Da}</Text>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1}}>{item.Db}</Text>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1}}>{item.DC}</Text>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1}}>{item.DH}</Text>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1}}>{item.DE}</Text>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1}}>{item.CMC}</Text>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1,}}>{item.Padrao}</Text>
                          <Text weight={600} size={11} style={{textAlign: 'center', flex: 1}}>{item.DataP}</Text>
                        </TRow>
                      ))}
                    </View>

                  </ScrollView>

                </TableView>
              </ScrollView>
            </>
          }
          {table === false &&
          <Text size={20} weight={600} style={{textAlign: 'center'}}>Nenhum dado encontrado</Text>

          }
        </ModalContainer>
      </Overlay>
    </Modal>

  );
}
