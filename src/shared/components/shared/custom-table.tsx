import { Country } from "@/shared/types";
import React from "react";
import {
  Skeleton,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";

interface CustomTableProps {
  data?: Country[];
  className?: string;
  isLoading?: boolean;
}

const CustomTable: React.FC<CustomTableProps> = ({
  className,
  data,
  isLoading,
}) => {
  return (
    <>
      <Table
        className={cn(
          "bg-gray-500 text-white rounded-xl border-[2px] border-black",
          className
        )}
      >
        <TableCaption>A list of available countries.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-white">Code</TableHead>
            <TableHead className="text-white">Country</TableHead>
            <TableHead className="w-[100px] text-white text-center">
              Link
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading &&
            data &&
            data.map((item) => (
              <TableRow key={item.countryCode} className="hover:bg-gray-600">
                <TableCell className="font-medium">
                  {item.countryCode}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className=" grid place-items-center ">
                  <Link
                    className="w-full cursor-pointer  text-center underline hover:opacity-70 "
                    href={`/country/${item.countryCode}`}
                  >
                    Deteails
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          {!isLoading && (!data || data.length === 0) && (
            <TableRow>
              <p>No data found</p>
            </TableRow>
          )}
          {isLoading &&
            [...Array(10)].map((_, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <Skeleton className="h-5 w-5" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-32" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-5 w-5" />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export { CustomTable };
