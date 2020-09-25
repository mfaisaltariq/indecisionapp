# indecisionapp

Run via Web Pack Dev Server. The bundle.js file will be maintined in browser.

```
npm run dev-server
```


To run using babel cli 

```
babel src/app.js --out-file=public/dist/app.js --presets=env,react --watch
```

Install and Start Live-Server 
```
npm install -g live-server
live-server public
```