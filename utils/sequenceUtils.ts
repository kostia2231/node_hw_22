// `generateFibonacci`, которая генерирует последовательность Фибоначчи до указанного числа.
// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах.

export const generateFibonacci = (n: number): number[] => {
  const fib: number[] = [0, 1];

  while (true) {
    const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
    if (nextFib > n) {
      break;
    }
    fib.push(nextFib);
  }

  return fib;
};

export const generatePrimeNumbers = (n: number): number[] => {
  if (n < 2) return [];

  const primes: boolean[] = new Array(n + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  const primeNumbers: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
};
