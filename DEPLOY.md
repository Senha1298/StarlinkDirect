# Deploy no Heroku

## Pré-requisitos
- Conta no Heroku
- Heroku CLI instalado
- Git configurado

## Passos para Deploy

### 1. Criar app no Heroku
```bash
heroku create your-app-name
```

### 2. Configurar buildpack (opcional - já está no app.json)
```bash
heroku buildpacks:set heroku/nodejs
```

### 3. Configurar variáveis de ambiente
```bash
heroku config:set NODE_ENV=production
heroku config:set NPM_CONFIG_PRODUCTION=false
```

### 4. Deploy
```bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

## Arquivos importantes criados para Heroku:
- `Procfile` - Define o comando para iniciar a aplicação
- `app.json` - Configurações do app para Heroku
- `.nvmrc` - Especifica a versão do Node.js (20)

## Configurações automáticas:
- Build automático dos assets do frontend
- Servidor Express configurado para servir arquivos estáticos
- Porta configurada via variável de ambiente PORT
- Logs de requisições configurados

## Estrutura após build:
- `dist/public/` - Arquivos estáticos do frontend (HTML, CSS, JS, imagens)
- `dist/index.js` - Servidor Express bundled

## URLs depois do deploy:
- Aplicação estará disponível em: `https://your-app-name.herokuapp.com`