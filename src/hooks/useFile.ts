import { useEffect, useState } from "react";

export function UseFile() {
  const [file, setFile] = useState({
    selectedFile: "",
  });
  const [upload, setUpload] = useState(false);

  const onChange = (evt: any) => {
    setFile({ selectedFile: evt.target.files[0].name });
  };

  useEffect(() => {
    const formData = new FormData();
    formData.append("resume file", file.selectedFile);
    if (!file.selectedFile) {
      setUpload(false);
      return;
    } else {
      setUpload(true);
    }
  }, [file]);

  return {
    file,
    setFile,
    upload,
    setUpload,
    onChange,
  };
}
