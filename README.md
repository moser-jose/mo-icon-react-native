## @mosmmy/mo-icon-react-native

Biblioteca de ícones para React Native baseada em SVG, com suporte a múltiplas variantes (bold, bold-duotone, broken, outline, outline-duotone). Os ícones são gerados a partir de arquivos `.svg` e renderizados via `react-native-svg`.

### Instalação

```bash
npm install @mosmmy/mo-icon-react-native react-native-svg
# ou
yarn add @mosmmy/mo-icon-react-native react-native-svg
```

> Observação: `react` (>=17), `react-native` (>=0.71.0) e `react-native-svg` (>=13) são peerDependencies.

### Uso básico

```tsx
import React from "react";
import { View } from "react-native";
import { Icon } from "@mosmmy/mo-icon-react-native";

export default function Example() {
  return (
    <View>
      <Icon name="bell" type="outline" size={24} color="#333" />
      <Icon name="bell-off" type="bold" size={32} color="#E11D48" />
    </View>
  );
}
```

#### Variantes disponíveis

- bold
- bold-duotone
- broken
- outline
- outline-duotone

#### Props do componente `Icon`

- `name` (string): nome do ícone (veja a lista gerada em `src/icons/icon-names.json`).
- `type` (opcional): variante do ícone; padrão: `"outline"`.
- `size` (opcional): tamanho em px; padrão: `24`.
- `color` (opcional): cor (stroke/fill) em HEX; padrão: `#000`.
- Demais props são repassados ao `SvgXml` (de `react-native-svg`).

Para maior tipagem das variantes, você pode usar o tipo `IconType` exportado:

```ts
import type { IconType } from "@mosmmy/mo-icon-react-native";

const variant: IconType = "outline";
```

### Estrutura do projeto

- `src/icons/img/<variant>/...`: SVGs de entrada (organize como preferir; ex.: `notifications/bell.svg`).
- `src/icons/svg/<variant>/...`: componentes TSX gerados a partir dos SVGs.
- `src/icons/registry.ts`: registro gerado que mapeia `{ [variant]: { [name]: Component } }`.
- `src/icons/types.ts`: tipos gerados a partir dos nomes encontrados.
- `src/icons/icon-names.json`: JSON com os nomes agrupados por variante.
- `src/icons/react-native-icon.tsx`: componente `Icon` que resolve e renderiza o componente correspondente.

### Gerando ícones a partir dos SVGs

1. Adicione/atualize seus arquivos `.svg` em `src/icons/img/<variant>/...`.

2. Execute o script de geração:

```bash
npm run generate:icons
```

O script:

- Otimiza os SVGs via SVGO;
- Gera componentes TSX que usam `SvgXml` e aceitam `size` e `color`;
- Atualiza `registry.ts`, `types.ts` e `icon-names.json` com base no que foi encontrado em `img/`.

### Boas práticas e observações

- Use nomes de arquivos em kebab-case (ex.: `bell-bing.svg`). Esses nomes serão utilizados como `name` no `Icon`.
- Caso adicione novas variantes, inclua os SVGs em `src/icons/img/<sua-variant>/...` e rode o gerador.
- Se você consumir a lib diretamente do repositório (sem build), garanta que os arquivos gerados estão atualizados.

### Licença

ISC
