export interface Country {
  countryCode: string;
  name: string;
}
export interface CountryResponse {
  data: Country[];
}

export interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[] | null;
}
export interface CountryDetails {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[] | null;
}

export interface CountryFlagData {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

export type PopulationObj = {
  year: number;
  value: number;
};

export interface CountryPopulation {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationObj[];
}

export interface CountryAllInfo extends CountryDetails {
  populationData: { data: CountryPopulation };
  flagData: { data: CountryFlagData };
}
