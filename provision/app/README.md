# CertiIO

### Generic file and object storage system

CertiIO is an object storage utility designed to be a simpler/compatible alternative to _MinIO_ and _S3_. All functions are handled through HTTP requests, with data being stored using **PostgreSQL**. It features property binding and metadata storing.

## Usage

### Endpoints

#### Creating a file (POST /file)

Create a file by making a POST request to '/file', with form data specifying the files and a properties JSON object which will later be stored as a related object to that file. The API will automatically scan the file and return these default properties, with the client being able to manipulate all of them except id:

`id, fileSize, fileName, fileType, fileIcon, filePath`

- id is a uniquely generated UUID.
- fileSize is the size of the file in bytes.
- fileName is the name of the file (e.g. image.png).
- fileType is the mimetype of the file, not to be confused with the file's extension (e.g. application/pdf)
- fileIcon is the icon selected for a specific mimetype.
- filePath is the path where the file is stored. All files are stored in a /storage folder by default.

#### Deleting a file (DELETE /file/:fileId)

File deletion is handled by a DELETE request for the file's UUID (/file/fileId).

#### Updating a file (PUT /file/:fileId)

File updating is only allowed if you are updating its properties, never the file itself. It is handled by sending a PUT request to /file/fileId, with the form data being a properties object with everything you want to change.

#### Listing all files (POST /files)

You can list all files by sending a POST request to /files, or you can specify properties to search for in the form data as JSON. It returns a File Entity Array.

#### Getting a file (GET /file/:fileId)

To get a file and its properties, send a GET request to /file/fileId. The return type is a File Entity.
