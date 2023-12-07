import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { List, Card } from "components";

const FeaturedClubsList = () => {
  const [data, setClubs] = useState([]);

  useEffect(() => {
    getClubs();
  }, []);

  async function getClubs() {
    const { data } = await supabase.from("Clubs").select();
    console.log(data)
    setClubs(data);
  }

  return (
    <List
        className="flex flex-col gap-[42px] items-center mt-auto mx-auto w-full"
        orientation="vertical"
    >
        {data.map((element, i) => (
            <Card key={element.id} data ={data[i]} />
        ))}
    </List>
    // <ul>
    //   {countries.map((country) => (
    //     <li key={country.name}>{country.name}</li>
    //   ))}
    // </ul>
  );
}

export default FeaturedClubsList;