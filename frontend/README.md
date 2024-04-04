This is a simple app with a vite.js frontend and python backend, using sqlite. 

Backend routes
| Method | Path                           | Purpose                                          |
| ------ | ------------------------------ | ------------------------------------------------ |
| GET    | /contacts                      | Gets all contacts                                |
| POST   | /create_contact                | Creates a contact                                |
| PATCH  | //update_contact/<int:user_id> | Updates a contact                                |
| DELETE | /delete_contact/<int:user_id>  | Deletes a contact                                |

To run the backend, first, run pip install to install all dependencies. Then run python main.py

to run the front end, run npm i in Bash, the run "npm run dev" to start the application
