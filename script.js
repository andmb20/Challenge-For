const input = document.querySelector("input")
    const button = document.querySelector("button")
    const paragraph = document.querySelector("p")


    let names = [
        { name: "André", phone: "+55981765-4321" },
        { name: "Michael", phone: "+505842-5662" },
        { name: "Sandler", phone: "+505711-9601" },
        { name: "Walter", phone: "+505503-4455" }

    ]

    function show() {

        for (let i = 0; i < names.length; i++) {

            if (input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"") === names[i].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")) {
                paragraph.innerHTML = `Contact found
 ${names[i].name} Phone ${names[i].phone}`

                break
            } else {
                paragraph.innerHTML = "Contact not found, try again."
            }

        }

    }


    button.addEventListener("click", show)
    