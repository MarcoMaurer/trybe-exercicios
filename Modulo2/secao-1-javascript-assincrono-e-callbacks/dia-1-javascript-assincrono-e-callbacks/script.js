// EXERCICIO 01:

// const getPlanet = () => {
//     setTimeout(() => {
//         const mars = {
//             name: 'Mars',
//             distanceFromSun: {
//               value: 227900000,
//               measurementUnit: 'kilometers',
//             },
//           };
//           console.log('Returned planet: ', mars);
//     }, 4000);
    
//   };
  
//   getPlanet(); // Imprime Marte depois de 4 segundos

// EXERCICIO 02:

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const sendMarsTemperature = () => {
//     const temperaturaAtual = getMarsTemperature();
//     setTimeout(() => {
//         console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`);
//     }, messageDelay());
// };
// // crie a função sendMarsTemperature abaixo

// sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

// EXERCICIO 03:

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// Definição da função sendMarsTemperature...

sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo
