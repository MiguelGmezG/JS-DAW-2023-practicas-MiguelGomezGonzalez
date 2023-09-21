const mayor = (n1) => {
  return (
    "El numero " + (n1 > 20 ? n1 + " es mayor a 20" : n1 + " es menor a 20")
  );
};
console.log(mayor(10));
console.log(mayor(30));
