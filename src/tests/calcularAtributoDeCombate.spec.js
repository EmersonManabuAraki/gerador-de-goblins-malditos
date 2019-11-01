import calcularAtributoDeCombate from '../data/calcularAtributoDeCombate';
import tabelaDeAtributos from '../data/tabelaDeAtributos';

describe('calcularAtributoDeCombate', () => {
  const { coloracao } = tabelaDeAtributos;
  const { ocupacao } = tabelaDeAtributos;

  Object.keys(coloracao).forEach((cor) => {
    describe(`Quando a cor é ${cor}`, () => {
      Object.keys(ocupacao).forEach((cargo) => {
        describe(`Quando a ocupação é ${cargo}`, () => {
          const ocupacaoAtual = tabelaDeAtributos.ocupacao[cargo];
          const coloracaoAtual = tabelaDeAtributos.coloracao[cor];

          it('retorna a soma dos combates', () => {
            const resultado = ocupacaoAtual.combate + coloracaoAtual.combate;

            expect(calcularAtributoDeCombate(cor, cargo)).toBe(resultado);
          });
        });
      });
    });
  });
});