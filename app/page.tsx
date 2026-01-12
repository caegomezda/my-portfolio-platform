"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  logo_url: string;
  github_url: string;
  apk_url: string;
};

import { getSupabase } from "@/lib/supabaseClient";

export default async function Home() {
  const supabase = getSupabase();

  const { data, error } = await supabase
    .from("projects")
    .select("*");

  if (error) return <pre>{error.message}</pre>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
  
}

