import axios from "axios";
import fileDownload from "js-file-download";
import React from "react";
import { FaFileAlt } from "react-icons/fa";

type FilePreviewProps = {
  file: {
    url: string;
    fileName: string;
  };
};

function FilePreviewCard({ file }: FilePreviewProps) {
  const handleDownload = (url: string, filename: string) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        // Assuming `filename` should be a string, you might need to adjust how you generate it.
        fileDownload(res.data, `${filename}.pdf`); // Example: appending .pdf if files are PDFs
      })
      .catch((error) => {
        console.error("Download error:", error);
        // Optionally, implement error handling (e.g., showing a notification)
      });
  };

  return (
    <div
      className="flex flex-col justify-center items-center p-4 border-main-purple border-solid border-2 rounded-2xl group hover:bg-main-red cursor-pointer transition-all duration-100 ease-in"
      onClick={() => handleDownload(file.url, `${file.fileName}`)} // Modified to use an arrow function
    >
      <FaFileAlt
        size={"100%"}
        className="w-10 h-10 text-main-purple group-hover:text-white transition-all duration-100 ease-in"
      />
      <h3
        className="text-main-purple text-xs lg:text-sm mt-2 font-bold group-hover:text-white transition-all duration-100 ease-in
        text-center"
      >
        {file.fileName}
      </h3>
    </div>
  );
}

export default FilePreviewCard;
