# collab-repo
my collaboration with team

## Notes API (simple Node + Express project)

### Packages
- **express** – web server and routing
- **dotenv** – loads settings (like `PORT`) from a `.env` file
- **dayjs** – formats dates
- **nodemon** (dev) – restarts the server when you save a file

### Run it
```bash
npm install
cp .env.example .env   # only needed the first time
npm run dev            # or: npm start
```

### Try it
```bash
Open http://localhost:3000 in your browser for the web UI, or:
curl http://localhost:3000/health
curl -X POST http://localhost:3000/notes -H "Content-Type: application/json" -d '{"text":"my first note"}'
curl http://localhost:3000/notes
curl http://localhost:3000/notes/1
curl -X DELETE http://localhost:3000/notes/1
```
