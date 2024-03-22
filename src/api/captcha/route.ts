import type { NextApiRequest, NextApiResponse } from 'next'
// https://jscrambler.com/blog/implementing-google-recaptcha-v2-next-js
type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try{
    const secret = process.env.RECAPTCHA_SECRET;
    const {response} = req.query; 
    const fetchQuery = await fetch(`/recaptcha/api/siteverify?secret=${secret}&response=${response}`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const apiResponse = await fetchQuery.json();
    res.status(200).json({ success: apiResponse?.success }) 
  } catch(error:any){
    res.status(500).json({ success: false }) 
  }
}