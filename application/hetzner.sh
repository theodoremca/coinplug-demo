cd ~/
cd gmb-scrapper
nvm use 16
git stash
git pull -f
cd application
npm i
npm run build
pm2 start lib/app.js; 
pm2 ls






nvm use 16
cd gmb-scrapper
cd application
pm2 start lib/app.js; 
pm2 ls