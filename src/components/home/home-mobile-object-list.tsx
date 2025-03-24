import SearchIcon from '@mui/icons-material/Search';
import { Drawer } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

export const SearchObjList = [
  {
    nome: 'Para onde?',
    info: 'Partida/Destino',
    icon: <SearchIcon sx={{ fontSize: '32px' }} color="secondary" />,
    function: () => <Drawer></Drawer>,
  },
  {
    nome: 'Selecione as datas',
    info: 'Entrada/Saída',
    icon: <DateRangeIcon sx={{ fontSize: '32px' }} color="secondary" />,
    function: () => <Drawer></Drawer>,
  },
  {
    nome: 'Hóspedes e quartos',
    info: '2 hóspedes, 1 quarto',
    icon: <PeopleOutlineIcon sx={{ fontSize: '32px' }} color="secondary" />,
    function: () => <Drawer></Drawer>,
  },
  {
    nome: 'R$1200,00',
    info: 'Valor máximo',
    icon: <LocalAtmIcon sx={{ fontSize: '32px' }} color="secondary" />,
    function: () => <Drawer></Drawer>,
  },
];

export const ObjectTravel = [
  {
    nome: 'Ônibus',
    keyName: 'onibus',
  },
  {
    nome: 'Carro',
    keyName: 'carro',
  },
  {
    nome: 'Uber',
    keyName: 'uber',
  },
  {
    nome: 'Avião',
    keyName: 'aviao',
  },
];
