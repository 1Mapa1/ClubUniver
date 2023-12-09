import { supabase } from "./supabaseClient";

async function getClub(director_id) {
    
  const { data: club, error } = await supabase
    .from('Clubs')
    .select('id').eq("director", director_id).single();
        
    if (error) {
      console.error('Ошибка при получении данных из базы данных Supabase:', error);
      return false
    }
    if (!club) {
      console.log(error);
      return false
    }
    return club.id
}

export async function uploadScheduleSelect(data_entry, weekday, time, director_id) {
    // Запрос к базе данных Supabase для получения данных
    const club = await getClub(director_id)
    console.log(data_entry, time, director_id)
    const str_d_s = data_entry.starting_time.toString()+ ":00:00";
    const str_d_e = (data_entry.starting_time + time).toString() + ":00:00";
    console.log(str_d_s, str_d_e);
    const {error} = await supabase
      .from('Pull_record_timetable')
      .insert({club_id: club, weekday: weekday , starting_time: str_d_s,
       end_time: str_d_e, location: data_entry.location.id});
      
    if (error) {
      console.error('Ошибка при получении данных из базы данных Supabase:', error);
      return false;
    }
    else {
      alert("Данные отправлены")
    }
  }