This is a simple monorepo app with a vite.js frontend and python backend, using sqlite for the db. 

Backend routes
| Method | Path                           | Purpose                                          |
| ------ | ------------------------------ | ------------------------------------------------ |
| GET    | /contacts                      | Gets all contacts                                |
| POST   | /create_contact                | Creates a contact                                |
| PATCH  | //update_contact/<int:user_id> | Updates a contact                                |
| DELETE | /delete_contact/<int:user_id>  | Deletes a contact                                |

To run the backend, first, run pip install Flask Flask-SQLAlchemy flask-cors to install all dependencies. Then run python main.py

to run the front end, run npm i to install all dependencies, then run "npm run dev" to start the application
