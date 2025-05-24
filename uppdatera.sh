#!/bin/bash
echo "🔄 Lägger till ändringar..."
git add .

echo "📝 Skriv in commit-meddelande (eller tryck Enter för 'Uppdaterad kalender'):"
read message
if [ -z "$message" ]; then
  message="Uppdaterad kalender"
fi

echo "✅ Committar meddelande: '$message'"
git commit -m "$message"

echo "🚀 Pushar till GitHub..."
git push

echo "🛠️ Bygger kalendern..."
npm run build

echo "🌍 Publicerar till GitHub Pages..."
npm run deploy

echo "✅ Färdigt! Kolla: https://DITT_ANVÄNDARNAMN.github.io/kalender/"
