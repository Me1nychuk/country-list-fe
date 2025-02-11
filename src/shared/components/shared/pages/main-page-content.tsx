"use client";

import { getAllcountries } from "@/shared/services/mainApi";
import { Country } from "@/shared/types";
import toast from "react-hot-toast";
import React from "react";
import { CustomTable } from "../custom-table";
import { cn } from "@/shared/lib/utils";

interface MainPageContentProps {
  className?: string;
}

const MainPageContent: React.FC<MainPageContentProps> = ({ className }) => {
  const [data, setData] = React.useState<Country[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getAllcountries();
        if (res) setData(res.data);
        else {
          toast.error("Something went wrong, please try again later.");
        }
      } catch (error) {
        setData([]);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);
  return (
    <div className={cn(" px-5", className)}>
      <h1 className="text-2xl my-5">List of countries</h1>
      <CustomTable data={data} isLoading={loading} />
    </div>
  );
};

export { MainPageContent };
