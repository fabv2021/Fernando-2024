let digimonesImgs = [];
let currentDigimon = null;
let digimonesRegistrados = [];
let nombreDigimon = null;


fetch("https://digimon-api.vercel.app/api/digimon")

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        digimones = data;

        for (let index = 0; index < data.length; index++) {
            digimonesImgs.push(data[index].img);
        }

        digimonesImgs = data.map(function (digimon) {
            return digimon.img
        })

        digimonesImgs = data.map(digimon => digimon.img);

        for (const digimon of data) {
            digimonesImgs.push(digimon.img);
        }

        let contador = 0;

        document.getElementById("btnCambiarImagen").addEventListener("click", function () {

            let carruselImg = document.getElementById("carruselImg");
            let nombreDigimon = document.getElementById("nombreDigimon");
            let nivelDigimon = document.getElementById("nivelDigimon");

            currentDigimon = digimones[contador];

            carruselImg.src = currentDigimon.img;

            nombreDigimon.innerText = currentDigimon.name;

            nivelDigimon.innerText = currentDigimon.level;


            contador++;

            if (contador == digimones.length) {
                contador = 0;
            }
        })

        
        // INICO REGISTRO DIGIMON

        let btnRegistrar = document.getElementById("btnRegistrar");

        btnRegistrar.addEventListener("click", function (event) {


            if (currentDigimon) {

                let filasDigi = "";

                filasDigi +=

                    `<tr class="text-center"> 
                                    
                <th scope="row" colspan="1">${currentDigimon.name}</th>
                <td colspan="1">${currentDigimon.level}</td>
                <td colspan="1"><img src="${currentDigimon.img}" alt=""></img></td>
                
                </tr>`;

                listadoDigimones.innerHTML+= filasDigi;


                let foundDigimon = digimonesRegistrados.find(digimon => digimon.name == currentDigimon.name);


                if (foundDigimon) {
                    alert("Este digimon ya se encuentra registrado.")

                } else {

                    alert(`Se ha registrado con éxito el digimon: ${currentDigimon.name}`)
                    digimonesRegistrados.push(currentDigimon);
                }
            } else {
                alert("Debe existir un digimon seleccionado para registrarlo.")
            }
        })
    })