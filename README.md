1. do an npm install.
2. in two separate terminals, run 'node run dev' and 'node run remote' commands.
3. From postman, hit http://localhost:3000/authenticate with a body (sample-{"name":"subhash","userID:subhashchand"})
4. pick the jwt token you got as response and attach it to the Authorization token in format Bearer <jwt>.
5. hit http://localhost:3000/api/riteUserDetailsToFile/
