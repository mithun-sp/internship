import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <Link
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Profile
          </Link>
        </li>
        <li class="mr-2">
          <Link
            href="#"
            class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
            aria-current="page"
          >
            Dashboard
          </Link>
        </li>
        <li class="mr-2">
          <Link
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Settings
          </Link>
        </li>
        <li class="mr-2">
          <Link
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Contacts
          </Link>
        </li>
        <li>
          <Link class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
            Disabled
          </Link>
        </li>
      </ul>
    </div>

    // <div class="flex flex-row overflow-x-auto overflow-y-hidden border-rounded border-gray-200 h-[60px]  mt-[32px] md:ml-[30%] md:mr-[12%] ">
    //   <div class="mr-2 flex-none">
    //     <Link class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center">
    //       Course Landing Page
    //     </Link>
    //   </div>
    //   <div class="mr-2 flex-none">
    //     <Link
    //       href="#"
    //       class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
    //     >
    //       Batches
    //     </Link>
    //   </div>
    //   <div class="mr-2 flex-none">
    //     <Link
    //       href="#"
    //       class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
    //     >
    //       Intended Learners
    //     </Link>
    //   </div>
    //   <div class="mr-2 flex-none">
    //     <Link
    //       href="#"
    //       class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
    //     >
    //       Curriculum
    //     </Link>
    //   </div>
    //   <div class="mr-2 flex-none">
    //     <Link
    //       href="#"
    //       class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
    //     >
    //       Course Requirement
    //     </Link>
    //   </div>
    //   <div class="mr-2 flex-none">
    //     <Link
    //       href="#"
    //       class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
    //     >
    //       Curriculum
    //     </Link>
    //   </div>
    //   <div class="mr-2 flex-none">
    //     <Link
    //       href="#"
    //       class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
    //     >
    //       Curriculum
    //     </Link>
    //   </div>
    //   <div class="mr-2 flex-none">
    //     <Link
    //       href="#"
    //       class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
    //     >
    //       Curriculum
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Nav;
