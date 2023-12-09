import axios, { AxiosResponse } from "axios";
interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const fetchdata = async () => {
  try {
    const res: AxiosResponse<ToDo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Response:", res.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error", error.message);
    }
    if (error.Response) {
      console.error("error status", error.Response.status);
      console.error("data", error.Response.data);
    } else {
      console.error("error:", error.message);
    }
  }
};
fetchdata();
