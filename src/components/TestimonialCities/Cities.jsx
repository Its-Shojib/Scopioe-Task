import { useEffect, useState } from "react";

const Cities = () => {
  const [cities, setCities] = useState([]);
  // data fetching function
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("Cities.json");
        const result = await response.json();
        setCities(result);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  // Splitting the cities array into rows of 3 items each
  const rows = [];
  for (let i = 0; i < cities.length; i += 3) {
    rows.push(cities.slice(i, i + 3));
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full flex content-center justify-center">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {row.map((city, cityIndex) => (
                <td key={cityIndex} className="p-3 lg:p-5">
                  <a
                    href="#"
                    className="text-[#156BCA] text-sm lg:text-base underline"
                  >
                    {city.city}, {city.state}
                  </a>
                </td>
              ))}
              {row.length < 3 &&
                Array.from({ length: 3 - row.length }).map((_, index) => (
                  <td key={index} className="p-3 lg:p-5 text-center"></td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cities;
