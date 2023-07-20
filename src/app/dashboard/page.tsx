"use client";
import DashboardShell from "../(components)/dashboard/DashboardShell";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Profile() {
  const { user, error, isLoading } = useUser();
  if (user)
    return (
      <>
        <DashboardShell></DashboardShell>
      </>
    );
}
