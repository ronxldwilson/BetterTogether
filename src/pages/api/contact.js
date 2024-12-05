
import { supabase } from "@utils/supabase";

export default async function handler(req, res) {

  if (req.method === "POST") {
    const { name, email, type_of_query, question } = req.body;

    const { data, error } = await supabase
      .from("Contact_Us_Form")
      .insert([{ name, email, type_of_query, question }]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: "Message sent successfully!", data });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
