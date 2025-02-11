"use client";
import { DetailPageContent } from "@/shared/components/shared";
import React from "react";
import { useParams } from "next/navigation";

const Page: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div className="p-5">
      {id ? (
        <DetailPageContent id={id} />
      ) : (
        <h2 className="text-2xl text-center">CountryCode not found</h2>
      )}
    </div>
  );
};

export default Page;
