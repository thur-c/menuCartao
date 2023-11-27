import React, { useState } from 'react';
import { Modal, View } from 'react-native';

import {
  ModalContainer,
  MainContainer,
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
  GridYBottom,
  GraphLineXBottom,
  GraphLineYBottom,
  TextLabel,
  ButtonChangeTypeRed,
  ButtonsView,
  ButtonChangeTypeBlue
} from './styles';
import { Text } from '../../components/Text';

interface ModalGraphProps{
  isModalVisible: boolean;
  onClose: () => void;
}
export default function ModalGraph({isModalVisible, onClose}: ModalGraphProps){
  const [opacityRed, setOpacityRed] = useState(2);
  const [opacityBlue, setOpacityBlue] = useState(2);

  function handleButtonChangeOpacity(selectedBall: number){
    if (selectedBall === 9) {
      setOpacityRed(9);
      setOpacityBlue(2);
    } else if (selectedBall === 2) {
      setOpacityRed(2);
      setOpacityBlue(9);
    }
  }
  return(
    <Modal
      animationType='fade'
      transparent
      visible={isModalVisible}
      onRequestClose={onClose}
    >
      <MainContainer>
        <ModalContainer >
          <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
            <GraphContainer>

              <GridX spacingX={32}/>
              <GridX spacingX={72}/>
              <GridX spacingX={112}/>
              <GridX spacingX={152}/>
              <GridX spacingX={192}/>
              <GridX spacingX={232}/>
              <GridX spacingX={272}/>

              <GridY spacingY={32}/>
              <GridY spacingY={72}/>
              <GridY spacingY={112}/>
              <GridY spacingY={152}/>
              <GridY spacingY={192}/>
              <GridY spacingY={232}/>
              <GridY spacingY={272}/>


              <SmallCircle/>
              <BigCircle/>

              <LineY color={'#e9e902'}/>

              <View style={{flex: 1, flexDirection: 'row'}}>

                <LineX color={'green'}/>
                <LineX color={'#f00'}/>

              </View>

              <LineY color={'#000FFF'}/>

              <Ball
                top={112-4}
                left={152-4}
                color={`rgba(255,0,0,0.${opacityRed})`}
              />

              <Ball
                top={132-4}
                left={132-4}
                color={`rgba(0, 0, 255,0.${opacityBlue})`}
              />



            </GraphContainer>

            <TextY>
              <TextLabel>-3</TextLabel>
              <TextLabel>-2</TextLabel>
              <TextLabel>-1</TextLabel>
              <TextLabel>-Δa</TextLabel>
              <TextLabel> 1</TextLabel>
              <TextLabel> 2</TextLabel>
              <TextLabel> 3</TextLabel>
            </TextY>

          </View>

          <TextX>
            <TextLabel>-3</TextLabel>
            <TextLabel>-2</TextLabel>
            <TextLabel>-1</TextLabel>
            <TextLabel>-Δb</TextLabel>
            <TextLabel> 1</TextLabel>
            <TextLabel> 2</TextLabel>
            <TextLabel> 3</TextLabel>
          </TextX>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

            <TextLabel style={{marginTop: 30}}>-ΔL</TextLabel>
            <GraphBottomContainer>

              <GridYBottom spacingY={10}/>
              <GridYBottom spacingY={44}/>
              <GridYBottom spacingY={78}/>
              <GridYBottom spacingY={112}/>
              <GridYBottom spacingY={146}/>
              <GridYBottom spacingY={180}/>
              <GridYBottom spacingY={214}/>
              <GridYBottom spacingY={248}/>
              <GridYBottom spacingY={282}/>

              <GraphLineYBottom/>

              <View style={{flex: 1, flexDirection: 'row'}}>

                <GraphLineXBottom/>
                <GraphLineXBottom/>

              </View>

              <GraphLineYBottom/>
              <Ball
                top={77-4}
                left={145-4}
                color={`rgba(255,0,0,0.${opacityRed})`}
              />

              <Ball
                top={77-4}
                left={128-4}
                color={`rgba(0, 0, 255,0.${opacityBlue})`}
              />

            </GraphBottomContainer>
            <TextLabel style={{marginTop: 30}}>ΔL</TextLabel>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center', marginRight: 7, gap: 5}}>

            <TextLabel>-20</TextLabel>
            <TextLabel>-15</TextLabel>
            <TextLabel>-10</TextLabel>
            <TextLabel>-5</TextLabel>
            <TextLabel> 0</TextLabel>
            <TextLabel> 5</TextLabel>
            <TextLabel>10</TextLabel>
            <TextLabel>15</TextLabel>
            <TextLabel>20</TextLabel>
          </View>

          <Text style={{marginTop: 30}} weight={600}>ALTERNAR TIPO: </Text>

          <ButtonsView>

            <ButtonChangeTypeRed onPress={() => handleButtonChangeOpacity(9)}>
              <Text weight={600}>Ting.</Text>
            </ButtonChangeTypeRed>

            <ButtonChangeTypeBlue onPress={() => handleButtonChangeOpacity(2)}>
              <Text weight={600}>Acab.</Text>
            </ButtonChangeTypeBlue>
          </ButtonsView>



        </ModalContainer>
      </MainContainer>
    </Modal>

  );
}
