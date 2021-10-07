import React, { useState, useCallback } from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const App = () => {
  const [modalVisibleET, setModalVisibleET] = useState(false);
  const [modalVisibleSC, setModalVisibleSC] = useState(false);
  const [modalVisibleSM, setModalVisibleSM] = useState(false);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <>
      <View style={styles.cuerpo}>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleET}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <YoutubePlayer
                height={300}
                weight={400}
                play={playing}
                videoId={'v1EkoQV4g5c'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleET(!modalVisibleET);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleSC}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <YoutubePlayer
                height={300}
                weight={400}
                play={playing}
                videoId={'HjzATzdlN2A'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleSC(!modalVisibleSC);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleSM}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'rt-2cxAiPJk'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleSM(!modalVisibleSM);
                }}></Button>
            </View>
          </View>
        </Modal>

        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.banner} source={require('../img/cs.jpg')} />
          </View>

          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Próximos estrenos</Text>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleET(!modalVisibleET);
                }}>
                <Image
                  style={styles.mejores}
                  source={require('../img/et.jpg')}
                />
              </TouchableHighlight>
              <Text style={styles.subtitulo}>
                Marvel Studios Eternals
                {'\n'}Estreno (12/11/2021)
                {'\n'}Sinopsis: Los Eternos, una raza alienígena inmortal,
                emergen de su escondite después de miles de años para proteger a
                la Tierra de sus contrapartes malvadas, The Deviants.
              </Text>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleSC(!modalVisibleSC);
                }}>
                <Image
                  style={styles.mejores}
                  source={require('../img/sc.jpg')}
                />
              </TouchableHighlight>
              <Text style={styles.subtitulo}>
                Marvel Studios Shang Chi y la Leyenda de los Diez Anillos
                {'\n'}Estreno (14/11/2021)
                {'\n'}Sinopsis: Shang Chi debe enfrentarse a un pasado que creía
                haber dejado atrás cuando se ve envuelto en la red de la
                misteriosa organización de los Diez Anillos.
              </Text>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleSM(!modalVisibleSM);
                }}>
                <Image
                  style={styles.mejores}
                  source={require('../img/sm.jpg')}
                />
              </TouchableHighlight>
              <Text style={styles.subtitulo}>
                Marvel Studios Spider-Man: No Way Home
                {'\n'}Estreno (17/12/2021)
                {'\n'}Sinopsis: Un adolescente corriente debe compaginar su vida
                en el instituto con su faceta de Spider Man, un superhéroe que
                lucha contra el mal que acecha a la sociedad.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cuerpo: {
    backgroundColor: '#0A193C'
  },
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    color: 'white',
    fontFamily: 'sans-serif-condensed',
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'sans-serif-condensed',
  },
});

export default App;
