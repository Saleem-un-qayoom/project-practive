import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const getRoutes = () => {
  return false ? PrivateRoutes : PublicRoutes;
};

export default getRoutes;
