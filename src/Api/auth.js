//signup

import { supabase } from "../supabase";





//sign in user  with password
export const signinuser=async(email , password)=>{

const data= await supabase.auth.signInWithPassword({
  email: email,
  password: password,
})

return data
 
}
//sign up user  with password
export const signUpUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    return { data, error };
  } catch (error) {
    console.log(error);
  }
};

//sign up user with google auth

export const googleAuth = async () => {
  try {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    return { user, session, error };
  } catch (error) {
    console.log(error);
  }
};

//signout

export const signOut = async () => {
  const data = await supabase.auth.signOut();
  return data
};


//get User

export const getUser = async () => {
    const data = await supabase.auth.getUser()
    return data
}