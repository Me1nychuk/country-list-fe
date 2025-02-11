"use client";
import { getCountryDetails } from "@/shared/services/mainApi";
import toast from "react-hot-toast";
import { CountryAllInfo } from "@/shared/types";
import React from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import PopulationChart from "../population-chart";

interface DetailPageContentProps {
  className?: string;
  id: string;
}

const DetailPageContent: React.FC<DetailPageContentProps> = ({
  className,
  id,
}) => {
  const [data, setData] = React.useState<CountryAllInfo>();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getCountryDetails(id);

        if (res) setData(res.data);
        else {
          toast.error("Something went wrong, please try again later.");
        }
      } catch (error) {
        setData(undefined);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);
  return (
    <div className={cn(" p-5  rounded-xl bg-slate-500 text-white", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl my-5 font-bold">Country details</h2>
        <Link
          className=" underline cursor-pointer text-sm text-center "
          href="/"
        >
          Go to main page
        </Link>
      </div>
      {loading && <Loader2 className="animate-spin mx-auto" size={24} />}

      {!loading && data && (
        <>
          <h1>
            <span className="font-bold">Name: </span>
            {data.commonName.toUpperCase()}
          </h1>

          <h2>
            <span className="font-bold">Code: </span>
            {data.countryCode}
          </h2>
          <h2>
            <span className="font-bold">Region: </span>
            {data.region}
          </h2>
          <h2 className="font-bold">Borders: </h2>
          <ul className="list-disc list-inside pl-5">
            {data.borders?.map((item) => (
              <li key={item.countryCode}>
                <Link
                  className="underline cursor-pointer"
                  href={`/country/${item.countryCode}`}
                >
                  {item.commonName}
                </Link>
              </li>
            ))}
          </ul>
          <img
            className="mx-auto my-5 w-[300px] max-w-[300px] block !border-2 border-black "
            src={data.flagData.data.flag}
            alt={data.flagData.data.name}
          />
          <PopulationChart data={data.populationData.data.populationCounts} />
        </>
      )}

      {!loading && !data && (
        <h2 className="text-2xl text-center">
          We could not find information about the country with this code {id}
        </h2>
      )}
    </div>
  );
};

export { DetailPageContent };
