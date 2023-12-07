##Sobre
Este é um aplicativo mobile, clone do aplicativo da uber. 
Foi construido com React Native JS `~~(o correto)~~` e estilos, tailwind.

Foram consumidas algumas APIs da google: Places API, Directions API e Distance Matrix API.
Para estilo, tailwind.

## Execução
1. Instalação dos pacotes
```bash
npm install
```

2. Criação da conta no google cloud apis
   a. ativar places API, Directions API, Distance Matrix API e Maps SDK for Android.
   b. Copiar a chave e colar no arquivo .env no seguinte formato:
   ```bash
   GOOGLE_MAPS_APIKEY=~suachaveaqui~
   ```
3. execute com o expo
   ```
   npx expo start
   ```


>obs: poderia deixar com uma key 'publica'? sim. mas nao vou arriscar ser cobrado por nem um centavo.
