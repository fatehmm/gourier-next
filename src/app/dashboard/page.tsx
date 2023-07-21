"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { PrimaryFeatures } from "../(components)/dashboard/PrimaryFeatures";
export default function Profile() {
  const { user, error, isLoading } = useUser();
  if (user)
    return (
      <>
        <PrimaryFeatures></PrimaryFeatures>
      </>
    );
}
