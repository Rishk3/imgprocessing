import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDispatch } from "react-redux";

export default function Upload() {
  const dispatch = useDispatch();
  const hiddenFileInput = useRef(null);
  const history = useHistory();
  // Programatically click the hidden file input element
  // when the Button component is clicked
  function uploadImgClick(event) {
    hiddenFileInput.current.click();
  }
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    dispatch({ type: "ADD_IMG", payload: { imgToProcess: fileUploaded } });
    history.push("pro");
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={uploadImgClick}
        color="default"
        className="upload_btn"
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <input
        type="file"
        accept="image/*"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
