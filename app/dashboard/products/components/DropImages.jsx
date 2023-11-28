import { useState, useEffect } from "react";
import { useDropzone } from 'react-dropzone';
import Tooltip from "../../components/Tooltip.jsx"


function Previews({setImages}) {
  const imageUpload = "http://127.0.0.1:1337/api/upload/"
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      setImages([files])
    }
  });


  const deleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)));
    return Math.round(100 * (bytes / Math.pow(k, i))) / 100 + ' ' + sizes[i];
  }

  const thumbs = files.map((file, index) => (
    <div key={file.name} className="flex flex-col gap-2">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-4 justify-between ">
          <img
            src={file.preview}
            className="w-20 h-auto"
            // Revoke data uri after image is loaded
            onLoad={() => { URL.revokeObjectURL(file.preview) }}
          />
          <div className="self-center flex flex-col gap-1 text-sm ">
            <p className="font-bold max-w-[90%]">{file.name}</p>
            <div>{new Date(file.lastModified).toLocaleString()}</div>
            <div>{formatBytes(file.size)}</div>
          </div>
        </div>
        <div className="self-center">
          {/* SVG delete icon with onClick handler */}
        	<Tooltip content="Delete this image">
	          <svg
	            xmlns="http://www.w3.org/2000/svg"
	            viewBox="0 0 24 24"
	            fill="currentColor"
	            className="w-6 h-6 cursor-pointer text-red-500"
	            onClick={() => deleteFile(index)}
	          >
	            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
	          </svg>
          </Tooltip>
        </div>
      </div>
      <hr />
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container w-1/2">
      <div {...getRootProps({ className: 'dropzone' })} className="border border-dashed border-4 border-light-blue-500 w-full h-[250px] flex flex-col justify-center align-center text-center gap-2">
        <input {...getInputProps()} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 relative left-[43%]">
          <path fillRule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
        </svg>
        <h2 className="text-xl font-bold">Drag and drop your files here </h2>
        <p className="text-sm"> files supported <span className="font-bold" >JPG</span> <span className="font-bold" >PNG</span> <span className="font-bold">WEB</span> <span></span></p>
        <p className="text-md">or</p>
        <button className="flex flex-row text-center items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-5 py-2 text-white font-bold w-1/4 relative left-[38%]">Browse files</button>
      </div>
      <aside className="flex flex-col gap-3 w-full p-4">
        {thumbs}
      </aside>
     
    </section>
  );
}

export default Previews;
