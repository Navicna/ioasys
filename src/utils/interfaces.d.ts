import { ImageSourcePropType } from 'react-native';

type CountryType = 'UK' | 'Canada' | 'Brazil';
  
interface ICountryInfo {
  image: ImageSourcePropType;
}

export interface EnterpriseType {
  id: number;
  enterprise_type_name: string;
}

export interface IEnterPriseProps {
  id: number;
  email_enterprise?: any;
  facebook?: any;
  twitter?: any;
  linkedin?: any;
  phone?: any;
  own_enterprise: boolean;
  enterprise_name: string;
  photo: string;
  description: string;
  city: string;
  country: string;
  value: number;
  share_price: number;
  enterprise_type: EnterpriseType;
}
