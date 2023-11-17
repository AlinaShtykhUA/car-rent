"use client";
import React from "react";

import { IShowMoreProps } from "@/types";
import { CustomButton } from ".";

const ShowMore = ({ pageNumber, isNext, setLimit }: IShowMoreProps) => {
  const handlerNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handlerNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
