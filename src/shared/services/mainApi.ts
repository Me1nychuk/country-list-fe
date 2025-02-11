import axios from "axios";
import { Country, CountryAllInfo } from "../types";

const newInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
export const getAllcountries = async () => {
  try {
    const res = await newInstance.get<Country[]>("/countries");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCountryDetails = async (countryCode: string) => {
  try {
    const res = await newInstance.get<CountryAllInfo>(
      `/countries/${countryCode}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
