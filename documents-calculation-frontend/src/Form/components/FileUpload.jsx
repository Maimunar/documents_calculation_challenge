import React, { useRef } from "react";

export const FileUpload = ({ selectedFile, setSelectedFile, setError }) => {
  const uploader = useRef();

  const handleClick = () => uploader.current.click();
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const csvRegex = /(\.csv)$/i;
      if (csvRegex.exec(file.name)) setSelectedFile(file);
      else setError("Please Upload a CSV File!");  
    }
    };
  return (
    <div class="csv-file-container">
      <label
        htmlFor="csv-file"
        className={"csv-file-label"}
        onClick={handleClick}
      >
        Upload your (CSV) data file
      </label>
      <input
        type="file"
        className="file-input hidden"
        name="csv-file"
        onChange={handleUpload}
        ref={uploader}
      />
      {selectedFile && <p>Uploaded File: {selectedFile?.name}</p>}
    </div>
  );
};
