export const getData = async function (city) {
  const res = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
  const data = await res.json();
  // console.log(data);
  return data;
};
