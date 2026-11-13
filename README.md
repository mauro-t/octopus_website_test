# Octopus Website - ENG

Demo built for the **Product Engineer (Web)** technical assessment. The project recreates two responsive pages of the Octopus website based on the provided Figma designs.

- **Homepage:** `/`
- **Product page:** `/products/countertop-blender`
- **Live demo:** https://octopuswebsitetest.vercel.app
- **Repository:** https://github.com/mauro-t/octopus_website_test

## Tech Stack and Getting Started

The project uses **Next.js (App Router)**, **React**, and **TypeScript**, with **Tailwind CSS** for styling, **Base UI** for selected interactive components, and **Motion** for animations. The project uses **Vite+** as its toolchain and **pnpm** as its package manager.

Node.js and the Vite+ `vp` CLI are required to run the following commands.

Install dependencies and start the development server:

```bash
vp install
vp run dev
```

Build and start the production server:

```bash
vp run build
vp run start
```

Remote placeholder media requires an internet connection to `placehold.co` (images) and `placeholdervideo.dev` (videos).

## Architecture and Components

Content is defined in TypeScript modules, kept separate from the markup, and used to build the page sections. Components are organized by responsibility:

- **UI:** Reusable interface components.
- **Layout:** Shared structural components used across pages.
- **Pages:** Page-specific sections and components.

Typography is handled through Tailwind utilities and shared variables, without introducing dedicated typography components for the current limited set of use cases.

## Assumptions and Trade-offs

### TypeScript Data

The brief suggests using local JSON files or a mock API for content. For this demo, I chose **TypeScript modules** instead. This provides type safety and allows the use of helper functions, such as those generating placeholder URLs, while keeping content and rendering separate.

The data model is intentionally simple and tailored to the sections included in the design. It is not intended to represent the full flexibility of a CMS. For example, category grids have **three layout variants**, each designed for **exactly three products**. Supporting a variable number of items would require more flexible layout rules.

### Differences Between the Brief and Figma

During development, I treated **Figma as the primary reference for visual accuracy**. As a result, some implementation details differ from the functional requirements described in the brief:

| Aspect           | Brief Requirements          | Figma-Based Implementation           |
| ---------------- | --------------------------- | ------------------------------------ |
| Navigation       | Collapsed menu below 1200px | Collapsed menu below 810px           |
| Desktop carousel | Arrows and pagination dots  | Arrows only, without pagination dots |
| Downloads        | Expandable section          | Static row with a link to the manual |

### Media and Content

When assets were missing from the provided folder or could not be exported from Figma, I used placeholders with appropriate aspect ratios. Media selection for different viewport sizes is still handled by the relevant components.

Some icons were replaced with simplified HTML elements, while others were omitted because they were not available among the exportable assets.

Some content structures are intentionally static or simplified. For example, categories could be modeled as richer entities, navigation could be generated from the available categories, and some editorial content could use rich text fields. Similarly, certain section titles and descriptions could be derived from product data rather than defined separately.

## Automated Testing

Component tests use **Vitest Browser** with `vitest-browser-react` and **Chromium** through the Playwright provider. The tests load the project's actual styles, allowing component behavior to be verified within the rendered layout.

After installing dependencies, install the browser before running the tests for the first time:

```bash
vp exec playwright install chromium
```

Run all tests:

```bash
vp run test
```

Run the test suites separately:

```bash
vp run test:components
vp run test:e2e
```

**Test coverage:**

- **Accordion:** Verifies that specifications can be expanded and collapsed by clicking, as well as opened and closed using the keyboard.
- **Carousel:** Verifies navigation using arrow buttons, disabled states at the beginning and end, and automatic hiding of the arrows when all products fit within the available space.
- **End-to-end:** Verifies that users can navigate from the homepage to the Countertop Blender product page.

## Performance and Accessibility

**Mobile Lighthouse reports**, generated on **November 13, 2026**, against the deployed demo, are available in [`reports/`](./reports/).

| Category       | Homepage | Product Page |
| -------------- | -------: | -----------: |
| Performance    |       95 |           96 |
| Accessibility  |      100 |          100 |
| Best Practices |      100 |          100 |
| SEO            |       91 |          100 |

Full reports: [Homepage](./reports/lighthouse-home-mobile.json) · [Product page](./reports/lighthouse-product-mobile.json).

