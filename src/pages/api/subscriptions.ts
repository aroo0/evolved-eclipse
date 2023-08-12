import type { APIRoute } from "astro";
import { connectToDB } from "../../libs/database"
import SubAccount from "../../models/sub";

export const post: APIRoute = async ({ request }) => {
  try {
    await connectToDB();

    const data = await request.json();
    const { email } = data

    const existingEmail = await SubAccount.find({
      email: email
    })

    if(existingEmail.length === 0) {

      const newSub = new SubAccount({ 
        email: email,
        date: new Date()
      })

      await newSub.save()
  
      return new Response(
        JSON.stringify({
          message: "Thx! Email saved!  ⌒°ʚ(ෆ❛ั ᴗ ❛ัʃƪ)ɞ♡°⌒"
        }),
        { status: 200 }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Email already exist. ༶ඬ༝ඬ༶"
      }),
      { status: 409 }
    );

  } catch (error: any) {
    console.log(error)
    return new Response("SERVER ERROR", { status: 500 })
    
  }
};