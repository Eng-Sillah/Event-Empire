import { supabase } from "../supabase";

//insert event
export const eventSetUp =async (
  eventTitle,
  eventOrganizers,
  tags,
  eventDateStart,
  eventTimeStart,
  userId,
  eventVenue,
  eventDescription,
  eventType,
  eventCategory,
  timeZone,
  eventRegion,
  eventTimeEnd,
  eventDateEnd
) => {
  const value =await supabase.from("Event").insert([
    {
      event_title: eventTitle,
      organizers: eventOrganizers,
      tags: tags,
      start_date: eventDateStart,
      start_time: eventTimeStart,
      user_id: userId,
      venue: eventVenue,
      description: eventDescription,
      event_type: eventType,
      event_category: eventCategory,
      time_zone: timeZone,
      event_region: eventRegion,
      end_time: eventTimeEnd,
      end_date: eventDateEnd,
    },
  ]);

  return value;
};

//GET eventsdetails by user

export const getUserEventsDetails = async(user) => {
  const value = await supabase.from("Event").select("*").eq("user_id", user);
  return value;
};
export const getUserEventsDetailsByName = (user) => {
  const value = supabase.from("Event").select("*").eq("event_title", user);
  return value;
};

//update descriptions

export const updateDescriptionsandflag =async (description, event) => {
  console.log(description, event);
  const value =await supabase
    .from("Event")
    .update({ description: description })
    .eq("event_title", event)
    .select();
  return value;
};

//upload picture

export const uploadPicture =async (file, pic) => {
  const value =await supabase.storage
    .from("eventFlag")
    .upload(`images/${pic}`, file);
  return value;
};

//save picture to db as string

export const savePic =async (filename, event) => {
  const value =await supabase
    .from("Event")
    .update({ images: filename })
    .eq("event_title", event)
    .select();
  return value;
};

//create tickets
export const createTicket =async (
  number_of_vip_ticket,
  price_per_vip_ticket,
  number_of_standard_ticket, 
  price_per_standard_ticket,
  other_ticket_number,
  price_per_other_ticket,
  event_id
) => {
  const value = await supabase.from("Ticket").insert([{
    number_of_vip_ticket:number_of_vip_ticket,
    price_per_vip_ticket:price_per_vip_ticket,
    number_of_standard_ticket:number_of_standard_ticket,
    price_per_standard_ticket:price_per_standard_ticket,
    other_ticket_number:other_ticket_number,
    price_per_other_ticket:price_per_other_ticket,
    event_id:event_id
  }]).select();

  return value
};
