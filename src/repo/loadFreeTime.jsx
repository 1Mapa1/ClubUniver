import { supabase } from "./supabaseClient";

export async function loadFreeTime() {
    // Запрос к базе данных Supabase для получения данных
    const { data, error } = await supabase
      .from('weekly_schedule')
      .select();
    if (error) {
      console.error('Ошибка при получении данных из базы данных Supabase:', error);
      return false;
    }
    if (!data) {
      console.log('Данные не найдены');
      return false;
    }
    if (data) {
      return data;
    } 
    else {
      return false;
    }
  }