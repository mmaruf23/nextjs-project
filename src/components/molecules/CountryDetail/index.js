import List from "@/components/atoms/List";

export default function CountryDetail({dataCountry}) {
  return (
    <div className="border border-red-400 rounded-lg w-full p-5 flex flex-col gap-2">
      <List keyName={'Continent'} valueName={`${dataCountry?.continents}`} />
      <List keyName={'Region'} valueName={`${dataCountry?.subregion}`} />
      <List keyName={'Time Zones'} valueName={`${dataCountry?.timezones}`} />
      <List
        keyName={'Official Name'}
        valueName={`${dataCountry?.name.official}`}
      />
      <List keyName={'Capital'} valueName={`${dataCountry?.capital}`} />
      <List
        keyName={'Languages'}
        valueName={`${Object.values(dataCountry?.languages || {})}`}
      />
      <List
        keyName={'Currencies'}
        valueName={`${Object.keys(dataCountry?.currencies || {})}`}
      />
      {/* <List keyName={'Maps'} valueName={`${dataCountry?.maps.googleMaps}`} /> */}
      <div className="flex w-full border-b pb-3">
        <p className="w-44">{'Maps'}</p>
        <p className="w-5">:</p>
        <p className="flex-1 font-normal font-mono text-blue-600">
          <a href={dataCountry?.maps.googleMaps} target="_blank">
            {dataCountry?.maps.googleMaps}
          </a>
        </p>
      </div>
      {/* <div className="flex w-full border-b pb-3">
        <p className="w-44">Continent</p>
        <p className="w-5">:</p>
        <p className="flex-1">Asia</p>
      </div>
      <div className="flex w-full border-b pb-3">
        <p className="w-44">Region</p>
        <p className="w-5">:</p>
        <p className="flex-1">Southeast Asia</p>
      </div>
      <div className="flex w-full border-b pb-3">
        <p className="w-44">Time Zone</p>
        <p className="w-5">:</p>
        <p className="flex-1">UTC+07:00,UTC+08:00,UTC+09:00</p>
      </div>
      <div className="flex w-full border-b pb-3">
        <p className="w-44">Official Name</p>
        <p className="w-5">:</p>
        <p className="flex-1">Republic of Indonesia</p>
      </div>
      <div className="flex w-full border-b pb-3">
        <p className="w-44">Capital</p>
        <p className="w-5">:</p>
        <p className="flex-1">Jakarta</p>
      </div>
      <div className="flex w-full border-b pb-3">
        <p className="w-44">Language</p>
        <p className="w-5">:</p>
        <p className="flex-1">Indonesian</p>
      </div>
      <div className="flex w-full border-b pb-3">
        <p className="w-44">Currency Code</p>
        <p className="w-5">:</p>
        <p className="flex-1">IDR</p>
      </div>
      <div className="flex w-full border-b pb-3">
        <p className="w-44">Map</p>
        <p className="w-5">:</p>
        <p className="flex-1">https://goo.gl/maps/9gfPupm5bffixiFJ6</p>
      </div> */}
    </div>
  );
}
