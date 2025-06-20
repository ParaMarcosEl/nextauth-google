import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) return <div>Not authorized</div>;

  return <div>Welcome, {session.user?.email}!</div>;
}
