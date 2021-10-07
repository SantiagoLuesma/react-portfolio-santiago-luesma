import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'U Tracker',
    desc:
      'Una aplicación para rastrear todos sus datos desde un solo lugar. Desarrollé el sitio web y la aplicación móvil.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc:
      'Una aplicación para ayudar a las personas a obtener una visión general de cómo pueden hacer que la ciudad sea hermosa.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Con esta aplicación puede rastrear cualquier moneda electrónica. También recibirá un buen asesoramiento sobre inversiones por parte del profesional.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'Un portafolio para Cavin jr. Un artista de la ciudad de Nueva York. La cartera se realizó utilizando ReactJs y GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'Un sitio web de seguimiento que mostrará el rendimiento del sitio web. También obtendrás algunos consejos útiles para mejorar el rendimiento.',
    img: ProjectImg,
  },
];

export default projects;
