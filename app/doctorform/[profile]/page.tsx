"use client";

import FileUpload from "@/app/components/dnd";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("firstName");
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const dob = searchParams.get("dob");
  const lastname = searchParams.get("lastname");
  const address = searchParams.get("address");
  const sex = searchParams.get("sex");

  const handleDoctorSubmission = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col relative items-center bg-cover min-h-screen min-w-full blob">
      <div className="flex   text-white bg-transparent backdrop-blur-3xl items-center justify-center flex-col shadow-2xl p-2 ring-1 ring-purple-200 rounded-xl mt-auto mb-auto ">
        <div className="flex formbg bg-cover justify-center min-h-32 min-w-full bg-opacity-15 rounded-b-xl shadow-xl flex-col items-center">
          <div className="bg-transparent flex items-center p-2 rounded-2xl shadow-xl flex-col backdrop-blur-sm">
            <h1 className="mt-4 font-bold text-3xl text-gray-800 mb-1">
              Complete Your Profile
            </h1>
            <p className="text-sm font-semibold text-gray-400">
              Tell us more about yourself
            </p>
          </div>
        </div>
        <div className="flex mt-4 items-center justify-center flex-col gap-4">
          <div className="max-w-36 mb-4 rounded-full">
            <FileUpload />
            <p className="mt-2 text-xs text-gray-400 font-medium">
              Upload your picture
            </p>
          </div>
          <form
            className="flex flex-col gap-1 mb-8"
            onSubmit={handleDoctorSubmission}
          >
            <input
              className="mb-4 rounded-xl p-2 pl-2 text-gray-400 font-normal shadow-xl ring-1 ring-gray-200"
              type="text"
              id="specialization"
              placeholder="specialization"
              name="specialization"
            />
            <p className="text-xs text-gray-400 font-medium">About</p>
            <Textarea
              className="min-w-80 flex shadow-xl text-gray-600 flex-col"
              placeholder="Tell the patients about yoursef"
            />
            <button
              className="px-8 py-2 mt-6 shadow-lg hover:bg-gradient-to-bl hover:from-blue-500 hover:to-blue-700 shadow-indigo-400 rounded-xl bg-gradient-to-bl from-blue-400 to-blue-600"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
