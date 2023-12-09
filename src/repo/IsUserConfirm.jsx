import { supabase } from "./supabaseClient";

export async function isUserConfirm(login, password) {
    // Запрос к базе данных Supabase для получения данных
    const { data, error } = await supabase
      .from('Users')
      .select('id, login, password')
      .eq('login', login)
      .single();
    if (error) {
      console.error('Ошибка при получении данных из базы данных Supabase:', error);
      return false;
    }
    if (!data) {
      console.log('Пользователь не найден');
      return false;
    }
    
    if ((data.login === login) && (data.password === password)) {
      return data.id;
    } 
    else {
      return false;
    }
  }