I also performed manual checks of **keyboard navigation**, as well as **layout and interactions**, using Chrome, Firefox, and Safari on desktop, and Chrome and Safari on iPhone.

## Potential Improvements

The main areas I would focus on with more time are:

- **Content modeling:** Introduce richer product and category entities, derive content from shared data wherever possible, and support rich text and more flexible editorial configurations in preparation for a potential CMS integration.
- **Grids and components:** Support variable numbers of products, introduce reusable typography components, and consider moving currently page-specific components into the shared UI layer as additional use cases emerge.
- **CMS integration and caching:** If content were sourced from a CMS, evaluate Next.js data fetching and caching APIs, including **Cache Components** and appropriate cache invalidation strategies based on how frequently content changes.

## Use of AI Tools

During development, I used **Codex via OpenRouter** for specific tasks, including assistance with markup creation, mock data generation, reviewing interactive behaviors (such as keyboard navigation in the carousel), and implementing and verifying tests.

AI-generated solutions were reviewed and adapted where necessary. One example is the **video component**: Codex initially suggested a JavaScript-based approach to selecting video sources at different breakpoints, including updating the source on resize. I chose to use native HTML `<source>` elements with the `media` attribute instead, removing the need for dynamic source management.

The trade-off is that resizing the viewport does not automatically switch the video after the initial source selection. However, this keeps the component simpler and avoids triggering additional video downloads during resizing.

Architectural decisions and final implementation choices remained under my direct control throughout development.

This README was written with assistance from ChatGPT.

Demo realizzata per il technical test **Product Engineer (Web)**. Il progetto riproduce due pagine responsive del sito Octopus sulla base dei layout Figma forniti.

- **Homepage:** `/`
- **Pagina prodotto:** `/products/countertop-blender`
- **Demo pubblica:** https://octopuswebsitetest.vercel.app
- **Repository:** https://github.com/mauro-t/octopus_website_test

# Octopus Website - ITA

## Stack e avvio

Il progetto utilizza **Next.js (App Router)**, **React** e **TypeScript**, con **Tailwind CSS** per gli stili, **Base UI** per alcuni componenti interattivi e **Motion** per le animazioni. La toolchain utilizzata è **Vite+**, con **pnpm** come package manager.

Per utilizzare i comandi seguenti è necessario disporre di Node.js e del CLI `vp` di Vite+.

Installazione delle dipendenze e avvio in sviluppo:

```bash
vp install
vp run dev
```

Build e avvio in produzione:

```bash
vp run build
vp run start
```

I media placeholder remoti richiedono una connessione a `placehold.co` (immagini) e `placeholdervideo.dev` (video).

## Architettura e componenti

I contenuti sono definiti in moduli TypeScript separati dal markup e utilizzati per costruire le sezioni delle pagine. I componenti sono organizzati per responsabilità:

- **UI:** elementi di interfaccia riutilizzabili.
- **Layout:** componenti strutturali condivisi tra le pagine.
- **Pages:** sezioni e componenti specifici delle singole pagine.

La tipografia è gestita tramite utility Tailwind e variabili condivise, senza introdurre componenti tipografici dedicati per una casistica attualmente limitata.

## Assunzioni e trade-off

### Dati TypeScript

Il brief suggerisce contenuti in JSON locale o tramite mock API; in questa demo sono stati utilizzati **moduli TypeScript**. La scelta permette di definire i dati con il supporto dei tipi e di helper, ad esempio per gli URL dei placeholder, mantenendo separati contenuti e rendering.

Il modello è volutamente semplice e costruito intorno alle sezioni previste dal design. Non è pensato per rappresentare tutte le possibilità di un CMS. Ad esempio, le griglie di categoria hanno **tre varianti di layout**, ciascuna pensata per **tre prodotti**: un numero variabile di elementi richiederebbe regole di composizione più flessibili.

### Differenze tra brief e Figma

Durante lo sviluppo è stato considerato **Figma come riferimento principale per il risultato visivo**. Le seguenti implementazioni differiscono quindi da alcuni requisiti funzionali del brief:

| Aspetto          | Indicazione del brief           | Implementazione basata su Figma  |
| ---------------- | ------------------------------- | -------------------------------- |
| Navigazione      | Menu collassato sotto 1200 px   | Menu collassato sotto 810 px     |
| Carousel desktop | Frecce e pallini di paginazione | Frecce, senza pallini            |
| Downloads        | Sezione espandibile             | Riga statica con link al manuale |

