import axios from "axios";
import User from "./user";
import { AllUsers } from "@/app/types/users";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const { data: users } = await axios.get(
    process.env.NEXT_PUBLIC_URL + "/users",
  );

  return users?.map(({ id }: AllUsers) => ({
    id: id.toString(),
  }));
}

const Page = ({ params: { id } }: Props) => {
  return <User currentId={id} />;
};

export default Page;
