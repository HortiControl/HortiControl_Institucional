// src/utils/dadosMock.js

export const gerarDadosVendasDiarias = () => {
  const dados = [];
  const hoje = new Date();
  for (let i = 29; i >= 0; i--) {
    const data = new Date();
    data.setDate(hoje.getDate() - i);
    const dataStr = `${data.getDate()}/${data.getMonth() + 1}`;
    const idx = i;
    const mj4Base = 1800 + Math.sin(idx * 0.5) * 400 + (idx % 7) * 80;
    const mj2Base = 1200 + Math.cos(idx * 0.7) * 300 + (idx % 5) * 60;
    const tropicalBase = 800 + Math.sin(idx * 0.9) * 250 + (idx % 6) * 40;

    dados.push({
      data: dataStr,
      MJ4: Math.round(mj4Base),
      MJ2: Math.round(mj2Base),
      Tropical: Math.round(tropicalBase),
    });
  }
  return dados;
};

export const obterTotaisPorMercado = (dadosDiarios) => {
  const totais = { MJ4: 0, MJ2: 0, Tropical: 0 };
  dadosDiarios.forEach(dia => {
    totais.MJ4 += dia.MJ4;
    totais.MJ2 += dia.MJ2;
    totais.Tropical += dia.Tropical;
  });
  return [
    { nome: 'MJ4', vendas: totais.MJ4 },
    { nome: 'MJ2', vendas: totais.MJ2 },
    { nome: 'Tropical', vendas: totais.Tropical },
  ];
};

export const distribuicaoProdutos = [
  { nome: 'Pre-Lavado', valor: 305, cor: '#10b981' },
  { nome: 'Pré-Lavado', valor: 25, cor: '#f59e0b' },
];

export const topProdutos = [
  { nome: 'Alface Crespa', lucro: 2250.0 },
  { nome: 'Alface Lisa', lucro: 270.0 },
  { nome: 'Rúcula', lucro: 225.0 },
];

export const alertasVencimento = [
  { mercado: 'Tropical', diasAtraso: 429, valor: 439.0 },
];