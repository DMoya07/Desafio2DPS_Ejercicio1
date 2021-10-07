import React, { useState, useCallback, useRef } from 'react';
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

  const [modalVisibleIW, setModalVisibleIW] = useState(false);
  const [modalVisibleAT, setModalVisibleAT] = useState(false);
  const [modalVisibleDS, setModalVisibleDS] = useState(false);
  const [modalVisibleAV, setModalVisibleAV] = useState(false);
  const [modalVisibleMU, setModalVisibleMU] = useState(false);
  const [modalVisibleWE, setModalVisibleWE] = useState(false);
  const [modalVisibleUP, setModalVisibleUP] = useState(false);
  const [modalVisibleTS, setModalVisibleTS] = useState(false);
  const [modalVisibleLE, setModalVisibleLE] = useState(false);
  const [modalVisibleLS, setModalVisibleLS] = useState(false);
  const [modalVisibleZO, setModalVisibleZO] = useState(false);
  const [modalVisibleVV, setModalVisibleVV] = useState(false);
  return (
    <>
      <ScrollView style={styles.cuerpo}>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleIW}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Los Vengadores y sus superhéroes deben estar dispuestos a
                sacrificar todo en un intento de derrotar al poderoso Thanos,
                antes de que sus planes de devastación y ruina ponga fin al
                universo.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'6ZfuNTqbHE8'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleIW(!modalVisibleIW);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleAT}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Armado con la sorprendente habilidad de encogerse a escala pero
                incrementando la fuerza, el maestro ladrón Scott Lang debe
                abrazar a su héroe interior y ayudar a su mentor, el Doctor
                Henry Pym, a proteger el secreto que hay detrás del espectacular
                traje de Ant-Man de una nueva generación de amenazas crecientes.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'pWdKf3MneyI'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleAT(!modalVisibleAT);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleDS}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Doctor Strange sigue la historia del talentoso neurocirujano
                Doctor Stephen Strange quien, tras un trágico accidente
                automovilístico, debe poner a un lado su ego y aprender los
                secretos del mundo del misticismo y las dimensiones paralelas.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'HSzx-zryEgM'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleDS(!modalVisibleDS);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleAV}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Cuando un enemigo inesperado amenaza con poner en peligro la
                seguridad mundial, Nicholas Fury, Director de la agencia
                internacional para el mantenimiento de la paz, conocida con el
                nombre de S.H.I.E.L.D., necesita encontrar urgentemente un
                equipo que salve al mundo del mayor de los desastres.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'eOrNdBpGMv8'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleAV(!modalVisibleAV);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner} source={require('../img/eda.jpg')} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Lo mejor de Marvel</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleIW(!modalVisibleIW);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/infinityw.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleAT(!modalVisibleAT);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/antman.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleDS(!modalVisibleDS);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/strange.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleAV(!modalVisibleAV);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/avengers20.jpg')}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleMU}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Mike y Sulley son dos jóvenes monstruos que acuden a la
                universidad para estudiar la carrera de asustadores. Ahora son
                amigos íntimos y se llevan muy bien, pero no fue siempre así.
                Durante sus años de universidad, debieron aprender a dejar sus
                diferencias de lado y a trabajar en equipo.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'QxrQ6BaijAY'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleMU(!modalVisibleMU);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleWE}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                un robot que es el único superviviente de una fuerza de limpieza
                de la tierra que, setecientos años después de haber sido
                abandonado por los humanos, recibe la visita inesperada de otro
                robot explorador, que busca vida en el olvidado planeta.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'CZ1CATNbXg0'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleWE(!modalVisibleWE);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleUP}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                La trama relata las aventuras de un viudo de edad avanzada
                llamado Carl Fredricksen y de un niño escultista cuyo nombre es
                Russell, quienes viajan a Cataratas del Paraíso, en Venezuela,
                en el interior de una casa flotante suspendida con globos
                rellenos de helio.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'ORFWdXl_zJ4'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleUP(!modalVisibleUP);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleTS}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Woody es el único juguete al que esto no le preocupa, pues cree
                asegurado su estatus de mejor amigo de Andy. Sin embargo, el
                mudno del vaquero se derrumba cuando uno de los regalos del
                último cumpleaños de Andy es un Buzz Lightyear, un sofisticado y
                moderno juguete espacial que está teniendo gran éxito en ese
                momento.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'rNk1Wi8SvNc'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleTS(!modalVisibleTS);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Pixar Animation</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleMU(!modalVisibleMU);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/mike.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleWE(!modalVisibleWE);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/walle.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleUP(!modalVisibleUP);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/up.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleTS(!modalVisibleTS);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/ts.jpg')}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleLE}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Kuzco es un joven emperador Inca, arrogante y egocéntrico al que
                su envidiosa tutora, Yzma, convierte en una llama, cuando la
                intención verdadera era envenenarlo. Abandonado en la selva, la
                única posibilidad que tiene de regresar a casa y seguir
                gobernando reside en un bondadoso campesino llamado Pacha.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'Bkh3heh_uHE'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleLE(!modalVisibleLE);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleLS}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Lilo es una niña hawaiana que se siente sola y decide adoptar un
                perro muy feo al que llama Stitch. Este sería la mascota
                perfecta si no fuera en realidad un experimento genético que ha
                escapado de un planeta alienígena y que ha llegado a la Tierra
                por casualidad.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'9OAC55UWAQs'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleLS(!modalVisibleLS);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleZO}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                La película estadounidense trata sobre una divertida ciudad
                mamífera, Zootopia, donde conviven animales de todos los
                ambientes. Viven en absoluta felicidad hasta que un día llega
                una nueva ciudadana, Judy Jopps, una coneja que intenta ser la
                primera en un escuadrón policial.
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'4ldh_q0boPY'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleZO(!modalVisibleZO);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleVV}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Cuando un ambicioso forajido llamado Alameda Slim planea
                apoderarse de la granja lechera llamada "Patch of Heaven", tres
                vacas decididas, un pardillo karateca llamado Buck, y un
                colorido conjunto de criaturas unen sus fuerzas para salvar la
                granja en una salvaje búsqueda plena de intensas aventuras
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'86r2WNLdcjI'}
                onChangeState={onStateChange}
              />
              <Button
                style={styles.botones}
                title={playing ? 'pausa' : 'reproducir'}
                onPress={togglePlaying}></Button>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleVV(!modalVisibleVV);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Original de Disney</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleLE(!modalVisibleLE);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/aa.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleLS(!modalVisibleLS);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/lilo.png')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleZO(!modalVisibleZO);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/zoo.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleVV(!modalVisibleVV);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('../img/vacas.jpg')}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
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
    fontFamily: 'sans-serif-condensed',
    fontSize: 24,
    color: 'white',
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
    backgroundColor: '#0A193C',
  },
  ciudad: {
    width: 300,
    height: 250,
    marginRight: 10,
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
  },
  botones: {
    marginVertical: 10,
  },
});
export default App;
