import axios from 'axios'

export async function getRandomUsers(amount = 1) {
  try {
    const res = await axios.get(`https://randomuser.me/api/?results=${amount}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}