# JCP Advocacia — Landing page unificada

Landing page de captação para **João de Carvalho & Pêgo Advocacia**, escritório de Direito do Trabalhador no Setor Leste, Cidade Estrutural, Brasília-DF.

**Público:** morador da Estrutural. **Voz:** segunda pessoa, frase curta, uma ideia por frase.
**Construída sobre a copy v2** (`jcp-copy-v2-conforme-plano.md`, fora do repositório).

## Como rodar

Site estático, sem build. Para o vídeo funcionar, sirva por HTTP:

```bash
python -m http.server 5500
```

E acesse `http://localhost:5500/`.

## Estrutura

```
index.html              página inteira, com os ícones em <symbol> inline
assets/css/style.css    design system (tokens da IDV)
assets/js/main.js       triador, acordeões, barra de WhatsApp e variantes de herói
assets/img/             logo e capa do vídeo
assets/video/           vídeo do advogado (vertical, legendado, faststart aplicado)
```

## As quatro mecânicas

**1. Triador multi-seleção.** O visitante marca quantos cartões quiser. O texto de resultado muda com a contagem e o botão monta uma mensagem de WhatsApp com os itens marcados: `Oi! Marquei no site: acerto que veio errado, hora extra que não pagaram. Queria uma avaliação.` O botão do fechamento espelha a mesma mensagem.

**2. Sete áreas em acordeão, fechadas por padrão.** Sempre visível: pergunta-título, uma frase e os números. O resto abre ao toque. Marcar um cartão no triador já abre a área correspondente.

**3. Barra fixa de WhatsApp com mensagem por contexto.** Um `IntersectionObserver` acompanha qual área está no meio da tela e troca a mensagem pré-pronta da barra. Se o visitante marcou cartões, a mensagem montada tem prioridade.

**4. Variantes de herói por parâmetro.** `?caso=acidente`, `?caso=sem-carteira`, `?caso=hora-extra`, `?caso=acerto` e `?caso=inss` trocam o título e o parágrafo do herói, já abrem a área correspondente e ajustam o botão principal. Serve para casar a página com o anúncio de origem.

## Design system

Conceito: **autoridade sem intimidação**. Navy carrega o peso institucional, o bege carrega a explicação, o dourado aparece pouco e só onde há ação.

- **Navy** `#080D1A` → `#233257` — herói, vídeo, travas, equipe, fechamento
- **Papel** `#FAF7F1` / `#F2ECE1` — fundos claros, com grão. Branco puro só dentro de card
- **Dourado** `#F2E0B8` → `#A97F3A` — botões e acentos
- **Cor por área** — sete cores usadas **só no ícone e no fio superior do card**

Tipografia: `Archivo` em largura 75% nos títulos (substitui a Gotham Condensed, paga), `Manrope` no texto, `Caveat` na assinatura (substitui a Gladiola).

## Desvios conscientes do manual

1. **Verde do WhatsApp na barra fixa.** Único ponto onde a paleta cede. O público reconhece esse verde antes de ler qualquer palavra.
2. **Títulos das áreas em caixa baixa.** São perguntas na voz de uma pessoa; em caixa alta sete vezes seguidas viravam outdoor.

## Pendências antes de publicar

Do cliente:

- [ ] **Fotos.** Todos os espaços estão reservados com o briefing dentro: herói, Dr. João de corpo inteiro, os três da equipe e a fachada. A tag `<picture>` pronta está comentada no herói.
- [ ] **Frase de Laura Lopes e Yasmim Estevam.** Os cartões estão sem frase, para não inventar texto na voz delas.
- [ ] **Horário de atendimento** e se pode ir sem marcar.
- [ ] **Duas perguntas do FAQ** que dependem do cliente ficaram de fora: "posso ir sem marcar" e "atendem quem já tem processo com outro advogado".
- [ ] **E-mail profissional** para o rodapé.
- [ ] **Política de Privacidade** — o link ainda aponta para `#`.

Do conteúdo:

- [ ] **Vídeo.** O arquivo no ar é o antigo, sobre doença e acidente. O roteiro novo do bloco 4 ainda não foi gravado.
- [ ] **Áudio do recado.** A copy pede uma versão em mensagem de voz, com o rótulo "Ouvir o recado do Dr. João · 45s". Não existe arquivo ainda.
- [ ] **Carta em primeira pessoa.** Texto escrito pela agência na voz do Dr. João. Precisa do aval dele.
- [ ] **Depoimentos.** Não há nenhum. É a peça que mais falta para esse público.

## Conformidade

Provimento 205/2021 da OAB. Nenhuma linha traz promessa de resultado, percentual de êxito, valor de causa, oferta de gratuidade, superlativo ou depoimento com caso concreto. A prova usada é toda permitida: tempo de atuação, número de famílias, OAB de cada advogado, TV Justiça como fato passado, docência e endereço.

Removidos na v2: menção à Rádio Estrutural, "atende o Brasil inteiro" no herói e no rodapé, e a OAB/DF 34.220 como selo da firma (é a OAB do Ricardo Pêgo e aparece no cartão dele).

---

Criado pela Agência EmpoderAI.
