# Statement of purpose generation tool

This is a tool which takes input from user in the form and generates email response with all the inputs along with that it will send the pdf attachment which contains a statement of purpose generated using provided details.

## Project links
[SOP Tool Frontend](https://github.com/deekshithmd/sop-generation-tool)<br/>
[SOP Tool Backend](https://github.com/deekshithmd/sop-tool-backend)

## Steps to run the application in local environment
### Using complete local environment
  1. Clone the frontend repo ```git clone https://github.com/deekshithmd/sop-generation-tool.git```
  2. Clone the backend repo ```git clone https://github.com/deekshithmd/sop-tool-backend.git```
  3. Run ```npm install``` on both repos
  4. Run ```npm run dev``` on backend repo it will run the server at port 5000
  5. Replace API_ENDPOINT in helpers folder of frontend repo with ```http://localhost:5000/``` and then run ```npm start``` it will run the application in port 3000
  6. User can provide all the data and click submit, now email will be sent to user along with the pdf attachment
  7. If user not filled all fileds form will scroll to top and shows error to fill the data
  8. If user clicks on clear form all formData will be cleared.

### Using deployed backend and local frontend
  1. Clone the frontend repo ```git clone https://github.com/deekshithmd/sop-generation-tool.git```
  2. run ```npm install```
  3. run ```npm start``` it will run the application in port 3000
  4. Here frontend will use deployed backend to provide backend functionalities
  6. User can provide all the data and click submit, now email will be sent to user along with the pdf attachment
  7. If user not filled all fileds form will scroll to top and shows error to fill the data
  8. If user clicks on clear form all formData will be cleared.
