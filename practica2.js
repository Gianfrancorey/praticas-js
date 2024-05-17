let  misDatos = {
    nombre : "Gianfranco",
    apellido : "Rey",
    dni: 46287867,
    comidasFavoritas : ["Asado","Sushi","Milanesa"],
    saludar : function(){
        return "Hola mi nombre es" + " " + this.nombre + " " + this.apellido + "" + " y tengo 19 años de edad . Mi primer comida favorita es " + this.comidasFavoritas
    }
}
console.log(misDatos.saludar())


let auto = {
    marca : "Volkswagen",
    modelo : "Tiguan",
    año : "2013",
    color : "blanco",
    posicion:  0,
    avanzar: function(n) {
        n > 0;
            this.posicion += n;
        
    },
    retroceder: function(n) {
        n > 0;
            this.posicion -= n;
        
    }
}
auto.avanzar(10);
auto.retroceder(7);
console.log(auto.posicion);

let nuevoAuto = {
    marca : "Volkswagen",
    modelo : "Tiguan",
    año : "2013",
    color : "blanco",
    posicion:  0,
    moverse(n) {
        this.posicion =+ n;
        return(this.posicion);
    }
}
nuevoAuto.moverse(8)
console.log(nuevoAuto.posicion);

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(n) {
            this.energia -= 10;
            return  "Poder Elegido de " + this.nombre + ": " + this.poderes[n] + ". Energía restante: " + this.energia + ".";
       
    }
};


let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(n) {
        this.energia -= 10;
        return  "Poder Elegido de " + this.nombre + ": " + this.poderes[n] + ". Energía restante: " + this.energia + ".";
   
}
};

console.log(ironMan.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(ironMan.getPoder(2))

console.log(hulk.getPoder(0))
console.log(hulk.getPoder(1))
console.log(hulk.getPoder(2))