### Media e contenuti

Quando gli asset non erano presenti nella cartella fornita o non erano esportabili da Figma, sono stati utilizzati placeholder con proporzioni adeguate. La selezione dei media per le diverse dimensioni di viewport è comunque gestita nei relativi componenti.

Alcune icone sono state sostituite con elementi HTML semplificati; altre non sono state riprodotte perché non disponibili tra gli asset esportabili.

Alcune informazioni sono volutamente statiche o semplificate: ad esempio, le categorie potrebbero essere entità più ricche, la navigazione potrebbe derivare dalle categorie disponibili e parti dei contenuti editoriali potrebbero utilizzare campi rich text. Analogamente, alcuni titoli e descrizioni di sezione potrebbero derivare dai dati dei prodotti invece di essere inseriti separatamente.

## Test automatici

I test di componente utilizzano **Vitest Browser** con `vitest-browser-react` e **Chromium** tramite il provider Playwright. Vengono caricati gli stili effettivi del progetto, così da verificare anche il comportamento dei componenti nel layout reale.

Dopo aver installato le dipendenze, al primo avvio installare il browser:

```bash
vp exec playwright install chromium
```

Per eseguire tutti i test:

```bash
vp run test
```

Per eseguire separatamente le due suite:

```bash
vp run test:components
vp run test:e2e
```

**Scenari coperti:**

- **Accordion:** mostra e nasconde le specifiche al click e permette apertura e chiusura da tastiera.
- **Carousel:** verifica la navigazione tramite frecce, lo stato disabilitato agli estremi e la scomparsa delle frecce quando tutti i prodotti entrano nello spazio disponibile.
- **End-to-end:** verifica che dalla Homepage sia possibile aprire la pagina del Countertop Blender.

## Performance e accessibilità

I report **Lighthouse mobile**, eseguiti il **13 novembre 2026** sulla demo pubblicata, sono disponibili in [`reports/`](./reports/).

| Categoria      | Homepage | Pagina prodotto |
| -------------- | -------: | --------------: |
| Performance    |       95 |              96 |
| Accessibility  |      100 |             100 |
| Best Practices |      100 |             100 |
| SEO            |       91 |             100 |

Report completi: [Homepage](./reports/lighthouse-home-mobile.json) · [Pagina prodotto](./reports/lighthouse-product-mobile.json).

Sono state inoltre effettuate verifiche manuali della **navigazione da tastiera**, nonché del **layout e delle interazioni** su Chrome, Firefox e Safari desktop e su Chrome e Safari per iPhone.

## Possibili evoluzioni

Gli interventi principali riguarderebbero:

- **Modello dei contenuti:** definire entità più ricche per prodotti e categorie, derivare dove possibile i contenuti da dati condivisi e supportare rich text e configurazioni editoriali più articolate in vista di un CMS.
- **Griglie e componenti:** gestire quantità variabili di prodotti, aggiungere componenti tipografici riutilizzabili e valutare l'estrazione in UI dei componenti oggi specifici della pagina prodotto, quando emergano ulteriori casi d'uso.
- **Integrazione CMS e caching:** se i contenuti provenissero da un CMS, valutare le API di data fetching e caching di Next.js, inclusi **Cache Components** e le relative strategie di invalidazione in base alla frequenza di aggiornamento.

## Utilizzo degli strumenti AI

Durante lo sviluppo ho utilizzato **Codex tramite OpenRouter** per attività circoscritte, tra cui supporto alla creazione di markup, generazione dei dati mock, revisione di alcuni comportamenti interattivi (ad esempio la navigazione da tastiera del carousel) e implementazione e verifica dei test.

Le soluzioni proposte sono state valutate e, dove necessario, adattate. Un esempio è il **componente video**: Codex aveva proposto una gestione JavaScript delle sorgenti per breakpoint, con aggiornamento anche al resize. Ho preferito usare gli elementi HTML `<source>` con attributo `media`, eliminando la logica di sostituzione dinamica. Il trade-off è che, dopo la selezione iniziale della sorgente, un ridimensionamento della viewport non comporta automaticamente il cambio del video; in compenso, il componente rimane più semplice e non forza nuovi caricamenti durante il resize.

Le decisioni architetturali e le scelte finali di implementazione sono state mantenute sotto controllo diretto durante lo sviluppo.

Il Readme è stato generato con il supporto di chatgpt.
