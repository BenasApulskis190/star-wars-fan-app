import { Link } from 'react-router-dom';
import { assets } from '../../../../assets';

export enum BRAND_ICON_TYPE {
  WIDE = 'wide',
  DEFAULT = 'default'
}

type Props = {
  type: BRAND_ICON_TYPE;
};

export const BrandIcon = ({ type }: Props) => (
  <Link to="/" style={{ textDecoration: 'none', width: '215px' }}>
    {type === BRAND_ICON_TYPE.DEFAULT ? (
      <img style={{ maxWidth: '100%' }} src={assets.images.logo} alt="logo" />
    ) : (
      <img style={{ maxWidth: '100%' }} src={assets.images.logoSm} alt="logo" />
    )}
  </Link>
);
