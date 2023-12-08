import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { List, Card } from "components";

const FeaturedClubsList = () => {
  const [data, setClubs] = useState([]);
  const [loading, setLoading] = useState(true); // Добавлено состояние для отслеживания загрузки

  useEffect(() => {
    getClubs();
  }, []);

  async function getClubs() {
    try {
      const { data } = await supabase.from("Clubs").select("*, Users(user_name, social_network_link), Locations(location_name)").order('id');
      data.sort()
      console.log(data)
      setClubs(data);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setLoading(false); // Устанавливаем состояние загрузки в false после завершения запроса
    }
  }

  return (
    <>
      {loading ? (
        // Отображаем индикатор загрузки или сообщение о загрузке
        <p></p>
      ) : (
        <List
          className="flex flex-col gap-[42px] items-center mt-auto mx-auto w-full"
          orientation="vertical"
        >
          {data.map((element, i) => (
            <Card key={element.id} data={data[i]} />
          ))}
        </List>
      )}
    </>
  );
};

export default FeaturedClubsList;