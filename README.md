# JCP Advocacia — Landing page unificada

Landing page de captação para **João de Carvalho & Pêgo Advocacia** (OAB/DF 34.220), reunindo os sete serviços de Direito do Trabalhador numa página só.

**Público:** trabalhador de baixa renda, a maioria nunca contratou advogado.
**Objetivo:** captar o caso pelo WhatsApp, com o visitante se identificando sozinho no bloco do serviço dele.

## Como rodar

Site estático, sem build. Basta abrir o `index.html` — ou, para o vídeo funcionar direito:

```bash
python -m http.server 5500
```

E acessar `http://localhost:5500/`.

## Estrutura

```
index.html              página inteira, com os ícones em <symbol> inline
assets/css/style.css    design system completo (tokens da IDV)
assets/js/main.js       autodiagnóstico, FAQ e abertura dos blocos
assets/img/             logo, capa do vídeo
assets/video/           vídeo do advogado (50s, vertical, com legenda)
```

## Design system

Baseado no manual de identidade visual do escritório. O conceito é **autoridade sem intimidação**: navy carrega o peso institucional, o bege carrega a explicação, o dourado aparece pouco e só onde há ação.

- **Navy** `#080D1A` → `#233257` — herói, credenciais, fechamento
- **Papel** `#FAF7F1` / `#F2ECE1` — fundos claros, com grão. Branco puro só dentro de card
- **Dourado** `#F2E0B8` → `#A97F3A` — botões e acentos. Se ocupar mais de 10% da tela, tem dourado demais
- **Cor por serviço** — sete cores de identificação, usadas **só no ícone e no fio superior do card**. Nunca em fundo, botão ou título

Tipografia: `Archivo` em largura 75% nos títulos (substitui a Gotham Condensed, que é paga), `Manrope` no texto, `Caveat` como acento manuscrito (substitui a Gladiola).

Um botão dourado por dobra. Se aparecer um segundo, ele vira fantasma.

## Decisões que fogem do manual

Três desvios conscientes, todos reversíveis:

1. **Títulos dos sete blocos de serviço em caixa baixa.** O manual pede caixa alta em H2, mas são perguntas na voz de uma pessoa e, gritadas sete vezes seguidas, viravam outdoor.
2. **Verde do WhatsApp no botão flutuante.** É o único ponto onde a paleta cede. O público reconhece esse verde antes de ler qualquer palavra.
3. **Chapéus em linguagem comum.** "Reconhecimento de vínculo" virou "Trabalho sem carteira", "Assédio e dano moral" virou "Humilhação no trabalho". A própria copy proíbe juridiquês.

## Pendências antes de publicar

- [ ] **Nome do advogado.** A copy aponta divergência entre "João Filipe" e "Ricardo Pêgo". Está como João Filipe, marcado com comentário no HTML.
- [ ] **Fotos.** Os dois espaços (herói e "sobre") estão reservados com o briefing dentro. A tag `<picture>` pronta está comentada logo acima de cada um.
- [ ] **Carta em primeira pessoa.** O texto da seção "Quem vai cuidar do seu caso" foi escrito pela agência na voz do advogado. **Precisa do aval dele antes de ir ao ar.**
- [ ] **Depoimentos.** Não há nenhum. É a peça que mais falta: para esse público, ver outro trabalhador dizendo que deu certo vale mais que qualquer selo.
- [ ] **E-mail.** `joaofilipemc@gmail.com` num site de escritório derruba percepção de porte.
- [ ] **Política de Privacidade.** O link no aviso legal ainda aponta para `#`.

## Conformidade

Comunicação de caráter informativo, nos termos do **Provimento 205/2021 da OAB**. A copy evita oferta de gratuidade — em vez de "de graça", usa "conversa sem compromisso" e "a gente explica as condições na primeira conversa".

---

Criado pela Agência EmpoderAI.
