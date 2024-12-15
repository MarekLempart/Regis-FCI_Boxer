// src/@types/react-phone-input-2.d.ts

declare module "react-phone-input-2" {
    import * as React from "react";
  
    // Zdefiniujmy odpowiednie typy dla countryData, eventu i innych
    export interface CountryData {
      name: string;
      iso2: string;
      dialCode: string;
      format: string;
      priority: number;
    }
  
    export interface PhoneInputProps {
      country?: string;
      value?: string;
      preferredCountries?: string[];
      onChange?: (
        value: string,
        countryData: CountryData,
        event: React.ChangeEvent<HTMLInputElement>,
        formattedValue: string
      ) => void;
      inputStyle?: React.CSSProperties;
      containerStyle?: React.CSSProperties;
      dropdownStyle?: React.CSSProperties;
      buttonStyle?: React.CSSProperties;
      enableSearch?: boolean;
    }
  
    const PhoneInput: React.FC<PhoneInputProps>;
    export default PhoneInput;
  }
