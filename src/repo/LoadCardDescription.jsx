import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { List, Card, Modal } from "components";

const FeaturedClubDescription = () => {
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
    <Modal active={modalActive} setActive={setModalActive}>
      
    </Modal>
    // <ul>
    //   {countries.map((country) => (
    //     <li key={country.name}>{country.name}</li>
    //   ))}
    // </ul>
  );
}

export default FeaturedClubDescription;