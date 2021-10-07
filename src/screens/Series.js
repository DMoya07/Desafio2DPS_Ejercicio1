import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';

const App = () => {
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

  const [modalVisibleLK, setModalVisibleLK] = useState(false);
  const [modalVisibleWV, setModalVisibleWV] = useState(false);
  const [modalVisibleFW, setModalVisibleFW] = useState(false);
  const [modalVisibleTM, setModalVisibleTM] = useState(false);
  const [modalVisibleBB, setModalVisibleBB] = useState(false);
  const [modalVisibleCW, setModalVisibleCW] = useState(false);
  const [modalVisibleMH, setModalVisibleMH] = useState(false);
  const [modalVisibleGF, setModalVisibleGF] = useState(false);
  const [modalVisibleHM, setModalVisibleHM] = useState(false);
  return (
    <>
      <ScrollView style={styles.cuerpo}>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleLK}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Loki (2021)
                {'\n'}Temporadas: 1
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'KcBStos46EM'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleLK(!modalVisibleLK);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleWV}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Wandavision (2021)
                {'\n'}Temporadas: 1
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'sj9J2ecsSpo'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleWV(!modalVisibleWV);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleFW}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Falcon y El Soldado del Invierno (2021)
                {'\n'}Temporadas: 1
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'nxyckmizMUo'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleFW(!modalVisibleFW);
                }}></Button>
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner} source={require('../img/ppp.jpg')} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Series Originales de Marvel</Text>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleLK(!modalVisibleLK);
              }}>
              <Image
                style={styles.mejores}
                source={require('../img/loki.jpg')}
              />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleWV(!modalVisibleWV);
              }}>
              <Image
                style={styles.mejores}
                source={require('../img/wandav.jpg')}
              />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleFW(!modalVisibleFW);
              }}>
              <Image
                style={styles.mejores}
                source={require('../img/fws.jpg')}
              />
            </TouchableHighlight>
          </View>
        </View>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleTM}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                The Mandalorian (2019)
                {'\n'} Temporadas: 2
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'aOC8E8z_ifw'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleTM(!modalVisibleTM);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleBB}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Star Wars: Clone Wars (2008)
                {'\n'} Temporadas: 7
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'BsOmYpP4UDU'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleBB(!modalVisibleBB);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleCW}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Star Wars: Bad Batch (2021)
                {'\n'} Temporadas: 1
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'ZLW2jkd6E7g'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleCW(!modalVisibleCW);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Series del Universo Star Wars</Text>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleCW(!modalVisibleCW);
              }}>
              <Image style={styles.mejores} source={require('../img/cw.jpg')} />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleTM(!modalVisibleTM);
              }}>
              <Image
                style={styles.mejores}
                source={require('../img/tm.jpeg')}
              />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleBB(!modalVisibleBB);
              }}>
              <Image style={styles.mejores} source={require('../img/bb.jpg')} />
            </TouchableHighlight>
          </View>
        </View>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleMH}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Avenger Mightiest Heroes (2010)
                {'\n'} Temporadas: 2
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'WtZ-cz-3zqo'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleMH(!modalVisibleMH);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleGF}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Gravity Falls (2012)
                {'\n'} Temporadas: 2
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'R9DpatRyUz4'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleGF(!modalVisibleGF);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHM}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Hanna Montana (2006)
                {'\n'} Temporadas: 4
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'nDMIuuO_PQo'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHM(!modalVisibleHM);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Series Originales de Disney</Text>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleMH(!modalVisibleMH);
              }}>
              <Image
                style={styles.mejores}
                source={require('../img/avvs.jpg')}
              />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleGF(!modalVisibleGF);
              }}>
              <Image style={styles.mejores} source={require('../img/gf.jpg')} />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleHM(!modalVisibleHM);
              }}>
              <Image style={styles.mejores} source={require('../img/hm.jpg')} />
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cuerpo: {
    backgroundColor: '#0A193C',
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
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
  },
  contenido: {
    fontSize: 15,
    textAlign: 'left',
  },
});

export default App;
