

function FileUpload() {
	// const upload = async(e) => {
    //   	e.preventDefault();
    //   	const formData = new FormData();
    //   	formData.append('file', e.target.file.files[0]);
        
    // };
    const SERVER_URL = process.env.REACT_APP_SERVER_URL
  
	return(
    	<form method="POST" action={SERVER_URL} encType='multipart/form-data'>
            <input type='file' name='file' />
            <button type='submit'>업로드</button>
        </form>
    );
}

export default FileUpload;