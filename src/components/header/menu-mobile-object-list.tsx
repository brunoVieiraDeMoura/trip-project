import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TranslateIcon from '@mui/icons-material/Translate';

export const ListaMenu = [
  {
    nome: 'Vizualizações Recentes',
    link: '/',
    icon: <HistoryIcon color="secondary" />,
  },
  { nome: 'Favoritos', link: '/', icon: <FavoriteIcon color="secondary" /> },
  { nome: 'Ajuda e Suporte', link: '/', icon: <HelpIcon color="secondary" /> },
  {
    nome: 'Fazer Login',
    link: '/',
    icon: <AccountCircleIcon color="secondary" />,
  },
];

export const ListaConfig = [
  {
    nome: 'País',
    link: '/',
    icon: <LanguageIcon color="secondary" />,
    detail: 'Brasil',
  },
  {
    nome: 'Moeda',
    link: '/',
    icon: <LocalAtmIcon color="secondary" />,
    detail: 'BRL - Real',
  },
  {
    nome: 'Idioma',
    link: '/',
    icon: <TranslateIcon color="secondary" />,
    detail: 'PT - Português',
  },
];
