source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
reflex init
API_URL=nba-api-three.vercel.app:8000 reflex export --frontend-only
rm -fr public
unzip frontend.zip -d public
rm -f frontend.zip
deactivate