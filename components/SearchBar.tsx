"use client";

import { useState } from "react";
import Image from "next/image";
import { SearchButton, SearchManufacturer } from ".";
import { useRouter } from "next/navigation";

const SearchBar = ({ setManufacturer, setModel }) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill in the searchbar");
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  const handleChangeInput = (e: { target: HTMLInputElement }) => {
    setSearchModel(e.target.value);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 "
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          placeholder="model"
          className="searchbar__input"
          onChange={handleChangeInput}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
